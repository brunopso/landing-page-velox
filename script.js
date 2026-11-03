// ==========================================================================
// MÓDULO 3 - PERSISTÊNCIA DO TEMA COM LOCALSTORAGE
// ==========================================================================

// 1. SELEÇÃO DOS ELEMENTOS DO DOM
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// 2. RECUPERAÇÃO DO TEMA SALVO (Executado assim que a página carrega)
const temaSalvo = localStorage.getItem('temaPreferido');

if (temaSalvo === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) {
        themeIcon.textContent = '☀️';
    }
}

// 3. ALTERNÂNCIA E GRAVAÇÃO DA PREFERÊNCIA
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        // Alterna a classe 'light-theme' no <body>
        document.body.classList.toggle('light-theme');

        let novoTema = 'dark';

        // Verifica se a classe está presente após o toggle
        if (document.body.classList.contains('light-theme')) {
            novoTema = 'light';
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            if (themeIcon) themeIcon.textContent = '🌙';
        }

        // Salva a preferência na memória do navegador (Front-End)
        localStorage.setItem('temaPreferido', novoTema);
       
        console.log(`[LocalStorage] Preferência atualizada para: ${novoTema}`);
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