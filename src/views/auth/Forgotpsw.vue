<template>
    <div class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-9 mt-9">
  <div class="max-w-md min-w-1/2 space-y-8">
    <div>
      <img class="mx-auto h-20 w-auto" src="../../media/imagePSW.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Forgot your password?
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" @submit.prevent="login">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" v-model="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
      </div>
      <div>
        <button type="submit" @click.prevent="resetpsw" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Send an email
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
import firebase from 'firebase'
import  '@/firebase/init.js'
export default {
    name: 'Resetpsw',
    data(){
        return{
                email: '',
                error: '',
        }
    },
    methods: {
        resetpsw () {
            this.error = ''
            if (this.email){
                firebase.auth().sendPasswordResetEmail(this.email)
                .then (function(){
                    //Email Send
                    //this.$router.push({name: 'login'})
                    console.log('email enviado')
                    
                }).catch((err) => {
                    this.error = err.message
                })
            }else{
                console.log('no hay email')
            }
        }
    }
}
</script>