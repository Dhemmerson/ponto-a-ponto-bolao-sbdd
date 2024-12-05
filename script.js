// script.js
document.addEventListener("DOMContentLoaded", () => {
    const apostas = document.querySelectorAll("li.aposta");

    apostas.forEach(aposta => {
        let clickCount = 0;

        aposta.addEventListener("click", () => {
            clickCount++;

            if (clickCount === 1) {
                aposta.classList.add("vermelho");
                aposta.classList.remove("verde");
            } else if (clickCount === 2) {
                aposta.classList.add("verde");
                aposta.classList.remove("vermelho");
                clickCount = 0; // Reseta o contador para alternar
            }
        });
    });
});
