const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/bookings"

const formCadastroReserva = document.getElementById("cadastro-reserva");

const buscaParametro = () => {

    const url = new URL(window.location.href);

    const id = url.searchParams.get('id');

    return id;
}

formCadastroReserva.addEventListener('submit', async (event) =>{
    event.preventDefault(); 

const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTickets = document.getElementById("ticket");

const novaReservaOBJ = {
    "owner_name": inputNome.value,
    "owner_email": inputEmail.value,
    "number_tickets": inputTickets.value,
    "event_id": buscaParametro()
}

console.log(novaReservaOBJ);

const novaReservaJSON = JSON.stringify(novaReservaOBJ);
const resposta = fetch(SOUND_URL, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: novaReservaJSON
}).then((response) => {
    return response.json()
}).then((responseOBJ) => {
    console.log(responseOBJ);
    window.location.href = ("eventos.html")
});
});
