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

// Visit a parse tree produced by JASSParser#code.
JASSVisitor.prototype.visitCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#fn.
JASSVisitor.prototype.visitFn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#identifier.
JASSVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#argList.
JASSVisitor.prototype.visitArgList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#arg.
JASSVisitor.prototype.visitArg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#type.
JASSVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#statementBlock.
JASSVisitor.prototype.visitStatementBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#statement.
JASSVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#localDecl.
JASSVisitor.prototype.visitLocalDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#set.
JASSVisitor.prototype.visitSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#call.
JASSVisitor.prototype.visitCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#expr.
JASSVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#fnCall.
JASSVisitor.prototype.visitFnCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#fnInputList.
JASSVisitor.prototype.visitFnInputList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#value.
JASSVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#primitive.
JASSVisitor.prototype.visitPrimitive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JASSParser#builtin.
JASSVisitor.prototype.visitBuiltin = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JASSVisitor = JASSVisitor;