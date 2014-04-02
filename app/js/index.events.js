var fs = require('fs');
var http = require('http');

http.createServer(function(request, responce){
  responce.writeHead(200);
  responce.write("Hello, this is dog");
  responce.end();
  console.log(request + responce);
  nudge(responce);
}).listen(5454);

function nudge(responce) {
  var fragment = notifcation('<div><h1>Here is one</h1></div><p>' + responce + '</p>');
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

