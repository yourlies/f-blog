'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router-config.js';

//装载vue-router
Vue.use(VueRouter);

//实例化vue-router
let router = new VueRouter({
    history: true,
    saveScrollPosition: true,
});

let app = Vue.extend(require('./App.vue'));
routerConfig(router);

router.start(app, '#app');
