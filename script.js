// --- Menu Hambúrguer ---
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fecha o menu ao clicar em qualquer link (importante para mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- Animação de entrada (A que você já tinha) ---
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

// --- Formulário WhatsApp (O seu original) ---
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const tel = this.querySelector('input[type="tel"]').value;
    const seuNumero = "5524999543417"; 
    const mensagem = `Olá! Tenho interesse no Método Haguihara.%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Telefone:* ${tel}`;
    window.open(`https://api.whatsapp.com/send?phone=${seuNumero}&text=${mensagem}`, '_blank');
});