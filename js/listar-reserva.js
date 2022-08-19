const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings';

const buscaParametro = () => {

    const url = new URL(window.location.href);

    const id = url.searchParams.get('id');

    return id;
}
console.log(buscaParametro())

const listarReserva = async () => {
    const eventos = await fetch(SOUND_URL + "/event/" + buscaParametro(), {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resposta) => {
        //retorna lista em array de objetos
        return resposta.json();
    });
    // console.log(eventos);
    const tbody = document.querySelector('.listar-reserva tbody');
    let htmlEventos = "";
    eventos.forEach(evento => {
        htmlEventos += `
            <tr>
                <th scope="row">#</th>
                <td>${evento.owner_name}</td>
                <td>${evento.owner_email}</td>
                <td>${evento.number_tickets}</td>
              </tr>
        `;
    });
    tbody.innerHTML = htmlEventos;
}
listarReserva();