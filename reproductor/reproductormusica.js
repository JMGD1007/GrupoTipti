/* START: BUSCADOR*/
const input = document.getElementById('input')
const boton = document.getElementById('buttom_search')
const lista = document.getElementById('lista')
const canciones = ['Cancion 1', 'Cancion 2', 'Cancion 3 ', 'Cancion 22 ' ]


boton.addEventListener('click', function () {
  const valor = input.value

  const cancionesQueCumplen = canciones.filter(c => c.includes(valor))

  lista.innerHTML = cancionesQueCumplen.map(cancionQueCumplio => `<li>${cancionQueCumplio}</li>`)
  if (cancionesQueCumplen.length === 0) {
    lista.innerHTML = '<li>No se encontraron coincidencias.</li>'
  }
})
/* END: BUSCADOR*/


/* START: CLASS SONG - RESULTADOS*/

class Song {
    constructor(nombre, artista, anio, duracion, genero, cover, urlSong) {
        this.nombre = nombre;
        this.artista = artista;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.cover = cover;
        this.urlSong = urlSong;
    }

    getSongnombreandartista(): string {
        return '${this.nombre} - ${this.artista}';
    }

    getSonganio(){
        return this.anio;
    }

    getSongduracion(){
        return this.duracion;
    }

    getSonggenero(){
        return this.genero;
    }

    getSongcover(){
        return this.cover;
    }

    getSongurlSong(){
        return this.urlSong;
    }

}

/* END: CLASS SONG - MIS RESULTADOS*/

/*

class Playlist {
    constructor() {
        this.canciones = [];
    }

    addSong(song) {
        this.canciones.unshift(song);
    }

    removeSong(song) {
        const index = this.canciones.indexOf(song);
        if (index !== -1) {
            this.canciones.splice(index, 1);
        }
    }
}

const miPlaylist = new Playlist();

// Añadir canciones a la lista de reproducción
miPlaylist.addSong(cancion1);
miPlaylist.addSong(cancion2);

// Mostrar la lista de reproducción actual
console.log(miPlaylist.canciones);

// Remover una canción de la lista de reproducción
miPlaylist.removeSong(cancion1);

// Mostrar la lista de reproducción después de la eliminación
console.log(miPlaylist.canciones);

*/ 

/* START: CLASS REPRODUCTOR - REPRODUCTOR*/

class Reproductor {
    catalogodecanciones;
    currentSong;
    constructor (){
        this.catalogodecanciones = [
            new Song(nombre:"cancion 1",artista: "artista 1", anio: "año 1",duracion: "duracion 1", genero: "genero 1", cover: "cover1", urlSong: "C:\Users\jenni\OneDrive\Escritorio\TIPTI\Nueva carpeta\canciones\cancion1.mp3"), /* CHEQUEAR CÓMO PONER EL COVER Y LA CANCION.MP3 -- REPETIR EN EL RESTO*/
            new Song(nombre:"cancion 2",artista: "artista 2", anio: "año 2",duracion: "duracion 2", genero: "genero 2"),
            new Song(nombre:"cancion 3",artista: "artista 3", anio: "año 3",duracion: "duracion 3", genero: "genero 3"),
            new Song(nombre:"cancion 4",artista: "artista 4", anio: "año 4",duracion: "duracion 4", genero: "genero 4"),
            new Song(nombre:"cancion 5",artista: "artista 5", anio: "año 5",duracion: "duracion 5", genero: "genero 5"),
            new Song(nombre:"cancion 6",artista: "artista 6", anio: "año 6",duracion: "duracion 6", genero: "genero 6"),
            new Song(nombre:"cancion 7",artista: "artista 7", anio: "año 7",duracion: "duracion 7", genero: "genero 7"),
            new Song(nombre:"cancion 8",artista: "artista 8", anio: "año 8",duracion: "duracion 8", genero: "genero 8"),
            new Song(nombre:"cancion 9",artista: "artista 9", anio: "año 9",duracion: "duracion 9", genero: "genero 9"),
            new Song(nombre:"cancion 10",artista: "artista 10", anio: "año 10",duracion: "duracion 10", genero: "genero 10"),
            new Song(nombre:"cancion 11",artista: "artista 11", anio: "año 11",duracion: "duracion 11", genero: "genero 11"),
            new Song(nombre:"cancion 12",artista: "artista 12", anio: "año 12",duracion: "duracion 12", genero: "genero 12"),
            new Song(nombre:"cancion 13",artista: "artista 13", anio: "año 13",duracion: "duracion 13", genero: "genero 13"),
            new Song(nombre:"cancion 14",artista: "artista 14", anio: "año 14",duracion: "duracion 14", genero: "genero 14"),
            new Song(nombre:"cancion 15",artista: "artista 15", anio: "año 15",duracion: "duracion 15", genero: "genero 15"),
            new Song(nombre:"cancion 16",artista: "artista 16", anio: "año 16",duracion: "duracion 16", genero: "genero 16"),
            new Song(nombre:"cancion 17",artista: "artista 17", anio: "año 17",duracion: "duracion 17", genero: "genero 17"),
            new Song(nombre:"cancion 18",artista: "artista 18", anio: "año 18",duracion: "duracion 18", genero: "genero 18"),
            new Song(nombre:"cancion 19",artista: "artista 19", anio: "año 19",duracion: "duracion 19", genero: "genero 19"),
            new Song(nombre:"cancion 20",artista: "artista 20", anio: "año 20",duracion: "duracion 20", genero: "genero 20"),
            new Song(nombre:"cancion 21",artista: "artista 21", anio: "año 21",duracion: "duracion 21", genero: "genero 21"),
            new Song(nombre:"cancion 22",artista: "artista 22", anio: "año 22",duracion: "duracion 22", genero: "genero 22"),
            new Song(nombre:"cancion 23",artista: "artista 23", anio: "año 23",duracion: "duracion 23", genero: "genero 23"),
            new Song(nombre:"cancion 24",artista: "artista 24", anio: "año 24",duracion: "duracion 24", genero: "genero 24"),
            new Song(nombre:"cancion 25",artista: "artista 25", anio: "año 25",duracion: "duracion 25", genero: "genero 25"),
            new Song(nombre:"cancion 26",artista: "artista 26", anio: "año 26",duracion: "duracion 26", genero: "genero 26"),
            new Song(nombre:"cancion 27",artista: "artista 27", anio: "año 27",duracion: "duracion 27", genero: "genero 27"),
            new Song(nombre:"cancion 28",artista: "artista 28", anio: "año 28",duracion: "duracion 28", genero: "genero 28"),
            new Song(nombre:"cancion 29",artista: "artista 29", anio: "año 29",duracion: "duracion 29", genero: "genero 29"),
            new Song(nombre:"cancion 30",artista: "artista 30", anio: "año 30",duracion: "duracion 30", genero: "genero 30"),    
        ];
        this.mostrarcanciones ();
        this.currentSong = this.catalogodecanciones[0];

    }
}

