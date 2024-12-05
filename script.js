<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acompanhamento de Apostas</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <!-- Seletor de Apostador -->
    <div id="seletor">
        <h1>Selecione o Apostador</h1>
        <select id="apostador">
            <option value="" disabled selected>Escolha um apostador</option>
            <option value="Maryssa">Maryssa</option>
            <option value="Carlos">Carlos</option>
            <option value="Fabricio">Fabricio</option>
            <option value="Dhemmerson">Dhemmerson</option>
            <option value="Jhon">Jhon</option>
            <option value="Enzo">Enzo</option>
            <option value="Meire">Meire</option>
        </select>
        <button id="mostrar-apostas">Mostrar Apostas</button>
    </div>

    <!-- Lista de Apostas -->
    <div id="apostas-container" class="hidden">
        <div id="apostas"></div>
    </div>

    <script>
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

                    // Alterna as cores ao clicar
                    let clickCount = 0;
                    item.addEventListener("click", () => {
                        clickCount++;
                        if (clickCount === 1) {
                            item.classList.add("vermelho");
                            item.classList.remove("verde");
                        } else if (clickCount === 2) {
                            item.classList.add("verde");
                            item.classList.remove("vermelho");
                            clickCount = 0; // Reseta o contador
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
    </script>
</body>
</html>
