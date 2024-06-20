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
