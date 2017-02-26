const jsdom = require('jsdom').jsdom;

const Parser = {};

Parser.htmlDOM = function(text){
    var doc = jsdom(text, {
        features: {
            FetchExternalResources: false
        }
    });

    return {
        window: doc.defaultView,
        document: doc
    }
}

module.exports = Parser;
