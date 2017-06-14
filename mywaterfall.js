/**
 * Created by myeongsic on 2017. 6. 15..
 */

const async = require('async');

async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, arg1 + arg2 + 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, arg1 + 'done');
    }
], function (err, result) {
    console.log(result)
});

