document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const text = "Demonstração Criativa com CSS";
    const typingEffect = document.querySelector(".typing-effect");
    function typeText() {
        if (index < text.length) {
            typingEffect.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    const elements = document.querySelectorAll(".scroll-animation");//animação rolar pg
    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();


    const backToTop = document.getElementById("backToTop");//botao voltar ao topo
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const toggleMode = document.getElementById("toggleMode");//botao tema
    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        toggleMode.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀";
    });
});
