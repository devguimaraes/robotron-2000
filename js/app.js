/* const robo = document.querySelector('.robo');

robo.addEventListener('click', () => console.log('Oi, eu sou o robotrom')); */
const pecasRobo = {
	bracos: {
		forca: 29,
		poder: 35,
		energia: -21,
		velocidade: -5,
	},

	blindagem: {
		forca: 41,
		poder: 20,
		energia: 0,
		velocidade: -20,
	},
	nucleos: {
		forca: 0,
		poder: 7,
		energia: 48,
		velocidade: -24,
	},
	pernas: {
		forca: 27,
		poder: 21,
		energia: -32,
		velocidade: 42,
	},
	foguetes: {
		forca: 0,
		poder: 28,
		energia: 0,
		velocidade: -2,
	},
};
const estatisticas = document.querySelectorAll('[data-estatistica]');
console.log(estatisticas);

function manipulaDados(evento, controlador) {
	const peca = controlador.querySelector('[data-contador]');
	if (evento.target.dataset.controle === '-') {
		peca.value = parseInt(peca.value, 10) - 1;
	} else {
		peca.value = parseInt(peca.value, 10) + 1;
	}
}

function atualizaEstatisticas(params) {
	/* console.log(pecasRobo[params]); */

	estatisticas.forEach((el) => {
		console.log([el.dataset.estatistica]);
		el.textContent =
			parseInt(el.textContent, 10) + pecasRobo[params][el.dataset.estatistica];
	});
}

const controle = document.querySelectorAll('[data-controle]');

controle.forEach((el) => {
	el.addEventListener('click', (ev) => {
		manipulaDados(ev, ev.target.parentNode);
		atualizaEstatisticas(ev.target.dataset.pecas);
	});
});
