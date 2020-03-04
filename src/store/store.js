import Vue from 'vue';
import vuex from 'vuex';
import index from './index'
import mutations from './mutations'
Vue.use(vuex);

var store = new vuex.Store({
  state: index,
  mutations: mutations
  // actions: {
  //   chanCtiy (ctx, city) {//两个参数content 上下文  传过来的参数
  //     ctx.commit('changCtiyValue',city)
  //   }
  // }
})
export default store