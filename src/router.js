import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Edit from '@/components/Edit'
import stickNote from '@/components/stickNote'
import quiButton from '@/components/quiButton'
import finished_list from '@/components/finished_list'
import unfinished_list from '@/components/unfinished_list'
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
      path: '/finished_list',
      name: 'finished_list',
      component: finished_list
    },

    {
      path: '/unfinished_list',
      name: 'unfinished_list',
      component: unfinished_list
    },

    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
