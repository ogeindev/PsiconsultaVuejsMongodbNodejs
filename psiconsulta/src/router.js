import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './components/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './components/login.vue')
    },
    {
      path: '/videochat',
      name: 'videochat',
      component: () => import(/* webpackChunkName: "about" */ './views/videochat.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import(/* webpackChunkName: "about" */ './views/articles.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import(/* webpackChunkName: "about" */ './views/forum.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './components/profile.vue')
    },
    {
      path: '/nuevo',
      name: 'nuevo',
      component: () => import(/* webpackChunkName: "about" */ './components/nuevo.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import(/* webpackChunkName: "about" */ './components/notes.vue')
    }
    
    
    
  ]
})
