let $express = require('express');
let $api = require('../api');
let $crawler = require('../controls/crawler/crawlerManager');
let $activity = require('../controls/activity/activityManager');
let $exprssage = require('../controls/expressage/expressageManager');
let $reputation = require('../controls/reputation/reputationManager');


let router = $express.Router();

//crawler
router.post($api.get_crawler, $crawler.getInfo);
router.post($api.get_info_detail, $crawler.getInfoDetail);

// activity
router.post($api.query_activity, $activity.queryActivity);
router.post($api.get_activity, $activity.getActivity);

// expressage
router.post($api.get_expressage, $exprssage.getExpressage);

// reputation
router.post($api.get_reputation, $reputation.getReputation);
router.post($api.get_pub_permissions_name, $reputation.getPubPermissionsName);

module.exports = router;