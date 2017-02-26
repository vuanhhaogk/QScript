const Web = require('qs.web');
const Parser = require('qs.parser');

Web
.get('http://ln.hako.re/truyen/387-zombie-no-afureta-sekai-de-ore-dake-ga-osowarenai')
.then(function(text){
    log(Parser.htmlDOM(text));
});
