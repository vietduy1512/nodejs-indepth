let helloWorldComp = require("./components/1.HelloWorld");
let modulesComp = require("./components/2.Modules");

let http = require("http");

http.createServer(function (req, res) {
  req.on('data', (chunk) => {

  }).on('end', () => {
    switch (req.url) {
      case '/hello-world':
        helloWorldComp.send(req, res);
        break;
      case '/modules':
        modulesComp.send(req, res, modulesComp.now());
        break;
      default:
        res.end("404 Not Found")
        break;
    }
  })

}).listen(3000);


console.log('Server running at http://localhost:3000/');
// References: https://www.w3schools.com/nodejs/default.asp