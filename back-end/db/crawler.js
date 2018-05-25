let config = require('./config');
let mysql = require('mysql');
let amqp = require('amqplib/callback_api');
var when = require('when');
let elasticsearch = require('elasticsearch');
//网络请求类
let request = require('request');
let https    = require('https');
let cheerio = require('cheerio');
var request_promise = require('request-promise');

let pool = "";
//初始化es
let client = "";
//内容组数据处理
let rabbit_connect = "";

config.getData(function (data) {
    console.log("配置：" + JSON.stringify(data));
    pool = mysql.createPool(data.sql);
    client = new elasticsearch.Client(data.es);
    amqp.connect('amqp://' + data.rabbit.username + ':' + data.rabbit.password + '@' + data.rabbit.url, (err, conn) => {
        rabbit_connect = conn;
    })
});

module.exports = {

    //通知爬虫批量更新
    postBatchOffline(length, fn) {
        config.getData(function (data) {
            var options = {
                url: data.source_batch_offline,
                headers: {
                    'User-Agent': 'request',
                    'content-type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    "length": length
                })
            };
            request.post(options, function (error, response, body) {
                fn(error, JSON.parse(body));
            });
        })
    },

    get(data) {
        return new Promise(function (resolve, reject) {
            console.log(data.url);
            https.get(data.url, (res) => {
                var body = "";
                res.setEncoding('utf8');
                const hasResponseFailed = res.statusCode >= 400;

                if (hasResponseFailed) {
                    reject(`Request to huodongxing failed with HTTP ${res.statusCode}`);
                }

                res.on('data', (chunk) => {
                    body += chunk;
                });
                res.on('end', () => {
                    resolve(body);
                });
            });
        });
    },

    get_request(data) {
        return new Promise(function (resolve, reject) {
            console.log(data.url);
            let options = {
                "method": "GET",
                "uri": data.url,
                "json": true,
                "headers": {
                    'Content-Type': 'application/json;charset=UTF'
                }
            };

            request_promise(options)
                .then((result) => {
                    resolve(result);
                }).catch(function (err) {
                    reject(err);
                });
        });
    }
}

