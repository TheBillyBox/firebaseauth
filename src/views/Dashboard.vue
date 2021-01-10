<template>
    <div class="mt-6 pt-8">
        <h1 class="text-3xl font-bold">Summary</h1>
        <div class="bg-gray-100  h-full m-5 rounded-xl">
            <h2 class="p-5 text-2xl ">Last Week</h2>
            <div class="inline-block">
                <div>
                    <p class="p-3 text-2xl">{{balance}}</p>
                </div>
            </div>
            <div class="inline-block max-w-50 min-w-50 max-h-50 min-h-50">
                <LWeek/>
            </div>    
        </div>
        <div class="space-x-9 pt-3">
            <!-- Frist Box -->
            <div class="bg-gray-100 min-w-75 h-full inline-flex rounded-xl mt-5">
                <div class="w-full">
                <h3 class="text-xl font-medium text-normal p-5">Yesterday</h3>
                <div class="w-full h-full">
                    <Day/>
                </div>
                <h3 class="text-xl font-medium text-normal p-5">Week</h3>
                <h3 class="text-xl font-medium text-normal p-5">Month</h3>
                <div class="w-full h-full">
                    <Month/>
                </div>
                <h3 class="text-xl font-medium text-normal p-5">Year</h3>
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