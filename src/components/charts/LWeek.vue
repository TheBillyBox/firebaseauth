<template>
  <div class="inset-y-0 right-0">
	<div class="max-h-50">
    <canvas id="lweek-chart"></canvas>
	</div>
  </div>
</template>


<script>
import ChartLWeek from '../../charts/dashboard/chart-LWeek'
import Chart from 'chart.js';
	export default {
		name: 'LWeek',
		data: function () {
			return {
                ChartLWeek: ChartLWeek,
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
			this.createChart('lweek-chart', this.ChartLWeek);
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