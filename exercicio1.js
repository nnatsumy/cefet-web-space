// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let contador = 0;

function expandeParagrafo(e){
	contador++;
	let el = e.currentTarget;
	let pEl = el.parentElement;
	pEl.classList.toggle('expandido');

	if(contador%2==0){
		el.innerHTML='+';
	}	
	else{
		el.innerHTML='-';
	}
		
}


let list = document.getElementsByClassName('botao-expandir-retrair');

for(let element of list){
	
	element.addEventListener('click',expandeParagrafo);
}





