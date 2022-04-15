import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Markdown from '../views/Markdown.vue'
import GridView from '../views/GridView.vue'
import FetchData from '../views/FetchData.vue'
import TreeView from '../views/TreeView.vue'
import SVGGraph from '../views/SVGGraph.vue'
import ModalView from '../views/ModalView.vue'
import TransitionGroup from '../views/TransitionGroup.vue'
import TodoMVC from '../views/TodoMVC.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/Markdown',
    name: 'Markdown',
    component: Markdown
  },
  {
    path: '/FetchData',
    name: 'FetchData',
    component: FetchData
  },
  {
    path: '/GridView',
    name: 'GridView',
    component: GridView
  },
  {
    path: '/TreeView',
    name: 'TreeView',
    component: TreeView
  },
  {
    path: '/SVGGraph',
    name: 'SVGGraph',
    component: SVGGraph
  },
  {
    path: '/ModalView',
    name: 'ModalView',
    component: ModalView
  },
  {
    path: '/TransitionGroup',
    name: 'TransitionGroup',
    component: TransitionGroup
  },
  {
    path: '/TodoMVC',
    name: 'TodoMVC',
    component: TodoMVC
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
