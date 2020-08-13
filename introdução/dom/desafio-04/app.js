var a = new Vue({
	el: '#desafio',
	data: {
		classe: "",
		classe1: "classe1",
		classe3: "",
		classe4: "",
		perigo: true,
		classe2: false,
		estilo5: {
			width: '100px',
			height: '100px'
		},
		color: "red",
		width: '0'
	},
	computed: {
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe = this.classe == "destaque" ? "encolher" : "destaque";
			}, 1000);
		},
		iniciarProgresso() {
			var porcentagemProgress = 0;
			const temporizador = setInterval(() => {
				porcentagemProgress += 5;
				this.width = `${porcentagemProgress}%`
				if (porcentagemProgress == 100) {
					clearInterval(temporizador);
				}
			}, 500);

		},
		setPerigo(event) {
			if (event.target.value == "true") {
				this.classe2 = true;
			} else if (event.target.value == "false") {
				this.classe2 = false;
			}
		}
	}
})
