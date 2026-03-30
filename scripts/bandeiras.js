const paises = [
    {
        nome: "África do Sul",
        bandeira: "imagens/bandeiras/africa/africaDoSul.png",
        continente: "África",
        capital: "Bloemfontein, Cidade do Cabo e Pretória"
    },
    {
        nome: "Angola",
        bandeira: "imagens/bandeiras/africa/angola.png",
        continente: "África",
        capital: "Luanda"
    },
    {
        nome: "Argélia",
        bandeira: "imagens/bandeiras/africa/argelia.jpg",
        continente: "África",
        capital: "Argel"
    },
    {
        nome: "Chade",
        bandeira: "imagens/bandeiras/africa/chade.png",
        continente: "África",
        capital: "Jamena"
    },
    {
        nome: "Egito",
        bandeira: "imagens/bandeiras/africa/egito.png",
        continente: "África",
        capital: "Cairo"
    },
    {
        nome: "Madagascar",
        bandeira: "imagens/bandeiras/africa/madagascar.png",
        continente: "África",
        capital: "Antananarivo"
    },
    {
        nome: "Marrocos",
        bandeira: "imagens/bandeiras/africa/marrocos.png",
        continente: "África",
        capital: "Rabat"
    },
    {
        nome: "Zâmbia",
        bandeira: "imagens/bandeiras/africa/zambia.png",
        continente: "África",
        capital: "Lusaca"
    },

    {
        nome: "Argentina",
        bandeira: "imagens/bandeiras/americas/argentina.png",
        continente: "América",
        capital: "Buenos Aires"
    },
    {
        nome: "Bolivia",
        bandeira: "imagens/bandeiras/americas/bolivia.png",
        continente: "América",
        capital: "Sucre e La Paz"
    },
    {
        nome: "Brasil",
        bandeira: "imagens/bandeiras/americas/brasil.png",
        continente: "América",
        capital: "Brasília"
    },
    {
        nome: "Canadá",
        bandeira: "imagens/bandeiras/americas/canada.png",
        continente: "América",
        capital: "Ottawa"
    },
    {
        nome: "El Salvador",
        bandeira: "imagens/bandeiras/americas/elSalvador.png",
        continente: "América",
        capital: "San Salvador"
    },
    {
        nome: "Estados Unidos",
        bandeira: "imagens/bandeiras/americas/estadosUnidos.png",
        continente: "América",
        capital: "Washington, d.c."
    },
    {
        nome: "Guatemala",
        bandeira: "imagens/bandeiras/americas/guatemala.png",
        continente: "América",
        capital: "Cidade da Guatemala"
    },
    {
        nome: "México",
        bandeira: "imagens/bandeiras/americas/mexico.png",
        continente: "América",
        capital: "Cidade do México"
    },

    {
        nome: "Arábia Saudita",
        bandeira: "imagens/bandeiras/asia/arabiaSaudita.png",
        continente: "Ásia",
        capital: "Riade"
    },
    {
        nome: "China",
        bandeira: "imagens/bandeiras/asia/china.png",
        continente: "Ásia",
        capital: "Pequim"
    },
    {
        nome: "Coréia do Sul",
        bandeira: "imagens/bandeiras/asia/coreiaDoSul.png",
        continente: "Ásia",
        capital: "Seul"
    },
    {
        nome: "Índia",
        bandeira: "imagens/bandeiras/asia/india.png",
        continente: "Ásia",
        capital: "Nova Deli"
    },
    {
        nome: "Japão",
        bandeira: "imagens/bandeiras/asia/japao.png",
        continente: "Ásia",
        capital: "Tóquio"
    },
    {
        nome: "Laos",
        bandeira: "imagens/bandeiras/asia/laos.png",
        continente: "Ásia",
        capital: "Vientiane"
    },
    {
        nome: "Líbano",
        bandeira: "imagens/bandeiras/asia/libano.png",
        continente: "Ásia",
        capital: "Beirute"
    },
    {
        nome: "Paquistão",
        bandeira: "imagens/bandeiras/asia/paquistao.png",
        continente: "Ásia",
        capital: "Islamabade"
    },

    {
        nome: "Alemanha",
        bandeira: "imagens/bandeiras/europa/alemanha.png",
        continente: "Europa",
        capital: "Berlim"
    },
    {
        nome: "Áustria",
        bandeira: "imagens/bandeiras/europa/austria.png",
        continente: "Europa",
        capital: "Viena"
    },
    {
        nome: "Espanha",
        bandeira: "imagens/bandeiras/europa/espanha.png",
        continente: "Europa",
        capital: "Madri"
    },
    {
        nome: "França",
        bandeira: "imagens/bandeiras/europa/franca.png",
        continente: "Europa",
        capital: "París"
    },
    {
        nome: "Inglaterra",
        bandeira: "imagens/bandeiras/europa/inglaterra.jpg",
        continente: "Europa",
        capital: "Londres"
    },
    {
        nome: "Itália",
        bandeira: "imagens/bandeiras/europa/italia.png",
        continente: "Europa",
        capital: "Roma"
    },
    {
        nome: "Portugal",
        bandeira: "imagens/bandeiras/europa/portugal.png",
        continente: "Europa",
        capital: "Lisboa"
    },
    {
        nome: "Suécia",
        bandeira: "imagens/bandeiras/europa/suecia.png",
        continente: "Europa",
        capital: "Estocolmo"
    },

    {
        nome: "Austrália",
        bandeira: "imagens/bandeiras/oceania/australia.png",
        continente: "Oceania",
        capital: "Camberra"
    },
    {
        nome: "Fiji",
        bandeira: "imagens/bandeiras/oceania/fiji.png",
        continente: "Oceania",
        capital: "Suva"
    },
    {
        nome: "Kiribati",
        bandeira: "imagens/bandeiras/oceania/kiribati.png",
        continente: "Oceania",
        capital: "Taraua"
    },
    {
        nome: "Micronésia",
        bandeira: "imagens/bandeiras/oceania/micronesia.png",
        continente: "Oceania",
        capital: "Paliquir"
    },
    {
        nome: "Nova Zelândia",
        bandeira: "imagens/bandeiras/oceania/novaZelandia.png",
        continente: "Oceania",
        capital: "Wellington"
    },
    {
        nome: "Palau",
        bandeira: "imagens/bandeiras/oceania/palau.png",
        continente: "Oceania",
        capital: "Ngerulmud"
    },
    {
        nome: "Papua-Nova Guiné",
        bandeira: "imagens/bandeiras/oceania/papuaNovaGuine.png",
        continente: "Oceania",
        capital: "Porto Moresby"
    },
    {
        nome: "Tonga",
        bandeira: "imagens/bandeiras/oceania/tonga.png",
        continente: "Oceania",
        capital: "Nucualofa"
    },
];