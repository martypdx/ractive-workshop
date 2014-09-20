var merge = require( 'broccoli-merge-trees' ),
	pick = require( 'broccoli-static-compiler' ),
	base = 'target'

function copy( path ) {
	return pick( path, { srcDir: '/', destDir: '/' + path } );
}

module.exports = merge([
	copy('css'),
	copy('js'),
	copy('templating')
])
