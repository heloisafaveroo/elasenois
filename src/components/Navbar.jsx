import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [informacoesOpen, setInformacoesOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        // Fecha o submenu de informações quando o menu principal é alternado
        if (menuOpen) {
            setInformacoesOpen(false);
        }
    };

    const closeMenus = () => {
        setMenuOpen(false);
        setInformacoesOpen(false);
    };

    const toggleInformacoes = (e) => {
        e.preventDefault();
        setInformacoesOpen(!informacoesOpen);
    };

    // Fecha os menus quando a janela é redimensionada para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenus();
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Fecha o menu quando clica em um link (mobile)
    const handleMobileLinkClick = () => {
        closeMenus();
    };

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

            <nav aria-label="Navegação principal" className={menuOpen ? 'open' : ''}>
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

    <li><Link to="/" onClick={handleMobileLinkClick}>Home</Link></li>
    <li><Link to="/eventos" onClick={handleMobileLinkClick}>Eventos</Link></li>
    <li><Link to="/comunidade" onClick={handleMobileLinkClick}>Comunidade</Link></li>
    <li><Link to="/pesquisas" onClick={handleMobileLinkClick}>Pesquisas</Link></li>
    <li className={`dropdown ${informacoesOpen ? 'active' : ''}`}>
        <a href="#!" className="dropbtn" onClick={toggleInformacoes}>
            Informações <span className="arrow-icon"></span>
        </a>
        <div className="dropdown-content">
            <Link to="/informacoes#direitos" onClick={handleMobileLinkClick}>Direitos das Mulheres</Link>
            <Link to="/informacoes#politica" onClick={handleMobileLinkClick}>Políticas Públicas</Link>
            <Link to="/informacoes#saude" onClick={handleMobileLinkClick}>Saúde Reprodutiva</Link>
            <Link to="/informacoes#higiene" onClick={handleMobileLinkClick}>Higiene e Autocuidado</Link>
            <Link to="/informacoes#violencia" onClick={handleMobileLinkClick}>Tipos de violências</Link>
            <Link to="/informacoes#ciclo" onClick={handleMobileLinkClick}>Ciclo de Violência</Link>
            <Link to="/informacoes#sinaisdeabuso" onClick={handleMobileLinkClick}>Sinais de um relacionamento abusivo</Link>
            <Link to="/informacoes#rededeapoio" onClick={handleMobileLinkClick}>Rede de Apoio</Link>
            <Link to="/informacoes#projetos" onClick={handleMobileLinkClick}>Projetos de ajuda e apoio</Link>
            <Link to="/informacoes#plano" onClick={handleMobileLinkClick}>Plano Municipal dos Direitos da Mulher</Link>
        </div>
    </li>
    <li><Link to="/sobre" onClick={handleMobileLinkClick}>Sobre</Link></li>
</ul>
            </nav>
        </header>
    );
};

export default Navbar;