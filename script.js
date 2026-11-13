// ==========================================================================
// MÓDULO 3 - COMPILADO: TEMA COM LOCALSTORAGE & MENU MOBILE
// ==========================================================================

// 1. SELEÇÃO DOS ELEMENTOS DO DOM (Declarados apenas UMA vez)
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');
const navLinks = document.querySelectorAll('.header__link');

// ==========================================================================
// LÓGICA DO TEMA (Com Persistência LocalStorage)
// ==========================================================================

// Recuperação do tema salvo assim que a página carrega
const temaSalvo = localStorage.getItem('temaPreferido');

if (temaSalvo === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) {
        themeIcon.textContent = '☀️';
    }
}

// Ouvinte de clique para alternar o tema e gravar no navegador.
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');

        let novoTema = 'dark';

        if (document.body.classList.contains('light-theme')) {
            novoTema = 'light';
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            if (themeIcon) themeIcon.textContent = '🌙';
        }

        // Salva a escolha do usuário na memória do navegador
        localStorage.setItem('temaPreferido', novoTema);
        console.log(`[LocalStorage] Preferência atualizada para: ${novoTema}`);
    });
}

// ==========================================================================
// LÓGICA DO MENU MOBILE (Com Desafio Extra)
// ==========================================================================

if (menuToggle && headerNav) {
    // Abre/fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener('click', function() {
        headerNav.classList.toggle('header__nav--active');
    });

    // DESAFIO EXTRA: Fecha o menu automaticamente ao clicar em qualquer link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            headerNav.classList.remove('header__nav--active');
        });
    });


/* =========================================
   10. AVISO ACADÊMICO
   ========================================= */

// Localiza os elementos do aviso no HTML
const avisoAcademico = document.getElementById("aviso-academico");
const btnEntendi = document.getElementById("btn-entendi");

// Verifica se o visitante já confirmou o aviso nesta sessão
if (!sessionStorage.getItem("avisoConfirmado")) {

    // Exibe a janela de aviso
    avisoAcademico.classList.add("ativo");
}

// Evento de clique no botão Entendi
btnEntendi.addEventListener("click", function() {

    // Esconde a janela
    avisoAcademico.classList.remove("ativo");

    // Registra que o visitante confirmou o aviso
    sessionStorage.setItem("avisoConfirmado", "sim");

});

}
