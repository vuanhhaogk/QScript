Promise = typeof Promise === 'undefined' ? require('promise-polyfill') : Promise;

const readline = require('readline');
const CLI = {};

CLI.question = function(qs){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(function(resolve, reject){
        rl.question(qs, (answer) => {
            resolve(answer);

            rl.close();
        });
    });
}

module.exports = CLI;
