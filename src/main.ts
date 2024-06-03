import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import './style.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Home from 'pages/Home.vue';
import About from "pages/About.vue";
import Login from "pages/Login.vue";
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: Home,
        },
        {
            path: '/login', name: 'Login', component: Login
        },
        {
            path: '/about', name: 'About', component: About
        }
    ]
})
const vuetify = createVuetify({
    components,
    directives,
})
createApp(App)
    .use(router)
    .use(vuetify)
    .use(VueQueryPlugin)
    .mount('#app')
