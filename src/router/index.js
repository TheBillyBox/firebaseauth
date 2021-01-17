import { createRouter, createWebHashHistory } from 'vue-router'
import firebase from 'firebase'
import Main from '../views/Main.vue'
import Dashboard from '../views/Dashboard.vue'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'
import ForgotPSW from '../views/auth/Forgotpsw.vue'
import ViewStocks from '../views/loged/ViewStocks.vue'
import AddNewStock from '../views/loged/AddNewStock.vue'
import Porfile from '../views/auth/Porfile.vue'
import Day from '../components/charts/Day.vue'
import AAPL from '../components/charts/Tickets/AAPL.vue'
import Changepsw from '../views/auth/Changepsw.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forgotpsw',
    name: 'forgotpsw',
    component: ForgotPSW,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ViewStocks',
    name: 'ViewStocks',
    component: ViewStocks,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addnew',
    name: 'addnew',
    component: AddNewStock,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/porfile',
    name: 'porfile',
    component: Porfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/changepsw',
    name: 'changepsw',
    component: Changepsw,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/day',
    name: 'day',
    component: Day,
  },
  {
    path: '/AAPL',
    name: 'AAPL',
    component: AAPL,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//Comprobamos si necesita Auth
router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if (user){
      next();
    }else{
      next({
        name: 'login'
      })
    }
  }else {
    next();
  }
})

export default router
