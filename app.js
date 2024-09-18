function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa ){
        section.innerHTML = "Você precisa me dizer quem é o personagem que deseja."
        return
    }

    // transforma todas as letras em minúsculas para comparação
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    //Para cada dado dentro da lista de dados
    for (let personagem of personagens) {
        titulo = personagem.titulo.toLocaleLowerCase()
        descricao = personagem.descricao.toLocaleLowerCase()
        tags = personagem.tags.toLocaleLowerCase()
        // se o titulo do personagem , convertido para minúsculas,
        //for exatamente igual à palavra-chave de busca, convertida para minúscula
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes*campoPesquisa) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                     <a href="#" target="_blank">${personagem.titulo}</a>
                 </h2>
                 <p class="descricao-meta">${personagem.descricao}</p>
                 <a href = ${personagem.link} target="_blank">Saiba Mais</a>
            </div>
        `;
        }
    }

    if(!resultados) {
        resultados = "Poxa, não encontramos esse personagem."
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}
