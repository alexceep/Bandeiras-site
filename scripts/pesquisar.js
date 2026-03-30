const inputPesquisa = document.getElementById('pesquisaBan');
const sugestoesDiv = document.querySelector('.sugestoesLista');

inputPesquisa.addEventListener('input', function () {
    const termo = inputPesquisa.value.trim().toLowerCase();

    if(termo === "") {
        sugestoesDiv.style.display = "none";
    }else{
        sugestoesDiv.style.display = "block";
        atualizarSugestoes(termo);
    }
});

function atualizarSugestoes(termo) {
    sugestoesDiv.innerHTML = "";
    const sugestoes = paises.filter(pais =>
        pais.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(termo)
    );

    if (sugestoes.length === 0){
        sugestoesDiv.style.display = "none";
        return;
    }

    sugestoes.forEach(pais => {
        const item = document.createElement('div');
        item.classList.add('sugestaoItem');
        item.innerHTML = `<img src="${pais.bandeira}" alt="${pais.nome}" style="width: 30px; height: 20px; margin-right: 10px;">
            ${pais.nome}`;

        item.addEventListener('click', function() {
            inputPesquisa.value = pais.nome;
            sugestoesDiv.style.display = "none";
            mostrarResultado(pais);
        });

        sugestoesDiv.appendChild(item);
    });
}

function mostrarResultado(pais) {
    document.getElementById('bandeiraResultado').style.backgroundImage = `url(${pais.bandeira})`;
    document.getElementById('bandeiraResultado').style.backgroundSize = 'cover';
    document.getElementById('nomePais').textContent = pais.nome;
    document.getElementById('continentePais').textContent = `Continente: ${pais.continente}`;
    document.getElementById('capitalPais').textContent = `Capital: ${pais.capital}`;
}

document.getElementById('pesquisaForm').addEventListener('submit', function(event){
    event.preventDefault();

let nomePais = document.getElementById('pesquisaBan').value.trim().toLowerCase();

    if(nomePais === ""){
        return;
    }

nomePais = nomePais.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
const pais = paises.find(p => p.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === nomePais);

    if(pais){
        document.getElementById('bandeiraResultado').style.backgroundImage = `url(${pais.bandeira})`;
        document.getElementById('bandeiraResultado').style.backgroundSize = 'cover';
        document.getElementById('nomePais').textContent = pais.nome;
        document.getElementById('continentePais').textContent = `Continente: ${pais.continente}`;
        document.getElementById('capitalPais').textContent = `Capital: ${pais.capital}`;
    }else{
        document.getElementById('bandeiraResultado').style.backgroundColor = '#ddd';
        document.getElementById('bandeiraResultado').style.backgroundImage = '';
        document.getElementById('nomePais').textContent = "País não encontrado";
        document.getElementById('continentePais').textContent = "Continente: Não Disponível";
        document.getElementById('capitalPais').textContent = "Capital: Não Disponível";
    }
});