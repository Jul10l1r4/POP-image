# POP-image 🍺
 
 Tenha fluidez ao abrir uma imagem, vejo por aí muitos sites, onde apertam na imagem e sim a imagem abre grande, mas abre uma nova
 aba e realmente acho um pé no saco, porque tenho sempre que for abrir a pertar no botão de voltar do navegador e voltar a página onde eu estava, mas este box faz apenas com JS puro um box que abre a imagem suspensa na mesma página, a estilização fica por sua conta, mas se for preguiçoso já temos códigos montados, é só integrar.
 
## Veja o nosso manual 📒

Temos um respositório no [NotABug.org](notabug.org) onde falará sobre como integrar em sua aplicação, de uma forma que se der uma atualização não venha danificar sua aplicação.

# Ele criará um botão de voltar ao topo 🔝

Usando este suporte onde se baseia em animação com `CSS3` tem suporte em todos os navegadores exceto no Google Chrome, então fizemos um verificador, onde quando detecta o browser como o Google Chrome ele importa o Jquery, e cria a animação de deslize até o topo.

## Use o efeito scroll, sem carregar trilhões de códigos 🔥

O efeito de deslizamento é algo almejado por muitos e também bastante usado, tráz aquela sensação de qualidade e de minimalismo, porém, nem sempre passa de sensação, muitas vezes os códigos são eternamente monstrons, são bibliotecas de mais 3000 linhas de códigos que importam muitas coisas, leia um artigo sobre isso em [@rootthings](https://rootthings.org/artigos/css3-paralax/) que explica a facilidade de usar esta ferramenta **NATIVA** do CSS 😏, e para o Google Chrome, fizemos ajustes que é realmente necessário carregar esses códigos, então para carregar apenas no Chrome fizemos este script.
