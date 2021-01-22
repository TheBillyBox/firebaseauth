<template>
<div>
    <div>
        <ul>
       <li v-for="data in api" v-bind:key="data">
         date {{data.date}} open {{data.open}} high {{data.high}} low {{data.low}} close {{data.close}}
       </li>
     </ul>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'AAPL',
	data: function () {
		return {
            api: null,
		}
	},
	methods: {
		/*createChart (chartId, chartData) {
			const ctx = document.getElementById(chartId);
			const myChart = new Chart(ctx, {
				type: chartData.type,
				data: chartData.data,
				options: chartData.options,
			})
			console.log(myChart)
		}*/
	},
	mounted() {
        axios.get('http://api.marketstack.com/v1/eod?access_key=cf875ee8157c646912a2ede7693da9e5&symbols=AAPL')
      .then(response => (this.api = response.data.data))
      .catch(err => (console.log(err)))
    },
}
</script>