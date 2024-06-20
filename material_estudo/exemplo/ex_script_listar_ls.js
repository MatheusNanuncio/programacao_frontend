//Função (Carregar itens do LocalStorage)
function carregarFilmes() {
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const listaFilmes = document.getElementById('listaFilmes');
    listaFilmes.innerHTML = '';

    filmes.forEach((filme, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>Título: ${filme.titulo}, Diretor: ${filme.diretor}, Ano: ${filme.ano}, Gênero: ${filme.genero}</span>
            <div>
                <button class="btn btn-warning btn-sm mr-2" onclick="editarFilme(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="removerFilme(${index})">Remover</button>
            </div>
        `;
        listaFilmes.appendChild(li);
    });
}