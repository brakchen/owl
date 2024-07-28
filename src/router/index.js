import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue'
export const constantRoutes = [
    {
        path : '/',
        name : 'home',
        component : Layout,
        redirect : '/home',
        meta : {
          title : '首页'
        },
        children :[
          {
            path : 'home',
            name : 'Home',
            component : () => import( '@/views/home/index.vue' ),
            meta : {
              title : '主页',
              icon : 'dashboard',
              noCache : true,
              affix : true
            }
          },
          {
            path : 'list',
            name : 'List',
            component : () => import( '@/views/list/index.vue' ),
            meta : {
              title : '主页',
              icon : 'dashboard',
              noCache : true,
              affix : true
            }
          }
        ]
      }
]


  
const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
  })


export default router