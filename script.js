// ==========================================================================
// AULA 1: SELEÇÃO DE ELEMENTOS E EVENTOS DE CLIQUE
// ==========================================================================

// 1. SELECIONANDO OS ELEMENTOS NO DOM
const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');

// 2. ESCUTANDO O EVENTO DE ENVIO DO FORMULÁRIO (submit)
formNewsletter.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Pega o valor digitado pelo usuário e remove espaços extras
    const emailDigitado = inputEmail.value.trim();

    if (emailDigitado !== '') {
        // Altera o texto do botão para confirmar o recebimento
        btnSubmit.textContent = 'Inscrição Confirmada! 🎉';
        btnSubmit.style.backgroundColor = '#22c55e'; // Verde de sucesso

        // Limpa o campo de entrada
        inputEmail.value = '';

        console.log(`E-mail cadastrado com sucesso: ${emailDigitado}`);
    }
});