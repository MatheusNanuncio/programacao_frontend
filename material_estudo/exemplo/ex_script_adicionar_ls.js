// Função (Adicionar itens ao LocalStorage)
function adicionarFilme() {
    const titulo = document.getElementById('titulo').value;
    const diretor = document.getElementById('diretor').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;

    // Condição para validar os dados de entrada
    if (titulo === '' || diretor === '' || ano === '' || genero === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoFilme = { titulo, diretor, ano, genero };
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.push(novoFilme);
    localStorage.setItem('filmes', JSON.stringify(filmes));

    alert("Filme adicionado com sucesso!");

    // Limpa os campos das entradas
    document.getElementById('titulo').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('genero').value = '';

    // Chama função para listar os itens
    carregarFilmes();
}