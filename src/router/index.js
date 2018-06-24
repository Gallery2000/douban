import Vue from 'vue'
import Router from 'vue-router'

import PageView from 'views/pages-View'
import HomeView from 'views/home-view'
import MovieView from 'views/movie-view'
import BookView from 'views/book-view'
import StatusView from 'views/status-view'
import GroupView from 'views/group-view'
import DetailView from 'views/detail-view'
import SearchView from 'views/search-view'
import LoginView from 'views/login-view'
import RegisterView from 'views/register-view'
import SubjectView from 'views/subject-view'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/pages'
    },
    {
      path:'/pages',
      component:PageView,
      children:[
        {
          path:'',
          redirect:'/pages/home'
        },
        {
          path:'home',
          name:'HomeView',
          component:HomeView
        },
        {
          path:'movie',
          name:'MovieView',
          component:MovieView
        },
        {
          path:'book',
          name:'BookView',
          component:BookView
        },
        {
          path:'status',
          name:'StatusView',
          component:StatusView
        },
        {
          path:'group',
          name:'GroupView',
          component:GroupView
        },
        {
          path:'detail',
          name:'DetailView',
          component:DetailView
        }
      ]
    },
    {
      path:'/pages/:classify/subject/:id',
      name:'SubjectView',
      components:{
        default: PageView,
        subject:SubjectView
      }
    },
    {
      path:'/search',
      name:'SearchView',
      components:{
        default:PageView,
        search:SearchView
      }
    },
    {
      path:'/login',
      name:'LoginView',
      component:LoginView
    },
    {
      path:'/register',
      name:'RegisterView',
      component:RegisterView
    },{
      path:'*',
      redirect:'/pages'
    }
  ]
})