/* START: MOSTRAR CANCIONES */
mostrarcanciones = function (): void {
    let canciones: HTMLElement = document.getElementById(elementId: "canciones");
    this.catalogodecanciones.forEach(Song => {
        canciones.innerHTML += "<p class = "cancion"> ${Song.nombre} </p>"
    }); /* REVISAR EL NOMBRE DEL ELEMENTO EN NUESTRO CÓDIGO HTML*/
}
/* END:  MOSTRAR CANCIONES */



// Cambio de portada
cambioPortada = function () {
    const
}

/* START: BOTONES DE REPRODUCCIÓN*/

/* END: BOTONES DE REPRODUCCIÓN*/

// Definir la función play
function play() {
    if (this.currentSong !== undefined) { // Verificar si hay una canción actual
        this.Audio.src = "/canciones/" + this.currentSong.urlSong; // Establecer la URL de la canción
        this.Audio.play(); // Reproducir la canción
    } else {
        // Si no hay una canción actual, determinar qué hacer según la lista de reproducción actual
        switch (this.currentPlaylist) {
            case 'favoritos':
                // Lógica para reproducir la primera canción de la lista de favoritos
                if (this.favoritos.length > 0) {
                    this.Audio.src = "/canciones/" + this.favoritos[0].urlSong; // Establecer la URL de la primera canción en la lista de favoritos
                    this.Audio.play(); // Reproducir la canción
                } else {
                    console.log("No hay canciones en la lista de favoritos.");
                }
                break;
            // Agrega más casos según sea necesario para otras listas de reproducción
            default:
                console.log("No se reconoce la lista de reproducción actual.");
        }
    }
}



class Favoritos {
    constructor() {
        this.canciones = [];
    }

    addSong(song) {
        this.canciones.unshift(song);
    }

    removeSong(song) {
        const index = this.canciones.indexOf(song);
        if (index !== -1) {
            this.canciones.splice(index, 1);
        }
    }
}

const misFavoritos = new Favoritos();

// Agregar canciones a la lista de favoritos
misFavoritos.addSong(cancion1);
misFavoritos.addSong(cancion2);

// Mostrar la lista de favoritos actual
console.log(misFavoritos.canciones);

// Remover una canción de la lista de favoritos
misFavoritos.removeSong(cancion1);

// Mostrar la lista de favoritos después de la eliminación
console.log(misFavoritos.canciones);*/
