import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import toolbar from './modules/toolbar'

Vue.use(Vuex)

const baseUrl = process.env.SERVER_URL;
//跳转编辑界面url配置
const sourceUrl = process.env.SOURCE_URL;

export default new Vuex.Store({
    modules: {
        user,
        toolbar
    },
    state: {
        // main
        login: baseUrl + 'login/login',
        userProductList: baseUrl + 'product/private/get/',

        // crawler
        getInfo: baseUrl + "crawler/getInfo",
        getInfoDetail: baseUrl + "crawler/getInfoDetail",

        // activity
        queryActivity: baseUrl + "activity/queryActivity",
        getActivity: baseUrl + "activity/getActivity",

        // expressage
        getExpressage: baseUrl + "expressage/getExpressage",

        // reputation
        getReputation: baseUrl + 'reputation/getReputation',
        getPubPermissionsName: baseUrl + 'reputation/getPubPermissionsName'
    }
})
