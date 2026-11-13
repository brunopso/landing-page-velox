
/* ==========================================================================
   MÓDULO 3 - TEMA, MENU MOBILE E AVISO ACADÊMICO
   ========================================================================== */


// ==========================================================================
// 1. SELEÇÃO DOS ELEMENTOS DO DOM
// ==========================================================================

// Elementos responsáveis pelo tema
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Elementos responsáveis pelo menu mobile
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');
const navLinks = document.querySelectorAll('.header__link');


// ==========================================================================
// 2. LÓGICA DO TEMA (Com Persistência LocalStorage)
// ==========================================================================

// Recupera o tema salvo no navegador
const temaSalvo = localStorage.getItem('temaPreferido');

// Verifica se o usuário escolheu o tema claro anteriormente
if (temaSalvo === 'light') {

    document.body.classList.add('light-theme');

    if (themeIcon) {
        themeIcon.textContent = '☀️';
    }
}

// Evento para alternar entre tema claro e escuro
if (themeToggle) {

    themeToggle.addEventListener('click', function() {

        document.body.classList.toggle('light-theme');

        let novoTema = 'dark';

        if (document.body.classList.contains('light-theme')) {

            novoTema = 'light';

            if (themeIcon) {
                themeIcon.textContent = '☀️';
            }

        } else {

            if (themeIcon) {
                themeIcon.textContent = '🌙';
            }
        }

        // Salva a preferência do usuário no navegador
        localStorage.setItem('temaPreferido', novoTema);

        console.log(`[LocalStorage] Preferência atualizada para: ${novoTema}`);

    });
}


// ==========================================================================
// 3. LÓGICA DO MENU MOBILE
// ==========================================================================

if (menuToggle && headerNav) {

    // Abre e fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener('click', function() {

        headerNav.classList.toggle('header__nav--active');

    });

    // Fecha o menu automaticamente ao clicar em um link
    navLinks.forEach(function(link) {

        link.addEventListener('click', function() {

            headerNav.classList.remove('header__nav--active');

        });

    });

}


// ==========================================================================
// 4. AVISO ACADÊMICO
// ==========================================================================

// Localiza os elementos do aviso no HTML
const avisoAcademico = document.getElementById('aviso-academico');
const btnEntendi = document.getElementById('btn-entendi');

// Verifica se os elementos existem antes de executar
if (avisoAcademico && btnEntendi) {

    // Verifica se o visitante já confirmou o aviso nesta sessão
    if (!sessionStorage.getItem('avisoConfirmado')) {

        // Exibe a janela de aviso
        avisoAcademico.classList.add('ativo');

    }

    // Evento de clique no botão Entendi
    btnEntendi.addEventListener('click', function() {

        // Esconde a janela de aviso
        avisoAcademico.classList.remove('ativo');

        // Registra a confirmação na sessão atual
        sessionStorage.setItem('avisoConfirmado', 'sim');

    });

}
