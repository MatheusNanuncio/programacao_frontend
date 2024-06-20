// Função (Editar itens do LocalStorage)
function editarFilme(index) {
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const filme = filmes[index];

    const titulo = prompt("Editar Título:", filme.titulo);
    const diretor = prompt("Editar Diretor:", filme.diretor);
    const ano = prompt("Editar Ano:", filme.ano);
    const genero = prompt("Editar Gênero:", filme.genero);

    if (titulo !== null && diretor !== null && ano !== null && genero !== null) {
        filmes[index] = { titulo, diretor, ano, genero };
        localStorage.setItem('filmes', JSON.stringify(filmes));
        carregarFilmes();
    }
}

// Chama a função para listar os itens
carregarFilmes();