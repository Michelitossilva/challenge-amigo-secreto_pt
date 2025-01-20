//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    
    if (inputAmigo.value.trim() === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    if (listaDeAmigos.includes(inputAmigo.value.trim())) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adiciona o amigo à lista
    listaDeAmigos.push(inputAmigo.value.trim());
    
    // Cria o elemento da lista
    let li = document.createElement('li');
    li.textContent = inputAmigo.value;
    
    // Cria o botão de excluir
    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = '×';
    botaoExcluir.className = 'botao-excluir';
    botaoExcluir.onclick = () => {
        listaAmigos.removeChild(li);
        listaDeAmigos = listaDeAmigos.filter(amigo => amigo !== inputAmigo.value);
    };
    
    li.appendChild(botaoExcluir);
    listaAmigos.appendChild(li);
    
    // Limpa o input
    inputAmigo.value = '';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (listaDeAmigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para realizar o sorteio!');
        return;
    }

    // Embaralha a lista de amigos
    let amigosEmbaralhados = [...listaDeAmigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = 
        [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    // Realiza o sorteio
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const li = document.createElement('li');
        const proximoIndex = (i + 1) % amigosEmbaralhados.length;
        li.textContent = `${amigosEmbaralhados[i]} → ${amigosEmbaralhados[proximoIndex]}`;
        resultado.appendChild(li);
    }
}

// Adiciona evento de tecla Enter no input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});