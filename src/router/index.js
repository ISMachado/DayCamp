import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginUser from '../views/LoginUser.vue'
import AboutView from '../views/AboutView'
import HomeComponent from '../components/HomeComponent'
import StudentsComponent from '../components/StudentsComponent'
import SchoolsComponent from '../components/SchoolsComponent'
import EventsComponent from '../components/EventsComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginUser',
    component: LoginUser
  },
  {
    path: '/about',
    component: AboutView,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeComponent
      },
      {
        path: 'students',
        name: 'students',
        component: StudentsComponent
      },
      {
        path: 'schools',
        name: 'schools',
        component: SchoolsComponent
      },
      {
        path: 'events',
        name: 'events',
        component: EventsComponent
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
