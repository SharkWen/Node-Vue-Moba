import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main.vue"
import Home from "./views/Home"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: Home,
                }
            ]
        }
    ]
})

export default router;