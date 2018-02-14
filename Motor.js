// Image galeria foda-see jquery
const onClick = ( a, b ) => {// passando valores com poucos como letras.. menos dados a alocar
	// Ele pegará o elemento a que será levada na função e colocará no src, do box ja existente
	document.getElementById ( 'default' ).src = a
	// Pegará nosso box e transformará em block, no caso visível
	document.getElementById ( 'bloco' ).style.display = 'block'
	// pegará o valor do texto levado como b, e transferir para o caption, o que causará aquela legenda
	let captionText = document.getElementById( 'caption' )
	captionText.innerHTML = b
}
