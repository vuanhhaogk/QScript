const Web = require('qs.web');

Web
.get('http://ln.hako.re/truyen/387-zombie-no-afureta-sekai-de-ore-dake-ga-osowarenai')
.then(function(text){
    log(text);
});
