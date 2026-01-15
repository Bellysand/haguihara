// --- Animação de entrada ---
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
revealOnScroll(); // Dispara ao carregar a página

// --- Formulário com Envio para WhatsApp ---
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura os valores dos campos (certifique-se que o HTML tem esses tipos ou use classes/IDs)
    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const tel = this.querySelector('input[type="tel"]').value;

    // Configurações do WhatsApp
    const seuNumero = "55 24 999543417"; // COLOQUE SEU NÚMERO AQUI (DDI + DDD + Número)
    const mensagem = `Olá! Tenho interesse no Método Haguihara.%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Telefone:* ${tel}`;
    
    const linkZap = `https://api.whatsapp.com/send?phone=${seuNumero}&text=${mensagem}`;

    // Abre o WhatsApp em uma nova aba
    window.open(linkZap, '_blank');

    alert("Obrigado! Redirecionando para o nosso WhatsApp...");
});