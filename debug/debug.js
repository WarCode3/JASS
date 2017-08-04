const
    antlr4 = require('antlr4'),
    JASSLexer = require('../antlr/JASSLexer'),
    JASSParser = require('../antlr/JASSParser'),
    MyJASSListener = require('./MyJassListener').MyJASSListener;
    //c3 = require('antlr4-c3');

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    res.write('<html><head><title>JASS Grammar</title><meta charset="UTF-8"/></head><body>');

    var input = fs.readFileSync('debug/input.txt', { encoding: 'utf8' });
    var chars = new antlr4.InputStream(input);
    var lexer = new JASSLexer.JASSLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new JASSParser.JASSParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.code();

    var listener = new MyJASSListener(res);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    res.write('<textarea readonly style="width:800px;height:400px;">' + input + '</textarea></body></html>');
    res.end();
}).listen(1000);

console.log('Listening on port: 1000');

// console.log(parser.ruleNames)
// console.log(parser.symbolicNames)
