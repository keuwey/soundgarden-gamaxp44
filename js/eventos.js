const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';
const listarEventos = async () => {
    const eventos = await fetch(SOUND_URL, {
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
    const tbody = document.querySelector('.exibe-event');
    let htmlEventos = "";
    eventos.forEach(evento => {
        htmlEventos +=`
                    <article class="evento card p-5 m-3">
                    <h2>${evento.name} - ${evento.scheduled}</h2>
                    <h4>${evento.attractions.join(', ')}</h4>
                    <p>${evento.description}</p>
                    <a href="reservar-ingresso.html?id=${evento._id}" class="btn btn-primary">reservar ingresso</a>
                    </article>
                    `;
            });
    tbody.innerHTML = htmlEventos;
}
listarEventos();