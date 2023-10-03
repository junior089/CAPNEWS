document.addEventListener("DOMContentLoaded", function () {
    // Variável para controlar se a seção de notícias em destaque está aberta ou fechada
    let featuredNewsOpen = true;

    // Função para fechar a seção de notícias em destaque
    function closeFeaturedNews() {
        const featuredNews = document.querySelector(".featured-news");
        featuredNews.style.display = "none";
        featuredNewsOpen = false;
    }

    // Função para abrir a seção de notícias em destaque
    function openFeaturedNews() {
        const featuredNews = document.querySelector(".featured-news");
        featuredNews.style.display = "block";
        featuredNewsOpen = true;
    }

    // Função para carregar notícias recentes
    function loadRecentNews(category) {
        const recentNewsList = document.getElementById("recent-news-list");
        recentNewsList.innerHTML = "";

        const categoryNews = newsData.filter((news) => news.category === category);

        categoryNews.forEach((news) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3>${news.title}</h3>
                <div class="article-content">
                    ${news.content}
                </div>
                <p class="news-details">Por <span class="author">${news.author}</span> em <span class="date">${news.date}</span></p>
            `;
            recentNewsList.appendChild(li);
        });
    }

    // Event listeners para as categorias
    const categories = document.querySelectorAll("nav ul li a");
    const categoryTitle = document.getElementById("category-name");

    const logoImage = document.getElementById("logo-image");
    logoImage.addEventListener("click", function () {
        window.location.href = "home.html"; // Substitua com a URL da sua página inicial
    });

    categories.forEach((category) => {
        category.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedCategory = e.target.getAttribute("data-category");
            categoryTitle.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

            // Fecha a seção de notícias em destaque ao acessar uma categoria de notícias
            if (featuredNewsOpen) {
                closeFeaturedNews();
            }

            // Carrega notícias recentes da categoria selecionada
            loadRecentNews(selectedCategory);
        });
    });

    // Carregue a primeira categoria por padrão
    loadRecentNews("economia");
});
