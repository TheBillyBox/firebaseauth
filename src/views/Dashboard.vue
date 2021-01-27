<template>
    <div class="mt-6 pt-2">
        <h1 class="text-3xl font-bold">Summary</h1>
        <section class="bg-gray-100 sm:grid sm:grid-cols-2  h-auto m-5 rounded-xl relative">
                <div class="mt-10">
                    <p class="p-3 font-bold pt-10 text-2xl sm:text-4xl text-center align-middle m-auto"> Stock earning</p>
                    <p class="pb-4 pt-4 text-2xl sm:text-3xl text-center align-middle m-auto">{{balance}}€</p>
                </div>
            <div class="sm:p-10">
                <LWeek/>
            </div> 
        </section>
        <section class="space-x-9 pt-1 m-auto">
            <!-- Frist Box -->
            <div class="bg-gray-100 min-w-90 h-full inline-flex rounded-xl m-5 ">
                <div class="w-full">
                   <h2 class="text-center pt-5 text-2xl font-bold">My sotcks market</h2>
                   <ul class="p-9 pt-5 text-xl">
                    <li class="p-2 grid grid-cols-2">
                        <p class="text-left font-bold">Stock</p>
                        <p class="text-right font-bold">Earning</p>
                    </li>
                    <li class="p-2 grid grid-cols-2">
                        <p class="text-left">AAPL</p>
                        <p class="text-right">25€</p>
                    </li>
                    <li class="p-2 grid grid-cols-2">
                        <p class="text-left">KO</p>
                        <p class="text-right">5€</p>
                    </li>
                    <li class="p-2 grid grid-cols-2">
                        <p class="text-left">NIU</p>
                        <p class="text-right">-2€</p>
                    </li>
                    <li class="p-2 grid grid-cols-2">
                        <p class="text-left">TSLA</p>
                        <p class="text-right">35€</p>
                    </li>
                    <li class="p-2 grid grid-cols-2">
                        <p class="text-left">NIO</p>
                        <p class="text-right">25€</p>
                    </li>
                   </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import LWeek from '../components/charts/LWeek.vue'
export default {
    components: {
        LWeek,
	},
    data() {
        return {
            balance: '11',
        }
    },
}
</script>