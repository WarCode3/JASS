SET CLASSPATH=.;C:\Javalib\antlr-4.7-complete.jar;%CLASSPATH%
doskey antlr4=java org.antlr.v4.Tool $*
doskey grun =java org.antlr.v4.gui.TestRig $*

antlr4 -o antlr JASS.g4 -Dlanguage=JavaScript -visitor
