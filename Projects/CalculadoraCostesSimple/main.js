const app = new Vue({
	el: '#app',
	data: {
		months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
			 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		date1: null,
		date2: null,
		cost: 0,
		results: null
	},
	methods: {
		calculate() {
			if(this.$data.date1 && this.$data.date2 && this.$data.cost) {
				if(this.$data.date1 > this.$data.date2) {
					alert("La fecha de inicio no puede ser superior a la de fin");
				} else {
					const date1 = new Date(this.$data.date1)
					const date2 = new Date(this.$data.date2)
					const cost = Number(this.$data.cost);

					let daysDiff = parseInt((date2.getTime() - date1.getTime()) / 1000 / 3600 / 24) + 1;
					let monthDiff = this.monthDiff(date1, date2);
					// Se recorren los meses
					this.$data.results = [];
					let totalLaboralDays = 0;
					for(let i = 0; i <= monthDiff; ++i) {
						let thisMonthStart = new Date(date1.getFullYear(), date1.getMonth() + i, 
							i === 0 ? date1.getDate() : 1);
						let thisMonthFinish = new Date(thisMonthStart.getFullYear(), 
									       thisMonthStart.getMonth() + 1,
									       0);
						// Último día del último mes
						if(i === monthDiff) {
							thisMonthFinish.setDate(date2.getDate());
						}
						// Obtener días de diario
						let laboralDays = 0;
						for(let d = thisMonthStart.getDate(); d <= thisMonthFinish.getDate(); ++d) {
							let thisDay = new Date(thisMonthStart.getFullYear(),		
									       thisMonthStart.getMonth(),
									       d);
							if(thisDay.getDay() !== 6 && thisDay.getDay() !== 0) {
								++laboralDays; // Ni sábado ni domingo
							}
						}
						totalLaboralDays += laboralDays;
						this.$data.results.push({
							day: thisMonthFinish.getDate(),
							month: thisMonthFinish.getMonth(),
							cost: 0, // No calculado aún respecto al total,
							laboralDays: laboralDays
						});
					}
					// Se calcula el coste diario
					const costPerDay = cost / totalLaboralDays;
					// Ahora sí tenemos el total de días laborales
					for(let i = 0; i <= monthDiff; ++i) {
						this.$data.results[i].cost = 
							(this.$data.results[i].laboralDays * costPerDay).toFixed(2);
					}

				}
			} else {
				alert("Todos los campos son requeridos");
			}
		},
		monthDiff(d1, d2) {
			var months;
			months = (d2.getFullYear() - d1.getFullYear()) * 12;
			months -= d1.getMonth();
			months += d2.getMonth();
			return months <= 0 ? 0 : months;
		}
	}
});
