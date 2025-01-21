let listaDeAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let inputEmail = document.getElementById('email');
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Validações
    if (inputAmigo.value.trim() === '' || inputEmail.value.trim() === '') {
        alert('Por favor, preencha nome e email!');
        return;
    }

    if (!validarEmail(inputEmail.value.trim())) {
        alert('Por favor, insira um email válido!');
        return;
    }

    if (listaDeAmigos.some(amigo => amigo.nome.toLowerCase() === inputAmigo.value.trim().toLowerCase())) {
        alert('Este nome já foi adicionado!');
        return;
    }

    if (listaDeAmigos.some(amigo => amigo.email.toLowerCase() === inputEmail.value.trim().toLowerCase())) {
        alert('Este email já foi adicionado!');
        return;
    }

    // Adiciona o amigo à lista
    const novoAmigo = {
        nome: inputAmigo.value.trim(),
        email: inputEmail.value.trim()
    };
    
    listaDeAmigos.push(novoAmigo);
    
    // Cria o elemento da lista
    let li = document.createElement('li');
    li.textContent = `${novoAmigo.nome} (${novoAmigo.email})`;
    
    // Cria o botão de excluir
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerHTML = '<span class="material-icons">close</span>';
    botaoExcluir.className = 'botao-excluir';
    botaoExcluir.onclick = () => {
        listaAmigos.removeChild(li);
        listaDeAmigos = listaDeAmigos.filter(amigo => amigo.nome !== novoAmigo.nome);
    };
    
    li.appendChild(botaoExcluir);
    listaAmigos.appendChild(li);
    
    // Limpa os inputs
    inputAmigo.value = '';
    inputEmail.value = '';
    inputAmigo.focus();
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

async function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (listaDeAmigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para realizar o sorteio!');
        return;
    }

    // Verifica se a função de email está disponível
    if (typeof enviarEmailAmigoSecreto !== 'function') {
        alert('Erro: Sistema de email não está configurado corretamente');
        return;
    }

    // Mostra o loading
    document.getElementById('loading').style.display = 'flex';

    try {
        // Embaralha a lista de amigos
        let amigosEmbaralhados = [...listaDeAmigos];
        for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [amigosEmbaralhados[i], amigosEmbaralhados[j]] = 
            [amigosEmbaralhados[j], amigosEmbaralhados[i]];
        }

        // Realiza o sorteio e envia os emails
        for (let i = 0; i < amigosEmbaralhados.length; i++) {
            const proximoIndex = (i + 1) % amigosEmbaralhados.length;
            
            const emailEnviado = await enviarEmailAmigoSecreto(
                amigosEmbaralhados[i].email,
                amigosEmbaralhados[i].nome,
                amigosEmbaralhados[proximoIndex].nome
            );

            if (!emailEnviado) {
                throw new Error('Falha ao enviar alguns emails');
            }
        }

        resultado.innerHTML = '<li>✅ Sorteio realizado com sucesso! Todos os participantes receberão um email com seu amigo secreto.</li>';
        limparLista();
    } catch (error) {
        resultado.innerHTML = '<li style="color: var(--accent-color);">❌ Erro ao realizar o sorteio. Por favor, tente novamente.</li>';
        console.error('Erro no sorteio:', error);
    } finally {
        // Esconde o loading
        document.getElementById('loading').style.display = 'none';
    }
}

function limparLista() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

// Adiciona eventos de tecla
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('email').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adicionarAmigo();
        }
    });
});