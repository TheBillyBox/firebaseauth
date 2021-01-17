<template>
  <div>
	<div class="max-w-75">
    <canvas id="day-chart"></canvas>
	</div>
  </div>
</template>


<script>
import ChartDialyDashboard from '../../charts/dashboard/chart-day.js'
import Chart from 'chart.js';
export default {
	name: 'day',
	data: function () {
		return {
            ChartDialyDashboard: ChartDialyDashboard,
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
		this.createChart('day-chart', this.ChartDialyDashboard);
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