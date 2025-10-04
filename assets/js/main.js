// Inicialização dos sliders
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do EmailJS
    emailjs.init("YOUR_USER_ID"); // Substitua "YOUR_USER_ID" pelo seu ID de usuário do EmailJS
    
    // Configuração do formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Mostrar mensagem de carregamento
            formStatus.innerHTML = '<p class="sending">Enviando mensagem...</p>';
            
            // Enviar o email usando EmailJS
            emailjs.sendForm('service_default', 'template_default', this)
                .then(function() {
                    formStatus.innerHTML = '<p class="success">Mensagem enviada com sucesso!</p>';
                    contactForm.reset();
                }, function(error) {
                    formStatus.innerHTML = '<p class="error">Erro ao enviar mensagem. Tente novamente.</p>';
                    console.error('Erro:', error);
                });
        });
    }
    
    // Botão Voltar ao Topo
    const backToTopButton = document.getElementById('back-to-top');
    
    // Mostrar ou esconder o botão com base na posição de rolagem
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Ação de clique no botão
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hero Slider
    const heroSlider = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-slider .swiper-button-next',
            prevEl: '.hero-slider .swiper-button-prev',
        },
    });

    // Empilhadeiras Slider
    const empilhadeirasSlider = new Swiper('.empilhadeiras-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
        }
    });

    // Depoimentos Slider
    const depoimentosSlider = new Swiper('.depoimentos-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.depoimentos-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Menu Mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const nav = document.querySelector('nav');
    
    menuMobile.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuMobile.classList.toggle('active');
    });

    // Header Scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll para links de navegação
    const navLinks = document.querySelectorAll('nav ul li a, .footer-links ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuMobile.classList.remove('active');
                }
            }
        });
    });
});