document.addEventListener("DOMContentLoaded", function () {
    // Event listeners para as categorias
    const categories = document.querySelectorAll("nav ul li a");
    const categoryTitle = document.getElementById("category-name");

    const logoImage = document.getElementById("logo-image");
    logoImage.addEventListener("click", function () {
        window.location.href = "index.html";
    });

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
    carouselSlide.addEventListener("mouseleave", startAutoSlide)

    
});