/**
 * sails-generate-custom-response
 *
 * Usage:
 * `sails generate custom-response`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-custom-response) @ `'+scope.rootPath+'`...'); cb(); }},
		'./api/responses/:responseName.js':       { template: 'serverResponse.js' }
	}
};

