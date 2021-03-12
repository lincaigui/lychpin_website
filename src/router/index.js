import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Computer from "@/views/Computer";
import Custom from "@/views/Custom";
import Information from "@/views/Information";
import Intelligence from "@/views/Intelligence";
import School from "@/views/School";
import Technical from "@/views/Technical";
import TestAndJod from "@/views/TestAndJod";
import Wireless from "@/views/Wireless";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/computer',
    name: 'Computer',
    component: Computer
  },
  {
    path: '/custom',
    name: 'Custom',
    component: Custom
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/intelligence',
    name: 'Intelligence',
    component: Intelligence
  },
  {
    path: '/school',
    name: 'School',
    component: School
  },
  {
    path: '/technical',
    name: 'Technical',
    component: Technical
  },
  {
    path: '/test_and_job',
    name: 'TestAndJob',
    component: TestAndJod
  },
  {
    path: '/wireless',
    name: 'Wireless',
    component: Wireless
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
