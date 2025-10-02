/* ================= ANO AUTOMÁTICO ================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* ================= COPIAR E-MAIL ================= */
function copyEmail() {
  const txt = document.getElementById('emailText').textContent;
  // Usa a nova API de clipboard, com fallback (que já existia)
  navigator.clipboard?.writeText(txt)
    .then(() => alert('E-mail copiado: ' + txt))
    .catch(() => alert('Copiar manualmente: ' + txt));
}

/* ================= ENVIAR CONTATO (Corrigido para ser Genérico) ================= */
function sendContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Usando placeholders genéricos
  const trainerName = "Seu Nome"; 
  const trainerEmail = document.getElementById('emailText').textContent; 

  // Assunto e corpo dinâmicos para o link mailto
  const subject = encodeURIComponent(`Contato - Treinador ${trainerName}`);
  const body = encodeURIComponent(`Olá, ${trainerName}. Meu nome é ${name} e estou interessado em seus serviços.\n\n${message}\n\nMeu email para contato é ${email}.`);
  
  window.location.href = `mailto:${trainerEmail}?subject=${subject}&body=${body}`;
}

/* ================= 1. MENU MOBILE TOGGLE ================= */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav'); // Assume que você adicionou id="mainNav" ao seu <nav>

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' na navegação
    nav.classList.toggle('active');
    
    // Atualiza a acessibilidade ARIA
    const isExpanded = nav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });
  
  // Ocultar o menu após clicar em um link (melhora a UX mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
      }
    });
  });
}

/* ================= 2. SCROLL REVEAL (com Throttle para Performance) ================= */

/**
 * Funcao Throttle: Limita a frequência de execucao de uma funcao.
 * @param {Function} func - A funcao a ser executada.
 * @param {Number} limit - O tempo minimo em ms entre as chamadas.
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const animatedItems = document.querySelectorAll('[data-animate]');

function handleScroll() {
  animatedItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    // Verifica se o topo do elemento está dentro da área visível (com margem de 100px)
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
}

// Aplica throttle, limitando a checagem de scroll a cada 100 milissegundos
const throttledHandleScroll = throttle(handleScroll, 100);

// Substitui o listener original pelo otimizado
window.addEventListener('scroll', throttledHandleScroll);
handleScroll(); // Executa uma vez no carregamento da página