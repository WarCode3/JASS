// Generated from JASS.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index'),
    JASSLexer = require('../antlr/JASSLexer'),
    JASSParser = require('../antlr/JASSParser'),
    JASSListener = require('../antlr/JASSListener').JASSListener;

// This class defines a complete listener for a parse tree produced by JASSParser.
function MergeListener(output) {
    this.output = output;
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MergeListener.prototype = Object.create(JASSListener.prototype);
MergeListener.prototype.constructor = JASSListener;

// Listeners
MergeListener.prototype.enterGlobalDec = function(ctx) {
    this.output.globals.push(ctx.getText());
}

MergeListener.prototype.enterFunc = function(ctx) {
    this.output.functions.push(ctx.getText());
}

MergeListener.prototype.enterFuncDec = function(ctx) {
    const triggerName = ctx.name.text;
    const initPrefix = 'Init_';

    if(triggerName && triggerName.startsWith(initPrefix) && triggerName.length > initPrefix.length) {
        console.log('Init trigger:', triggerName);
        this.output.initFunctions.push(triggerName);
    }
}

exports.MergeListener = MergeListener;
