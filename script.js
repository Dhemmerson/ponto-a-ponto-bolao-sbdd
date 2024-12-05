// Dados das apostas
const apostas = {
    Maryssa: [
        "Carlos saiu com Emilly",
        "Fabricio saiu com Pablo",
        "Dhemmerson saiu com Jhon",
        "Jhon saiu com Maria",
        "Enzo saiu com Nayane"
    ],
    Carlos: [
        "Maryssa saiu com Enzo",
        "Fabricio saiu com Marcos",
        "Dhemmerson saiu com Emilly",
        "Jhon saiu com Nayane",
        "Enzo saiu com Jhon"
    ],
    Fabricio: [
        "Maryssa saiu com Meire",
        "Carlos saiu com Joyce",
        "Dhemmerson saiu com Jack",
        "Jhon saiu com Marcos",
        "Enzo saiu com Emilly"
    ],
    Dhemmerson: [
        "Maryssa saiu com Emilly",
        "Carlos saiu com Dhemmerson",
        "Fabricio saiu com Enzo",
        "Jhon saiu com Nayane",
        "Enzo saiu com Joyce"
    ],
    Jhon: [
        "Maryssa saiu com Enzo",
        "Carlos saiu com Fabricio",
        "Fabricio saiu com Marcos",
        "Dhemmerson saiu com Victor",
        "Enzo saiu com Jack"
    ],
    Enzo: [
        "Maryssa saiu com Enzo",
        "Carlos saiu com Fabricio",
        "Fabricio saiu com Joyce",
        "Dhemmerson saiu com Nayane",
        "Jhon saiu com Emilly"
    ]
};

// Mostra as apostas do apostador selecionado
document.getElementById("mostrar-apostas").addEventListener("click", () => {
    const apostador = document.getElementById("apostador").value;
    const container = document.getElementById("apostas");
    const apostasContainer = document.getElementById("apostas-container");

    if (apostador) {
        container.innerHTML = `<h2>${apostador}</h2>`;
        const lista = document.createElement("ul");

        apostas[apostador].forEach(aposta => {
            const item = document.createElement("li");
            item.textContent = aposta;
            item.classList.add("aposta");

            // Alterna as cores entre verde e vermelho ao clicar
            let isGreen = false;
            item.addEventListener("click", () => {
                if (isGreen) {
                    item.classList.add("vermelho");
                    item.classList.remove("verde");
                } else {
                    item.classList.add("verde");
                    item.classList.remove("vermelho");
                }
                isGreen = !isGreen; // Alterna o estado
            });

            lista.appendChild(item);
        });

        container.appendChild(lista);
        document.getElementById("seletor").classList.add("hidden");
        apostasContainer.classList.remove("hidden");
    } else {
        alert("Por favor, selecione um apostador.");
    }
});
