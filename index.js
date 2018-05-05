module.exports = {

    ext: '.jass',
    grammar: 'JASS.g4',

    logo: '/logo/logo.svg',
    icon: '/logo/icon.png',

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

    /**
     * @method merge
     * @param {Array} jassFiles Array of file paths to each JASS file to be merged
     *
     * Merges several JASS file fragments together, returning the resultant global
     * and function declarations.
     *
     * [!] This method is special to the JASS language. For implementations of
     * other scripting languages, you do NOT need to implement a merge method.
     */
    merge: function(jassFiles) {
        const
            fs = require('fs-extra'),
            antlr4 = require('antlr4'),
            JASSLexer = require('./antlr/JASSLexer'),
            JASSParser = require('./antlr/JASSParser'),
            MergeListener = require('./bin/MergeListener').MergeListener;

        var output = {
            globals: [],        // List of global declarations
            functions: [],      // Functions in full-text form
            initFunctions: []   // Array of function names to be called on map init
        };

        jassFiles.forEach((file) => {
            var input = fs.readFileSync(file, { encoding: 'utf8' });
            var chars = new antlr4.InputStream(input);
            var lexer = new JASSLexer.JASSLexer(chars);
            var tokens  = new antlr4.CommonTokenStream(lexer);
            var parser = new JASSParser.JASSParser(tokens);
            parser.buildParseTrees = true;
            var tree = parser.root();

            var listener = new MergeListener(output);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        });

        return output;
    }

};
