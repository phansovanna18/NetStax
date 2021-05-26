import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import PublicLayout from '../layouts/PublicLayout'
import PublicHomePage from '../views/PublicPages/HomePage'
import PublicAboutPage from '../views/PublicPages/AboutPage'
import PublicCategoryPage from '../views/PublicPages/CategoryPage'
import PublicPostsPage from '../views/PublicPages/PostsPage'
import PublicSearchPage from '../views/PublicPages/SearchPage'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: PublicHomePage
      }, {
        path: 'about',
        component: PublicAboutPage
      },
      {
        path: 'posts',
        component: PublicPostsPage
      },
      {
        path: 'category',
        component: PublicCategoryPage
      },
      {
        path: 'search',
        component: PublicSearchPage
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
