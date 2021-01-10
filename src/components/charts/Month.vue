<template>
  <div>
	<div class="max-w-75">
    <canvas id="month-chart"></canvas>
	</div>
  </div>
</template>


<script>
import ChartMonth from '../../charts/dashboard/chart-month.js'
import Chart from 'chart.js';
	export default {
		name: 'month',
		components: {
			
		},
		data: function () {
			return {
                ChartMonth: ChartMonth,
			}
		},
		methods: {
			createChart (chartId, chartData) {
				const ctx = document.getElementById(chartId);
				const myChart = new Chart(ctx, {
					type: chartData.type,
					data: chartData.data,
					options: chartData.options,
				})
				console.log(myChart)
			}
		},
		mounted() {
			this.createChart('month-chart', this.ChartMonth);
		},
}
</script>

<style>
canvas{
	max-width: 75%;
	display: flex;
	margin: auto;
    width: 90%;
    height: 90%;
}
h1{
	margin: auto;
	text-align: center;
}
</style>