// news.js
const newsData = [
    {
        category: "economia",
        title: "Mercados Globais em Alta",
        resumo: "Os mercados globais estão em alta esta semana, com os principais índices atingindo recordes. Especialistas atribuem o otimismo à recuperação econômica pós-pandemia e aos avanços nas negociações comerciais internacionais. Investidores estão otimistas com as perspectivas de crescimento.",
        author: "Economista Expert",
        date: "15 de Setembro de 2023",
    },

    {
        category: "economia",
        title: "Mercados Globais em Alta",
        resumo: "Os mercados globais estão em alta esta semana, com os principais índices atingindo recordes. Especialistas atribuem o otimismo à recuperação econômica pós-pandemia e aos avanços nas negociações comerciais internacionais. Investidores estão otimistas com as perspectivas de crescimento.",
        author: "Economista Expert",
        date: "15 de Setembro de 2023",
    },

    {
        category: "economia",
        title: "Mercados Globais em Alta",
        resumo: "Os mercados globais estão em alta esta semana, com os principais índices atingindo recordes. Especialistas atribuem o otimismo à recuperação econômica pós-pandemia e aos avanços nas negociações comerciais internacionais. Investidores estão otimistas com as perspectivas de crescimento.",
        author: "Economista Expert",
        date: "15 de Setembro de 2023",
    },

    {
        category: "economia",
        title: "Mercados Globais em Alta",
        resumo: "Os mercados globais estão em alta esta semana, com os principais índices atingindo recordes. Especialistas atribuem o otimismo à recuperação econômica pós-pandemia e aos avanços nas negociações comerciais internacionais. Investidores estão otimistas com as perspectivas de crescimento.",
        author: "Economista Expert",
        date: "15 de Setembro de 2023",
    },


    {
        category: "entretenimento",
        title: "Novo Filme Blockbuster Chega aos Cinemas",
        resumo: "O aguardado filme 'Aventura Espacial' chegou aos cinemas nesta sexta-feira. Com efeitos especiais de tirar o fôlego e uma história emocionante, ele promete ser o blockbuster do ano. Críticos elogiam as atuações dos principais atores e a trilha sonora épica.",
        author: "Crítico de Cinema",
        date: "16 de Setembro de 2023",
    },
    {
        category: "esportes",
        title: "Time Local Vence o Campeonato",
        resumo: "O time de futebol local conquistou o campeonato nacional este fim de semana, derrotando o rival por 3-1 na final. Os torcedores encheram o estádio para comemorar a vitória histórica do time. O treinador elogiou a dedicação e o trabalho em equipe dos jogadores.",
        author: "Repórter Esportivo",
        date: "18 de Setembro de 2023",
    },
    {
        category: "esportes",
        title: "Time Local vence liga",
        resumo: "O time de futebol local conquistou o campeonato nacional este fim de semana, derrotando o rival por 3-1 na final. Os torcedores encheram o estádio para comemorar a vitória histórica do time. O treinador elogiou a dedicação e o trabalho em equipe dos jogadores.",
        author: "Repórter Esportivo",
        date: "18 de Setembro de 2023",
    },
    {
        category: "gastronomia",
        title: "Tendências Culinárias para 2024",
        resumo: "Chefs e especialistas em alimentos preveem que 2024 será um ano emocionante para a gastronomia. Novas tendências incluem pratos à base de plantas, alimentos sustentáveis e técnicas culinárias inovadoras. Os amantes da comida podem esperar uma experiência gastronômica única no próximo ano.",
        author: "Chef Renomado",
        date: "19 de Setembro de 2023",
    },
    {
        category: "saude",
        title: "Descoberta Promissora na Luta contra o Câncer",
        resumo: "Pesquisadores anunciaram uma descoberta promissora no tratamento do câncer. Um novo medicamento experimental mostrou resultados positivos em testes clínicos, aumentando a sobrevida de pacientes com câncer. Esse avanço pode representar uma esperança para milhões de pessoas em todo o mundo.",
        author: "Médico Oncologista",
        date: "20 de Setembro de 2023",
    },
    {
        category: "espiritual",
        title: "Reflexões Espirituais para o Bem-Estar",
        resumo: "Muitas pessoas buscam conexão espiritual como parte de seu bem-estar mental e emocional. Especialistas em espiritualidade compartilham insights sobre como encontrar paz interior, lidar com o estresse e alcançar o equilíbrio espiritual em um mundo agitado.",
        author: "Líder Espiritual",
        date: "21 de Setembro de 2023",
    },

    {
        category: "espiritual",
        title: "Reflexões Espirituais para o Bem-Estar",
        resumo: "Muitas pessoas buscam conexão espiritual como parte de seu bem-estar mental e emocional. Especialistas em espiritualidade compartilham insights sobre como encontrar paz interior, lidar com o estresse e alcançar o equilíbrio espiritual em um mundo agitado.",
        author: "Líder Espiritual",
        date: "21 de Setembro de 2023",
    },

    {
        category: "espiritual",
        title: "Reflexões Espirituais para o Bem-Estar",
        resumo: "Muitas pessoas buscam conexão espiritual como parte de seu bem-estar mental e emocional. Especialistas em espiritualidade compartilham insights sobre como encontrar paz interior, lidar com o estresse e alcançar o equilíbrio espiritual em um mundo agitado.",
        author: "Líder Espiritual",
        date: "21 de Setembro de 2023",
    },

    {
        category: "espiritual",
        title: "Reflexões Espirituais para o Bem-Estar",
        resumo: "Muitas pessoas buscam conexão espiritual como parte de seu bem-estar mental e emocional. Especialistas em espiritualidade compartilham insights sobre como encontrar paz interior, lidar com o estresse e alcançar o equilíbrio espiritual em um mundo agitado.",
        author: "Líder Espiritual",
        date: "21 de Setembro de 2023",
    },

    {
        category: "politica",
        title: "Reunião do Conselho de Segurança da ONU termina sem declaração final",
        resumo:"A reunião do Conselho de Segurança da Organização das Nações Unidas (ONU) sobre o conflito em Israel terminou sem declaração final. O encontro a portas fechadas foi presidido pelo Brasil na tarde deste domingo (8) em Nova York, nos Estados Unidos.",
        author: "politico experiente",
        date: "21 de Setembro de 2023",
    },

    {
        category: "politica",
        title: "Reunião do Conselho de Segurança da ONU termina sem declaração final",
        resumo:"A reunião do Conselho de Segurança da Organização das Nações Unidas (ONU) sobre o conflito em Israel terminou sem declaração final. O encontro a portas fechadas foi presidido pelo Brasil na tarde deste domingo (8) em Nova York, nos Estados Unidos.",
        author: "politico experiente",
        date: "21 de Setembro de 2023",
    },

    {
        category: "politica",
        title: "Reunião do Conselho de Segurança da ONU termina sem declaração final",
        resumo:"A reunião do Conselho de Segurança da Organização das Nações Unidas (ONU) sobre o conflito em Israel terminou sem declaração final. O encontro a portas fechadas foi presidido pelo Brasil na tarde deste domingo (8) em Nova York, nos Estados Unidos.",
        author: "politico experiente",
        date: "21 de Setembro de 2023",
    },

    {
        category: "politica",
        title: "Reunião do Conselho de Segurança da ONU termina sem declaração final",
        resumo:"A reunião do Conselho de Segurança da Organização das Nações Unidas (ONU) sobre o conflito em Israel terminou sem declaração final. O encontro a portas fechadas foi presidido pelo Brasil na tarde deste domingo (8) em Nova York, nos Estados Unidos.",
        author: "politico experiente",
        date: "21 de Setembro de 2023",
    },
    // Adicione mais notícias aqui
];


