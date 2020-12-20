import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from "../components/loginPage.vue"
import dashboard from "../components/dashboard.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: loginPage
    },
    {
        path: "/secure",
        name: "secure",
        component: dashboard
    }
];

const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: "active"
  });
  
export default router;
  