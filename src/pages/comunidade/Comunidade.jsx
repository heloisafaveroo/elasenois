
import React from 'react';
import './comunidade.css'


const Comunidade = () => {
    return (
        <main>
            <section className="partic">
                <h2>Comunidade no whatsapp</h2>
                <p>Você é uma mulher em busca de apoio, inspiração e conexão com outras mulheres? O "Elas por Elas" é o seu lugar! Nossa comunidade no WhatsApp foi criada para ser um espaço seguro, acolhedor e vibrante onde você pode compartilhar experiências, aprender, crescer e fazer novas amizades.</p>

                <h3>O que você vai encontrar na nossa comunidade:</h3>
                <div className="cards">
                    <div className="card fade-in">
                        <div className="card-content">
                            <h4>Apoio Mútuo:</h4>
                            <p>Um ombro amigo para os desafios do dia a dia e celebrações das suas conquistas.</p>
                        </div>
                    </div>
                    
                    <div className="card fade-in">
                        <div className="card-content">
                            <h4>Um Espaço Livre de Julgamentos:</h4>
                            <p>Sinta-se à vontade para ser você mesma, compartilhar suas ideias e vulnerabilidades.</p>
                        </div>
                    </div>
                    
                    <div className="card fade-in">
                        <div className="card-content">
                            <h4>Desenvolvimento Pessoal e Bem-Estar:</h4>
                            <p>Receba dicas, artigos e mensagens que vão impulsionar sua autoestima e bem-estar.</p>
                        </div>
                    </div>
                </div>

                <h3>Por que o "Elas por Elas"?</h3>
                <p>Acreditamos na força da união feminina. Juntas, somos mais fortes, mais resilientes e capazes de alcançar nossos maiores sonhos. Nosso objetivo é construir uma rede de apoio genuína, onde cada mulher se sinta valorizada, ouvida e empoderada para florescer.</p>
            </section>

            <section className="partic">
                <h2>Pronta para fazer parte?</h2>
                <p className="simp">Não perca tempo! Clique no botão abaixo para entrar agora mesmo na nossa comunidade no WhatsApp e começar a se conectar com mulheres incríveis como você.</p>
                <a href="https://chat.whatsapp.com/CGCPbPRTDS3A6UXCpWstae" target="_blank" rel="noopener noreferrer" className="whatsapp-button">ENTRAR NA COMUNIDADE AGORA!</a>
                <p className="whatsapp-icon-note">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="Ícone do WhatsApp" className="whatsapp-icon" />
                    Entre agora mesmo!
                </p>
            </section>
        </main>
    );
};

export default Comunidade;
