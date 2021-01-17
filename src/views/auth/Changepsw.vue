<template>
<div class="m-auto min-h-screen block max-w-30 justify-center py-12 px-4 sm:px-6 lg:px-8 pt-9 mt-9">
  <div class="max-w-md min-w-1/2 space-y-6">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Change your password
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" @submit.prevent="changePsw">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" v-model="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>
      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-hoverPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Change password
        </button>
      </div>
    </form>
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
            password: '',
            error: '',
            user: '',
        }
    },
    methods: {
      changePsw(){
          this.error = ''
          if (this.password){
              firebase.auth().updateCurrentUser(this.password)
                  .then(user => {
                      this.$router.push({name: 'porfile'})
                      console.log(user)
                  }).catch(err => {
                      this.error = err.message
                      this.password = ''
                  })
                
          }else{
              this.error = 'Todos los campos son requeridos'
          }
        },
    },
    created () {
        firebase.auth().currentUser(user => {
            if (user) {
                this.user = user        
            } else {
                this.user = null
            }
        })
    }
}
</script>