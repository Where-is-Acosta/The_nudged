var fs = require('fs');
var http = require('http');
var url = require('url');
var alarm
var date = new Date();
var mix 
http.createServer(function (request, responce) {
  responce.writeHead(200);
  responce.write("Cheers buddy!");
  responce.end();

  var queryObject = url.parse(request.url,true).query;
  console.log(queryObject);
  nudge(queryObject);
}).listen(5454);

function nudge(queryObject) {
  document.body.innerHTML == "";
  alarm = queryObject;
  var fragment = notifcation('<div><h1>Alarm </h1></div><p>' + alarm.name + ' is going off at ' + alarm.time + '</p>');  
  insertMix(alarm.mix);
  //setAlarm(timeMinutes);
  document.body.insertBefore(fragment, document.body.childNodes[0]);
  document.getElementById("mix").style.display="block";
}

function notifcation(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function setAlarm(time) {
  var current_minute = date.getMinutes();
  insertMix(alarm.mix);
}

function insertMix(url) {
  mix = url;
  div = document.getElementById("mix");
  div.innerHTML = mix;
}