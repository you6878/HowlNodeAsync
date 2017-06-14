/**
 * Created by myeongsic on 2017. 6. 15..
 */
const request = require('request');
const async = require('async');
const fs = require('fs');



function elevenStreet(callback) {
    request.get("https://www.11st.co.kr",function (err, res, html) {
        console.log("11번가")
        callback(null,"11번가");
    })
}
function gmarekt(callback) {
    request.get("http://www.gmarket.co.kr", function (err, res, html) {
        console.log("지마켓")
        callback(null,"지마켓");
    })
}
function auction(callback) {
    request.get("http://auction.co.kr", function (err, res, html) {
        console.log("옥션")
        callback(null,"옥션");
    })
}
// 병렬 코드
// async.parallel([
//     elevenStreet,
//     gmarekt,
//     auction
// ], function(err, results) {
// });
//순차적인 코드
async.series([
    elevenStreet,
    gmarekt,
    auction
]);
