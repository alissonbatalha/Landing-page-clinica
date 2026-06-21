/* ==========================================
   CLÍNICA SAÚDE PREMIUM
   JAVASCRIPT COMPLETO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuToggle.innerHTML =
                navbar.classList.contains("active")
                    ? "✕"
                    : "☰";

        });

    }

    /* ==========================================
       FECHAR MENU AO CLICAR NO LINK
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                navbar.classList.remove("active");
                menuToggle.innerHTML = "☰";

            }

        });

    });

    /* ==========================================
       HEADER INTELIGENTE
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.08)";

            header.style.background =
                "rgba(255,255,255,.97)";

        } else {

            header.style.boxShadow = "none";

            header.style.background =
                "rgba(255,255,255,.92)";

        }

    });

    /* ==========================================
       SCROLL SUAVE
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        });

    });

    /* ==========================================
       MENU ATIVO POR SEÇÃO
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    function activeMenu() {

        let scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight =
                section.offsetHeight;

            const sectionTop =
                section.offsetTop - 150;

            const sectionId =
                section.getAttribute("id");

            const menuLink =
                document.querySelector(
                    `.nav-links a[href="#${sectionId}"]`
                );

            if (!menuLink) return;

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ) {

                menuLink.classList.add("active");

            } else {

                menuLink.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ==========================================
       ANIMAÇÕES AO ROLAR
    ========================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .feature-card, .doctor-card, .testimonial-card, .advantage-card, .stat"
    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(40px)";
        element.style.transition =
            "all .8s ease";

        observer.observe(element);

    });

    /* ==========================================
       CONTADORES ANIMADOS
    ========================================== */

    const stats = document.querySelectorAll(".stat h3");

    function animateCounter(element, target, prefix = "", suffix = "") {

        let current = 0;

        const increment = target / 80;

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;
                clearInterval(timer);

            }

            element.textContent =
                prefix +
                Math.floor(current).toLocaleString("pt-BR") +
                suffix;

        }, 20);

    }

    const counterObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const el = entry.target;

                if (el.dataset.animated) return;

                el.dataset.animated = "true";

                const text = el.textContent;

                if (text.includes("5000")) {

                    animateCounter(el, 5000, "+");

                } else if (text.includes("10")) {

                    animateCounter(el, 10, "+");

                } else if (text.includes("4.9")) {

                    let rating = 0;

                    const timer = setInterval(() => {

                        rating += 0.1;

                        if (rating >= 4.9) {

                            rating = 4.9;
                            clearInterval(timer);

                        }

                        el.textContent =
                            "⭐ " + rating.toFixed(1);

                    }, 40);

                }

            });

        },

        {
            threshold: 0.6
        }

    );

    stats.forEach(stat => {

        counterObserver.observe(stat);

    });

    /* ==========================================
       BOTÃO WHATSAPP FLUTUANTE
    ========================================== */

    const whatsappButton =
        document.createElement("a");

    whatsappButton.href =
        "https://wa.me/5511999999999";

    whatsappButton.target = "_blank";

    whatsappButton.innerHTML = "💬";

    whatsappButton.classList.add(
        "floating-whatsapp"
    );

    document.body.appendChild(
        whatsappButton
    );

    /* ==========================================
       APARECER APÓS SCROLL
    ========================================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            whatsappButton.style.opacity = "1";
            whatsappButton.style.visibility = "visible";
            whatsappButton.style.transform =
                "translateY(0)";

        } else {

            whatsappButton.style.opacity = "0";
            whatsappButton.style.visibility = "hidden";
            whatsappButton.style.transform =
                "translateY(20px)";

        }

    });

    /* ==========================================
       EFEITO PARALLAX LEVE NO HERO
    ========================================== */

    const heroImage =
        document.querySelector(".hero-image img");

    window.addEventListener("scroll", () => {

        if (!heroImage) return;

        let offset =
            window.pageYOffset * 0.08;

        heroImage.style.transform =
            `translateY(${offset}px)`;

    });

    /* ==========================================
       REVEAL DA HERO
    ========================================== */

    const heroContent =
        document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform =
            "translateY(30px)";

        setTimeout(() => {

            heroContent.style.transition =
                "all 1s ease";

            heroContent.style.opacity = "1";

            heroContent.style.transform =
                "translateY(0)";

        }, 300);

    }

    /* ==========================================
       FORMULÁRIO
    ========================================== */

    const form =
        document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", e => {

            e.preventDefault();

            alert(
                "Mensagem enviada com sucesso! Entraremos em contato em breve."
            );

            form.reset();

        });

    }

});