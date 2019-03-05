import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import JQ1 from '../components/JQ/JQ1.vue'
import JQ2 from '../components/JQ/JQ2.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/Page1', component: Page1
      }, {
        path: '/Page2', component: Page2
      }, {
        path: '/Page3', component: Page3,
        children: [{
          path: '/Page3/JQ1',
          component: JQ1
        }, {
          path: '/Page3/JQ2',
          component: JQ2
        }]
      }]
  }
  ]
})

export default router;

// export default new Router({
//   routes: [
//     {
//       path: '/welcome',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })
