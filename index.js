#!/usr/bin/env node

const fs = require('fs');
const vm = require('vm');
const os = require('os');

const program = require('commander');
const moment = require('moment');

const sdir = process.cwd();


function readData(path){
    return fs.readFileSync(path).toString();
}

function parseData(data){
    return data;
}

function run(data){
    const script = new vm.Script(data);

    var log = 'QScript v0.0.1 [https://github.com/vuanhhaogk/QScript.git]' + os.EOL;
    var ilog = false;

    const sandbox = {
        require: function(name){
            if (fs.existsSync(__dirname + '/core/' + name))
                return require('./core/' + name);
            else if (fs.existsSync(sdir + '/' + name))
                return require(sdir + '/' + name);
            else
                return require(name);
        },
        console: console,
        log: console.log,
        logF: function(msg){
            log += '[' + (moment().format('YYYY/MM/DD HH:mm:ss')) + '] ' + msg + os.EOL;
            ilog = true;
        }
    }

    const context = new vm.createContext(sandbox);

    script.runInContext(context);

    if (ilog)
        fs.writeFileSync('log.txt', log);
}

program
    .version('0.0.1')
    .arguments('<path>')
    .action(function(path){
        if (!fs.existsSync(path)){
            console.log('File does not exist!');
            return;
        }

        var data = readData(path);

        data = parseData(data);

        run(data);
    })
    .parse(process.argv);
