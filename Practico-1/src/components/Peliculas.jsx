import PeliculaCard from "./PeliculaCard"

function Peliculas({ addToWatchlist }) {

    const listaPeliculas = [
        {
        id:1,
        titulo:"Interstellar",
        genero:"Ciencia ficción",
        sinopsis:"Un grupo de astronautas viaja a través de un agujero de gusano para salvar a la humanidad.",
        portada: "src/assets/interstellar.jpg"
        },
        {
        id:2,
        titulo:"Inception",
        genero:"Acción / Ciencia ficción",
        sinopsis:"Un ladrón roba secretos entrando en los sueños de las personas.",
        portada: "src/assets/inception.jpg"
        },
        {
        id:3,
        titulo:"The Dark Knight",
        genero:"Acción",
        sinopsis:"Batman enfrenta al Joker en Gotham City.",
        portada: "src/assets/darkKnight.jpg"
        },
        {
        id:4,
        titulo:"The Matrix",
        genero:"Ciencia ficción / Acción",
        sinopsis:"Un hacker descubre que la realidad es una simulación creada por máquinas.",
        portada: "src/assets/matrix.jpg"
        },
        {
        id:5,
        titulo:"Titanic",
        genero:"Drama / Romance",
        sinopsis:"Dos jóvenes se enamoran a bordo del famoso barco que termina en tragedia.",
        portada: "src/assets/titanic.jpg"
        },
        {
        id:6,
        titulo:"Avengers: Endgame",
        genero:"Acción / Superhéroes",
        sinopsis:"Los Vengadores intentan revertir el desastre causado por Thanos.",
        portada: "src/assets/endgame.jpg"
        },
    ]

    return(

        <section className="py-16 bg-gray-950 text-white">

        <h2 className="text-3xl text-center mb-10">
            Películas recomendadas
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {listaPeliculas.map(pelicula => (
            <PeliculaCard
                key={pelicula.id}
                pelicula={pelicula}
                onAdd={addToWatchlist}
            />
            ))}

        </div>

        </section>
    )
}

export default Peliculas