<template>
<div class="min-h-screen flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Crear una cuenta
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="register" @submit.prevent="register">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Name</label>
          <input id="email-address" name="name" v-model="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" v-model="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" v-model="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>
      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Register
        </button>
      </div>
      <div class=" mt-9" v-if="error">
        {{error}}
      </div>
    </form>
  </div>
</div>
</template>
<script>
import '@/firebase/init'
import firebase from 'firebase'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  },
  name: 'Register',
  methods: {
    register() {
      this.error = ''
      if (this.name && this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            //actualizar el usuario
             this.$router.push({name: 'dashboard'})
            if (user) {
              user.user.updateProfile({
                displayName: this.name                
              }).then((u) => {
                this.name = ''
                this.email = ''
                this.password = ''
                 
                console.log(u)                               
              }).catch((err) => {
                this.error = err.message
              })
                           
            }            
          }).catch(err => {
            this.error = err.message
          })
          
      }else {
        this.error = 'Todos los campos son requeridos'
      }
      
    }
  }
}
</script>
