var marked = require('marked'),
	renderer = new marked.Renderer(),
	base_code = renderer.code.bind(renderer)

renderer.code = function(code, lang){
	return base_code(code, lang).replace('<code class="', '<code class="hljs ')
}

marked.setOptions({
	renderer: renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: function (code, lang) {
		return lang ? require('highlight.js').highlight(lang, code).value : code;
	}
});

module.exports = markdown;

function markdown ( code, options ) {
	return marked( code );
}

markdown.defaults = {
	accept: ['.md', '.markdown'],
	ext: '.html'
};
