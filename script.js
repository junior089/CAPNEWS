document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar notícias recentes
    function loadRecentNews(category) {
        const recentNewsList = document.getElementById("recent-news-list");
        recentNewsList.innerHTML = "";

        const categoryNews = newsData.filter((news) => news.category === category);

        categoryNews.forEach((news) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.content}</p>
                <p class="news-details">Por <span class="author">${news.author}</span> em <span class="date">${news.date}</span></p>
            `;
            recentNewsList.appendChild(li);
        });
    }

    // Event listeners para as categorias
    const categories = document.querySelectorAll("nav ul li a");
    const categoryTitle = document.getElementById("category-name");

    categories.forEach((category) => {
        category.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedCategory = e.target.getAttribute("data-category");
            categoryTitle.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
            loadRecentNews(selectedCategory);
        });
    });

    // Carregue a primeira categoria por padrão
    loadRecentNews("economia");
});
