// Puta que pariu! esse código só isso vai rodarrr coisas que precisaria de toda uma LIBBBB
const go = (elemento) => {// Arrow function levando um parâmetro que será um seletor como o de css
  let vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
  window.scroll({ // Função nativa dos browsers
	  top: vivo.getBoundingClientRect().top, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
} // Só seeeeu,_fiiii
