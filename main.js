
const personajes = file;

console.log(personajes);

function crearTarjetas() {

    let cards = document.getElementById("cards_personajes");

    let code = ""

    for (let index = 0; index < personajes.length; index++) {
        let personaje = personajes[index];

        code =
            `
        <div class="card" style="width: 18rem;">
            
            <img src="${personaje.img}" class="card-img-top" alt="imagen de ${personaje.name}">
            
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">Año de nacimiento: ${personaje.birth_year}</p>
                <p class="card-text">Genero: ${personaje.gender}</p>
                <p class="card-text">Color de ojos: ${personaje.eye_color}</p>
            </div>
        </div>
        ` + code;

    }

    cards.innerHTML = code;

}

function boton_buscar() {
    let personaje = buscar_personaje();

    let card = document.getElementById("card_personaje");

    card.innerHTML =
        `
    <div class="card" style="width: 18rem;">
        <img src="${personaje.img}" class="card-img-top" alt="imagen de ${personaje.name}">
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Año de nacimiento: ${personaje.birth_year}</p>
            <p class="card-text">Genero: ${personaje.gender}</p>
            <p class="card-text">Color de ojos: ${personaje.eye_color}</p>
        </div>
    </div>
    `
}

function buscar_personaje() {
    let nombre_personaje = document.getElementById("nombre_personaje").value;

    console.log(`Personaje a buscar: ${nombre_personaje}`);

    for (let i = 0; i < personajes.length; i++) {

        if (personajes[i].name == nombre_personaje) {
            return personajes[i];
        } else {
            console.log(personajes[i].name);
        }

    }
}

crearTarjetas();