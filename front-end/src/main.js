// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import request from './utils/request'
import Snackbar from './components/common/snackbar/index'
import ILoading from './components/common/loading/index';
import Utils from './utils/utils'
import pccode from './utils/pccode'
import './libs/index.js'
import 'babel-polyfill'

Vue.use(Snackbar);
Vue.use(ILoading);

// axios.defaults.withCredentials = true;//设置cookie可用
Vue.prototype.$axios = axios;
Vue.prototype.$request = request;
Vue.prototype.$utils = Utils;
Vue.prototype.$pccode = pccode;

Vue.config.productionTip = false

Vue.prototype.setCookie = (c_name, value, expiredays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (unescape(arr[2]));
    else
        return null;
}

Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

router.beforeEach((to, from, next) => {

    // 检查是否存在session
    let items = [];
    let idPath = '';

    if(to.fullPath.indexOf("?") > -1) {
        idPath = to.fullPath.split("?")[0];
    }

    if (to.fullPath == "/" || to.fullPath == "/login") {
        next();
    } else {
        /*if (!getCookie('user') || !getCookie('isLogin')) {
            // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
            next({path: '/login'})
        } else {
            items = JSON.parse(getCookie('accessedMenusCatch')) || [];
            if (items.indexOf(to.path) > -1) {
                next();
            } else {
                next({path: '/login'})
            }
        }*/
        next();
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
    created() {
    },
    methods: {}
})
