function TraerCaracteres(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data =>{
        done(data)
    });

}

TraerCaracteres(data =>{
    data.results.forEach(personaje =>{

        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                <img src="${personaje.image}" alt="${personaje.name}">
                </div>
                <span>${personaje.name}</span>
                <p>${personaje.species}</p>
                <p>${personaje.gender}</p>
                <p>${personaje.status}</p>
            </article>
            `);

            // mostrar los datos obtenidos del api

            const main = document.querySelector("main");

            main.append(article);

    });
});