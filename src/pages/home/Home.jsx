
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <>
            <section className="inicio">
                <div className="logo-inicio">
                    <img src="/imagem/imagem.logoelasporelas.png" alt="Logo Elas por Elas" />
                </div>
                <div className="text fade-in">
                    <h2>Quem somos nós?</h2>
                    <p>Projeto de pesquisa e extensão do IFPR (Instituto Federal do Paraná) com intuito de ser
                        um espaço acolhedor feminino, não apenas ouvindo mulheres, mas também
                        organizando discussões a respeito do papel das mesmas na sociedade, assim
                        contribuindo para essa causa.</p>
                    <h3>Respeito, Autonomia e Empoderamento da Mulher na escola e na comunidade.</h3>
                    <button className="saiba-mais" aria-label="Saiba mais sobre o projeto">
                        <a href="/sobre">Saiba mais</a>
                    </button>
                </div>
            </section>

            <main>
                <section className="objetivos">
                    <h1>NOSSOS OBJETIVOS</h1>
                    <div className="cards">
                        <div className="card fade-in">
                            <img src="/imagem/equidade.png" alt="Equidade de gênero" />
                            <div className="card-content">
                                <h3>Promover a equidade de gênero</h3>
                                <p>Impulsionar a Equidade de Gênero: Trabalhamos ativamente para desconstruir
                                    desigualdades e fomentar um ambiente onde todas as pessoas,
                                    independentemente do gênero, tenham as mesmas oportunidades e respeito.</p>
                            </div>
                        </div>
                        <div className="card fade-in">
                            <img src="/imagem/conjunto de mulheres.png" alt="Espaço de acolhimento" />
                            <div className="card-content">
                                <h3>Promover um espaço de acolhimento às mulheres</h3>
                                <p>Nosso compromisso é promover um espaço de acolhimento genuíno às
                                    mulheres, dentro e fora do Campus. Queremos que cada mulher se sinta
                                    segura, ouvida, respeitada e parte de uma comunidade que a apoia.</p>
                            </div>
                        </div>
                        <div className="card fade-in">
                            <img src="/imagem/luta fenista.png" alt="Conscientização" />
                            <div className="card-content">
                                <h3>Conscientizar sobre a luta feminina</h3>
                                <p>Buscamos conscientizar sobre a profundidade e a importância da luta
                                    feminina, compartilhando histórias, educando sobre nossos direitos
                                    e mobilizando para que as conquistas avancem e não haja retrocessos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="objetivos">
                    <h1>DEPOIMENTOS</h1>
                    <div className="container depoimentos-container">
                        <div className="depoimentos-enunciado">
                            <p>• Muitas de nós carregamos cicatrizes invisíveis, mas cada depoimento aqui é um grito de liberdade, um passo em direção à cura.
                                Estas são as vozes de mulheres que, em meio à dor, encontraram a coragem para lutar e florescer. Elas por Elas é um espaço onde
                                a união transforma o silêncio em força, mostrando que a resiliência e a solidariedade estão em cada uma de nós.</p>
                        </div>
                        <div className="depoimento">
                            <div className="depoimento-texto">
                                <p>“Ele me chamou de puta! Depois de 52 anos junto com esse homem ele me chamou de puta e disse pra minha filha que ia me matar,
                                    que eu ia amanhecer com a boca cheia de formiga. Eu não vou morrer na mão dele.”</p>
                            </div>
                            <div className="depoimento-autor">
                                <p><strong>— (M. A. O., 67 anos)</strong></p>
                            </div>
                        </div>
                        
                        <div className="depoimento">
                            <div className="depoimento-texto">
                                <p>“Eu não posso tomar um copo de leite desse de saquinho que ele diz que comprou pro menino, que se eu quiser, 
                                    eu que compre. Mas eu agora que peguei um trabalho de meio período e não dá para tudo. [...] Nem um copo de leite eu tenho direito.”</p>
                            </div>
                            <div className="depoimento-autor">
                                <p><strong>— (N. M. O. B. M., 44 anos)</strong></p>
                            </div>
                        </div>

                        <div className="depoimento">
                            <div className="depoimento-texto">
                                <p>“Eu apanhava todo o dia. Teve uma vez que eu tava deitada com os menino e ele chegou em casa da rua, de noite, e me arrancou da
                                     cama para esquentar a comida pra ele. Eu apanhei muito naquele dia. Eu sempre apanhei. Eu pesava cinquenta quilo.” </p>
                            </div>
                            <div className="depoimento-autor">
                                <p><strong>— (S. I., 56 anos)</strong></p>
                            </div>
                        </div>

                         <div className="depoimento">
                            <div className="depoimento-texto">
                                <p>“Eu trabalhei mais ele a vida inteira. No fim, ele disse que eu não aparecia em lugar nenhum, que não tinha direito a nada”. </p>
                            </div>
                            <div className="depoimento-autor">
                                <p><strong>— (M. A., 62 anos)</strong></p>
                            </div>
                        </div>

                         <div className="depoimento">
                            <div className="depoimento-texto">
                                <p>“Ele dizia que se eu separasse dele ele iria me matar. Ele chegava com a faca na minha garganta. Eu fugi. Depois que criei meus
                                     filhos, peguei meus documentos e sumi só com a roupa do corpo.” </p>                            </div>
                            <div className="depoimento-autor">
                                <p><strong>— (S. V., 50 anos)</strong></p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
