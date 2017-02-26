// QScript v0.0.1 [https://github.com/vuanhhaogk/QScript.git]

const CLI = require('qs.cli');

CLI
.question('Your name: ')
.then(function(name){
    log(name);
});
