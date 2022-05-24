import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from  '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from  '../views/ItemList.vue'
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
        path:'/items/create',
        component:ItemEdit
      },
      {
        path:'/items/edit/:id',
        component:ItemEdit,
      },
      {
        path:'/categories/list',
        component:CategoryList
      },
      {
        path:'/categories/delete/:id',
        component:CategoryList,
      },
      {
        path:'/items/list',
        component:ItemList
      },
      {
        path:'/items/delete/:id',
        component:ItemList,
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
