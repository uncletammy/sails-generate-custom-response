/**
 * Module dependencies
 */

var sailsgen = require('sails-generate')
	, path = require('path');



//
// This script exists so we can run our generator
// directly from the command-line for convenience
// during development.
//

var scope = {
	generatorType: 'custom-response',
	rootPath: process.cwd(),
	modules: {
		'custom-response': path.resolve(__dirname, '../lib')
	},

	// For the NEW response we're generating:
	responseName: process.argv[2],
	statusCode: process.argv[3]|200
};
sailsgen(scope, function (err) {
	if (err) throw err;

	// It worked.
	console.log('Done.');
});

