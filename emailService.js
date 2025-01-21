// Configuração do EmailJS
(function() {
    emailjs.init(""); // Substitua pela sua chave pública do EmailJS
})();

// Função para enviar email
async function enviarEmailAmigoSecreto(emailDestino, nomeRemetente, nomeAmigoSecreto) {
    const templateParams = {
        to_email: emailDestino,
        to_name: nomeRemetente,
        amigo_secreto: nomeAmigoSecreto,
        subject: "🎁 Seu Amigo Secreto foi sorteado!"
    };

    try {
        const response = await emailjs.send(
            "",
            "",
            templateParams
        );

        console.log("Email enviado com sucesso!", response.status);
        return true;
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return false;
    }
}

// Exporta a função para uso global
window.enviarEmailAmigoSecreto = enviarEmailAmigoSecreto;