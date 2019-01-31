import Vue from 'vue';
import Vuex from 'vuex';

import birthday from '@/store/modules/birthday';
import concert from '@/store/modules/concert';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      birthday,
      concert
    }
});
