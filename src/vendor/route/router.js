import { Func } from '../lib';
import config from './config';
export default function (router) {
    //路由路径
    router.map(config.router);
    
    //路由跳转
    router.redirect({
        //
    });

    //路由限制
    router.beforeEach((transition) => {
        const userInfo = Func.readUserInfo();
        if (config.admin.hasOwnProperty(transition.to.path)) {
            userInfo.isLogin ? transition.next() : transition.redirect('/home');
        } else {
            !userInfo.isLogin ? transition.next() : transition.redirect('/index');
        }
    });

    router.afterEach((transition) => {
        scroll(0, 0);
    });
}