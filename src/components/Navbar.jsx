import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [informacoesOpen, setInformacoesOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenus = () => {
        setMenuOpen(false);
        setInformacoesOpen(false);
    };

    // Adiciona o código JavaScript que você solicitou
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const nav = document.querySelector('nav');

        // Controle do menu hamburger
        const handleHamburgerClick = () => {
            mobileMenu.classList.toggle('open');
            nav.classList.toggle('open');
        };

        // Fechar menu ao clicar fora
        const handleClickOutside = (event) => {
            const isClickInsideMenu = mobileMenu.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInsideMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                nav.classList.remove('open');
                // Também atualiza o estado React
                setMenuOpen(false);
                setInformacoesOpen(false);
            }
        };

        // Dropdown de "Informações" no menu mobile
        const informacoesDropdownBtn = document.getElementById('informacoesDropdownBtn');
        const informacoesDropdown = document.querySelector('.mobile-menu .dropdown');

        const handleDropdownClick = (event) => {
            event.preventDefault();
            informacoesDropdown.classList.toggle('active');
            // Atualiza o estado React
            setInformacoesOpen(!informacoesOpen);

            const closeDropdown = (e) => {
                if (!informacoesDropdown.contains(e.target) && e.target !== informacoesDropdownBtn) {
                    informacoesDropdown.classList.remove('active');
                    setInformacoesOpen(false);
                    document.removeEventListener('click', closeDropdown);
                }
            };

            if (informacoesDropdown.classList.contains('active')) {
                setTimeout(() => document.addEventListener('click', closeDropdown), 0);
            } else {
                document.removeEventListener('click', closeDropdown);
            }

            event.stopPropagation();
        };

        // Adiciona event listeners
        if (hamburger) hamburger.addEventListener('click', handleHamburgerClick);
        document.addEventListener('click', handleClickOutside);
        if (informacoesDropdownBtn) informacoesDropdownBtn.addEventListener('click', handleDropdownClick);

        // Fechar menus ao redimensionar a janela
        const handleResize = () => {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('open');
                nav.classList.remove('open');
                informacoesDropdown?.classList.remove('active');
                // Atualiza os estados React
                setMenuOpen(false);
                setInformacoesOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Fechar menus ao clicar em links (mobile)
        const menuLinks = document.querySelectorAll('.mobile-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                nav.classList.remove('open');
                informacoesDropdown?.classList.remove('active');
                // Atualiza os estados React
                setMenuOpen(false);
                setInformacoesOpen(false);
            });
        });

        // Cleanup: Remove event listeners ao desmontar o componente
        return () => {
            if (hamburger) hamburger.removeEventListener('click', handleHamburgerClick);
            document.removeEventListener('click', handleClickOutside);
            if (informacoesDropdownBtn) informacoesDropdownBtn.removeEventListener('click', handleDropdownClick);
            window.removeEventListener('resize', handleResize);
            menuLinks.forEach(link => link.removeEventListener('click', handleClickOutside));
        };
    }, [informacoesOpen]); // Adicione informacoesOpen como dependência

    return (
        <header className="andante">
            <div className="top-bar">
                <div></div>
                <Link to="/cadastro">
                    <button className="participar" aria-label="Botão para participar do projeto">
                        Receber atualizações 🔔
                    </button>
                </Link>
            </div>

            <nav aria-label="Navegação principal">
                <div className="logo">
                    <Link to="/">
                        <img src="/imagem/imagem.logoelasporelas.png" alt="Logo Elas por Elas - Projeto de Extensão IFPR" />
                    </Link>
                </div>
                <ul className="menu">
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/eventos" className={({ isActive }) => isActive ? "active" : ""}>Eventos</NavLink></li>
                    <li><NavLink to="/comunidade" className={({ isActive }) => isActive ? "active" : ""}>Comunidade</NavLink></li>
                    <li><NavLink to="/pesquisas" className={({ isActive }) => isActive ? "active" : ""}>Pesquisas</NavLink></li>
                    <li className="dropdown">
                        <NavLink to="/informacoes" className={({ isActive }) => isActive ? "active dropbtn" : "dropbtn"}>Informações</NavLink>
                        <div className="dropdown-content">
                            <Link to="/informacoes#direitos">Direitos das Mulheres</Link>
                            <Link to="/informacoes#politica">Políticas Públicas</Link>
                            <Link to="/informacoes#saude">Saúde Reprodutiva</Link>
                            <Link to="/informacoes#higiene">Higiene e Autocuidado</Link>
                            <Link to="/informacoes#violencia">Tipos de violências</Link>
                            <Link to="/informacoes#ciclo">Ciclo de Violência</Link>
                            <Link to="/informacoes#sinaisdeabuso">Sinais de um relacionamento abusivo</Link>
                            <Link to="/informacoes#rededeapoio">Rede de Apoio</Link>
                            <Link to="/informacoes#projetos">Projetos de ajuda e apoio</Link>
                            <Link to="/informacoes#plano">Plano Municipal dos Direitos da Mulher</Link>
                        </div>
                    </li>
                    <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink></li>
                </ul>
                <div className="hamburger" aria-label="Menu de navegação" role="button" onClick={handleMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
                    <li><Link to="/" onClick={closeMenus}>Home</Link></li>
                    <li><Link to="/eventos" onClick={closeMenus}>Eventos</Link></li>
                    <li><Link to="/comunidade" onClick={closeMenus}>Comunidade</Link></li>
                    <li><Link to="/pesquisas" onClick={closeMenus}>Pesquisas</Link></li>
                    <li className={`dropdown ${informacoesOpen ? 'active' : ''}`}>
                        <a href="#!" id="informacoesDropdownBtn" className="dropbtn" onClick={(e) => { 
                            e.preventDefault(); 
                            setInformacoesOpen(!informacoesOpen); 
                        }}>
                            Informações <span className="arrow-icon"></span>
                        </a>
                        <div className="dropdown-content">
                            <Link to="/informacoes#direitos" onClick={closeMenus}>Direitos das Mulheres</Link>
                            <Link to="/informacoes#politica" onClick={closeMenus}>Políticas Públicas</Link>
                            <Link to="/informacoes#saude" onClick={closeMenus}>Saúde Reprodutiva</Link>
                            <Link to="/informacoes#higiene" onClick={closeMenus}>Higiene e Autocuidado</Link>
                            <Link to="/informacoes#violencia" onClick={closeMenus}>Tipos de violências</Link>
                            <Link to="/informacoes#ciclo" onClick={closeMenus}>Ciclo de Violência</Link>
                            <Link to="/informacoes#sinaisdeabuso" onClick={closeMenus}>Sinais de um relacionamento abusivo</Link>
                            <Link to="/informacoes#rededeapoio" onClick={closeMenus}>Rede de Apoio</Link>
                            <Link to="/informacoes#projetos" onClick={closeMenus}>Projetos de ajuda e apoio</Link>
                            <Link to="/informacoes#plano" onClick={closeMenus}>Plano Municipal dos Direitos da Mulher</Link>
                        </div>
                    </li>
                    <li><Link to="/sobre" onClick={closeMenus}>Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;