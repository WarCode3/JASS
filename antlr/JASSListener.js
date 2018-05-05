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

// Enter a parse tree produced by JASSParser#root.
JASSListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by JASSParser#root.
JASSListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by JASSParser#globalsBlock.
JASSListener.prototype.enterGlobalsBlock = function(ctx) {
};

// Exit a parse tree produced by JASSParser#globalsBlock.
JASSListener.prototype.exitGlobalsBlock = function(ctx) {
};


// Enter a parse tree produced by JASSParser#varName.
JASSListener.prototype.enterVarName = function(ctx) {
};

// Exit a parse tree produced by JASSParser#varName.
JASSListener.prototype.exitVarName = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcName.
JASSListener.prototype.enterFuncName = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcName.
JASSListener.prototype.exitFuncName = function(ctx) {
};


// Enter a parse tree produced by JASSParser#globalDec.
JASSListener.prototype.enterGlobalDec = function(ctx) {
};

// Exit a parse tree produced by JASSParser#globalDec.
JASSListener.prototype.exitGlobalDec = function(ctx) {
};


// Enter a parse tree produced by JASSParser#surroundedExpr.
JASSListener.prototype.enterSurroundedExpr = function(ctx) {
};

// Exit a parse tree produced by JASSParser#surroundedExpr.
JASSListener.prototype.exitSurroundedExpr = function(ctx) {
};


// Enter a parse tree produced by JASSParser#expr.
JASSListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by JASSParser#expr.
JASSListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcExpr.
JASSListener.prototype.enterFuncExpr = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcExpr.
JASSListener.prototype.exitFuncExpr = function(ctx) {
};


// Enter a parse tree produced by JASSParser#arg_list.
JASSListener.prototype.enterArg_list = function(ctx) {
};

// Exit a parse tree produced by JASSParser#arg_list.
JASSListener.prototype.exitArg_list = function(ctx) {
};


// Enter a parse tree produced by JASSParser#arrayRead.
JASSListener.prototype.enterArrayRead = function(ctx) {
};

// Exit a parse tree produced by JASSParser#arrayRead.
JASSListener.prototype.exitArrayRead = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcRef.
JASSListener.prototype.enterFuncRef = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcRef.
JASSListener.prototype.exitFuncRef = function(ctx) {
};


// Enter a parse tree produced by JASSParser#literal.
JASSListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by JASSParser#literal.
JASSListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by JASSParser#localVarDec.
JASSListener.prototype.enterLocalVarDec = function(ctx) {
};

// Exit a parse tree produced by JASSParser#localVarDec.
JASSListener.prototype.exitLocalVarDec = function(ctx) {
};


// Enter a parse tree produced by JASSParser#localVarDec_list.
JASSListener.prototype.enterLocalVarDec_list = function(ctx) {
};

// Exit a parse tree produced by JASSParser#localVarDec_list.
JASSListener.prototype.exitLocalVarDec_list = function(ctx) {
};


// Enter a parse tree produced by JASSParser#statement2.
JASSListener.prototype.enterStatement2 = function(ctx) {
};

// Exit a parse tree produced by JASSParser#statement2.
JASSListener.prototype.exitStatement2 = function(ctx) {
};


// Enter a parse tree produced by JASSParser#statement.
JASSListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by JASSParser#statement.
JASSListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by JASSParser#statement_list.
JASSListener.prototype.enterStatement_list = function(ctx) {
};

// Exit a parse tree produced by JASSParser#statement_list.
JASSListener.prototype.exitStatement_list = function(ctx) {
};


// Enter a parse tree produced by JASSParser#callFunc.
JASSListener.prototype.enterCallFunc = function(ctx) {
};

// Exit a parse tree produced by JASSParser#callFunc.
JASSListener.prototype.exitCallFunc = function(ctx) {
};


// Enter a parse tree produced by JASSParser#setVar.
JASSListener.prototype.enterSetVar = function(ctx) {
};

// Exit a parse tree produced by JASSParser#setVar.
JASSListener.prototype.exitSetVar = function(ctx) {
};


// Enter a parse tree produced by JASSParser#condition.
JASSListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by JASSParser#condition.
JASSListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by JASSParser#selection2.
JASSListener.prototype.enterSelection2 = function(ctx) {
};

// Exit a parse tree produced by JASSParser#selection2.
JASSListener.prototype.exitSelection2 = function(ctx) {
};


// Enter a parse tree produced by JASSParser#selection.
JASSListener.prototype.enterSelection = function(ctx) {
};

// Exit a parse tree produced by JASSParser#selection.
JASSListener.prototype.exitSelection = function(ctx) {
};


// Enter a parse tree produced by JASSParser#loop.
JASSListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by JASSParser#loop.
JASSListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by JASSParser#exitwhen.
JASSListener.prototype.enterExitwhen = function(ctx) {
};

// Exit a parse tree produced by JASSParser#exitwhen.
JASSListener.prototype.exitExitwhen = function(ctx) {
};


// Enter a parse tree produced by JASSParser#loopBody.
JASSListener.prototype.enterLoopBody = function(ctx) {
};

// Exit a parse tree produced by JASSParser#loopBody.
JASSListener.prototype.exitLoopBody = function(ctx) {
};


// Enter a parse tree produced by JASSParser#loopBodyLine.
JASSListener.prototype.enterLoopBodyLine = function(ctx) {
};

// Exit a parse tree produced by JASSParser#loopBodyLine.
JASSListener.prototype.exitLoopBodyLine = function(ctx) {
};


// Enter a parse tree produced by JASSParser#rule_return.
JASSListener.prototype.enterRule_return = function(ctx) {
};

// Exit a parse tree produced by JASSParser#rule_return.
JASSListener.prototype.exitRule_return = function(ctx) {
};


// Enter a parse tree produced by JASSParser#typeName.
JASSListener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by JASSParser#typeName.
JASSListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcDec.
JASSListener.prototype.enterFuncDec = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcDec.
JASSListener.prototype.exitFuncDec = function(ctx) {
};


// Enter a parse tree produced by JASSParser#func.
JASSListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by JASSParser#func.
JASSListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcReturnType.
JASSListener.prototype.enterFuncReturnType = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcReturnType.
JASSListener.prototype.exitFuncReturnType = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcParam_list.
JASSListener.prototype.enterFuncParam_list = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcParam_list.
JASSListener.prototype.exitFuncParam_list = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcParam.
JASSListener.prototype.enterFuncParam = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcParam.
JASSListener.prototype.exitFuncParam = function(ctx) {
};


// Enter a parse tree produced by JASSParser#funcBody.
JASSListener.prototype.enterFuncBody = function(ctx) {
};

// Exit a parse tree produced by JASSParser#funcBody.
JASSListener.prototype.exitFuncBody = function(ctx) {
};


// Enter a parse tree produced by JASSParser#typeDec.
JASSListener.prototype.enterTypeDec = function(ctx) {
};

// Exit a parse tree produced by JASSParser#typeDec.
JASSListener.prototype.exitTypeDec = function(ctx) {
};


// Enter a parse tree produced by JASSParser#nativeDec.
JASSListener.prototype.enterNativeDec = function(ctx) {
};

// Exit a parse tree produced by JASSParser#nativeDec.
JASSListener.prototype.exitNativeDec = function(ctx) {
};



exports.JASSListener = JASSListener;