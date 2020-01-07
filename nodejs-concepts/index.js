let helloWorldComp = require("./components/1.HelloWorld");
let modulesComp = require("./components/2.Modules");
let fileSystemComp = require("./components/3.FileSystem");
let streamsComp = require("./components/4.Streams");

let http = require("http");
let url = require('url');

http.createServer(function (req, res) {
  let { pathname, query } = url.parse(req.url, true);

  req.on('data', (chunk) => {

  }).on('end', () => {
    switch (pathname) {
      case '/hello-world':
        helloWorldComp.send(req, res);
        break;
      case '/modules':
        modulesComp.send(req, res, modulesComp.now());
        break;
      case '/file-system':
        fileSystemComp.read(req, res);
        break;
      case '/streams':
        streamsComp.readStream(req, res);
        break;
      default:
        res.end("404 Not Found")
        break;
    }
  })
}).listen(3000);


console.log('Server running at http://localhost:3000/');
// References: https://www.w3schools.com/nodejs/default.asp