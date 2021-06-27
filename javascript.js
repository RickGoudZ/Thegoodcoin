// JavaScript Document  https://api.jsonbin.io/v3/b/608c63dbd64cd16802a583c4
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      //console.log(req.responseText);
      var data = JSON.parse(req.responseText);
      console.log(data);
                  console.log(data['record'][0])
    var allimg = data.record[1][0].imgurl
    //console.log(allimg)
    //document.getElementById('allimg').src = allimg;

    var datadiv = document.createElement('p');
    var ih = data.record
    ih = JSON.stringify(ih)
    datadiv.innerHTML = ih;
    datadiv.style.display = 'none';
    datadiv.id = 'data';
    document.body.appendChild(datadiv)

    let counter = 0;
    let emailNu = 0;
    for (let i = 0; i < data.record.length; i++) {
        counter++;
    }
    console.log(counter)
    emailNu = counter;
    for (let q = 0; q < emailNu; q++) {
        console.log(q)
        var div = document.getElementById('boxc');
        var toborders = document.getElementById('borders');
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.onclick = function() {myFunction(this.id)}
    clone.id = q;
    clone.className = "box";
    clone.firstElementChild.src = data.record[q][0][0].imgurl;
    var titlelist = data.record[q][0][0].title.split(' ')
    console.log(titlelist)
    for (b in titlelist) {
        const word = titlelist[b];
        var para = document.createElement('p')
        var textnode = document.createTextNode(titlelist[b])
        para.appendChild(textnode)
        para.className = 'boxtitle'
        clone.children[1].appendChild(para)
    }
    /*clone.children[1].innerHTML = data.record[q][0][0].title*/
    toborders.appendChild(clone);
    }
    }
  };
  
  req.open("GET", "https://api.jsonbin.io/v3/b/608c63dbd64cd16802a583c4", true);
  req.setRequestHeader("X-Master-Key", "$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO");
  req.send();
  


function myFunction(k) {
    var popup = document.getElementById('popup')
    while (popup.firstChild) {
        popup.removeChild(popup.lastChild)
    }

    var data = document.getElementById('data').innerHTML;
      data = JSON.parse(data)
    
      console.log(data)
    for (i in data[k][0]) {
        var clone = document.getElementById('clone_popup')
        clone.cloneNode(true);
        popup.appendChild(clone)
    }




    popup.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == popup) {
          popup.style.display = "none";
        }
      }
  }

