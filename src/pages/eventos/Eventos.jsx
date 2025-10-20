import React from 'react';
import Carousel from '../../components/Carousel';
import './eventos.css'


const eventsData = [
    {
        title: "Reunião: Apresentação do site para o Conselho Municipal de Direitos da Mulheres",
        date: "14 de Outubro, 2025",
        location: "Secretaria do Conselho Municipal de Direito das Mulheres",
        description: "deacrever",
        images: [
            { src: "/imagemz" },
            { src: "" },
            { src: "" },
            { src: "" },
        ]
    },
        {
        title: "Mostra de Curso",
        date: "17 de Setembro, 2025",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "O coletivo de mulheres Elas por Elas brilhou na mostra do IFPR, promovendo a igualdade de gênero e o empoderamento. Apresentaram brinquedos e roupas esportivas para desconstruir a ideia de 'coisa de menino' e 'coisa de menina', incentivando a liberdade de escolha em profissões, esportes e etc. Criaram um espaço para desmistificar o tabu da menstruação, ou seja, mostrar que é  algo normal, não há necessidade de ter vergonha. Exibiram livros sobre conquistas femininas e fizeram uma dinâmica pedindo palavras que as mulheres merecem, como respeito, celebrando a força e a trajetória feminina.",
        images: [
            { src: "" },
            { src: "" },
            { src: "" },
            { src: "" },
        ]
    },
    {
        title: "V Conferência Estadual de Políticas para as Mulheres do Paraná:",
        date: "?? de Agosto, 2025",
        location: "?????",
        description: "descrever",
        images: [
            { src: "/imagem/FOTO53-mês das mulhes.jpg", alt: "V Conferência 1" },
            { src: "/imagem/FOTO54-mês das mulhes.jpg", alt: "V Conferência 2" },
            { src: "/imagem/FOTO55-mês das mulhes.jpg", alt: "V Conferência 3" },
            { src: "/imagem/FOTO56-mês das mulhes.jpg", alt: "V Conferência 4" },
        ]
    },
    {
        title: "I Conferência Municipal de Políticas Públicas para as Mulheres:",
        date: "?? de Agosto, 2025",
        location: "Auditório - Prefeitura Municipal",
        description: "descrever",
        images: [
            { src: "/imagem/FOTO49-mês das mulhes.jpg", alt: "I Conferência 1" },
            { src: "/imagem/FOTO50-mês das mulhes.jpg", alt: "I Conferência 2" },
            { src: "/imagem/FOTO51-mês das mulhes.jpg", alt: "I Conferência 3" },
            { src: "/imagem/FOTO52-mês das mulhes.jpg", alt: "I Conferência 4" },
        ]
    },
    {
        title: "Campanha “Ônibus Lilás”:",
        date: "01 de Agosto, 2025",
        location: "Ao lado da praça dos pioneiros",
        description: `A Secretaria de Assistência Social e da Mulher de Assis Chateaubriand/PR, por meio do Centro de Referência Especializado de Assistência Social - CREAS, realizou evento “Ônibus Lilás" a fim de promover o combate a Violência contra Mulher. Presentes ofereceram atendimento e orientação: OAB-CRAS - CREAS - Cad único - Saúde - Família acolhedora -Serviço de Convivência e Fortalecimento de Vínculos - UNIMEO - IFPR - SINE - Emagrecentro Assis Chateaubriand - Associação das Artesãs E ao final do evento foi realizado o sorteio de uma semijoia em parceria com a Relojoaria e Ótica Comercial`,
        images: [
            { src: "/imagem/FOTO45-mês das mulhes.jpg", alt: "Ônibus Lilás 1" },
            { src: "/imagem/FOTO46-mês das mulhes.jpg", alt: "Ônibus Lilás 2" },
            { src: "/imagem/FOTO47-mês das mulhes.jpg", alt: "Ônibus Lilás 3" },
            { src: "/imagem/FOTO48-mês das mulhes.jpg", alt: "Ônibus Lilás 4" },
        ]
    },
    {
        title: "Palestra com a Patrulha Maria da Penha:",
        date: "11 de Agosto, 2025",
        location: "Teatro municipal - Moacir Micheletto",
        description: "O Coletivo de Mulheres “Elas por Elas”, projeto coordenado pelas professoras Celina de Oliveira Barbosa Gomes e Michelli Cristina Galli, do Instituto Federal do Paraná – Campus Assis Chateaubriand, promoveu uma ação de formação dos/as estudantes em parceria com a Polícia Militar, precisamente, com a Patrulha Maria da Penha. O evento, alusivo à Campanha “Agosto Lilás”, caracterizou-se pela realização de um ciclo de palestras, intituladas “Os Desafios da Polícia Militar no Enfrentamento do Feminicídio” e “De Homem para Homem”, ministradas para os/as alunos/as dos períodos diurno e noturno da instituição, tematizando o combate à violência contra a mulher.",
        images: [
            { src: "/imagem/FOTO41-mês das mulhes.jpg", alt: "Maria da Penha 1" },
            { src: "/imagem/FOTO42-mês das mulhes.jpg", alt: "Maria da Penha 2" },
            { src: "/imagem/FOTO43-mês das mulhes.jpg", alt: "Maria da Penha 3" },
            { src: "/imagem/FOTO44-mês das mulhes.jpg", alt: "Maria da Penha 4" },
        ]
    },
    {
        title: "Dia das Mulheres: Elas por Elas - 1º Edição",
        date: "26 e 27 de Março, 2025",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "Em parceria com a Secretaria da Assistência Social e da Mulher, promoveu um evento especial para as mulheres acompanhadas pelo CRAS.💜 O encontro celebrou as conquistas femininas e criou um espaço acolhedor para trocas de histórias e reflexões. A abertura, conduzida pela Profa.Yohana Saheli, trouxe palavras inspiradoras como força, guerreiras e acolhimento. O projeto IF'Arte emocionou a todos com música ao vivo.🎶 As estudantes Camila, Fabíola e Heloisa contextualizaram o Dia das Mulheres, e a Profª Michelli Galli apresentou o histórico do Coletivo Elaspor Elas📖💬. O evento contou ainda com poesias, cordéis, partilhas emocionantes e debates sobre desafios femininos em carreiras predominantemente masculinas. No encerramento, a dinâmica das fotos trouxe momentos de auto conexão e empoderamento, onde cada mulher pôde resgatar sua essência e fortalecer sua voz.📷✨ O Dia das Mulheres 'Elas por Elas' nasceu para dar voz às mulheres e quebrar silêncios históricos. Que esse seja apenas o começo! 💪🏻💜",
        images: [
            { src: "/imagem/FOTO1-mês das mulheres.jpg", alt: "Evento 26 1" },
            { src: "/imagem/FOTO2-mês das mulhes.png", alt: "Evento 26 2" },
            { src: "/imagem/FOTO3-mês das mulhes.png", alt: "Evento 26 3" },
            { src: "/imagem/FOTO4-mês das mulhes.png", alt: "Evento 27 1" },
            { src: "/imagem/FOTO5-mês das mulhes.png", alt: "Evento 27 2" },
        ]
    },
    {
        title: "Eventos de Setembro",
        date: "10 e 20 de Setembro, 2024",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "O Coletivo de Mulheres \"Elas por Elas\" participou ativamente de dois eventos significativos em setembro de 2024. No dia 10, estivemos presentes na Semana Nacional de Ciência e Tecnologia, promovendo discussões sobre o papel das mulheres na ciência. No dia 20, realizamos uma roda de conversa sobre empoderamento feminino e saúde mental, proporcionando um espaço seguro para compartilhamento de experiências e fortalecimento dos vínculos entre as participantes.",
        images: [
            { src: "/imagem/FOTO24-mês das mulhes.png", alt: "Setembro 1" },
            { src: "/imagem/FOTO25-mês das mulhes.png", alt: "Setembro 2" },
            { src: "/imagem/FOTO26-mês das mulhes.png", alt: "Setembro 3" },
            { src: "/imagem/FOTO27-mês das mulhes.png", alt: "Setembro 4" },
        ]
    },
    {
        title: "Participação: Semana Nacional de Ciência e Tecnologia",
        date: "?? de Outubro, 2024",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "O Coletivo de Mulheres \"Elas por Elas\" marcou presença na Semana Nacional de Ciência e Tecnologia, promovendo discussões sobre a importância da participação feminina nas áreas de ciência, tecnologia, engenharia e matemática (STEM). Durante o evento, foram abordados temas como igualdade de gênero no ambiente acadêmico e profissional, incentivando jovens mulheres a seguirem carreiras científicas e tecnológicas.",
        images: [
            { src: "/imagem/FOTO28-mês das mulhes.png", alt: "SNCT 1" },
            { src: "/imagem/FOTO29-mês das mulhes.png", alt: "SNCT 2" },
            { src: "/imagem/FOTO30-mês das mulhes.png", alt: "SNCT 3" },
            { src: "/imagem/FOTO31-mês das mulhes.png", alt: "SNCT 4" },
        ]
    },
    {
        title: "Participação: Feira de Profissões",
        date: "?? de Setembro, 2024",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "Durante a Feira de Profissões, o Coletivo \"Elas por Elas\" teve um papel fundamental em orientar jovens estudantes, especialmente mulheres, sobre as diversas oportunidades de carreira disponíveis. O foco foi desmistificar preconceitos de gênero em diferentes profissões e incentivar a busca por áreas tradicionalmente masculinas, promovendo a igualdade de oportunidades no mercado de trabalho.",
        images: [
            { src: "/imagem/FOTO32-mês das mulhes.png", alt: "Feira Profissões 1" },
        ]
    },
    {
        title: "Participação: Feira de Ciências",
        date: "?? de Agosto, 2024",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "Na Feira de Ciências, o Coletivo apresentou projetos relacionados à saúde da mulher e questões de gênero na ciência. Foi uma oportunidade única para demonstrar como a pesquisa científica pode contribuir para o empoderamento feminino e para a solução de problemas específicos enfrentados pelas mulheres em nossa sociedade. O evento contou com a participação ativa de estudantes e pesquisadoras.",
        images: [
            { src: "/imagem/FOTO37-mês das mulhes.png", alt: "Feira Ciências 2" },
            { src: "/imagem/FOTO38-mês das mulhes.png", alt: "Feira Ciências 3" },
            { src: "/imagem/FOTO39-mês das mulhes.png", alt: "Feira Ciências 4" },
            { src: "/imagem/FOTO40-mês das mulhes.png", alt: "Feira Ciências 5" },
        ]
    },
    {
        title: "Participação: maior evento do ano",
        date: "?? de Agosto, 2023",
        location: "IFPR - Campus Assis Chateaubriand",
        description: "Este foi considerado o maior evento do ano para o Coletivo \"Elas por Elas\". Com uma programação extensa e diversificada, o evento reuniu mulheres de diferentes idades e backgrounds para discutir temas fundamentais como empoderamento, direitos das mulheres, saúde mental e violência de gênero. O sucesso do evento demonstrou a importância e o impacto positivo do trabalho desenvolvido pelo coletivo na comunidade.",
        images: [
            { src: "/imagem/FOTO21-mês das mulhes.png", alt: "maior evento 1" },
            { src: "/imagem/FOTO22-mês das mulhes.png", alt: "maior evento 2" },
            { src: "/imagem/FOTO23-mês das mulhes.png", alt: "maior evento 3" },
        ]
    },
    {
        title: "Participação: primeira carreata do meio-dia",
        date: "?? de Julho, 2023",
        location: "Município de Assis Chateaubriand",
        description: "O Coletivo de Mulheres 'Elas por Elas' esteve ativamente presente na 1ª Carreata do Meio-Dia em Assis Chateaubriand, reforçando seu compromisso com a causa \"Pela vida e pelo fim da violência contra as Mulheres\". Mais uma vez em parceria com a prefeitura, o coletivo demonstrou união e engajamento em prol da causa.",
        images: [
            { src: "/imagem/FOTO19-mês das mulhes.png", alt: "primeira carreata 1" },
            { src: "/imagem/FOTO20-mês das mulhes.png", alt: "primeira carreata 2" },
        ]
    },
    {
        title: "Caravana Paraná - Unido pelas Mulheres",
        date: "15 de Junho, 2023",
        location: "Centro Universitário FAG (Fundação Assis Gurgacz)",
        description: "O Coletivo de Mulheres esteve presente na \"Caravana Paraná - Unido pelas Mulheres\", evento que ocorreu no Centro Universitário FAG (Fundação Assis Gurgacz) de Cascavel, o integrante João Medeiros esteve presente representando o 'Elas por Elas'. Organização/Palestrante do evento foi a Secretária de Estado da Mulher, Igualdade Racial e Pessoa Idosa Leandre Dal Ponte.",
        images: [
            { src: "/imagem/FOTO16-mês das mulhes.png", alt: "Caravana Paraná 1" },
            { src: "/imagem/FOTO17-mês das mulhes.png", alt: "Caravana Paraná 2" },
            { src: "/imagem/FOTO18-mês das mulhes.png", alt: "Caravana Paraná 3" },
        ]
    },
    {
        title: "Coletivo 'Elas por Elas': As vozes das mulheres silenciadas",
        date: "?? de Maio, 2023",
        location: "IFPR - Câmpus Telêmaco Borba",
        description: "Coletivo de Mulheres presente no VIII SE²PIN que foi realizado no IFPR - Câmpus Telêmaco Borba, com sessão temática: \"Coletivo 'Elas por Elas': As vozes das mulheres silenciadas.\"A sessão foi conduzida pela coordenadora Michelli Galli e contou com a participação da integrante Gabrielle Aurélio. Foi realizado uma roda de conversa, no qual teve maior introdução sobre a violência contra a mulher. Em um momento de interação foi pedido para os participantes relatarem em um papel, quais foram as vivências com a violência, tanto no ambiente escolar, quanto em outras situações da vida.",
        images: [
            { src: "/imagem/FOTO14-mês das mulhes.png", alt: "VIII SE²PIN 1" },
            { src: "/imagem/FOTO15-mês das mulhes.png", alt: "VIII SE²PIN 2" },
        ]
    },
    {
        title: "Café com as Mães: de Mulher para Mulher",
        date: "29 de Maio, 2023",
        location: "Auditório - Prefeitura de Assis",
        description: "Café com as Mães: de Mulher para Mulher – Um bate-papo sobre violência doméstica', com a advogada Jaqueline Serrute. O objetivo da ação, voltada para as mães dos/das estudantes, alunas do período noturno e para as servidoras, foi o de realizar uma reflexão acerca da importância da preservação da integridade física e psicológica da mulher, elucidando as participantes sobre o conceito e os tipos de violência ontra a mulher, bem como sobre os procedimentos de detecção e de denúncia. Após a discussão, da qual muitas participantes tomaram parte relatando suas experiências, foi servido um lanche, a fim de concluir o evento de modo celebrativo.",
        images: [
            { src: "/imagem/FOTO10-mês das mulhes.png", alt: "Mulher para mulher 1" },
            { src: "/imagem/FOTO11-mês das mulhes.png", alt: "Mulher para mulher 2" },
            { src: "/imagem/FOTO12-mês das mulhes.png", alt: "Mulher para mulher 3" },
            { src: "/imagem/FOTO13-mês das mulhes.png", alt: "Mulher para mulher 4" },
        ]
    },
    {
        title: "Palestra sobre imagem pessoal e autonomia feminina",
        date: "06 de Maio, 2023",
        location: "Pastoral da Criança",
        description: "O Coletivo de Mulheres esteve atuando na Pastoral da Criança, com uma palestra sobre imagem pessoal e autonomia feminina. R'afaela Ramos foi a integrante que conduziu a palestra juntamente com a coordenadora Celina Gomes.",
        images: [
            { src: "/imagem/FOTO9-mês das mulhes.jpg", alt: "Maio Furta-cor" },
        ]
    },
    {
        title: "Participação na aprovação da lei municipal: Maio Furta-cor",
        date: "?? de Maio, 2023",
        location: "Auditório - Prefeitura de Assis",
        description: "Participação do Coletivo de Mulheres “Elas por Elas” na sessão de aprovação da lei municipal que institui o “Maio Furta-cor / Mês pela Visibilidade da Saúde Mental Materna”, iniciativa do Grupo “Roda do Despertar” junto à Câmara Municipal de Assis Chateaubriand.",
        images: [
            { src: "/imagem/FOTO8-mês das mulhes.png", alt: "Maio Furta-cor" },
        ]
    }
];

const Eventos = () => {
    return (
        <main>
            <section className="eventos">
                <h1>Nossos Eventos</h1>
                {eventsData.map((event, index) => (
                    <div className="item-evento" key={index}>
                        <div className="info-evento">
                            <h2>{event.title}</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>{event.date}</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>{event.location}</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                {event.description}
                            </p>
                        </div>
                        <Carousel images={event.images} />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Eventos;