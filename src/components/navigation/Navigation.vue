<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-nav">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button @click="isOpenM = !isOpenM" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
        </div>
        <div v-if="user" class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link to="dashboard" class="text-white hover:bg-hoverNav hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</router-link>
            <router-link to="ViewStocks"  class="text-white hover:bg-hoverNav hover:text-white px-3 py-2 rounded-md text-sm font-medium">View my stocks</router-link>
            <router-link to="addnew"  class="text-white hover:bg-hoverNav hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Stock</router-link>
          </div>
        </div>
      </div>
      <!-- LOGIN && REGISTER && PORFILE MENU DROPDOWN-->
      <div>
        <template v-if="user">
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button type="button" @click="isOpen = !isOpen"  class="p-1 text-gray-200 bg-nav flex text-sm rounded-full hover:bg-hoverNav focus:outline-none" id="user-menu" aria-haspopup="true">
                {{user.displayName||user.email}}
              </button>
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <router-link to="porfile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</router-link>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              <a @click.prevent="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
        </template>
        <template v-else>
          <div>
            <div class=" sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link to="login" class="hidden sm:bg-primary text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium sm:block">Login</router-link>
            <router-link to="register" class=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</router-link>
          </div>
        </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  <div v-if="isOpenM" class="sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <router-link to="dashboard" class="text-white hover:bg-hoverNav hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dasboard</router-link>
      <router-link to="ViewStocks" class="text-white hover:bg-hoverNav hover:text-white block px-3 py-2 rounded-md text-base font-medium">View my stocks</router-link>
      <router-link to="addnew" class="text-white hover:bg-hoverNav hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add new stock</router-link>
    </div>
  </div>
</nav>

</template>
<script>
import "tailwindcss/tailwind.css"
import firebase from 'firebase'
export default {
  name: 'Navigation',
  data () {
    return {
      isOpen: false,
      isOpenM: false,
      user: null
    }
  },  
  methods: {
    
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'Main'})
      })
    },    
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user        
      } else {
        this.user = null
      }
    })
  }

}
</script>