import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import './style.css'
import {VueQueryPlugin} from '@tanstack/vue-query'
import 'vuetify/styles'
import vuetify from "plugins/vuetify.ts";
import Layout from "components/Layout.vue";
import Home from 'pages/Home.vue';
import Login from "pages/Login.vue";
import Todo from "pages/Todo.vue";
import Library from "pages/Library.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'parent', component: Layout,
            children: [
                {
                    path: '', name: 'Home', component: Home
                },
                {
                    path: '/todo', name: 'Todos', component: Todo
                },
                {
                    path: '/library', name: 'Library', component: Library
                }
            ]

        },
        {
            path: '/login', name: 'Login', component: Login
        },

    ]
})

createApp(App)
    .use(router)
    .use(vuetify)
    .use(VueQueryPlugin)
    .mount('#app')
