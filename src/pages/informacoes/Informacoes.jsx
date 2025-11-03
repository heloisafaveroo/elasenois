import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './informacoes.css'

const Informacoes = () => {
    const location = useLocation();
    
    // Refs apenas para as seções que existem no seu código
    const direitosRef = useRef(null);
    const politicaRef = useRef(null)
    const saudeRef = useRef(null);
    const higieneRef = useRef(null);
    const violenciaRef = useRef(null);
    const cicloRef = useRef(null);
    const sinaisdeabusoRef = useRef(null);
    const rededeapoioRef = useRef(null);
    const projetosRef = useRef(null);
    const planoRef = useRef(null)

    useEffect(() => {
        // Função para rolar até a seção
        const scrollToSection = (hash) => {
            if (!hash) return;
            
            // Remove o # do hash
            const sectionId = hash.replace('#', '');
            
            // Encontra o ref correspondente - APENAS AS SEÇÕES QUE EXISTEM
            const refs = {
                direitos: direitosRef,
                politica: politicaRef,
                saude: saudeRef,
                higiene: higieneRef,
                violencia: violenciaRef,
                ciclo: cicloRef,
                sinaisdeabuso: sinaisdeabusoRef,
                rededeapoio: rededeapoioRef,
                projetos: projetosRef,
                plano: planoRef
            };
            
            const sectionRef = refs[sectionId];
            
            if (sectionRef && sectionRef.current) {
                // Aguarda um pouco para garantir que o componente está renderizado
                setTimeout(() => {
                    sectionRef.current.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        };

        // Rola para a seção quando o componente monta ou quando o hash muda
        if (location.hash) {
            scrollToSection(location.hash);
        }

        // Animação de fade-in das cards
        const cards = document.querySelectorAll('.info-card, .link-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            observer.observe(card);
        });

        return () => cards.forEach(card => observer.unobserve(card));
    }, [location.hash]);

    const style = `
        .info-card, .link-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .info-card.visible, .link-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    return (
        <main>
            <style>{style}</style>
            
            <section className="comeco">
                <section className="hero-info">
                    <h1>Informações Essenciais</h1>
                    <p>Conhecimento é poder. Aqui você encontra informações fundamentais sobre direitos, saúde, recursos e apoio para mulheres.</p>
                </section>
            </section>

            <section className="total" id="direitos" ref={direitosRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>⚖️ Direitos das Mulheres</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <h3>Direitos Fundamentais</h3>
                            <ul>
                                <li><strong>Direito à igualdade:</strong> Igualdade de tratamento perante a lei e na sociedade</li>
                                <li><strong>Direito ao trabalho:</strong> Acesso igual ao mercado de trabalho e salários justos</li>
                                <li><strong>Direito à educação:</strong> Acesso pleno à educação em todos os níveis</li>
                                <li><strong>Direito à participação política:</strong> Votar, ser votada e participar da vida pública</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Lei Maria da Penha</h3>
                            <p>A Lei 11.340/2006 protege mulheres contra violência doméstica e familiar. Garante:</p>
                            <ul>
                                <li>Medidas protetivas de urgência</li>
                                <li>Atendimento especializado</li>
                                <li>Criminalização da violência doméstica</li>
                                <li>Central de Atendimento: <strong>180</strong></li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Direitos Trabalhistas</h3>
                            <ul>
                                <li>Licença-maternidade de 120 dias</li>
                                <li>Estabilidade durante gravidez</li>
                                <li>Intervalos para amamentação</li>
                                <li>Proibição de discriminação por gênero</li>
                                <li>Igualdade salarial para funções equivalentes</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

             <section className="total" id="politica"  ref={politicaRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🏛️ Políticas Públicas</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <h3>Programas Sociais</h3>
                            <ul>
                                <li><strong>Auxílio Brasil:</strong> Prioridade para famílias chefiadas por mulheres</li>
                                <li><strong>Programa Mulher Empreendedora:</strong> Microcrédito e capacitação</li>
                                <li><strong>Casa da Mulher Brasileira:</strong> Atendimento integrado</li>
                                <li><strong>Patrulha Maria da Penha:</strong> Acompanhamento especializado</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Saúde Pública</h3>
                            <ul>
                                <li>Programa de Prevenção do Câncer de Mama e Colo do Útero</li>
                                <li>Planejamento familiar no SUS</li>
                                <li>Pré-natal e parto humanizado</li>
                                <li>Atenção à saúde da mulher climatérica</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Educação e Qualificação</h3>
                            <ul>
                                <li>Programa Mulheres Mil (capacitação profissional)</li>
                                <li>Cotas em universidades públicas</li>
                                <li>Programa Nacional de Acesso ao Ensino Técnico</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="saude" ref={saudeRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🩺 Saúde Reprodutiva</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <h3>Planejamento Familiar</h3>
                            <ul>
                                <li><strong>Métodos contraceptivos:</strong> Pílula, DIU, implante, preservativos</li>
                                <li><strong>Consulta ginecológica:</strong> Anual ou conforme orientação médica</li>
                                <li><strong>Exames preventivos:</strong> Papanicolau, mamografia</li>
                                <li><strong>Acesso gratuito pelo SUS</strong></li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Gravidez e Parto</h3>
                            <ul>
                                <li>Pré-natal: mínimo 6 consultas</li>
                                <li>Exames obrigatórios gratuitos</li>
                                <li>Direito a acompanhante no parto</li>
                                <li>Parto humanizado</li>
                                <li>Licença-maternidade de 120 dias</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Prevenção e Cuidados</h3>
                            <ul>
                                <li><strong>HPV:</strong> Vacina gratuita para meninas de 9-14 anos</li>
                                <li><strong>ISTs:</strong> Testagem e tratamento gratuitos</li>
                                <li><strong>Câncer de mama:</strong> Mamografia anual após 50 anos</li>
                                <li><strong>Violência obstétrica:</strong> Denuncie pelo 136</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="higiene" ref={higieneRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🧼 Higiene e Autocuidado</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <h3>Higiene Íntima</h3>
                            <ul>
                                <li>Use apenas água e sabonete neutro na vulva</li>
                                <li>Evite duchas vaginais internas</li>
                                <li>Troque absorventes a cada 4 horas</li>
                                <li>Use roupas íntimas de algodão</li>
                                <li>Seque bem a região após o banho</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Cuidados Menstruais</h3>
                            <ul>
                                <li><strong>Absorventes:</strong> Trocar a cada 4 horas</li>
                                <li><strong>Coletor menstrual:</strong> Esterilizar entre ciclos</li>
                                <li><strong>Calcinha absorvente:</strong> Lavar após cada uso</li>
                                <li>Higienize as mãos antes e depois da troca</li>
                                <li>Descarte adequadamente os produtos</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Autocuidado Geral</h3>
                            <ul>
                                <li>Autoexame das mamas mensalmente</li>
                                <li>Hidratação adequada (2L de água/dia)</li>
                                <li>Alimentação equilibrada</li>
                                <li>Exercícios físicos regulares</li>
                                <li>Cuidados com a saúde mental</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="violencia" ref={violenciaRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>✊ Tipos de violências</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <h3>Violência Física</h3>
                            <ul>
                                <li>É a forma mais visível, caracterizada por agressões que causam dano ao corpo.</li>
                                <li><strong>EXEMPLOS:</strong> Tapas, socos, empurrões, chutes, mordidas queimaduras, uso de armas, etc.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Violência Patrimonial</h3>
                            <ul>
                                <li>Consiste em controlar os bens e recursos financeiros da mulher.</li>
                                <li><strong>EXEMPLOS:</strong> Destruir objetos pessoais, reter dinheiro, impedir o acesso ao trabalho, usar o dinheiro da mulher sem permissão, etc.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Violência Sexual</h3>
                            <ul>
                                <li>Envolve qualquer ato sexual não consensual.</li>
                                <li><strong>EXEMPLOS:</strong> Estupro, abuso sexual, assédio, obrigar a mulher a fazer atos sexuais que causam desconforto, impedir o uso de métodos contraceptivos ou forçar o aborto.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Violência Psicológica</h3>
                            <ul>
                                <li>Visa controlar e manipular a mulher, causando sofrimento emocional.</li>
                                <li><strong>EXEMPLOS:</strong> Humilhações, xingamentos, ameaças, chantagens, isolamento social, controle excessivo, críticas Antes, entre outros.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Violência Moral</h3>
                            <ul>
                                <li>Visa difamar e caluniar a mulher, prejudicando sua reputação.</li>
                                <li><strong>EXEMPLOS:</strong> Acusações falsas, exposição da vida íntima, humilhação pública, entre outros.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Violência Virtual</h3>
                            <ul>
                                <li>É uma forma de violência que se manifesta através da Internet e das redes sociais.</li>
                                <li><strong>EXEMPLOS:</strong> Cyberbullying, divulgação de fotos ou videos íntimos sem consentimento, perseguicão online, etc.</li>
                            </ul>
                        </div>
                    </div>
                    <a className="image-caption" href="https://www.tjrj.jus.br/observatorio-judicial-violencia-mulher/o-que-e-a-violencia-domestica-e-o-feminicidio/tipos-de-viol%C3%AAncias"><b>Referencia:</b>Tipos de Violências</a>
                </section>
            </section>

            <section className="total" id="ciclo" ref={cicloRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🌀 Ciclo de Violência</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <div className="container">
                                <div className="text-content">
                                    <ul>
                                        <p><b>A violência doméstica muitas vezes se esconde por trás de portas fechadas, seguindo um padrão que aprisiona suas vítimas.
                                            Diferente de um evento isolado, a violência segue um ciclo de repetição que se agrava com o tempo.
                                            nesse tópico vamos desvendar as fases desse ciclo da tensão ao ato de Arrependimento.</b></p>
                                        <li><strong>FASE 1 - Aumento da Tensão</strong></li>
                                        <p>Quando o agressor mostrar-se irritado e tenso por coisas e situações insignificantes, podendo ter acesso de raiva,
                                            onde também começa as humilhações a vítima, ameaça e destruição de objetos.</p>
                                        <li><strong>FASE 2 - Ato de Violência</strong></li>
                                        <p>Qualquer tensão acumulada na fase anterior se manifestar de uma forma explosiva do agressor,
                                            pois não está sendo mais possível se conter e parte para a violência verbal, física, psicológica, moral ou patrimonial.</p>
                                        <li><strong>FASE 3 - Arrependimento e Comportamento de Carinho</strong></li>
                                        <p>Fase do arrependimento, onde o agressor demonstra comportamento de compensação, é conhecido como "lua de mel".
                                            Tem como característica do agressor, tenta uma reconciliação com a vítima através de gestos, palavras ou comportamentos carinhosos.</p>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <img src="/imagem/ciclo de violencia.png" alt="Ciclo de Violência" />
                                    <a className="image-caption" href="https://www.jusbrasil.com.br/artigos/um-ciclo-vicioso-e-perigoso-como-identificar-e-sair-dessa-armadilha/1543759776"><b>Referência:</b> Um ciclo vicioso e perigoso! Como identificar e sair dessa armadilha?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="sinaisdeabuso" ref={sinaisdeabusoRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🤬 Sinais de um relacionamento abusivo</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card">
                            <h4>Isolamento Social</h4>
                            <ul>
                                <li>A pessoa se afasta de amigos e familiares.</li>
                                <li>Ela para de participar de atividades ou hobbies que antes gostava.</li>
                                <li>O parceiro ou a parceira tenta controlar com quem a pessoa pode falar ou sair.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>Mudanças Comportamentais</h4>
                            <ul>
                                <li>A pessoa parece ansiosa, deprimida ou com medo na presença do parceiro.</li>
                                <li>Ela se desculpa constantemente ou tenta justificar o comportamento do outro.</li>
                                <li>A pessoa perde a autoconfiança e a autoestima.</li>
                                <li>Ela mostra medo de expressar opiniões ou de desagradar o parceiro.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>Controle Excessivo</h4>
                            <ul>
                                <li>O parceiro ou a parceira monitora o telefone, e-mail ou redes sociais.</li>
                                <li>Ele ou ela controla o dinheiro, impedindo a pessoa de ter acesso às suas próprias finanças.</li>
                                <li>O parceiro ou a parceira exige saber onde a pessoa está o tempo todo.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>Humilhação e Críticas Constantes</h4>
                            <ul>
                                <li>O parceiro ou a parceira faz piadas ofensivas ou comentários depreciativos em público ou em particular.</li>
                                <li>Ele ou ela critica a aparência, inteligência ou habilidades da pessoa.</li>
                                <li>A pessoa é constantemente culpada por problemas ou discussões.</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>Ameaças e Chantagem</h4>
                            <ul>
                                <li>O parceiro ou a parceira faz ameaças de se machucar ou de machucar a pessoa ou entes queridos, caso ela tente terminar o relacionamento.</li>
                                <li>Ele ou ela usa os filhos, se houver, como forma de controle.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="rededeapoio" ref={rededeapoioRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🤝 Rede de Apoio</h2>
                    </div>
                    <div className="content-grid">
                        <div className="info-card emergency">
                            <h3>Emergência</h3>
                            <div className="emergency-numbers">
                                <div className="number-item"><span className="number">190</span><span className="desc">Polícia Militar</span></div>
                                <div className="number-item"><span className="number">180</span><span className="desc">Central de Atendimento à Mulher</span></div>
                                <div className="number-item"><span className="number">192</span><span className="desc">SAMU</span></div>
                                <div className="number-item"><span className="number">100</span><span className="desc">Direitos Humanos</span></div>
                            </div>
                        </div>
                        <div className="info-card">
                            <h3>Centros de Referência</h3>
                            <ul>
                                <li><strong>CRAS:</strong> Centro de Referência de Assistência Social </li>
                                <li><strong>CREAS:</strong> Centro de Referência Especializado de Assistência Social</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Apoio Psicológico</h3>
                            <ul>
                                <li><strong>CVV:</strong> 188 (Centro de Valorização da Vida)</li>
                                <li><strong>CAPS:</strong> Centro de Atenção Psicossocial</li>
                                <li>Terapia online gratuita (projetos sociais)</li>
                                <li>Grupos de apoio locais</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="projetos" ref={projetosRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>🔗 Projetos de ajuda e apoio</h2>
                        <h3>📍Assis Chateaubriand, PR - Brasil</h3>
                    </div>
                    <div className="links-grid">
                        <div className="link-card">
                            <h4>Secretaria de Assistência Social e da Mulher </h4>
                            <p>É um órgão do governo, seja na cidade, no estado ou no país, que tem a função de criar e colocar em prática ações que defendam os direitos das mulheres, promovam a igualdade e ajudem a combater a violência de gênero. Além disso, também oferece assistência social.</p>
                            <a href="tel:4499212272" className="link-button">Entrar em contato</a>
                        </div>
                        <div className="link-card">
                            <h4>Conselho Municipal de Direitos da Mulher</h4>
                            <p>É um grupo formado por pessoas da comunidade e do governo que se reúne para discutir e decidir sobre assuntos importantes para as mulheres. O conselho dá orientações à prefeitura, fiscaliza se as políticas públicas estão sendo executadas e recebe denúncias de violações de direitos, com o objetivo de promover a igualdade de gênero.</p>
                            <a href="tel:4599070184" className="link-button">Entrar em contato</a>
                        </div>
                        <div className="link-card">
                            <h4>Ampara</h4>
                            <p>é um serviço de atendimento online exclusivo para mulheres em situação de violência doméstica e familiar. Com uma equipe multidisciplinar composta por mulheres, o projeto oferece um serviço multidisciplinar, realizado exclusivamente por mulheres, que oferece segurança e sigilo da informação para todas as usuárias em situação de violência doméstica e familiar, independente da renda.
Conheça o Ampara - <a href="https://ampara.defensoriapublica.pr.def.br/Pagina/Ampara">acessar site:</a></p>
                        </div>
                        <div className="link-card">
                            <h4>Procuradoria da Mulher </h4>
                            <p>É o departamento jurídico de um órgão público. Sua função principal é ser a equipe de advogados do governo, garantindo que todas as decisões e ações sejam legais e protegendo os interesses da instituição. Contato - Câmara Municipal de Assis Chateaubriand</p>
                            <a href="#" className="link-button">Entrar em contato</a>
                        </div>
                        <div className="link-card">
                            <h4>Pastoral da Criança</h4>
                            <p>É um projeto focado no desenvolvimento integral de crianças pequenas (de 0 aos 6 anos) e de suas famílias. O objetivo é fornecer orientação sobre temas importantes como saúde, nutrição, educação e cidadania. o projeto fuciona através de visitas de voluntários e reuniões comunitárias promovendo momentos de reflexão e a celebração a vida com as famílias.</p>
                            <a href="#" className="link-button">Entrar em contato</a>
                        </div>
                        <div className="link-card">
                            <h4>Projeto "Espelho Meu" - Unimeo</h4>
                            <p>Equipe formada por alunos/as do segundo ano de Psicologia da faculdade Unimeo Ctesop criaram um projeto de extensão - "Espelho Meu". Buscando promover o autoconhecimento feminino, a promoção e o resgate da autoestima.
Conheça suas redes: <a href="https://www.instagram.com/proj_espelhomeu/">instagram</a> </p>
                            <a href="tel:4498617691" className="link-button">Entrar em contato</a>
                        </div>
                        <div className="link-card">
                            <h4>Roda do Despertar</h4>
                            <p>Roda do Despertar é um grupo de apoio para mulheres em diversas fases da maternidade — desde aquelas que sonham em ser mães, até gestantes, puérperas e mães já experientes. O objetivo é criar um espaço de acolhimento e força mútua, onde as participantes podem trocar informações e experiências com base em saberes tradicionais e científicos.
Conheça suas redes: <a href="https://www.instagram.com/roda.dodespertar/">instagram</a></p>
                            <a href="#" className="link-button">Entrar em contato</a>
                        </div>
                    </div>
                </section>
            </section>

            <section className="total" id="plano" ref={planoRef}>
                <section className="info-section">
                    <div className="section-header">
                        <h2>Plano Municipal dos Direitos da Mulher</h2>
                    </div>
                        <div className="info-card">
                        <div className="link-item">
                        <h5><a href="./pdf/PLANO_PRELIMINAR_MULHER_todas as secretarias.pdf" target="_blank" rel="noopener noreferrer">Plano Municipal dos Direitos da Mulher 2025 a 2028</a></h5>
                        <div className="author">Prefeito Municipal: Marcel Henrique Micheletto; Secretária Municipal de Assistência Social e da Mulher: Susana Rezende Borella dos Santos;
Comissão do Plano Municipal dos Direitos da Mulher (representantes do poder público, sociedade civil e assessoria técnica)</div>
                        <div className="description">Este plano é um compromisso da gestão pública de Assis Chateaubriand (PR) para promover a igualdade entre homens e mulheres e 
                            combater a violência e a discriminação contra as mulheres no município, de 2025 a 2028. Criando ações para proteger as mulheres, aumentar sua participação em cargos de liderança, 
                             e garantir que tenham as mesmas oportunidades de emprego e na vida pública que os homens. O objetivo é construir uma cidade mais justa 
                             e segura para todas.</div>
                    </div>
                    </div>
                </section>
            </section>
            

            <section className="cta-section">
                <h2>Precisa de Ajuda Imediata?</h2>
                <p>Em situação de emergência, não hesite em buscar ajuda. Você não está sozinha.</p>
                <div className="cta-buttons">
                    <a href="tel:180" className="cta-button emergency">Ligar 180</a>
                    <a href="tel:190" className="cta-button emergency">Ligar 190</a>
                </div>
            </section>
        </main>
    );
};

export default Informacoes;