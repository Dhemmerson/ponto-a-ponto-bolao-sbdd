// Dados das apostas
const apostas = {
    Maryssa: [
        "Carlos saiu com Emilly",
        "Fabricio saiu com Pablo",
        "Dhemmerson saiu com Jhon",
        "Jhon saiu com Maria",
        "Enzo saiu com Nayane",
        "Meire saiu com Marcos"
    ],
    Carlos: [
        "Maryssa saiu com Enzo",
        "Fabricio saiu com Marcos",
        "Dhemmerson saiu com Emilly",
        "Jhon saiu com Nayane",
        "Enzo saiu com Jhon",
        "Meire saiu com Victor"
    ],
    Fabricio: [
        "Maryssa saiu com Meire",
        "Carlos saiu com Joyce",
        "Dhemmerson saiu com Jack",
        "Jhon saiu com Marcos",
        "Enzo saiu com Emilly",
        "Meire saiu com Victor"
    ],
    Dhemmerson: [
        "Maryssa saiu com Emilly",
        "Carlos saiu com Dhemmerson",
        "Fabricio saiu com Enzo",
        "Jhon saiu com Nayane",
        "Enzo saiu com Joyce",
        "Meire saiu com Jack"
    ],
    Jhon: [
        "Maryssa saiu com Enzo",
        "Carlos saiu com Fabricio",
        "Fabricio saiu com Marcos",
        "Dhemmerson saiu com Victor",
        "Enzo saiu com Jack",
        "Meire saiu com Jhon"
    ],
    Enzo: [
        "Maryssa saiu com Enzo",
        "Carlos saiu com Fabricio",
        "Fabricio saiu com Joyce",
        "Dhemmerson saiu com Nayane",
        "Jhon saiu com Emilly",
        "Meire saiu com Victor"
    ],
    Meire: [
        "Maryssa saiu com Nayane",
        "Carlos saiu com Emilly",
        "Dhemmerson saiu com Maria",
        "Jhon saiu com Carlos",
        "Fabricio saiu com Dhemmerson",
        "Enzo saiu com Fabricio"
    ]
};

// Lógica para mostrar as apostas
document.getElementById("mostrar-apostas").addEventListener("click", () => {
    console.log("Botão clicado!");

    const apostador = document.getElementById("apostador").value;
    const container = document.getElementById("apostas");
    const apostasContainer = document.getElementById("apostas-container");
    const parabensMessage = document.getElementById("parabens-message");

    // Verifica se a data e hora atual são válidas para mostrar a mensagem
    const hoje = new Date();
const evento = new Date(2024, 11, 05); // 05/12/2024, sem hora definida
const agora = new Date();

// Verifica se o evento é hoje e se a hora atual é igual ou posterior ao evento
const eventoValido = hoje.getDate() === evento.getDate() &&
                      hoje.getMonth() === evento.getMonth() &&
                      hoje.getFullYear() === evento.getFullYear() &&
                      agora >= evento;

    if (apostador) {
        console.log("Apostas encontradas:", apostas[apostador]); // Debug para verificar os dados
        container.innerHTML = `<h2>Apostas de ${apostador}</h2>`;
        const lista = document.createElement("ul");

        apostas[apostador].forEach(aposta => {
            const item = document.createElement("li");
            item.textContent = aposta;
            item.classList.add("aposta");

            // Alterna as cores ao clicar
            let clickCount = 0;
            item.addEventListener("click", () => {
                clickCount++;
                if (clickCount === 1) {
                    item.classList.add("verde");
                    item.classList.remove("vermelho");
                } else if (clickCount === 2) {
                    item.classList.add("vermelho");
                    item.classList.remove("verde");
                    clickCount = 0; // Reseta o contador
                }

                // Verifica se todas as apostas estão verdes
                const apostasVerde = Array.from(document.querySelectorAll('.aposta')).every(aposta => aposta.classList.contains('verde'));

                // Se todas as apostas estão verdes e o evento é válido
                if (apostasVerde && eventoValido) {
                    // Exibir a mensagem de parabéns
                    parabensMessage.style.display = 'block';

                    // Disparar confetes
                    confetti();
                }
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

// Função para disparar confetes
function confetti() {
    // Disparando confetes para cima com gravidade negativa
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0 }, // Mudando a origem para o topo da tela
        angle: 90,         // Garantir que os confetes se movam para cima
        gravity: -0.3      // Definir uma gravidade negativa para os confetes subirem
    });
}
