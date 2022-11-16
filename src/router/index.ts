import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VideoJsIndex from '../views/VideoJsIndex.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/videojs',
    name: 'videojs',
    component: VideoJsIndex
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
