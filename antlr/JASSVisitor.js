// Generated from JASS.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JASSParser.

function JASSVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JASSVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JASSVisitor.prototype.constructor = JASSVisitor;

// Visit a parse tree produced by JASSParser#root.
JASSVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#globalsBlock.
JASSVisitor.prototype.visitGlobalsBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#varName.
JASSVisitor.prototype.visitVarName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcName.
JASSVisitor.prototype.visitFuncName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#globalDec.
JASSVisitor.prototype.visitGlobalDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#surroundedExpr.
JASSVisitor.prototype.visitSurroundedExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#expr.
JASSVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcExpr.
JASSVisitor.prototype.visitFuncExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#arg_list.
JASSVisitor.prototype.visitArg_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#arrayRead.
JASSVisitor.prototype.visitArrayRead = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcRef.
JASSVisitor.prototype.visitFuncRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#literal.
JASSVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#localVarDec.
JASSVisitor.prototype.visitLocalVarDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#localVarDec_list.
JASSVisitor.prototype.visitLocalVarDec_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#statement2.
JASSVisitor.prototype.visitStatement2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#statement.
JASSVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#statement_list.
JASSVisitor.prototype.visitStatement_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#callFunc.
JASSVisitor.prototype.visitCallFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#setVar.
JASSVisitor.prototype.visitSetVar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#condition.
JASSVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#selection2.
JASSVisitor.prototype.visitSelection2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#selection.
JASSVisitor.prototype.visitSelection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#loop.
JASSVisitor.prototype.visitLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#exitwhen.
JASSVisitor.prototype.visitExitwhen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#loopBody.
JASSVisitor.prototype.visitLoopBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#loopBodyLine.
JASSVisitor.prototype.visitLoopBodyLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#rule_return.
JASSVisitor.prototype.visitRule_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#typeName.
JASSVisitor.prototype.visitTypeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcDec.
JASSVisitor.prototype.visitFuncDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#func.
JASSVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcReturnType.
JASSVisitor.prototype.visitFuncReturnType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcParam_list.
JASSVisitor.prototype.visitFuncParam_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcParam.
JASSVisitor.prototype.visitFuncParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#funcBody.
JASSVisitor.prototype.visitFuncBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#typeDec.
JASSVisitor.prototype.visitTypeDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#nativeDec.
JASSVisitor.prototype.visitNativeDec = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JASSVisitor = JASSVisitor;