grammar JASS;

/*
 * Parser Rules
 */

code: ((globals | fn) NEWLINE)* ;

globals: 'globals' NEWLINE globalBlock? 'endglobals' ;
globalBlock: ((decl?) NEWLINE)+;

fn: 'function ' identifier ' takes ' argList ' returns ' (type | 'nothing') NEWLINE  (statementBlock)? 'endfunction' ; // 'constant'?

identifier: LETTER (LETTER | DIGIT | UNDERSCORE)* ; // TODO: identifier may not end in an underscore
argList: (arg COMMA)* arg
       | 'nothing'
       ;

arg: type identifier ;

type: primitive
    | derived
    ;

statementBlock: statement+ ;
statement: (ifBlock | loop | localDecl | set | call | exitwhen | return)? NEWLINE;

decl: type identifier (EQUAL expr)? ; // ('constant') then initialization is required: constant integer x = 5

localDecl: 'local' decl ;
set: 'set' identifier EQUAL expr ;
call: 'call ' fnCall;
loop: 'loop' NEWLINE statementBlock? 'endloop' ;
exitwhen: 'exitwhen' logicalExpr ;
return: ... ;

logicalExpr: OPEN_PAR logicalExpr CLOSE_PAR
           | 'not ' logicalExpr
           | logicalExpr ' and ' logicalExpr
           | logicalExpr ' or ' logicalExpr
           | identifier '==' value // == <= >= < > !=
           | identifier
           | 'true' | 'false'
           ;

ifBlock: 'if ' logicalExpr ' then' (statementBlock)? (elseifBlock)* (elseBlock)? 'endif' ;
elseifBlock: 'elseif ' logicalExpr ' then' (statementBlock)? ;
elseBlock: 'else' (statementBlock)? ;


expr: expr ('*' | '/') expr
    | expr ('+' | '-') expr
    | 'null'
    | value
    ;

fnCall: identifier OPEN_PAR fnInputList? CLOSE_PAR ;
fnInputList: (value COMMA)* value ;

value: identifier
     | fnCall
     | INT
     | FLOAT
     | STRING
     | 'true'
     | 'false'
     ;

primitive: 'boolean' | 'integer' | 'real' | 'string' | 'code' | 'handle' ;
derived: 'agent' | 'event' | 'player' | 'widget' | 'unit' | 'destructable' | 'item' | 'ability' | 'buff' | 'force' | 'group' | 'trigger' | 'triggercondition' | 'triggeraction' | 'timer' | 'location' | 'region' | 'rect' | 'boolexpr' | 'sound' | 'conditionfunc' | 'filterfunc' | 'unitpool' | 'itempool' | 'race' | 'alliancetype' | 'racepreference' | 'gamestate' | 'igamestate' | 'fgamestate' | 'playerstate' | 'playerscore' | 'playergameresult' | 'unitstate' | 'aidifficulty' | 'eventid' | 'gameevent' | 'playerevent' | 'playerunitevent' | 'unitevent' | 'limitop' | 'widgetevent' | 'dialogevent' | 'unittype' | 'gamespeed' | 'gamedifficulty' | 'gametype' | 'mapflag' | 'mapvisibility' | 'mapsetting' | 'mapdensity' | 'mapcontrol' | 'playerslotstate' | 'volumegroup' | 'camerafield' | 'camerasetup' | 'playercolor' | 'placement' | 'startlocprio' | 'raritycontrol' | 'blendmode' | 'texmapflags' | 'effect' | 'effecttype' | 'weathereffect' | 'terraindeformation' | 'fogstate' | 'fogmodifier' | 'dialog' | 'button' | 'quest' | 'questitem' | 'defeatcondition' | 'timerdialog' | 'leaderboard' | 'multiboard' | 'multiboarditem' | 'trackable' | 'gamecache' | 'version' | 'itemtype' | 'texttag' | 'attacktype' | 'damagetype' | 'weapontype' | 'soundtype' | 'lightning' | 'pathingtype' | 'image' | 'ubersplat' | 'hashtable' ;

/*
 * Lexer Rules
 */
LETTER  : [A-Za-z] ;
COMMA   : ',' ;
EQUAL   : '=' ;
DIGIT   : [0-9] ;
NEWLINE : [\r\n]+ ;
WS      : [ \t] -> channel(HIDDEN) ;
UNDERSCORE : '_' ;

INT     : '-'? [0-9]+ ;
FLOAT   : '-'? [0-9]* '.' [0-9]+ ;
STRING  : ('"' .*? '"') | ('\'' .*? '\'');

OPEN_PAR: '(' ;
CLOSE_PAR: ')' ;

SLASH   : '/' ;
COMMENT : SLASH SLASH .*? NEWLINE -> channel(HIDDEN) ;
