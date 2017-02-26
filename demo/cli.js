// QScript v0.0.1 [https://github.com/vuanhhaogk/QScript.git]

const CLI = require('qs.cli');

var bar = CLI.progress({
    label: 'Anh em nha ali baba Di ve noi rat xa, coi chi co anh va em ma tjoi',
    align: 'center',
    barwidth: 40,
    textwidth: 39
});

var p = 0;

var loop = setInterval(function(){
    bar.update(p);
    if (p < 1)
        p += .05;
    else {
        bar.end();
        clearInterval(loop);
    }
}, 100);

/*CLI
.question('Your name: ')
.then(function(name){
    log(name);
});*/
