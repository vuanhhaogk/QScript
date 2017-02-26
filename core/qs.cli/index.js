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
};

CLI.progress = function(config){
    config = config || {};
    config.label = config.label || '';
    config.percent = config.percent || '';
    config.barwidth = config.barwidth || 30;
    config.textwidth = config.textwidth || 30;
    config.align = config.align || 'left';
    config.complete = config.complete || '=';
    config.incomplete = config.incomplete || ' ';

    function makeString(c, n){
        var s = '';
        for (var i = 0; i < n; i++)
            s += c;
        return s;
    }

    function makeBar(){
        var size = config.barwidth - 4;
        var num = Math.floor(size * config.percent);
        var inside = makeString(config.complete, num) + makeString(config.incomplete, size - num);

        var outside = '';

        switch (config.align){
            case 'right':
                if (config.label.length <= config.textwidth){
                    var spacebefore = makeString(' ', config.textwidth - config.label.length);

                    outside = spacebefore + config.label;
                } else {
                    var numremove = config.label.length - config.textwidth + 3;
                    outside = '...' + config.label.substr(numremove, config.label.length - numremove);
                }
                break;
            case 'center':
                if (config.label.length <= config.textwidth){
                    var spacebefore = makeString(' ', Math.floor((config.textwidth - config.label.length) / 2));

                    outside = spacebefore + config.label;
                } else {
                    var before = Math.floor(config.textwidth/2) - 1;
                    var after = config.textwidth - before - 3;
                    var posafter = config.label.length - after;
                    outside = config.label.substr(0, before) + '...' + config.label.substr(posafter, after);
                }
                break;
            default:
                outside = config.label.length <= config.textwidth ? config.label : (config.label.substr(0, config.textwidth - 3) + '...');
        }

        return ' [' + inside + '] ' + outside;

    }

    process.stdout.write(makeBar());

    var rel = {
        update: function(percent, label){
            config.percent = percent || config.percent;
            config.label = label || config.label;
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(makeBar());
            return rel;
        },
        end: function(percent, label){
            rel.update(percent || 1, label);
            process.stdout.write('\n');
        }
    };

    return rel;
}

module.exports = CLI;
