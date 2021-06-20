# -*- coding: utf-8 -*-
'''
Created on 3 apr. 2021

@author: rkgou
'''

# account credentials
username = "no-reply@thegoodcoin.nl"
password = "HPTFgXf8!gDwtJ4"
####################
import email
import imaplib
import requests
import re
import time
import json



datajson = [{'models': []}]
r = 0
#datajson.append([{'model': {'944':[{'i': i, 'data': {'name': name, 'price': price, 'place': place, 'page': page, 'imgsrc': imgsrc}}]}}])
print(json.dumps(datajson, indent=4))

try:
    from bs4 import BeautifulSoup
except ImportError:
    from BeautifulSoup import BeautifulSoup
from datetime import datetime
    
HEADERS = ({'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
            'Accept-Language': 'en-US, en;q=0.5'})



EMAIL = 'rkgoudzwaard@gmail.com'
PASSWORD = 'AIzaSyDhsSj5HfGAzZEqpL1wwb52sF9RCDRhAPQ'
SERVER = 'imap.gmail.com'

# connect to the server and go to its inbox
mail = imaplib.IMAP4_SSL(SERVER)
mail.login(EMAIL, PASSWORD)
# we choose the inbox but you can select others
mail.select('inbox')

# we'll search using the ALL criteria to retrieve
# every message inside the inbox
# it will return with its status and a list of ids
#since = '(SINCE "23-Apr-2021")'
since = '(SINCE "' + str(int(datetime.now().strftime('%d'))) + '-' + str(datetime.now().strftime('%b-%Y')) + '")'
print(since)
status, data = mail.search(None, 'FROM', "no.reply@leboncoin.fr", since)
# the list returned is a list of bytes separated
# by white spaces on this format: [b'1 2 3', b'4 5 6']
# so, to separate it first we create an empty list
mail_ids = []
# then we go through the list splitting its blocks
# of bytes and appending to the mail_ids list
for block in data:
    # the split function called without parameter
    # transforms the text or bytes into a list using
    # as separator the white spaces:
    # b'1 2 3'.split() => [b'1', b'2', b'3']
    mail_ids += block.split()

# now for every id we'll fetch the email
# to extract its content
for i in mail_ids:
    # the fetch function fetch the email given its id
    # and format that you want the message to be
    status, data = mail.fetch(i, '(RFC822)')

    # the content data at the '(RFC822)' format comes on
    # a list with a tuple with header, content, and the closing
    # byte b')'
    for response_part in data:
        # so if its a tuple...
        if isinstance(response_part, tuple):
            # we go for the content at its second element
            # skipping the header at the first and the closing
            # at the third
            message = email.message_from_bytes(response_part[1])

            # with the content we can extract the info about
            # who sent the message and its subject
            mail_from = message['from']
            mail_subject = message['subject']

            # then for the text we have a little more work to do
            # because it can be in plain text or multipart
            # if its not plain text we need to separate the message
            # from its annexes to get the text
            if message.is_multipart():
                mail_content = ''

                # on multipart we have the text message and
                # another things like annex, and html version
                # of the message, in that case we loop through
                # the email payload
                for part in message.get_payload():
                    # if the content type is text/plain
                    # we extract it
                    if part.get_content_type() == 'text/plain':
                        mail_content += part.get_payload()
            else:
                # if the message isn't multipart, just extract it
                mail_content = message.get_payload()

            # and then let's show its result
            #print(f'From: {mail_from}')
            #print(f'Subject: {mail_subject}')
            #print(f'Content: {mail_content}')
            print(enumerate(i))
##############################################################################
            emailcontent = BeautifulSoup(mail_content, features="html.parser")
            #print(data[0])
            
            #####name and price#############
            emaillistings = emailcontent.find_all('a')
            i = 0
            r = 0
            for td in emaillistings:
                td = td
                if td == []:
                    continue
                else:
                    if "#xtor" not in str(td):
                        continue
                    elif "#fff" in str(td):
                        continue
                    else:
                        print("-----==========------")
                        i += 1
                        print(i)
                        #############
                        price = str(td.find_all(string=re.compile('=E2=82=AC'))).replace(' =E2=82=AC', "")
                        price = price[2:-2]
                        print(price)
                        #############
                        span = td.find_all('span')
                        name = span[0].text.replace('\n', '').replace('=E2=80=93', '-').replace('\r', '').replace('=C3=', 'è').replace('=A8', '')
                        print(name) #è
                        ##############
                        place = span[2].text.replace('\n', '').replace('=E2=80=93', '-').replace('\r', '').replace('=C3=', 'è').replace('=A8', '').replace('=', '').replace('�A9', 'é')
                        print(place)
                        ##############
                        link = str(td)
                        link = link[31:41]
                        print(link)
                        ######
                        page = 'https://www.leboncoin.fr/vi/' + link + '.htm#xtor=3DES-3999-[MYSRCH]'
                        print(page)
                        ######################################################
                        class_ = "styles_slide__3XtZV"
                        try:
                            request = requests.get('https://www.leboncoin.fr/vi/' + link + '.htm#xtor=3DES-3999-[MYSRCH]', headers= HEADERS, timeout=5)
                            print(request)
                            response = request.status_code
                            if response == 200 or response == 410:
                                time.sleep(1)
                                soup = BeautifulSoup(request.content, features="html.parser")
                                div = soup.find('div', {"class": class_})
                                imgsrc = div.img['src']
                                print(imgsrc)
                            else:
                                while request.status_code != 200:
                                    time.sleep(600)
                                    request = requests.get('https://www.leboncoin.fr/vi/' + link + '.htm#xtor=3DES-3999-[MYSRCH]', headers= HEADERS, timeout=5)
                                time.sleep(1)
                                soup = BeautifulSoup(request.content, features="html.parser")
                                div = soup.find('div', {"class": class_})
                                imgsrc = div.img['src']
                                print(imgsrc)
                        except:
                            print("except175")
                            continue
                        print("outside loop")
                        #####################################################
                        class_2 = "_3eNLO _38n__ _137P- P4PEa _35DXM"
                        model = soup.find_all('span', {'class': class_2})
                        print(model)
                        model = model[1].text
                        print(model)
                        #####################################################
                        if model == '350Z':
                            key = 0
                        elif model == 'R8':
                            key = 1
                        elif model == '944':
                            key = 2
                        else:
                            continue
                        #print(datajson[0]['models'])
                        #data = [{'model':[{'i':[{'name': '', 'price': '', 'place': '', 'page': '', 'link': ''}]}]}]
                        datajson[0]['models'].append([{'model': model, 'Number:': i, 'name': name, 'price': price, 'place': place, 'page': page, 'imgsrc': imgsrc}])
                        #print(json.dumps(datajson, indent=4))
                        #print(type(datajson[0]['models'][key]))
                        r += 1
                        time.sleep(5)
                        #for x in datajson[0]['models'][1]:
                            #print(datajson[0]['models'][1][x])

jsonString = json.dumps(datajson, indent=4)
jsonFile = open("emaildataJSON.json", "w")
jsonFile.write(jsonString)
jsonFile.close()

url = 'https://api.jsonbin.io/v3/b/608c63dbd64cd16802a583c4'
headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': '$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO'
}
print(datajson)
data = datajson

req = requests.put(url, json=data, headers=headers)
print(req.text)
time.sleep(120)
print('hello world')