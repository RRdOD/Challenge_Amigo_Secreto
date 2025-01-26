let listaDosNomes = [];

function adicionarAmigo() {
    let amigoInput = document.querySelector('input');
    let amigoNome = amigoInput.value.trim(); // Remove espaços em branco

    if (amigoNome === '') {
        alert('Por favor, insira um nome.');
        return; // Sai da função se o nome estiver vazio
    }

    listaDosNomes.push(amigoNome);
    atualizarListaAmigos(); // Chama a função para atualizar a lista de amigos
    amigoInput.value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDosNomes.forEach(function(amigo) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}

function sortearAmigo() {
    if (listaDosNomes.length === 0) {
        alert('Nenhum amigo cadastrado para sortear.');
        return;
    }

    let sorteioIndex = Math.floor(Math.random() * listaDosNomes.length);
    let amigoSorteado = listaDosNomes[sorteioIndex];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}