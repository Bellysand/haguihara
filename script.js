// --- Inicialização Geral ---
document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Hambúrguer (Mantido Original)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // 2. Intersection Observer (Animações dos Cards - Mantido)
    const observerOptions = { threshold: 0.2 };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('beneficio-card')) {
                    entry.target.classList.add('animar');
                }
                if (entry.target.classList.contains('animar-video')) {
                    entry.target.classList.add('visivel');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.beneficio-card, .animar-video').forEach((el) => {
        cardObserver.observe(el);
    });

    // 3. Inicialização do Swiper (REVISADO: Agora com observadores para não travar)
    const swiperResultados = new Swiper('.swiper-resultados', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        observer: true,           // Adicione isso
        observeParents: true,    // Adicione isso
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    });

    // 4. Formulário WhatsApp (Mantido sua lógica original)
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nome = this.querySelector('input[type="text"]').value;
            const tel = this.querySelector('input[type="tel"]').value;
            const objetivoSelect = document.getElementById('objetivo');
            let objetivoTexto = objetivoSelect ? objetivoSelect.options[objetivoSelect.selectedIndex].text : "Não informado";

            const seuNumero = "5524999543417";
            const mensagem = `*INTERESSE EM AVALIAÇÃO*%0A%0A*Nome:* ${nome}%0A*WhatsApp:* ${tel}%0A*Foco:* ${objetivoTexto}`;

            window.open(`https://api.whatsapp.com/send?phone=${seuNumero}&text=${mensagem}`, '_blank');
        });
    }
});