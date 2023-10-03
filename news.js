// news.js
const newsData = [
    {
        category: "economia",
        title: "Notícia de Economia 1",
        content: "Conteúdo da notícia de economia 1.",
        author: "Autor 1",
        date: "01 de Janeiro de 2023"
    },
    {
        category: "economia",
        title: "Notícia de Economia 2",
        content: "Conteúdo da notícia de economia 2.",
        author: "Autor 2",
        date: "02 de Janeiro de 2023"
    },
    // Adicione mais notícias aqui
];

// Função para carregar notícias em destaque
function loadFeaturedNews() {
    const featuredNewsContainer = document.getElementById("featured-news-container");
    const featuredNews = newsData[0]; // A primeira notícia será a notícia em destaque

    const featuredNewsHTML = `
        <article class="featured-article">
            <h3>${featuredNews.title}</h3>
            <p>${featuredNews.content}</p>
            <p class="news-details">Por <span class="author">${featuredNews.author}</span> em <span class="date">${featuredNews.date}</span></p>
        </article>
    `;

    featuredNewsContainer.innerHTML = featuredNewsHTML;
}

// Carregar notícias em destaque por padrão
loadFeaturedNews();
