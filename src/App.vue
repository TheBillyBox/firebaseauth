<template>
  <div>
    <Navigation/>
  </div>
  <router-view/>
</template>
<script>
import "tailwindcss/tailwind.css"
import Navigation from './components/navigation/Navigation.vue'
export default {
  components:{
    Navigation
  }
}
</script>