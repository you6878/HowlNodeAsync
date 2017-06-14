/**
 * Created by myeongsic on 2017. 6. 15..
 */
const async = require('async');


var AsyncSquaringLibrary = {
    squareExponent: 2,
    square: function(number, callback){
        var result = Math.pow(number, this.squareExponent);
        setTimeout(function(){
            callback(null, result);
        }, 200);
    }
};


async.map([1, 2, 3], AsyncSquaringLibrary.square.bind(AsyncSquaringLibrary), function(err, result) {
    // result is [1, 4, 9]
    // With the help of bind we can attach a context to the iteratee before
    // passing it to async. Now the square function will be executed in its
    // 'home' AsyncSquaringLibrary context and the value of `this.squareExponent`
    // will be as expected.
    console.log(result)
});