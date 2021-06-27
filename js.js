// JavaScript Document  https://api.jsonbin.io/v3/b/608c63dbd64cd16802a583c4
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      //console.log(req.responseText);
      var data = JSON.parse(req.responseText);
      console.log(data);
                  console.log(data['record'][0])
    var allimg = data.record[0].models[1][0].imgurl
    console.log(allimg)
    document.getElementById('allimg').src = allimg;

    let counter = 0;
				for (let i = 0; i < data.record[0].models.length; i++) {
					counter++;
				}

                var totallistings = counter;
                console.log(totallistings)
                document.getElementById('TL').innerHTML += 'Total new listings: ' + totallistings + '.'
    }
  };
  
  req.open("GET", "https://api.jsonbin.io/v3/b/608c63dbd64cd16802a583c4", true);
  req.setRequestHeader("X-Master-Key", "$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO");
  req.send();
  

  