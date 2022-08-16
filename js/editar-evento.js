const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/events"

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");
const formCadastroEvento = document.getElementById("cadastro-evento");

const buscaParametro = new URLSearchParams(window.location.search);
const id = buscaParametro.get("id");

