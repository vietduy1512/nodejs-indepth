let helloWorldComp = require("./components/1.HelloWorld");

let http = require("http");

http.createServer(function (req, res) {
  req.on('data', (chunk) => {

  }).on('end', () => {
    switch (req.url) {
      case '/hello-world':
        helloWorldComp.send(req, res);
        break;
    
      default:
        res.end("404 Not Found")
        break;
    }
  })

}).listen(3000);


console.log('Server running at http://localhost:3000/');
// References: https://www.w3schools.com/nodejs/default.asp