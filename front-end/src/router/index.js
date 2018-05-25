import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/main/Login';
import Home from '@/components/main/Home';

// activity component
import ActivityManager from '../components/activity/activityManager'
// import ActivityDetail from '../components/activity/activityDetail'

// expressage comonent
import ExpressageManager from '../components/expressage/expressageManager'
import ExpressageList from '../components/expressage/expressageList'

// reputation
import ReputationManager from '../components/reputation/reputationManager'
import ReputationList from "../components/reputation/reputationList"
import ReputationDetail from "../components/reputation/ReputationDetail"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/activity',
                    component: ActivityManager
                },
                /*{
                    name: 'ActivityDetail',
                    path: '/activity-detail',
                    component: ActivityDetail
                },*/
                {
                    path: '/expressage',
                    component: ExpressageManager
                },
                {
                    path: '/expressage-list',
                    component: ExpressageList
                },
                {
                    path: '/reputation',
                    component: ReputationManager
                },
                {
                    path: '/reputation-list',
                    component: ReputationList
                },
                {
                    name: 'ReputationDetail',
                    path: '/reputation-detail',
                    component: ReputationDetail
                }
            ]
        }
    ]
})
