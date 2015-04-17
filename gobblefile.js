var gobble = require('gobble'),
	marked = require('./gobble/gobble-marked')


var assets = gobble('assets')

var mdcss = '<link rel="stylesheet" type="text/css" href="../../css/style.css">\n' +
			'<link rel="stylesheet" type="text/css" href="../../css/tomorrow.css">\n'

	markdown = assets.include('**/*.md')
			.transform(marked)
			.transform(function(code){
				return mdcss + code
			}),
	allelse = assets.exclude('**/*.md')

module.exports = gobble([markdown, allelse])

// var components = gobble( 'assets/G-and-beyond/ractive_components' )
// module.exports = gobble([
// 	components.exclude('index.html').map( 'ractive', { type: 'amd' }),
// 	components.include('index.html'),
// 	gobble('assets/js')
// ])
