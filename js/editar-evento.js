const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/events";


const formCadastroEvento = document.getElementById("cadastro-evento");

const buscaParametro = () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    return id;
}

const exibirEvento = async () => {
    const dadosEvento = await fetch(`${SOUND_URL}/${buscaParametro()}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => response.json());
    console.log(dadosEvento);

    
    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");


    inputNome.value = dadosEvento.name;
    inputBanner.value = dadosEvento.poster;
    inputDescricao.value = dadosEvento.description;
    inputAtracoes.value = dadosEvento.attractions.join(', ');
    inputData.value = dadosEvento.scheduled;
    inputLotacao.value = dadosEvento.number_tickets;
};

exibirEvento();

const urlIdentificado = SOUND_URL + "/" + buscaParametro();
    console.log(urlIdentificado);

formCadastroEvento.addEventListener('submit', async (event) =>{
    event.preventDefaut();

    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");
    
    const fullDateTime = new Date(inputData.value);

    const editarEventoOBJ = {
        "name": inputNome.value,
        "poster": inputBanner.value,
        "attractions": inputAtracoes.value.split(","),
        "description": inputDescricao.value,
        "scheduled": fullDateTime.toISOString(),
        "number_tickets": inputLotacao.value
    }

    console.log(editarEventoOBJ);

    const editarEventoJSON = JSON.stringify(editarEventoOBJ);

    

    const respostaEdit = await fetch(urlIdentificado, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: editarEventoJSON
    }).then((response) => {
        return response.json();
    }).then((responseOBJ) => {
        console.log(responseOBJ);
        /* window.location.replace('admin.html'); */
    }); 
});
