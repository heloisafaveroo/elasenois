const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    nav.classList.toggle('open');
});
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        nav.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Para o dropdown "Informações"
    const informacoesDropdownBtn = document.getElementById('informacoesDropdownBtn');
    const informacoesDropdown = document.querySelector('.mobile-menu .dropdown'); // O <li> pai do dropdown

    console.log(informacoesDropdownBtn, informacoesDropdown)

    if (informacoesDropdownBtn && informacoesDropdown) {
        informacoesDropdownBtn.addEventListener('click', function(event) {
            console.log("clicou")
            // Previne a navegação para href="javascript:void(0);"
            event.preventDefault();

            // Alterna a classe 'active' no elemento <li> pai do dropdown
            informacoesDropdown.classList.toggle('active');

            // Opcional: Fecha o dropdown se clicar fora dele
            // Crie uma função para fechar o dropdown ao clicar fora
            function closeDropdown(event) {
                if (!informacoesDropdown.contains(event.target)) {
                    informacoesDropdown.classList.remove('active');
                    document.removeEventListener('click', closeDropdown);
                }
            }

            // Adiciona o listener para fechar se o dropdown foi aberto
            if (informacoesDropdown.classList.contains('active')) {
                document.addEventListener('click', closeDropdown);
            } else {
                document.removeEventListener('click', closeDropdown);
            }

            // Impede que o clique no botão propague e feche o dropdown imediatamente
            event.stopPropagation();
        });
    }

    // Opcional: Fecha o dropdown principal se ele estiver aberto e o resize ocorrer para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
        // Garante que o dropdown de informações esteja fechado se voltar para desktop
        if (window.innerWidth > 768 && informacoesDropdown.classList.contains('active')) {
            informacoesDropdown.classList.remove('active');
        }
    });

    // Opcional: Fecha o menu e o dropdown de informações se um link dentro do menu for clicado (útil em mobile)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            if (informacoesDropdown && informacoesDropdown.classList.contains('active')) {
                informacoesDropdown.classList.remove('active');
            }
        });
    });

});