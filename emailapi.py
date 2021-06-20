# Python 3.8.0
import smtplib
import time
import imaplib
import email
import traceback 
from datetime import datetime
import unicodedata
import re
import requests
from requests.sessions import Request
import json


datajson = [{'models': []}]
# -------------------------------------------------
#
# Utility to read email from Gmail Using Python
#
# ------------------------------------------------
ORG_EMAIL = "@gmail.com" 
FROM_EMAIL = "rkgoudzwaard" + ORG_EMAIL 
FROM_PWD = "pfuqeasvlcwhowmh" 
SMTP_SERVER = "imap.gmail.com" 
SMTP_PORT = 993


def read_email_from_gmail():
    try:
        mail = imaplib.IMAP4_SSL(SMTP_SERVER)
        mail.login(FROM_EMAIL,FROM_PWD)
        mail.select('inbox')

        #since = '(ON "' + str(int(datetime.now().strftime('%d'))) + '-' + str(datetime.now().strftime('%b-%Y')) + '")'
        since = '(ON "19-Jun-2021")'
        print(since)

        data = mail.search(None, 'FROM', "no.reply@leboncoin.fr", since)
        mail_ids = data[1]
        id_list = mail_ids[0].split()
        print(id_list)   
        first_email_id = int(id_list[0])
        latest_email_id = int(id_list[-1])
        counter = 0
        for i in range(latest_email_id, first_email_id, -1):
            data = mail.fetch(str(i), '(RFC822)' )
            for response_part in data:
                arr = response_part[0]
                if isinstance(arr, tuple):
                    msg = email.message_from_string(str(arr[1],'utf-8'))
                    email_subject = msg['subject']
                    email_from = msg['from']
                    #print('From : ' + email_from + '\n')
                    #print('Subject : ' + email_subject + '\n')
                    #print(msg)
                    if email_from == 'leboncoin <no.reply@leboncoin.fr>':
                        if 'nouvelles annonces' in str(msg):
                            counter = counter + 1
                            type = ''
                            print('From : ' + email_from)
                            #print('Subject : ' + email_subject)
                            from bs4 import BeautifulSoup
                            soup = BeautifulSoup(str(msg), 'html.parser')
                            
                            emaillistings = soup.find_all('a')
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
                                        ##############
                                        #=-=-=-=-=-=-=-=-=-=-=
                                        #print (BeautifulSoup(str(msg), 'html.parser'))
                                        #soup = BeautifulSoup(str(msg), 'html.parser')
                                        divs = soup.findAll('div')
                                        Ar = []  
                                        for alldiv in divs:
                                            if 'images' in str(alldiv):
                                                #print(alldiv)                               
                                                # returns first occurrence of Substring
                                                result = str(alldiv).find('lbcpb')
                                                result = result + 9
                                                result_end = result + 66
                                                imgcurl = str(alldiv)[result:result_end]
                                                imgurl = 'https://img.leboncoin.fr/api/v1/lbcpb1/' + imgcurl + 'ad-small'
                                                print('\n')
                                                print(imgurl)
                                                print ("Starting point:", result )
                                                Ar.append(imgurl)
                                        #=-=-=-=-=-=-=-=-=-=-=
                                        ##############
                                        page = 'https://www.leboncoin.fr/vi/' + link + '.htm#xtor=3DES-3999-[MYSRCH]'
                                        print(page)
                                        print(Ar)
                                        datajson[0]['models'].append([{'email': counter, 'Number:': i, 'name': name, 'price': price, 'place': place, 'page': page, 'imgurl': Ar[i - 1]}])
                            print('---------@---------')
                            print(counter)
                            print('-------------------')
                            


    except Exception as e:
        traceback.print_exc() 
        print(str(e))


    #print(str(datajson).replace("'", '"'))

    jsonString = json.dumps(datajson, indent=4)
    jsonFile = open("emaildataJSON.json", "w")
    jsonFile.write(jsonString)
    jsonFile.close()

    url = 'https://api.jsonbin.io/v3/b/608c63dbd64cd16802a583c4'
    headers = {
    'Content-Type': 'application/json',
    'X-Master-Key': '$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO'
    }

    data = datajson

    req = requests.put(url, json=data, headers=headers)
    print(req.text)

read_email_from_gmail()



