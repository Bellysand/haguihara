// --- Menu Hambúrguer (Funcionalidade de Abrir/Fechar) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // --- Inicialização do Carrossel (Swiper) ---
    // Unifiquei os dois que você tinha em um só, dentro do DOMContentLoaded
    const swiper = new Swiper('.swiper-videos', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        observer: true, 
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { 
                slidesPerView: 2,
                centeredSlides: false
            }
        }
    });

    // --- Intersection Observer para os Cards da Seção 2 ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animar');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.beneficio-card').forEach((card) => {
        observer.observe(card);
    });
});

// --- Animação de entrada (Scroll Reveal Geral) ---
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// --- Formulário WhatsApp ---
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const tel = this.querySelector('input[type="tel"]').value;
        const seuNumero = "5524999543417"; 
        const mensagem = `Olá! Tenho interesse no Método Haguihara.%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Telefone:* ${tel}`;
        window.open(`https://api.whatsapp.com/send?phone=${seuNumero}&text=${mensagem}`, '_blank');
    });
}