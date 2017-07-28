// Generated from JASS.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JASSListener = require('./JASSListener').JASSListener;
var JASSVisitor = require('./JASSVisitor').JASSVisitor;

var grammarFileName = "JASS.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b\u0095\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00034\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0006\u0004;\n\u0004\r\u0004\u000e\u0004<\u0003\u0004\u0007",
    "\u0004@\n\u0004\f\u0004\u000e\u0004C\u000b\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005H\n\u0005\f\u0005\u000e\u0005K\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005O\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0005\u0007V\n\u0007\u0003\b\u0007\b",
    "Y\n\b\f\b\u000e\b\\\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t",
    "b\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\nk\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\rw\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e|\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u0083\n\u000f\f\u000f\u000e",
    "\u000f\u0086\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u008f\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0002\u0002\u0013",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"\u0002\u0005\u0004\u0002\u0011\u0011\u0014\u0014\u0003\u0002",
    "\u000b\r\u0003\u0002\u000e\u0010\u0002\u0096\u0002)\u0003\u0002\u0002",
    "\u0002\u0004,\u0003\u0002\u0002\u0002\u0006:\u0003\u0002\u0002\u0002",
    "\bN\u0003\u0002\u0002\u0002\nP\u0003\u0002\u0002\u0002\fU\u0003\u0002",
    "\u0002\u0002\u000eZ\u0003\u0002\u0002\u0002\u0010a\u0003\u0002\u0002",
    "\u0002\u0012e\u0003\u0002\u0002\u0002\u0014l\u0003\u0002\u0002\u0002",
    "\u0016q\u0003\u0002\u0002\u0002\u0018v\u0003\u0002\u0002\u0002\u001a",
    "x\u0003\u0002\u0002\u0002\u001c\u0084\u0003\u0002\u0002\u0002\u001e",
    "\u008e\u0003\u0002\u0002\u0002 \u0090\u0003\u0002\u0002\u0002\"\u0092",
    "\u0003\u0002\u0002\u0002$%\u0005\u0004\u0003\u0002%&\u0007\u0015\u0002",
    "\u0002&(\u0003\u0002\u0002\u0002\'$\u0003\u0002\u0002\u0002(+\u0003",
    "\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002",
    "*\u0003\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002,-\u0007\u0003",
    "\u0002\u0002-.\u0005\u0006\u0004\u0002./\u0007\u0004\u0002\u0002/0\u0005",
    "\b\u0005\u000203\u0007\u0005\u0002\u000214\u0005\f\u0007\u000224\u0007",
    "\u0006\u0002\u000231\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u000256\u0007\u0015\u0002\u000267\u0005\u000e\b",
    "\u000278\u0007\u0007\u0002\u00028\u0005\u0003\u0002\u0002\u00029;\u0007",
    "\u0011\u0002\u0002:9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=A\u0003\u0002\u0002",
    "\u0002>@\t\u0002\u0002\u0002?>\u0003\u0002\u0002\u0002@C\u0003\u0002",
    "\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0007",
    "\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002DE\u0005\n\u0006\u0002",
    "EF\u0007\u0012\u0002\u0002FH\u0003\u0002\u0002\u0002GD\u0003\u0002\u0002",
    "\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JL\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LO\u0005",
    "\n\u0006\u0002MO\u0007\u0006\u0002\u0002NI\u0003\u0002\u0002\u0002N",
    "M\u0003\u0002\u0002\u0002O\t\u0003\u0002\u0002\u0002PQ\u0005\f\u0007",
    "\u0002QR\u0005\u0006\u0004\u0002R\u000b\u0003\u0002\u0002\u0002SV\u0005",
    " \u0011\u0002TV\u0005\"\u0012\u0002US\u0003\u0002\u0002\u0002UT\u0003",
    "\u0002\u0002\u0002V\r\u0003\u0002\u0002\u0002WY\u0005\u0010\t\u0002",
    "XW\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002",
    "\u0002\u0002Z[\u0003\u0002\u0002\u0002[\u000f\u0003\u0002\u0002\u0002",
    "\\Z\u0003\u0002\u0002\u0002]b\u0005\u0012\n\u0002^b\u0005\u0014\u000b",
    "\u0002_b\u0005\u0016\f\u0002`b\u0007\u0015\u0002\u0002a]\u0003\u0002",
    "\u0002\u0002a^\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002a`\u0003",
    "\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0007\u0015\u0002\u0002",
    "d\u0011\u0003\u0002\u0002\u0002ef\u0007\b\u0002\u0002fg\u0005\f\u0007",
    "\u0002gj\u0005\u0006\u0004\u0002hi\u0007\u0013\u0002\u0002ik\u0005\u0018",
    "\r\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k\u0013",
    "\u0003\u0002\u0002\u0002lm\u0007\t\u0002\u0002mn\u0005\u0006\u0004\u0002",
    "no\u0007\u0013\u0002\u0002op\u0005\u0018\r\u0002p\u0015\u0003\u0002",
    "\u0002\u0002qr\u0007\n\u0002\u0002rs\u0005\u001a\u000e\u0002s\u0017",
    "\u0003\u0002\u0002\u0002tw\u0005\u001a\u000e\u0002uw\u0005\u001e\u0010",
    "\u0002vt\u0003\u0002\u0002\u0002vu\u0003\u0002\u0002\u0002w\u0019\u0003",
    "\u0002\u0002\u0002xy\u0005\u0006\u0004\u0002y{\u0007\u001a\u0002\u0002",
    "z|\u0005\u001c\u000f\u0002{z\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|}\u0003\u0002\u0002\u0002}~\u0007\u001b\u0002\u0002~\u001b\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0005\u001e\u0010\u0002\u0080\u0081\u0007",
    "\u0012\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u007f\u0003",
    "\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0087\u0003",
    "\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u0088\u0005",
    "\u001e\u0010\u0002\u0088\u001d\u0003\u0002\u0002\u0002\u0089\u008f\u0005",
    "\u0006\u0004\u0002\u008a\u008f\u0005\u001a\u000e\u0002\u008b\u008f\u0007",
    "\u0017\u0002\u0002\u008c\u008f\u0007\u0018\u0002\u0002\u008d\u008f\u0007",
    "\u0019\u0002\u0002\u008e\u0089\u0003\u0002\u0002\u0002\u008e\u008a\u0003",
    "\u0002\u0002\u0002\u008e\u008b\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008f\u001f\u0003",
    "\u0002\u0002\u0002\u0090\u0091\t\u0003\u0002\u0002\u0091!\u0003\u0002",
    "\u0002\u0002\u0092\u0093\t\u0004\u0002\u0002\u0093#\u0003\u0002\u0002",
    "\u0002\u0010)3<AINUZajv{\u0084\u008e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'function '", "' takes '", "' returns '", "'nothing'", 
                     "'endfunction'", "'local'", "'set'", "'call'", "'boolean'", 
                     "'integer'", "'real'", "'player'", "'unit'", "'trigger'", 
                     null, "','", "'='", null, null, null, null, null, null, 
                     "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "LETTER", "COMMA", 
                      "EQUAL", "DIGIT", "NEWLINE", "WS", "INT", "FLOAT", 
                      "STRING", "OPEN_PAR", "CLOSE_PAR" ];

