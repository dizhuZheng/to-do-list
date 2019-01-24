import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Edit from '@/components/Edit'
import stickNote from '@/components/stickNote'
import quiButton from '@/components/quiButton'
import list from '@/components/list'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/stick-note',
      name: 'stickNote',
      component: stickNote
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/quiButton',
      name: 'quiButton',
      component: quiButton
    },

    {
      path: '/list',
      name: 'list',
      component: list
    },

    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
