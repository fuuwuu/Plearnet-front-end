import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/home.vue'
import User from '../views/User.vue'
import Like from '../components/Like.vue'
import History from '../components/History.vue'
import Self from '../components/Self.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        component: Home,
      }, {
        path: '/user/',
        component: User,
        children: [
          {
            path: 'self',
            component: Self
          },
          {
            path: 'like',
            component: Like
          },
          {
            path: 'history',
            component: History
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
