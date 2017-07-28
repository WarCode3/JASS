// Generated from JASS.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by JASSParser.
function JASSListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JASSListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JASSListener.prototype.constructor = JASSListener;

// Enter a parse tree produced by JASSParser#code.
JASSListener.prototype.enterCode = function(ctx) {
};

// Exit a parse tree produced by JASSParser#code.
JASSListener.prototype.exitCode = function(ctx) {
};


// Enter a parse tree produced by JASSParser#fn.
JASSListener.prototype.enterFn = function(ctx) {
};

// Exit a parse tree produced by JASSParser#fn.
JASSListener.prototype.exitFn = function(ctx) {
};


// Enter a parse tree produced by JASSParser#identifier.
JASSListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by JASSParser#identifier.
JASSListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by JASSParser#argList.
JASSListener.prototype.enterArgList = function(ctx) {
};

// Exit a parse tree produced by JASSParser#argList.
JASSListener.prototype.exitArgList = function(ctx) {
};


// Enter a parse tree produced by JASSParser#arg.
JASSListener.prototype.enterArg = function(ctx) {
};

// Exit a parse tree produced by JASSParser#arg.
JASSListener.prototype.exitArg = function(ctx) {
};


// Enter a parse tree produced by JASSParser#type.
JASSListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by JASSParser#type.
JASSListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by JASSParser#statementBlock.
JASSListener.prototype.enterStatementBlock = function(ctx) {
};

// Exit a parse tree produced by JASSParser#statementBlock.
JASSListener.prototype.exitStatementBlock = function(ctx) {
};


// Enter a parse tree produced by JASSParser#statement.
JASSListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by JASSParser#statement.
JASSListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by JASSParser#localDecl.
JASSListener.prototype.enterLocalDecl = function(ctx) {
};

// Exit a parse tree produced by JASSParser#localDecl.
JASSListener.prototype.exitLocalDecl = function(ctx) {
};


// Enter a parse tree produced by JASSParser#set.
JASSListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by JASSParser#set.
JASSListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by JASSParser#call.
JASSListener.prototype.enterCall = function(ctx) {
};

// Exit a parse tree produced by JASSParser#call.
JASSListener.prototype.exitCall = function(ctx) {
};


// Enter a parse tree produced by JASSParser#expr.
JASSListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by JASSParser#expr.
JASSListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by JASSParser#fnCall.
JASSListener.prototype.enterFnCall = function(ctx) {
};

// Exit a parse tree produced by JASSParser#fnCall.
JASSListener.prototype.exitFnCall = function(ctx) {
};


// Enter a parse tree produced by JASSParser#fnInputList.
JASSListener.prototype.enterFnInputList = function(ctx) {
};

// Exit a parse tree produced by JASSParser#fnInputList.
JASSListener.prototype.exitFnInputList = function(ctx) {
};


// Enter a parse tree produced by JASSParser#value.
JASSListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by JASSParser#value.
JASSListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by JASSParser#primitive.
JASSListener.prototype.enterPrimitive = function(ctx) {
};

// Exit a parse tree produced by JASSParser#primitive.
JASSListener.prototype.exitPrimitive = function(ctx) {
};


// Enter a parse tree produced by JASSParser#builtin.
JASSListener.prototype.enterBuiltin = function(ctx) {
};

// Exit a parse tree produced by JASSParser#builtin.
JASSListener.prototype.exitBuiltin = function(ctx) {
};



exports.JASSListener = JASSListener;