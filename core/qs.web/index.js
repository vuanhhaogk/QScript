const httpreq = require('httpreq');

const Web = {};

Web.get = function(url){
    return new Promise(function(resolve, reject){
        httpreq.get(url, function(err, res){
            if (err){
                reject(err);
                return;
            }

            resolve(res.body);
        })
    });
}

module.exports = Web;
