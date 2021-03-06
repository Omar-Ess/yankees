import VueRouter from "vue-router";
import Vue from "vue";
import nProgress from "nprogress";
import store from "./store";

Vue.use(VueRouter);
const routes = [
    {
        path: "/admin/dashboard",
        name: "dashboard",
        component: () => import("./components/dashboard/Dashboard.vue"),
        meta: {
            title: "Administration"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/users",
        name: "users",
        component: () => import("./components/users/UsersList.vue"),
        meta: {
            title: "Utilisateurs"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/users/create",
        name: "users.create",
        component: () => import("./components/users/UsersForm.vue"),
        meta: {
            title: "Créer un utilisateur"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/users/:id/edit",
        name: "users.edit",
        component: () => import("./components/users/UsersForm.vue"),
        meta: {
            title: "Modifier l'utilisateur"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/categories",
        name: "categories",
        component: () => import("./components/categories/CategoriesList.vue"),
        meta: {
            title: "Catégories"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/categories/create",
        name: "categories.create",
        component: () => import("./components/categories/CategoriesForm.vue"),
        meta: {
            title: "Créer une catégorie"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/categories/:id/edit",
        name: "categories.edit",
        component: () => import("./components/categories/CategoriesForm.vue"),
        meta: {
            title: "Modifier la catégorie"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/extras",
        name: "extras",
        component: () => import("./components/extras/ExtrasList.vue"),
        meta: {
            title: "Extras"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/extras/create",
        name: "extras.create",
        component: () => import("./components/extras/ExtrasForm.vue"),
        meta: {
            title: "Créer un extra"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/extras/:id/edit",
        name: "extras.edit",
        component: () => import("./components/extras/ExtrasForm.vue"),
        meta: {
            title: "Modifier l'extra"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/meals",
        name: "meals",
        component: () => import("./components/meals/MealsList.vue"),
        meta: {
            title: "Menus"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/meals/create",
        name: "meals.create",
        component: () => import("./components/meals/MealsForm.vue"),
        meta: {
            title: "Créer un menu"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/meals/:id/edit",
        name: "meals.edit",
        component: () => import("./components/meals/MealsForm.vue"),
        meta: {
            title: "Modifier le menu"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/orders",
        name: "orders",
        component: () => import("./components/orders/OrdersList.vue"),
        meta: {
            title: "Commandes"
        }
    },
    {
        path: "/admin/orders/:id",
        name: "orders.show",
        component: () => import("./components/orders/OrdersSingle.vue"),
        meta: {
            title: "Détails de la commande"
        }
    },
    {
        path: "/admin/sections",
        name: "sections",
        component: () => import("./components/sections/SectionsForm.vue"),
        meta: {
            title: "CMS"
        }
    },
    {
        path: "/admin/settings",
        name: "settings",
        component: () => import("./components/settings/SettingsIndex.vue"),
        meta: {
            title: "Paramètres"
        },
        beforeEnter: checkRoles
    },
    {
        path: "/admin/profile",
        name: "profile",
        component: () => import("./components/profile/Profile.vue"),
        meta: {
            title: "Profil"
        }
    },
    {
        path: "/admin/403",
        component: () => import("./components/errors/Forbidden.vue"),
        meta: {
            title: "403"
        }
    },
    {
        path: "/admin/*",
        component: () => import("./components/errors/NotFound.vue"),
        meta: {
            title: "404"
        }
    }
];
const router = new VueRouter({
    routes,
    mode: "history"
});

nProgress.configure({ easing: "ease", speed: 300 });
router.beforeEach((to, from, next) => {
    nProgress.start();
    next();
});
router.afterEach((to, from) => {
    if (to.meta.title) {
        const newTitle = `${to.meta.title} - ${store.state.appName}`;
        document.title = newTitle;
    }

    nProgress.done();
});

function checkRoles(to, from, next) {
    if (!window.gate.hasAnyRole(["admin", "manager"])) {
        router.push("/admin/orders").catch(err => {});
        nProgress.done();
    } else {
        if (
            to.name === "users.edit" &&
            to.params.id !== window.gate.user.id &&
            !window.gate.hasRole("admin")
        ) {
            router.push("/admin/dashboard").catch(err => {});
            nProgress.done();
        }
        next();
    }
}

export default router;
