# 🎁 Amigo Secreto - Sistema de Sorteio Online

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-2E9FD6?style=for-the-badge&logo=gmail&logoColor=white)

## 📝 Descrição
Sistema web para realização de sorteio de amigo secreto com envio automático de emails para os participantes.

## ✨ Funcionalidades
- 📝 Cadastro de participantes com nome e email
- 🎲 Sorteio automático
- 📧 Envio de emails automático para cada participante
- 🗑️ Gerenciamento da lista de participantes
- 📱 Interface responsiva

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- EmailJS (para envio de emails)
- Google Fonts
- Material Icons

## 📋 Pré-requisitos
- Navegador web moderno
- Conta no EmailJS

## 🚀 Como Executar

1. Clone o repositório:
- https://github.com/Michelitossilva/challenge-amigo-secreto_pt.git

2. Acesse a pasta do projeto:
- cd challenge-amigo-secreto_pt

3. Configure o EmailJS:
   - 📮 Crie uma conta em [EmailJS](https://www.emailjs.com/)
   - ⚙️ Crie um novo serviço de email (Gmail, Outlook, etc)
   - 📝 Crie um template com o seguinte conteúdo:
     ```html
     <h2>Olá {{to_name}}!</h2>
     <p>Seu amigo secreto foi sorteado!</p>
     <h3>🎁 Você tirou: {{amigo_secreto}} 🎉</h3>
     <p>Mantenha o segredo e prepare uma surpresa especial!</p>
     ```
   - 🔑 Copie as credenciais (Public Key, Service ID e Template ID)
   - ⚙️ Configure o template para usar {{to_email}} como destinatário

4. Configure as credenciais:
   - Abra o arquivo `index.html`
   - Substitua as credenciais do EmailJS:
     - PUBLIC_KEY
     - SERVICE_ID
     - TEMPLATE_ID

5. Abra o arquivo `index.html` no navegador

## 💻 Como Usar

1. 👥 Adicione os participantes:
   - Digite o nome completo
   - Digite o email válido
   - Clique em "Adicionar"

2. ✅ Verifique os requisitos:
   - Mínimo de 3 participantes
   - Emails válidos
   - Sem duplicidade de nomes/emails

3. 🎲 Realize o sorteio:
   - Clique em "Realizar Sorteio"
   - Aguarde o envio dos emails
   - Cada participante receberá seu amigo secreto por email

## ⚠️ Observações Importantes
- 📧 Limite de 200 emails/mês no plano gratuito do EmailJS
- ✉️ Verifique a pasta de spam caso não receba o email
- 🔒 Mantenha suas credenciais do EmailJS em segurança
- 📱 Teste em diferentes dispositivos e navegadores

## 🤝 Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para:
- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 🔧 Enviar pull requests

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor
Michel da Silva - [GitHub](https://github.com/Michelitossilva)

## 🙏 Agradecimentos
- EmailJS pela API de envio de emails
- Google Fonts pelas fontes
- Material Icons pelos ícones
- Alura pelo desafio e a oportunidade de aprender e evoluir.
- Oracle Next Education pela formação em Full Stack Developer.
