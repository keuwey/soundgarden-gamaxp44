const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/events"

const formEditar = document.getElementById("cadastro-evento");

const buscaParametro = () => {

    const url = new URL(window.location.href);

    const id = url.searchParams.get('id');

    return id;
}

const exibirEvento = async () => {
  const response = await fetch(`${SOUND_URL}/${buscaParametro()}`, {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
  }
})
  const dadosEvento = await response.json()

    inputNome.value = dadosEvento.name;
    inputAtracoes.value = dadosEvento.attractions.join(', ');
    inputBanner.value = dadosEvento.poster;
    inputDescricao.value = dadosEvento.description;
    inputData.value = dadosEvento.scheduled;
    inputLotacao.value = dadosEvento.number_tickets;
}

exibirEvento();

formEditar.onsubmit = async (event) => {
  event.preventDefault()
  await fetch(`${SOUND_URL}/${buscaParametro()}`, { 
    method: "DELETE", 
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    }
})
  window.location.href = "admin.html"
}