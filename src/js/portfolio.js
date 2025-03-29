let d = new Date();

let year = (document.querySelector(".currentyear").textContent =
  d.getFullYear());

let last_update = (document.querySelector("#jscript").textContent =
  document.lastModified);


// Toggle language switch
const languageSwitch = document.getElementById('languageSwitch');

languageSwitch.addEventListener('change', () => {
    // You can add logic here to change the language of your portfolio
    if (languageSwitch.checked) {
        // Change to language B
        console.log('Switched to Language B');
    } else {
        // Change to language A
        console.log('Switched to Language A');
    }
});

// Adicione ao seu portfolio.js

// Botão volta ao topo
const backToTop = document.querySelector('.back-to-top');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
    navbar.classList.add('scrolled');
  } else {
    backToTop.classList.remove('visible');
    navbar.classList.remove('scrolled');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Adicione ao seu arquivo portfolio.js

// Animação de scroll para as seções
document.addEventListener('DOMContentLoaded', function() {
  // Configuração do Intersection Observer para animações de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Adiciona a classe 'visible' aos elementos quando eles ficam visíveis
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    root: null, // observar em relação à viewport
    threshold: 0.15, // quando pelo menos 15% do elemento está visível
    rootMargin: '0px 0px -50px 0px' // margem negativa para acionar um pouco antes
  });

  // Obter todas as seções principais
  const sections = document.querySelectorAll('.fade-in');
  
  // Adicionar classe 'hidden' inicialmente para todas as seções
  sections.forEach(section => {
    section.classList.add('hidden');
    // Observar cada seção
    observer.observe(section);
  });

  // Navegação suave ao clicar nos links do menu
  const navLinks = document.querySelectorAll('.right-side a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Obter o alvo a partir do href
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Fecha o menu móvel se estiver aberto (para futuras implementações)
        // if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
        //     mobileMenuBtn.classList.remove('active');
        //     navMenu.classList.remove('active');
        // }
        
        // Scroll suave até a seção
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Ajuste para compensar a altura da navbar
          behavior: 'smooth'
        });
      }
    });
  });
});

// Destacar item do menu ativo durante o scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  // Obter todas as seções principais
  const sections = document.querySelectorAll('section, .main-container');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Ajuste para compensar a navbar
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remover 'active' de todos os links
      document.querySelectorAll('.right-side a').forEach(link => {
        link.classList.remove('active');
      });
      
      // Adicionar 'active' ao link correspondente à seção atual
      const activeLink = document.querySelector(`.right-side a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// Menu Hamburguer
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const rightSide = document.querySelector('.right-side');

mobileMenuBtn.addEventListener('click', () => {
  rightSide.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
  document.body.style.overflow = rightSide.classList.contains('active') ? 'hidden' : 'auto';
});
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && 
      !e.target.closest('.right-side') && 
      !e.target.closest('.mobile-menu-btn') &&
      rightSide.classList.contains('active')) {
    rightSide.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
// Fecha o menu ao clicar em links
document.querySelectorAll('.right-side a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      rightSide.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

// Adicione '#skills-journey' à lista de seções observadas
const sections = document.querySelectorAll('.fade-in, #skills-journey');