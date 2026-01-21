// --- Inicialização Geral ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Hambúrguer (Funcionalidade de Abrir/Fechar)
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

    // 2. Intersection Observer (Animação dos Cards Seção 2)
    const observerOptions = { threshold: 0.2 };
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animar');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.beneficio-card').forEach((card) => {
        cardObserver.observe(card);
    });
});

// --- Animação de entrada Geral (Scroll Reveal) ---
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
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