// Função (Remover itens do LocalStorage)
function removerFilme(index) {
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.splice(index, 1);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    carregarFilmes();
}