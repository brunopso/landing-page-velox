// ==========================================================================
// AULA 1: SELEÇÃO DE ELEMENTOS E EVENTOS DE CLIQUE
// ==========================================================================

// 1. SELECIONANDO OS ELEMENTOS NO DOM
const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');

// 2. ESCUTANDO O EVENTO DE ENVIO DO FORMULÁRIO (submit)
if (formNewsletter) {
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
}


// ==========================================================================
// MÓDULO 3 — AULA 2: MENU MOBILE E ALTERNADOR DE TEMA VIA classList.toggle
// ==========================================================================

// 1. LÓGICA DO MENU MOBILE
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');
const navLinks = document.querySelectorAll('.header__link');

if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function() {
        // Alterna a classe que exibe/oculta o menu no CSS
        headerNav.classList.toggle('header__nav--active');
    });

    // ✏️ DESAFIO EXTRA: Fecha o menu automaticamente ao clicar em qualquer link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
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