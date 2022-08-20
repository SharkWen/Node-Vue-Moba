import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main"
import Home from "./views/Home"
import Article from "./views/Article"
const router = createRouter({
    history: createWebHistory(),
    routes: [
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
        }
    ]
})

export default router;