import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import login from '@/views/login'
import layout from '@/components/Layout'
import home from '@/views/home'
import classes from '@/views/classes'
import CET from '@/views/CET'
import other from '@/views/other'
import student from '@/views/student'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: login },
  {
    path: '/', name: 'layout', component: layout, redirect: '/home', children: [
      { 
        path: '/home', component: home, meta:{title:'首页'}
      }
    ]
  },
  {
    path: '/classes', name: 'layout', component: layout, children: [
      { 
        path: '/', component: classes , meta:{title:'课程管理'}
      }
    ]
  },
  {
    path: '/CET', name: 'layout', component: layout, children: [
      { 
        path: '/', component: CET , meta:{title:'四六级报名入口'}
      }
    ]
  },
  {
    path: '/other', name: 'layout', component: layout, children: [
      { 
        path: '/', component: other , meta:{title:'课外相关'}
      }
    ]
  },
  {
    path: '/student', name: 'layout', component: layout, children: [
      { 
        path: '/', component: student , meta:{title:'学生信息'}
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
