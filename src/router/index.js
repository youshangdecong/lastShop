import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Category = () => import('../views/category/Category');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');

//安装插件
Vue.use(VueRouter)

//创建router
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      // redirect: '/home',
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/detail/:iid',
      component: Detail,
    },
  ],
  mode: 'history'
})

//导出
export default router