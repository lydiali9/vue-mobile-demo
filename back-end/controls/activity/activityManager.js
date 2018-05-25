/**
 * crawler
 * @type {es}
 * Created by yuhua.li
 */
let https    = require('https');
let cheerio = require('cheerio');
let request = require('request');
let crawler = require('../../db/crawler');

var request_promise = require('request-promise');

module.exports = {
    queryActivity(req, res) {
        let body = req.body;
        let province = body.province;
        let city = body.city;

        if(body.src && body.pi && body.ps) {
            if(body.province) {
                province = encodeURI(body.province);
            }

            if(body.city) {
                city = encodeURI(body.city);
            }

            let url = "http://openapi.huodongxing.com/v1/act/flist?src=" + body.src + "&province=" + province
                + "&city=" + city + "&sge=" + body.sge + "&sle=" + body.sle + "&pi=" + body.pi + "&ps=" + body.ps;

            let options = {
                "method": "GET",
                "uri": url,
                "json": true,
                "headers": {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            };

            request_promise(options)
                .then((result) => {

                    if(result.errcode == 200) {
                        res.json({code: 200, msg: 'success', content: result.result});
                    } else {
                        console.log("获取活动信息： errcode=" + result.errcode + " errmsg=" + result.errmsg);
                        res.json({code: $code.QUERY_MYSQL_FALSE, errmsg: "获取运单信息失败", data: ""});
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    res.json({code: 101, msg: 'failed', err: err.message});
                });
        } else {
            res.json({code: $code.QUERY_MYSQL_FALSE, msg: "请求信息不完整", data: ""});
        }
    },

    getActivity(req, res) {
        let body = req.body;

        if(body.src && body.eid) {
            let url = "http://openapi.huodongxing.com/v1/act/detail?src=" + body.src + "&eid=" + body.eid;

            let options = {
                "method": "GET",
                "uri": url,
                "json": true,
                "headers": {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            };

            request_promise(options)
                .then((result) => {

                    if(result.errcode == 200) {
                        res.json({code: 200, msg: 'success', content: result.result});
                    } else {
                        console.log("获取活动详情： errcode=" + result.errcode + " errmsg=" + result.errmsg);
                        res.json({code: $code.QUERY_MYSQL_FALSE, errmsg: "获取运单信息失败", data: ""});
                    }
                })
                .catch(function (err) {
                        console.log(err);
                        res.json({code: 101, msg: 'failed', err: err.message});
                    });

        } else {
            res.json({code: $code.QUERY_MYSQL_FALSE, msg: "请求信息不完整", data: ""});
        }
    }
};

