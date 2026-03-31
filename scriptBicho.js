const criatura = document.getElementById("bichinho");
const btn = document.getElementById("btn");
const fundoDia = "bg.png";
const fundoNoite = "bg_noite.png";
const toggle = document.getElementById("mudarTema");
const estrelasContainer = document.getElementById("estrelas");

const estados = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;
let bichoMorto = false;

for (let i = 0; i < 120; i++) {
    const estrela = document.createElement("div");
    estrela.classList.add("estrela");
    
    const tamanho = Math.random() * 5 + 2;
    estrela.style.width = `${tamanho}px`;
    estrela.style.height = `${tamanho}px`;
    estrela.style.top = `${Math.random() * 100}%`;
    estrela.style.left = `${Math.random() * 100}%`;
    estrela.style.animationDuration = `${Math.random() * 2 + 1}s`;
    estrela.style.opacity = Math.random();
    
    estrelasContainer.appendChild(estrela);
}


function Noite() {
    document.body.style.backgroundImage = `url('${fundoNoite}')`;
    estrelasContainer.style.opacity = 1;
} 
function Dia() {
    document.body.style.backgroundImage = `url('${fundoDia}')`;
    estrelasContainer.style.opacity = 0;
}

toggle.addEventListener("change", () => {
    if(toggle.checked) Noite();
    else Dia();
});


function controlador() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        contador++;
        console.log("Tempo:", contador);

        if (contador === 10) criatura.src = estados.puto;
        if (contador === 20) {
            criatura.src = estados.morto;
            bichoMorto = true;
            btn.style.pointerEvents = "none";
            btn.style.opacity = "0.5";
        }
    }, 1000);
}

controlador();   

function alimentar() {
    if (bichoMorto) {
        console.log("Impossível de alimentar");
        return;
    }

    contador = 0;
    if (timeoutClique) clearTimeout(timeoutClique);
    if (timeoutBack) clearTimeout(timeoutBack);

    criatura.src = estados.comendo;

    timeoutClique = setTimeout(() => {
        criatura.src = estados.alimentado;
        timeoutBack = setTimeout(() => {
            criatura.src = estados.normal;
        }, 1000);
    }, 1000);
}


function mostrarFerlini() {
    const modalHTML = `
        <div id="modal-ferlini" class="modal modal-open">
            <div class="modal-box max-w-sm mx-auto text-center">
                <h3 class="font-bold text-2xl mb-4">🎉 BOTÃO SECRETO ENCONTRADO!</h3>
                <img src="Ferlini.jpeg" alt="Professor Ferlini" class="w-full rounded-xl shadow-2xl mx-auto">
                <p class="mt-4 text-lg">Você Encontrou o Gostosinho Secreto!</p>
                <div class="modal-action">
                    <button onclick="document.getElementById('modal-ferlini').classList.remove('modal-open'); document.getElementById('modal-ferlini').remove()" 
                            class="btn btn-primary w-full">Fechar</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}