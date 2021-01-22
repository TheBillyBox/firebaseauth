<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md min-w-25 space-y-8">
    <ul>
      <li v-for="data in Acciones" v-bind:key="data">
        {{data}}
      </li>
    </ul>
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Add new Stock
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="WriteNewStock" @submit.prevent="WriteNewStock">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="symbol" class="sr-only">Symbol</label>
          <input id="symbol" v-model="ticket" name="symbol" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Ej. AAPL">
        </div>
        <div>
          <label for="password" class="sr-only">Amount</label>
          <input id="password" v-model="cantidad" name="password" type="number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Ej. 8">
        </div>
        <div>
          <label for="password" class="sr-only">purchase price</label>
          <input id="price" v-model="precioDeCompra" name="price" type="number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Ej. 150">
        </div>
      </div>
      <div>
        <button type="submit"  class="group relative min-w-100 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-hoverPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add
        </button>
      </div>
    </form>
  </div>
</div>
</template>
<script>
import Firebase from 'firebase'
let db = Firebase.database();
let Acciones = db.ref('Acciones');

export default {
  name: 'App',
  Firebase: {
     Acciones: Acciones
  },
  data(){
    return {
      user: '',
      cantidad: '',
      precioDeCompra: '',
      ticket: '',
      Acciones: [],
      numero: 0
    }
  },
  created () {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user        
      } else {
        this.user = null
      }
    })
  },
  methods: {
    WriteNewStock(){
      if (this.cantidad && this.precioDeCompra && this.ticket){
         const res = Firebase.database().ref('Acciones/' + this.user.uid + this.numero).set({
          Cantidad: this.cantidad,
          PrecioCompra: this.precioDeCompra,
          Ticket: this.ticket,
          userID: this.user.uid,
        }).then((u) => {
          this.cantidad = ''
          this.precioDeCompra = ''
          this.ticket = ''
          console.log(u)
          ++this.numero
        }).catch((err => console.log(err)))
        console.log(res.id)
        }
      } 
    }
  }

</script>