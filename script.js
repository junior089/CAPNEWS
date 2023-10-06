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

    // Função para fechar a seção de galeria de imagens 
    function closeImageGallery (){
        const ImageGallery = document.querySelector(".image-gallery");
        ImageGallery.style.display = "none";
        ImageGalleryopen = false;
    }

    // Função para fechar a seção de noticias recentes
    function closerecentNewsLists (){
        const recentNewsList = document.querySelector(".recent-news");
        recentNewsList.style.display = "none";
        recentNewsopen = false;
    }
   
    // Função para fechar a seção de noticias completas    
    function closefullnews (){
        const fullnews = document.querySelector(".full-news");
        fullnews.style.display = "none";
        fullnewsopen = false;
    }

    // Função para carregar notícias recentes
    function loadRecentNews(category) {
        const recentNewsList = document.getElementById("recent-news-list");
        recentNewsList.innerHTML = "";

        const categoryNews = newsData.filter((news) => news.category === category);

        categoryNews.forEach((news, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3><a href="#" class="news-link" data-index="${index}">${news.title}</a></h3>
                <div class="article-content">
                    ${news.content}
                </div>
                <p class="news-details">Por <span class="author">${news.author}</span> em <span class="date">${news.date}</span></p>
            `;
            recentNewsList.appendChild(li);
        });

        // Adicione um evento de clique às notícias recentes
        const newsLinks = document.querySelectorAll(".news-link");
        newsLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const index = e.target.getAttribute("data-index");
                showNewsContent(newsData[index]);
            });
        });
        
    }

    const carouselSlide = document.querySelector(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const images = document.querySelectorAll(".carousel-slide img");

    let currentIndex = 0;
    let slideInterval;

    // Função para avançar para a próxima imagem
    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    // Função para voltar para a imagem anterior
    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateCarousel();
    }

    // Atualiza a exibição do carrossel
    function updateCarousel() {
        const offset = -currentIndex * 100 + "%";
        carouselSlide.style.transform = `translateX(${offset})`;
    }

    // Adiciona eventos de clique aos botões "Anterior" e "Próxima"
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    // Configura um intervalo para avançar automaticamente
    function startAutoSlide() {
        slideInterval = setInterval(nextImage, 3000); // Avança automaticamente a cada 3 segundos
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Inicializa o carrossel e inicia a reprodução automática
    updateCarousel();
    startAutoSlide();
    
    // Pausa a reprodução automática quando o mouse está sobre o carrossel
    carouselSlide.addEventListener("mouseenter", stopAutoSlide);
    
    // Retoma a reprodução automática quando o mouse sai do carrossel
    carouselSlide.addEventListener("mouseleave", startAutoSlide);


// Função para exibir o conteúdo completo da notícia
function showNewsContent(news) {
    const fullNewsContentContainer = document.getElementById("full-news-content");
    fullNewsContentContainer.innerHTML = `
        <h3>${news.title}</h3>
        <div class="article-content">
            ${news.content}
        </div>
        <p class="news-details">Por <span class="author">${news.author}</span> em <span class="date">${news.date}</span></p>
     
    `;

    // Feche a seção de notícias em destaque quando uma notícia for lida
    closeFeaturedNews();
    closeImageGallery();
    closerecentNewsLists ();

    // Role a página para a seção de notícias completas para exibir a notícia completa
    const fullNewsSection = document.getElementById("full-news");
    fullNewsSection.scrollIntoView();
}

    // Event listeners para as categorias
    const categories = document.querySelectorAll("nav ul li a");
    const categoryTitle = document.getElementById("category-name");

    const logoImage = document.getElementById("logo-image");
    logoImage.addEventListener("click", function () {
        window.location.href = "home.html";
    });

    categories.forEach((category) => {
        category.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedCategory = e.target.getAttribute("data-category");
            categoryTitle.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

            // Fecha a seção de notícias em destaque ao acessar uma categoria de notícias
            if (featuredNewsOpen) {
                closeFeaturedNews();
                closeImageGallery ();
            }

            // Carrega notícias recentes da categoria selecionada
            loadRecentNews(selectedCategory);
        });
    });

    // Carregue a primeira categoria por padrão
    loadRecentNews("espiritual");
});
