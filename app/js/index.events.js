var fs = require('fs');
var http = require('http');
var url = require('url') ;

http.createServer(function (request, responce) {
  responce.writeHead(200);
  responce.write("Hello, this is dog");
  responce.end();

  var queryObject = url.parse(request.url,true).query;
  console.log(queryObject);
  nudge(queryObject);
}).listen(5454);

function nudge(queryObject) {
  var fragment = notifcation('<div><h1>Here is one</h1></div><p>' + queryObject + '</p>');
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

