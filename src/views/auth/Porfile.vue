<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="container py-16 mx-auto">
        <h2 class="text-2xl text-center">Your Profile</h2>
        <div class="m-8 grid grid-cols-2 p-4 bg-gray-300 rounded-lg">
            <div class="place-self-center">
                <p class="mt-2 mb-1 text-center text-xl">Avatar</p>
            <label>
                <img :src=user.photoURL alt="" class="w-40 h-40 rounded-full">
                <input type="file" class="hidden">
            </label>
            </div>
            <div class="ml-8">
                <div class="flex m-4">
                    <p class="mt-2 mb-1 mr-2">Name:</p>
                    <input class="border" type="text" v-model="user.displayName">
                </div>
                <div class="flex m-4">
                    <p class="mt-2 mb-1 mr-2">Email:</p>
                    <input class="border" type="text" v-model="user.email">
                </div>
                
                <router-link to="changepsw">
                    Change password
                </router-link>
            </div>
        </div>
    </div>

</template>
<script>
import firebase from 'firebase'
export default {
    data () {
        return {
            user: '',
        }
    },
    methods () {
        firebase.auth().updateCurrentUser(
            
        )
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