import { createRouter,createWebHistory, } from 'vue-router'
import MainView from '../views/MainView.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from  '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from  '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'
import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'
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
        path:'/heros/create',
        component:HeroEdit
      },
      {
        path:'/articles/edit/:id',
        component:ArticleEdit,
      },
      {
        path:'/articles/create',
        component:ArticleEdit
      },
      {
        path:'/heros/edit/:id',
        component:HeroEdit,
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
      {
        path:'/heros/list',
        component:HeroList
      },
      {
        path:'/heros/delete/:id',
        component:HeroList,
      },
      {
        path:'/articles/list',
        component:ArticleList
      },
      {
        path:'/articles/delete/:id',
        component:ArticleList,
      },
      {
        path:'/ads/list',
        component:AdList
      },
      {
        path:'/ads/create',
        component:AdEdit,
      },
      {
        path:'/ads/edit/:id',
        component:AdEdit,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
