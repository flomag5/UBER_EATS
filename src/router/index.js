//--- Définition des routes pour chaque "components" ---//

import { createRouter, createWebHistory } from 'vue-router';
//import store from '../store/index.js'

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/home"),
        meta: {
            title: "Uber Eats : Bienvenus"
        }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: {
            title: "Uber Eats : Connexion/inscription"
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
        meta: {
            title: "Uber Eats : Mon profil"
        }
    },
    {
        path: "/restaurants",
        name: "AllRestaurants",
        component: () => import("../components/RestoCard"),
        meta: {
            title: "Uber Eats : Actualités"
        }
    },
    {
        path: "/restaurants/:id",
        name: "OneRestaurant",
        component: () => import("../views/Restaurant"),
        meta: {
            title: "Uber Eats : votre restaurant"
        }
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

/*router.beforeEach((to, from, next) => {
    const userLog = store.state.userLog;
    if ((to.name !== 'Login' && !userLog)) next({ alias: 'Login' })
    else next()
})*/

router.afterEach((to, from) => {
    console.log(from, to);
    document.title = to.meta.title;
});


export default router;