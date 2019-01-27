import Vue from 'vue';

import store from '@/store';
import router from '@/router';
import Root from '@/components/Root';

new Vue({
    el: document.getElementById('root'),
    store,
    router,
    render: (h)=> h(Root)
});