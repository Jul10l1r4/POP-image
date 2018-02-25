/* Licença GNU GPLv3
-> Criado por: @jul10l1r4
-> Página: jul10l1r4.github.io
*/
// Image galeria foda-see jquery
let animacao = require("./scroll-page.js") // Exportando a animação
const vai = ( a, b ) => {// passando valores com poucos como letras.. menos dados a alocar
	// Ele pegará o elemento a que será levada na função e colocará no src, do box ja existente
	document.getElementById ( 'default' ).src = a
	// Pegará nosso box e transformará em block, no caso visível
	document.getElementById ( 'bloco' ).style.display = 'block'
	// pegará o valor do texto levado como b, e transferir para o caption, o que causará aquela legenda
	let captionText = document.getElementById( 'caption' )
	// Isto far com que dentro de nossa variável ele insira a descrição como eu já tinha dito
	captionText.innerHTML = b
}
// Função que será invocada
// const up = () => {
// // Verificaremos o browser, como temos um css onde faz o scroll funcionar em todos os browsers, exceto ao google chrome
// if (navigator.userAgent.indexOf("Chrome") > -1){
// 	window.scroll({// Passe do malandro u.u
// 	  top: 0, 
// 	  left: 0, 
// 	  behavior: 'smooth' 
// 	});

// }else{
// 	console.log(`Link desparado`)	
// }// porque ele verifica se é o chrome? porque o Jquery é uma lib, que pesa bastante, e nao queremos que nossa aplicaçao
//  // venha ser pesada, exceto se isso afetar em nosso designer ou plano, e para nao colocar o chrome foi feito
// }
// ESTILIZAÇÃO
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () => {// Arrow function `ES6`
	if ( window.pageYOffset > 180 ) {// Se a página estiver descida 180pxeis ela faz o código abaixo
		let top = document.querySelector( `.tutop` )
		top.setAttribute( `style`, `animation-name:totop;animation-duration:0.5s` )
		setTimeout(function(){					
			top.setAttribute( `class`, `totop` )
		}  , 500)
	}else {
		let top = document.querySelector( `.totop` )
		top.setAttribute( `style`, `animation-name:tutop;animation-duration:0.5s` )
		setTimeout(function(){		
			top.setAttribute( `class`, `tutop` )
		}  , 500)
	}
}
// Ativa a nossa função
window.addEventListener( `scroll`, Scroll );

