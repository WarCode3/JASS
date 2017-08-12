module.exports = {

    ext: '.jass',
    grammar: 'JASS.g4',

    logo: 'logo.svg',
    icon: 'icon.png',

    /**
     * @method transpiler
     * @param {String} code The code in this language
     * @param {Function} cb Callback function, with error and result
     *
     * A method to translate code in this given language
     * into valid, native JASS, which WC3 will recognize
     */
    transpiler: function(code, cb) {
        // In this case, JASS just maps to itself
        // since it is already in JASS form
        return cb(false, code);
    },


    /**
     * @method pretty
     * @param {String} code The code in this language
     * @param {Function} cb Callback function, with error and result
     *
     * A method to "pretty print" or auto-format the given input
     * code. This method DOES NOT MODIFY the behavior of the code;
     * it only formats the code to follow a certain standard.
     *
     * E.g. one might require a space before the ( ) of a function call,
     * or spaces between commas of an argument list.
     */
    pretty: function(code, cb) {
        // This logic is not yet implemented
        // TODO: Implement this logic for JASS
        return cb(false, code);
    },

    /**
     * @method validate
     * @param {String} code The code in this language
     * @param {Function} cb Callback function, with error flag and array of errors
     *
     * A method to verify the validity of the given code in this language.
     * The first param on the callback is true if there are errors, and false otherwise.
     * The second param is an array, containing the errors or else it is empty.
     */
    validate: function(code, cb) {
        // TODO: Implement this logic for JASS
        // e.g. if there are errors with the given code, return cb(true, [...])

        return cb(false, []); // Temporary until the logic is implemented
    },

    merge: function(jassFiles, outputPath) {
        const
            fs = require('fs-extra'),
            antlr4 = require('antlr4'),
            JASSLexer = require('./antlr/JASSLexer'),
            JASSParser = require('./antlr/JASSParser'),
            MergeListener = require('./bin/MergeListener').MergeListener;

        var output = {
            globals: [],
            functions: []
        };

        jassFiles.forEach((file) => {
            var input = fs.readFileSync(file, { encoding: 'utf8' });
            var chars = new antlr4.InputStream(input);
            var lexer = new JASSLexer.JASSLexer(chars);
            var tokens  = new antlr4.CommonTokenStream(lexer);
            var parser = new JASSParser.JASSParser(tokens);
            parser.buildParseTrees = true;
            var tree = parser.code();

            var listener = new MergeListener(output);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        });

        // Assemble output text and write the war3map.j file
        var outputText = '';

        outputText += 'globals\r\n';
        outputText += output.globals.join('');
        outputText += 'endglobals\r\n\r\n';

        outputText += output.functions.join('\r\n\r\n');

        console.log('- - - -');
        fs.writeFileSync(outputPath, outputText);
    }

};