var ruleNames =  [ "code", "fn", "identifier", "argList", "arg", "type", 
                   "statementBlock", "statement", "localDecl", "set", "call", 
                   "expr", "fnCall", "fnInputList", "value", "primitive", 
                   "builtin" ];

function JASSParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JASSParser.prototype = Object.create(antlr4.Parser.prototype);
JASSParser.prototype.constructor = JASSParser;

Object.defineProperty(JASSParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JASSParser.EOF = antlr4.Token.EOF;
JASSParser.T__0 = 1;
JASSParser.T__1 = 2;
JASSParser.T__2 = 3;
JASSParser.T__3 = 4;
JASSParser.T__4 = 5;
JASSParser.T__5 = 6;
JASSParser.T__6 = 7;
JASSParser.T__7 = 8;
JASSParser.T__8 = 9;
JASSParser.T__9 = 10;
JASSParser.T__10 = 11;
JASSParser.T__11 = 12;
JASSParser.T__12 = 13;
JASSParser.T__13 = 14;
JASSParser.LETTER = 15;
JASSParser.COMMA = 16;
JASSParser.EQUAL = 17;
JASSParser.DIGIT = 18;
JASSParser.NEWLINE = 19;
JASSParser.WS = 20;
JASSParser.INT = 21;
JASSParser.FLOAT = 22;
JASSParser.STRING = 23;
JASSParser.OPEN_PAR = 24;
JASSParser.CLOSE_PAR = 25;

JASSParser.RULE_code = 0;
JASSParser.RULE_fn = 1;
JASSParser.RULE_identifier = 2;
JASSParser.RULE_argList = 3;
JASSParser.RULE_arg = 4;
JASSParser.RULE_type = 5;
JASSParser.RULE_statementBlock = 6;
JASSParser.RULE_statement = 7;
JASSParser.RULE_localDecl = 8;
JASSParser.RULE_set = 9;
JASSParser.RULE_call = 10;
JASSParser.RULE_expr = 11;
JASSParser.RULE_fnCall = 12;
JASSParser.RULE_fnInputList = 13;
JASSParser.RULE_value = 14;
JASSParser.RULE_primitive = 15;
JASSParser.RULE_builtin = 16;

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

CodeContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JASSParser.NEWLINE);
    } else {
        return this.getToken(JASSParser.NEWLINE, i);
    }
};


CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.CodeContext = CodeContext;

JASSParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JASSParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===JASSParser.T__0) {
            this.state = 34;
            this.fn();
            this.state = 35;
            this.match(JASSParser.NEWLINE);
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_fn;
    return this;
}

FnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FnContext.prototype.constructor = FnContext;

FnContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FnContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

FnContext.prototype.NEWLINE = function() {
    return this.getToken(JASSParser.NEWLINE, 0);
};

FnContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FnContext.prototype.statementBlock = function() {
    return this.getTypedRuleContext(StatementBlockContext,0);
};

FnContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterFn(this);
	}
};

FnContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitFn(this);
	}
};

FnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitFn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.FnContext = FnContext;

JASSParser.prototype.fn = function() {

    var localctx = new FnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JASSParser.RULE_fn);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.match(JASSParser.T__0);
        this.state = 43;
        this.identifier();
        this.state = 44;
        this.match(JASSParser.T__1);
        this.state = 45;
        this.argList();
        this.state = 46;
        this.match(JASSParser.T__2);
        this.state = 49;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JASSParser.T__8:
        case JASSParser.T__9:
        case JASSParser.T__10:
        case JASSParser.T__11:
        case JASSParser.T__12:
        case JASSParser.T__13:
            this.state = 47;
            this.type();
            break;
        case JASSParser.T__3:
            this.state = 48;
            this.match(JASSParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 51;
        this.match(JASSParser.NEWLINE);

        this.state = 52;
        this.statementBlock();
        this.state = 53;
        this.match(JASSParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.LETTER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JASSParser.LETTER);
    } else {
        return this.getToken(JASSParser.LETTER, i);
    }
};


IdentifierContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JASSParser.DIGIT);
    } else {
        return this.getToken(JASSParser.DIGIT, i);
    }
};


IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.IdentifierContext = IdentifierContext;

JASSParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JASSParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 55;
        		this.match(JASSParser.LETTER);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 58; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===JASSParser.LETTER || _la===JASSParser.DIGIT) {
            this.state = 60;
            _la = this._input.LA(1);
            if(!(_la===JASSParser.LETTER || _la===JASSParser.DIGIT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_argList;
    return this;
}

ArgListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgListContext.prototype.constructor = ArgListContext;

ArgListContext.prototype.arg = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgContext);
    } else {
        return this.getTypedRuleContext(ArgContext,i);
    }
};

ArgListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JASSParser.COMMA);
    } else {
        return this.getToken(JASSParser.COMMA, i);
    }
};


ArgListContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterArgList(this);
	}
};

ArgListContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitArgList(this);
	}
};

ArgListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitArgList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.ArgListContext = ArgListContext;

