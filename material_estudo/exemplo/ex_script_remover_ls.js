// Função (Remover itens do LocalStorage)
function removerFilme(index) {
    const res = confirm("tem certeza que deseja apagar o filme");
    if (res) {
        const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
        filmes.splice(index, 1);
        localStorage.setItem('filmes', JSON.stringify(filmes));
    }else{
        alert("ação cancelada");
    }
    carregarFilmes();
}