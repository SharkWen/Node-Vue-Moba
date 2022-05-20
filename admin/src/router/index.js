import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from  '../views/CategoryList.vue'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
    children:[
      {
        path:'/categories/create',
        component:CategoryEdit
      },
      {
        path:'/categories/edit/:id',
        component:CategoryEdit,
      },
      {
        path:'/categories/list',
        component:CategoryList
      },
      {
        path:'/categories/delete/:id',
        component:CategoryList,
      },
    ]
  },
  {
    path: '/CategoryEdit',
    name: 'CategoryEdit',
    component: CategoryEdit
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
