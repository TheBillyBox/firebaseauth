<template>
<div class="m-auto min-h-screen block sm:max-w-30 justify-center py-12 px-4 sm:px-6 lg:px-8 pt-9 mt-9">
  <div class="max-w-md min-w-1/2 space-y-6">
    <section>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Login in your account
      </h2>
    </section>
    <form class="mt-8 space-y-6" action="#" @submit.prevent="login">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" v-model="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" v-model="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <router-link to="forgotpsw" class="font-medium text-primary hover:text-hoverPrimary">
            Forgot your password?
          </router-link>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-hoverPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign in
        </button>
      </div>
    </form>
    <section class="mt-1 block justify-center">
      <h2 class="m-auto text-l text-center">Or continue with</h2>
      <div class="flex mt-4 justify-center">
          <button class="w-11 h-11 ml-8 mr-8" @click="loginGoogle">
            <img src="../../media/google.png" alt="">
          </button>
          <button class="w-11 h-11 ml-8 mr-8">
            <img src="../../media/facebook.png" alt="">
          </button>
          <button class="w-11 h-11 ml-8 mr-8">
            <img src="../../media/twitter.png" alt="">
          </button>
      </div>
    </section>
  </div>
  <div class=" m-auto justify-center mt-9 bg-alert flex" v-if="error">
    {{error}}
  </div>
</div>
</template>
<script>
import firebase from 'firebase'
import  '@/firebase/init.js'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
      login(){
          this.error = ''
          if (this.email && this.password){
              firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                  .then(user => {
                      this.$router.push({name: 'dashboard'})
                      console.log(user)
                  }).catch(err => {
                      this.error = err.message
                      this.password = ''
                  })
                
          }else{
              this.error = 'Todos los campos son requeridos'
          }
        },
      loginGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        this.error = ''
        firebase.auth().signInWithPopup(provider)
        .then(user => {
          this.$router.push({name: 'dashboard'})
          console.log(user)
        }).catch(err => {
          this.error = err.mesage
        })
      }
    }
}
</script>