JASSParser.prototype.argList = function() {

    var localctx = new ArgListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JASSParser.RULE_argList);
    try {
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JASSParser.T__8:
        case JASSParser.T__9:
        case JASSParser.T__10:
        case JASSParser.T__11:
        case JASSParser.T__12:
        case JASSParser.T__13:
            this.enterOuterAlt(localctx, 1);
            this.state = 71;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 66;
                    this.arg();
                    this.state = 67;
                    this.match(JASSParser.COMMA); 
                }
                this.state = 73;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            this.state = 74;
            this.arg();
            break;
        case JASSParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.match(JASSParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_arg;
    return this;
}

ArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgContext.prototype.constructor = ArgContext;

ArgContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ArgContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterArg(this);
	}
};

ArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitArg(this);
	}
};

ArgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitArg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.ArgContext = ArgContext;

JASSParser.prototype.arg = function() {

    var localctx = new ArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JASSParser.RULE_arg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.type();
        this.state = 79;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

TypeContext.prototype.builtin = function() {
    return this.getTypedRuleContext(BuiltinContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.TypeContext = TypeContext;

JASSParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JASSParser.RULE_type);
    try {
        this.state = 83;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JASSParser.T__8:
        case JASSParser.T__9:
        case JASSParser.T__10:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.primitive();
            break;
        case JASSParser.T__11:
        case JASSParser.T__12:
        case JASSParser.T__13:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.builtin();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_statementBlock;
    return this;
}

StatementBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementBlockContext.prototype.constructor = StatementBlockContext;

StatementBlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterStatementBlock(this);
	}
};

StatementBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitStatementBlock(this);
	}
};

StatementBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitStatementBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.StatementBlockContext = StatementBlockContext;

JASSParser.prototype.statementBlock = function() {

    var localctx = new StatementBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JASSParser.RULE_statementBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JASSParser.T__5) | (1 << JASSParser.T__6) | (1 << JASSParser.T__7) | (1 << JASSParser.NEWLINE))) !== 0)) {
            this.state = 85;
            this.statement();
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JASSParser.NEWLINE);
    } else {
        return this.getToken(JASSParser.NEWLINE, i);
    }
};


StatementContext.prototype.localDecl = function() {
    return this.getTypedRuleContext(LocalDeclContext,0);
};

StatementContext.prototype.set = function() {
    return this.getTypedRuleContext(SetContext,0);
};

StatementContext.prototype.call = function() {
    return this.getTypedRuleContext(CallContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.StatementContext = StatementContext;

JASSParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JASSParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JASSParser.T__5:
            this.state = 91;
            this.localDecl();
            break;
        case JASSParser.T__6:
            this.state = 92;
            this.set();
            break;
        case JASSParser.T__7:
            this.state = 93;
            this.call();
            break;
        case JASSParser.NEWLINE:
            this.state = 94;
            this.match(JASSParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 97;
        this.match(JASSParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LocalDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_localDecl;
    return this;
}

LocalDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalDeclContext.prototype.constructor = LocalDeclContext;

LocalDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

LocalDeclContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

LocalDeclContext.prototype.EQUAL = function() {
    return this.getToken(JASSParser.EQUAL, 0);
};

LocalDeclContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LocalDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterLocalDecl(this);
	}
};

LocalDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitLocalDecl(this);
	}
};

LocalDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitLocalDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.LocalDeclContext = LocalDeclContext;

JASSParser.prototype.localDecl = function() {

    var localctx = new LocalDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, JASSParser.RULE_localDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(JASSParser.T__5);
        this.state = 100;
        this.type();
        this.state = 101;
        this.identifier();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===JASSParser.EQUAL) {
            this.state = 102;
            this.match(JASSParser.EQUAL);
            this.state = 103;
            this.expr();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_set;
    return this;
}

SetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetContext.prototype.constructor = SetContext;

SetContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

SetContext.prototype.EQUAL = function() {
    return this.getToken(JASSParser.EQUAL, 0);
};

SetContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

SetContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterSet(this);
	}
};

SetContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitSet(this);
	}
};

SetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.SetContext = SetContext;

JASSParser.prototype.set = function() {

    var localctx = new SetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, JASSParser.RULE_set);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(JASSParser.T__6);
        this.state = 107;
        this.identifier();
        this.state = 108;
        this.match(JASSParser.EQUAL);
        this.state = 109;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_call;
    return this;
}

CallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallContext.prototype.constructor = CallContext;

