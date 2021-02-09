<template>
    <div class="mt-6 pt-8">
        <h1 class="text-3xl font-bold">My Stocks</h1>
        <div class="space-x-9 pt-8 mt-0 m-10">
            <!-- Frist Box -->
            <div class="bg-gray-100 w-full inline-flex rounded-xl">
                <div>
                <h3 class="text-center w-full text-xl font-medium text-normal p-5">AAPL</h3>
                <!--<AAPL/>-->
                <h3 class="text-xl font-medium text-normal p-5">Month</h3>
                <h3 class="text-xl font-medium text-normal p-5">Year</h3>
                </div>
            </div>
        </div>
        <div v-for="accion in Acciones" v-bind:key="accion">
            <p>{{accion}}</p>
        </div>
    </div>
</template>
<script>
//import AAPL from'../../components/charts/Tickets/AAPL.vue'
import firebase from 'firebase'
let db = firebase.database();
export default {
    name: 'ViewStocks',
    data() {
        return {
            stocksRef: '',
            user: '',
            Acciones:[],
        }
    },
    async created () {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user        
            } else {
                this.user = null
            }
        });
    await db.ref('Acciones/' + this.user.uid + '/').once('value').then((snapshot) => {
        console.log(snapshot.val())
    })
        
  },
  methods: {
    }
}
</script>