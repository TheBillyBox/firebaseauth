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
        <div>
            {{this.stocksRef}}
        </div>
    </div>
</template>
<script>
//import AAPL from'../../components/charts/Tickets/AAPL.vue'
import firebase from 'firebase'
//let db = firebase.database();
export default {
    name: 'ViewStocks',
    components: {
//        AAPL,
    },
    data() {
        return {
            stocksRef: '',
            user: '',
        }
    },
    created () {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user        
            } else {
                this.user = null
            }
        })
        
        
  },
  methods: {
      getStocks(){
        const stocks = firebase.database().ref('Acciones/' + this.user.uid).orderByChild('starCount');
        this.stocksRef = stocks
      }
    }
}
</script>