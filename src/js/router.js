import Vue from 'vue';
import VueRouter from 'vue-router';

import Birthday from '@/components/Birthday/Birthday.vue';
import Concert from '@/components/Concert/Concert.vue';
import TwentyFifthBirthday from '@/components/TwentyFifthBirthday/Index.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/birthday', component: Birthday
}, {
  path: '/concert', component: Concert
}, {
  path: '/25th-birthday', component: TwentyFifthBirthday
}];

module.exports = new VueRouter({
    routes
});
