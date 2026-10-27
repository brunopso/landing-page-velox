// ==========================================================================
// AULA 1: SELEÇÃO DE ELEMENTOS E EVENTOS DE CLIQUE
// ==========================================================================


/ ==========================================================================
// AULA 1 + AULA 3: NEWSLETTER COM VALIDAÇÃO DE E-MAIL E FEEDBACK VISUAL
// ==========================================================================

// 1. SELECIONANDO OS ELEMENTOS NO DOM
const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');

// 2. CRIAÇÃO DINÂMICA DA MENSAGEM DE FEEDBACK
let feedbackText = null;

if (inputEmail) {
    feedbackText = document.createElement('small');
    feedbackText.style.display = 'block';
    feedbackText.style.marginTop = '8px';
    feedbackText.style.fontSize = '0.85rem';
    feedbackText.style.fontWeight = '600';
    feedbackText.setAttribute('aria-live', 'polite');

    // Insere a mensagem logo abaixo do campo de e-mail
    inputEmail.insertAdjacentElement('afterend', feedbackText);
}

// 3. FUNÇÃO DE VALIDAÇÃO DE E-MAIL COM REGEX
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// 4. EVENTO DE ENVIO DO FORMULÁRIO
if (formNewsletter && inputEmail && feedbackText) {
    let temporizadorFeedback;

    formNewsletter.addEventListener('submit', function(event) {
        // Impede o recarregamento da página
        event.preventDefault();

        // Obtém o e-mail sem espaços extras
        const emailDigitado = inputEmail.value.trim();

        // Cancela a limpeza programada de uma mensagem anterior
        clearTimeout(temporizadorFeedback);

        // 5. VALIDAÇÃO E FEEDBACK DE ERRO
        if (!validarEmail(emailDigitado)) {
            feedbackText.textContent =
                '❌ Por favor, digite um e-mail válido (ex: nome@dominio.com).';

            feedbackText.style.color = '#ef4444';
            inputEmail.style.borderColor = '#ef4444';
            inputEmail.focus();

            return;
        }

        // 6. FEEDBACK DE SUCESSO
        feedbackText.textContent = '✅ Inscrição realizada com sucesso!';
        feedbackText.style.color = '#22c55e';
        inputEmail.style.borderColor = '#22c55e';

        // Atualiza o botão, caso ele exista
        if (btnSubmit) {
            btnSubmit.textContent = 'Inscrição Confirmada! 🎉';
            btnSubmit.style.backgroundColor = '#22c55e';
        }

        // Limpa o campo de entrada
        inputEmail.value = '';

        console.log(`E-mail cadastrado com sucesso: ${emailDigitado}`);

        // 7. LIMPA A MENSAGEM APÓS 4 SEGUNDOS
        temporizadorFeedback = setTimeout(function() {
            feedbackText.textContent = '';
            inputEmail.style.borderColor = '';
        }, 4000);
    });
}


// ==========================================================================
// MÓDULO 3 — AULA 2: MENU MOBILE E ALTERNADOR DE TEMA VIA classList.toggle
// ==========================================================================

// ==========================================================================
// 1. LÓGICA DO MENU MOBILE COM DESAFIO EXTRA
// ==========================================================================

const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');

// Seleciona TODOS os links que estão dentro do menu de navegação
const navLinks = document.querySelectorAll('.header__link');

if (menuToggle && headerNav) {
    // Evento de clique no botão hambúrguer para abrir/fechar o menu
    menuToggle.addEventListener('click', function() {
        headerNav.classList.toggle('header__nav--active');
    });

    // ✏️ DESAFIO EXTRA: Fecha o menu ao clicar em qualquer link da navegação
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove a classe ativa, fazendo o menu fechar automaticamente
            headerNav.classList.remove('header__nav--active');
        });
    });
}

// 2. LÓGICA DO ALTERNADOR DE TEMA (DARK / LIGHT MODE)
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        // Alterna a classe 'light-theme' no <body>
        document.body.classList.toggle('light-theme');

        // Troca o ícone de Lua (🌙) para Sol (☀️) dependendo do estado
        if (document.body.classList.contains('light-theme')) {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    });
}