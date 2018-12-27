import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Edit from '@/components/Edit'
import stickNote from '@/components/stickNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/stick-note',
      name: 'stickNote',
      component: stickNote
    }
  ]
})
