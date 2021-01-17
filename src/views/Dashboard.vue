<template>
    <div class="mt-6 pt-8">
        <h1 class="text-3xl font-bold">Summary</h1>
        <div class="bg-gray-100  h-auto m-5 rounded-xl relative">
            
            <div class="inline-block">
                <div class="mr-9 ml-9">
                    <p class="p-3 pt-5 text-3xl"> Stock earning = {{balance}}€</p>
                    <h2 class="p-5 text-2xl ">Top 5 stocks</h2>
                    <p class="p-4 pt-1 pb-1 text-xl">AAPL = 5€</p>
                    <p class="p-4 pt-1 pb-1 text-xl">KO = 5€</p>
                    <p class="p-4 pt-1 pb-1 text-xl">TSLA = 5€</p>
                    <p class="p-4 pt-1 pb-1 text-xl">GOOGL = 5€</p>
                    <p class="p-4 pt-1 pb-5 text-xl">NIU = 5€</p>
                </div>
            </div> 
            <div class=" pt-9 inset-y-0 right-0 absolute inline-block max-w-50 min-w-50 max-h-50 min-h-50">
                <LWeek/>
            </div> 
        </div>
        <div class="space-x-9 pt-3">
            <!-- Frist Box -->
            <div class="bg-gray-100 min-w-75 h-full inline-flex rounded-xl mt-5">
                <div class="w-full">
                    <h3 class="text-xl font-medium text-normal p-5">Last Day</h3>
                    <div class="w-full h-full">
                        <Day/>
                    </div>
                    <h3 class="text-xl font-medium text-normal p-5"> Last Week</h3>
                    <h3 class="text-xl font-medium text-normal p-5">Last Month</h3>
                    <div class="w-full h-full">
                        <Month/>
                    </div>
                    <h3 class="text-xl font-medium text-normal p-5">Last Year</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Day from '../components/charts/Day.vue'
import LWeek from '../components/charts/LWeek.vue'
import Month from '../components/charts/Month.vue'
export default {
    components: {
            Day,
            LWeek,
            Month
		},
    data() {
        return {
            balance: '11',
        }
    },
}
</script>