CallContext.prototype.fnCall = function() {
    return this.getTypedRuleContext(FnCallContext,0);
};

CallContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterCall(this);
	}
};

CallContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitCall(this);
	}
};

CallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.CallContext = CallContext;

JASSParser.prototype.call = function() {

    var localctx = new CallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, JASSParser.RULE_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(JASSParser.T__7);
        this.state = 112;
        this.fnCall();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.fnCall = function() {
    return this.getTypedRuleContext(FnCallContext,0);
};

ExprContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.ExprContext = ExprContext;

JASSParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, JASSParser.RULE_expr);
    try {
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.fnCall();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 115;
            this.value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FnCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_fnCall;
    return this;
}

FnCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FnCallContext.prototype.constructor = FnCallContext;

FnCallContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FnCallContext.prototype.OPEN_PAR = function() {
    return this.getToken(JASSParser.OPEN_PAR, 0);
};

FnCallContext.prototype.CLOSE_PAR = function() {
    return this.getToken(JASSParser.CLOSE_PAR, 0);
};

FnCallContext.prototype.fnInputList = function() {
    return this.getTypedRuleContext(FnInputListContext,0);
};

FnCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterFnCall(this);
	}
};

FnCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitFnCall(this);
	}
};

FnCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitFnCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.FnCallContext = FnCallContext;

JASSParser.prototype.fnCall = function() {

    var localctx = new FnCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, JASSParser.RULE_fnCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.identifier();
        this.state = 119;
        this.match(JASSParser.OPEN_PAR);
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JASSParser.LETTER) | (1 << JASSParser.INT) | (1 << JASSParser.FLOAT) | (1 << JASSParser.STRING))) !== 0)) {
            this.state = 120;
            this.fnInputList();
        }

        this.state = 123;
        this.match(JASSParser.CLOSE_PAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FnInputListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_fnInputList;
    return this;
}

FnInputListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FnInputListContext.prototype.constructor = FnInputListContext;

FnInputListContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

FnInputListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JASSParser.COMMA);
    } else {
        return this.getToken(JASSParser.COMMA, i);
    }
};


FnInputListContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterFnInputList(this);
	}
};

FnInputListContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitFnInputList(this);
	}
};

FnInputListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitFnInputList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.FnInputListContext = FnInputListContext;

JASSParser.prototype.fnInputList = function() {

    var localctx = new FnInputListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, JASSParser.RULE_fnInputList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 125;
                this.value();
                this.state = 126;
                this.match(JASSParser.COMMA); 
            }
            this.state = 132;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 133;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ValueContext.prototype.fnCall = function() {
    return this.getTypedRuleContext(FnCallContext,0);
};

ValueContext.prototype.INT = function() {
    return this.getToken(JASSParser.INT, 0);
};

ValueContext.prototype.FLOAT = function() {
    return this.getToken(JASSParser.FLOAT, 0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(JASSParser.STRING, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.ValueContext = ValueContext;

JASSParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, JASSParser.RULE_value);
    try {
        this.state = 140;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.fnCall();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 137;
            this.match(JASSParser.INT);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 138;
            this.match(JASSParser.FLOAT);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 139;
            this.match(JASSParser.STRING);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;


PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitPrimitive(this);
	}
};

PrimitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitPrimitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.PrimitiveContext = PrimitiveContext;

JASSParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, JASSParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JASSParser.T__8) | (1 << JASSParser.T__9) | (1 << JASSParser.T__10))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BuiltinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JASSParser.RULE_builtin;
    return this;
}

BuiltinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuiltinContext.prototype.constructor = BuiltinContext;


BuiltinContext.prototype.enterRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.enterBuiltin(this);
	}
};

BuiltinContext.prototype.exitRule = function(listener) {
    if(listener instanceof JASSListener ) {
        listener.exitBuiltin(this);
	}
};

BuiltinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JASSVisitor ) {
        return visitor.visitBuiltin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JASSParser.BuiltinContext = BuiltinContext;

JASSParser.prototype.builtin = function() {

    var localctx = new BuiltinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, JASSParser.RULE_builtin);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JASSParser.T__11) | (1 << JASSParser.T__12) | (1 << JASSParser.T__13))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.JASSParser = JASSParser;
