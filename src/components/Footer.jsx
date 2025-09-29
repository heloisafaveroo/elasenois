
import React from 'react';
import '../../src/menu.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Sobre Nós</h3>
                    <p>O Coletivo de Mulheres "Elas por Elas" é dedicado a promover a união, o empoderamento e a saúde mental feminina em Assis Chateaubriand e região.</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contato</h3>
                    <p><i className="fas fa-map-marker-alt"></i> Assis Chateaubriand, PR - Brasil</p>
                    <p><i className="fas fa-envelope"></i> coletivodemulheresifpr@gmail.com</p>
                </div>
                <div className="footer-section social">
                    <h3>Siga-nos</h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com/elasporelas_ifpr/">
                            <img src="/imagem/image-insta.png" alt="Instagram" />@elasporelas_ifpr
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100093049331240">
                            <img src="/imagem/image-face.png" alt="Facebook" />Coletivo de Mulheres 'elas por elas'
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 Elas por Elas. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
