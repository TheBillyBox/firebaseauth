<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="symbol" class="sr-only">Symbol</label>
          <input id="symbol" v-model="ticket" name="symbol" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ej. AAPL">
        </div>
        <div>
          <label for="password" class="sr-only">Amount</label>
          <input id="password" v-model="cantidad" name="password" type="number" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ej. 8">
        </div>
        <div>
          <label for="password" class="sr-only">purchase price</label>
          <input id="price" v-model="precioCompra" name="price" type="number" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ej. 150">
        </div>
      </div>
      <div>
        <button type="submit" v-on:click="agregar()" class="group relative min-w-100 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
  
  firebase: {
     Acciones: Acciones
  },
  data(){
    return {
      user: '',
      nuevaAccion: {
        userID: '',
        cantidad: '',
        precioCompra: '',
        ticket: '',
      },
      Acciones: [],
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
  getStocks: function(){
    var that = this;
    Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.is_signed = true;
        that.$bindAsArray('compras', db.ref('Acciones/' + user.uid));
      } else {
        that.is_signed = false;
        this.Acciones = [];
      }
    })
  },
  methods:{
    agregar: function() {
      this.userID = this.user.uid
      Acciones.push(this.nuevaAccion, function(error){
        if (error){
          console.log('Error al intentar agregar el registro.', 'Aviso');
        }else{          
          console.log('Registro agregado correctamente.', 'Aviso');
        }
      });
      this.nuevaAccion.cantidad = '';
      this.nuevaAccion.precioCompra = ''; 
      this.nuevaAccion.ticket = ''
    },
  }
}
</script>