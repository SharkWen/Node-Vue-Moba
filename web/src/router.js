import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./views/Main.vue"
import Home from "./views/Home.vue"
import Article from "./views/Article.vue"
import Hero from "./views/Hero.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/heroes/:id', name: 'hero', component: Hero,},
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: "/",
                    name: "home",
                    component: Home,
                },
                {
                    path:"/articles/:id",
                    name:"articles",
                    component:Article,
                    props:true
                }
            ]
        },
        
    ]
})

export default router;