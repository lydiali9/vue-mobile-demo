let path = '/api';

module.exports = {
    //crawler
    get_crawler: path + '/crawler/getInfo',
    get_info_detail: path + '/crawler/getInfoDetail',

    //activity
    query_activity: path + '/activity/queryActivity',
    get_activity: path + '/activity/getActivity',

    //expressage
    get_expressage: path + '/expressage/getExpressage',

    // reputation
    get_reputation: path + '/reputation/getReputation',
    get_pub_permissions_name: path + '/reputation/getPubPermissionsName',

    
    //登陆管理
    login: path + '/login/login',
    logout: path + '/login/logout'
};
