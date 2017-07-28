// Generated from JASS.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index'),
    JASSLexer = require('../antlr/JASSLexer'),
    JASSParser = require('../antlr/JASSParser'),
    JASSListener = require('../antlr/JASSListener').JASSListener;

// This class defines a complete listener for a parse tree produced by JASSParser.
function MyJASSListener(res) {
    this.res = res;
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MyJASSListener.prototype = Object.create(JASSListener.prototype);//Object.create(antlr4.tree.ParseTreeListener.prototype);
MyJASSListener.prototype.constructor = JASSListener;

var $ = {
    each: function(arr, fn) {
        if(!arr || !arr.length) return;
        
        for(var i = 0; i < arr.length; i++) {
            fn(arr[i]);
        }
    }
}

// Listeners
MyJASSListener.prototype.enterGlobals = function(ctx) {
    this.res.write('<b><u>Globals</u></b><br/>');
}

MyJASSListener.prototype.enterGlobalBlock = function(ctx) {
    // Write out all the globals
    $.each(ctx.children, (global) => {
        if(global instanceof JASSParser.JASSParser.DeclContext) {
            $.each(global.children, (ch) => {
                this.res.write(ch.getText() + ' ');
            })
            
            console.log('global');
            this.res.write('<br/>');
        }
    });
}
MyJASSListener.prototype.exitGlobals = function(ctx) {
    this.res.write('<br/>');
}

MyJASSListener.prototype.enterLoop = function(ctx) {
    console.log('found a loop');
}

MyJASSListener.prototype.enterFn = function(ctx) {
    this.res.write('<div style="background-color:rgba(0,145,145,0.05);margin-bottom:1em;">');
    
    this.res.write('fn ');
    
    var identifier = ctx.children[1];
    var argList = ctx.children[3];
    var type = ctx.children[5];
    
    this.res.write(identifier.getText());
    
    this.res.write('(');
    for(var i = 0; i < argList.children.length; i++) {
        // Print the arg
        this.res.write(argList.children[i].getText());
    }
    this.res.write(')');
    
    this.res.write(' returns ' + type.getText());
}
MyJASSListener.prototype.exitFn = function(ctx) {
    this.res.write('<br/>endfn</div>');
}

MyJASSListener.prototype.enterStatement = function(ctx) {
    if(ctx.children[0] instanceof JASSParser.JASSParser.LocalDeclContext) {
        var decl = ctx.children[0].children[1];
        this.res.write(
            '<br/> - ' + 
            decl.children[0].getText() + // type
            decl.children[1].getText() // identifier
        );
        
        if(decl.children[2]) { // EQUAL
            this.res.write('<u>');
            this.res.write(decl.children[2].getText());
            this.res.write(decl.children[3].getText());
            this.res.write('</u>');
        }
    }
    else {
        this.res.write('<br/> - ' + ctx.getText());
    }
}



exports.MyJASSListener = MyJASSListener;