import Vue from 'vue'
import Router from 'vue-router'
import Credential from '@/components/Credential'
import Ask from '@/components/Ask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Credential',
      component: Credential
    },
    {
      path: '/credential',
      name: 'Credential',
      component: Credential
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    }
  ]
})
