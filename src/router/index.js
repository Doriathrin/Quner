import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Animation from '@/common/fade/FadeAnimation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    }
  ],
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
})
