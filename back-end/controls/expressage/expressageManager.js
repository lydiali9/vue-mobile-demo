/**
 * crawler
 * @type {es}
 * Created by yuhua.li
 */
let cheerio = require('cheerio');
let crawler = require('../../db/crawler');

var request_promise = require('request-promise');


module.exports = {
    getExpressage(req, res) {
        let body = req.body;

        if (body.num) {

            var url = "https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury?" +
                "appid=4001&com=&nu=" + body.num + "&vcode=&token=&_=1525687115970";
            let options = {
                "method": "GET",
                "uri": url,
                "json": true,
                "headers": {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Cookie': 'BAIDUID=F9CD8D368696624EF2F9C448BE4C8A81:FG=1; BIDUPSID=F9CD8D368696624EF2F9C448BE4C8A81; PSTM=1516274010; BD_UPN=123353; BDUSS=3ctQ0dRclVEQXpUdEFvZFc5SUVaM3hVc2FTSTNvN2wxeFFqMjVjS3hsc1NHUXBiQUFBQUFBJCQAAAAAAAAAAAEAAAB1y3FSTHlkaWFMaTA5MDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKM4loSjOJad; __cfduid=d23f8c0cd2373763ea7bc182b02a9f1e91524887055; H_PS_PSSID=1459_26351_21085_22159; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; BD_CK_SAM=1; PSINO=7; BD_HOME=1; H_PS_645EC=5e56U%2FiqDjSwOBVrVHhVfDpqfNisEcvT2EfXmJRy7YTFjhdSgjVz9q38uMSfJeVNpfTc; WWW_ST=1525687124328',
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.84 Chrome/63.0.3239.84 Safari/537.36'
                }
            };

            request_promise(options)
                .then((result) => {
                    if(result.status == "0") {
                        res.json({code: 200, msg: 'success', content: result.data});
                    } else {
                        console.log("获取百度运单号信息失败： status=" + result.status + " msg=" + result.msg);
                        res.json({code: $code.QUERY_MYSQL_FALSE, msg: "获取运单信息失败", data: ""});
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    res.json({code: 101, msg: 'failed', err: err});
                });
        } else {
            res.json({code: $code.QUERY_MYSQL_FALSE, msg: "请求信息不完整", data: ""});
        }
    }
}

