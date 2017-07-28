grammar JASS;

/*
 * Parser Rules
 */

code: (fn NEWLINE)* ;

fn: 'function ' identifier ' takes ' argList ' returns ' (type | 'nothing') NEWLINE  (statementBlock) 'endfunction' ;

identifier: LETTER+ (LETTER | DIGIT)* ;
argList: (arg COMMA)* arg
       | 'nothing'
       ;

arg: type identifier ;

type: primitive
    | builtin
    ;

statementBlock: statement* ;
statement: (localDecl | set | call | NEWLINE) NEWLINE;

localDecl: 'local' type identifier (EQUAL expr)? ;
set: 'set' identifier EQUAL expr ;
call: 'call' fnCall;

expr: fnCall
    | value
    ;

fnCall: identifier OPEN_PAR fnInputList? CLOSE_PAR ;
fnInputList: (value COMMA)* value ;

value: identifier
     | fnCall
     | INT
     | FLOAT
     | STRING
     ;

primitive: 'boolean' | 'integer' | 'real' ;
builtin: 'player' | 'unit' | 'trigger' ;

/*
 * Lexer Rules
 */
LETTER  : [A-Za-z] ;
COMMA   : ',' ;
EQUAL   : '=' ;
DIGIT   : [0-9] ;
NEWLINE : [\r\n]+ ;
WS      : [ \t] -> channel(HIDDEN) ;

INT     : '-'? [0-9]+ ;
FLOAT   : '-'? [0-9]* '.' [0-9]+ ;
STRING  : ('"' .*? '"') | ('\'' .*? '\'');

OPEN_PAR: '(' ;
CLOSE_PAR: ')' ;

SLASH   : '/' ;
COMMENT : SLASH SLASH .*? NEWLINE -> channel(HIDDEN) ;
