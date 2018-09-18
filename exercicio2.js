// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let count = 0;

function proximaImagem(){
	count++;
	if(count > todasAsImagens.length-1){
		count = 0;
	}
	document.getElementById('slide').src = servidorDasImagens+todasAsImagens[count];
}

function imagemAnterior(){
	count--;
	if(count < 0){
		count = todasAsImagens.length-1;
	}
	document.getElementById('slide').src = servidorDasImagens+todasAsImagens[count];
}

let ant = document.getElementById('anterior');
let prox = document.getElementById('proximo');
	
ant.addEventListener('click',imagemAnterior);
prox.addEventListener('click',proximaImagem);


