const go = (elemento) => {
  let vivo = document.querySelector(elemento)
  window.scroll({ 
	  top: vivo.getBoundingClientRect().top, 
	  left: 0,
	  behavior: 'smooth'
  });
} 
document.querySelectorAll( `a` ).map(
  (x) => {
    x.addEventListener( `click`, p )
  }
)
// Esse código ainda nao funciona EU ACHO
