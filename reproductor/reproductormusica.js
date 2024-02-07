/*document.addEventListener("DOMContentLoaded", function () {
    let canciones = ["Cancion 1", "Cancion 2", "Cancion 3"];
    canciones.push("Cancion 4", "Cancion 5", "Cancion 6", "Cancion 7", "Cancion 8", "Cancion 9", "Cancion 10");

    document.getElementById("buttom_search").addEventListener("click", function () {
        let loqueelusuariometio = document.getElementById("buttom_search").value;
        let expresion = new RegExp(loqueelusuariometio, "i");

        let cancionesFiltradas = canciones.filter(
            song => expresion.test(song)
        );
        console.log("resultado de búsqueda: " + cancionesFiltradas);
    });

    debugger;

    let contendorBusqueda = document.getElementById("resultados");

    if (contendorBusqueda) {
        canciones.forEach(
            song => {
                contendorBusqueda.innerHTML += `<li class="cancion">${song} <button class="fa-solid fa-play" id="play-btn"></button>
                    <button class="fa-solid fa-heart" id="fav-btn"></button>
                    <button class="fa-regular fa-heart" id="favsel-btn"></button>
                    <button class="fa-solid fa-plus" id="add-btn"></button>
                </li>`;
            }
        );
    } else {
        console.error("No se encontró el elemento con el ID 'resultados'");
    }
});*/
const input = document.getElementById('input')
const boton = document.getElementById('buttom_search')
const lista = document.getElementById('lista')
const canciones = ['Cancion 1', 'Cancion 2', 'Cancion 3 ','Cancion 22 ' ]


boton.addEventListener('click', function () {
  const valor = input.value


  const cancionesQueCumplen = canciones.filter(c => c.includes(valor))

  lista.innerHTML = cancionesQueCumplen.map(cancionQueCumplio => `<li>${cancionQueCumplio}</li>`)
  if (cancionesQueCumplen.length === 0) {
    lista.innerHTML = '<li>No se encontraron canciones</li>'
  }
})

class Song {
    constructor(nombre, artista, año, duracion, genero) {
        this.nombre = nombre;
        this.artista = artista;
        this.año = año;
        this.duracion = duracion;
        this.genero = genero;
    }
    getSongnombreandartista(): {
        return '${this.nombre} - ${this.artista}';
    }

    getSongaño(): {
        return '${this.año}';
    }

    getSongduracion(): {
        return '${this.duracion}';
    }

    getSonggenero(): {
        return '${this.genero}';
    }
}

const cancion1 = new Song("cancion 1", "artista 1", "año 1", "duracion 1", "genero 1");
const cancion1 = new Song("cancion 2", "artista 2", "año 2", "duracion 2", "genero 2");
const cancion1 = new Song("cancion 3", "artista 3", "año 3", "duracion 3", "genero 3");
const cancion1 = new Song("cancion 4", "artista 4", "año 4", "duracion 4", "genero 4");
const cancion1 = new Song("cancion 5", "artista 5", "año 5", "duracion 5", "genero 5");
const cancion1 = new Song("cancion 6", "artista 6", "año 6", "duracion 6", "genero 6");
const cancion1 = new Song("cancion 7", "artista 7", "año 7", "duracion 7", "genero 7");
const cancion1 = new Song("cancion 8", "artista 8", "año 8", "duracion 8", "genero 8");
const cancion1 = new Song("cancion 9", "artista 9", "año 9", "duracion 9", "genero 9");
const cancion1 = new Song("cancion 10", "artista 10", "año 10", "duracion 10", "genero 10");
const cancion1 = new Song("cancion 11", "artista 11", "año 11", "duracion 11", "genero 11");
const cancion1 = new Song("cancion 12", "artista 12", "año 12", "duracion 12", "genero 12");
const cancion1 = new Song("cancion 13", "artista 13", "año 13", "duracion 13", "genero 13");
const cancion1 = new Song("cancion 14", "artista 14", "año 14", "duracion 14", "genero 14");
const cancion1 = new Song("cancion 15", "artista 15", "año 15", "duracion 15", "genero 15");
const cancion1 = new Song("cancion 16", "artista 16", "año 16", "duracion 16", "genero 16");
const cancion1 = new Song("cancion 17", "artista 17", "año 17", "duracion 17", "genero 17");
const cancion1 = new Song("cancion 18", "artista 18", "año 18", "duracion 18", "genero 18");
const cancion1 = new Song("cancion 19", "artista 19", "año 19", "duracion 19", "genero 19");
const cancion1 = new Song("cancion 20", "artista 20", "año 20", "duracion 20", "genero 20");
const cancion1 = new Song("cancion 21", "artista 21", "año 21", "duracion 21", "genero 21");
const cancion1 = new Song("cancion 22", "artista 22", "año 22", "duracion 22", "genero 22");
const cancion1 = new Song("cancion 23", "artista 23", "año 23", "duracion 23", "genero 23");
const cancion1 = new Song("cancion 24", "artista 24", "año 24", "duracion 24", "genero 24");
const cancion1 = new Song("cancion 25", "artista 25", "año 25", "duracion 25", "genero 25");
const cancion1 = new Song("cancion 26", "artista 26", "año 26", "duracion 26", "genero 26");
const cancion1 = new Song("cancion 27", "artista 27", "año 27", "duracion 27", "genero 27");
const cancion1 = new Song("cancion 28", "artista 28", "año 28", "duracion 28", "genero 28");
const cancion1 = new Song("cancion 29", "artista 29", "año 29", "duracion 29", "genero 29");
const cancion1 = new Song("cancion 30", "artista 30", "año 30", "duracion 30", "genero 30");


console.log(cancion1.getSongNombreAndArtista());


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


class Reproductor {
    constructor (){
        this.catalogodecanciones = [
            new Song(nombre:"cancion 1",artista: "artista 1", año: "año 1",duracion: "duracion 1", genero: "genero 1"),
            new Song(nombre:"cancion 2",artista: "artista 2", año: "año 2",duracion: "duracion 2", genero: "genero 2"),
            new Song(nombre:"cancion 3",artista: "artista 3", año: "año 3",duracion: "duracion 3", genero: "genero 3"),
            new Song(nombre:"cancion 4",artista: "artista 4", año: "año 4",duracion: "duracion 4", genero: "genero 4"),
            new Song(nombre:"cancion 5",artista: "artista 5", año: "año 5",duracion: "duracion 5", genero: "genero 5"),
            new Song(nombre:"cancion 6",artista: "artista 6", año: "año 6",duracion: "duracion 6", genero: "genero 6"),
            new Song(nombre:"cancion 7",artista: "artista 7", año: "año 7",duracion: "duracion 7", genero: "genero 7"),
            new Song(nombre:"cancion 8",artista: "artista 8", año: "año 8",duracion: "duracion 8", genero: "genero 8"),
            new Song(nombre:"cancion 9",artista: "artista 9", año: "año 9",duracion: "duracion 9", genero: "genero 9"),
            new Song(nombre:"cancion 10",artista: "artista 10", año: "año 10",duracion: "duracion 10", genero: "genero 10"),
            new Song(nombre:"cancion 11",artista: "artista 11", año: "año 11",duracion: "duracion 11", genero: "genero 11"),
            new Song(nombre:"cancion 12",artista: "artista 12", año: "año 12",duracion: "duracion 12", genero: "genero 12"),
            new Song(nombre:"cancion 13",artista: "artista 13", año: "año 13",duracion: "duracion 13", genero: "genero 13"),
            new Song(nombre:"cancion 14",artista: "artista 14", año: "año 14",duracion: "duracion 14", genero: "genero 14"),
            new Song(nombre:"cancion 15",artista: "artista 15", año: "año 15",duracion: "duracion 15", genero: "genero 15"),
            new Song(nombre:"cancion 16",artista: "artista 16", año: "año 16",duracion: "duracion 16", genero: "genero 16"),
            new Song(nombre:"cancion 17",artista: "artista 17", año: "año 17",duracion: "duracion 17", genero: "genero 17"),
            new Song(nombre:"cancion 18",artista: "artista 18", año: "año 18",duracion: "duracion 18", genero: "genero 18"),
            new Song(nombre:"cancion 19",artista: "artista 19", año: "año 19",duracion: "duracion 19", genero: "genero 19"),
            new Song(nombre:"cancion 20",artista: "artista 20", año: "año 20",duracion: "duracion 20", genero: "genero 20"),
            new Song(nombre:"cancion 21",artista: "artista 21", año: "año 21",duracion: "duracion 21", genero: "genero 21"),
            new Song(nombre:"cancion 22",artista: "artista 22", año: "año 22",duracion: "duracion 22", genero: "genero 22"),
            new Song(nombre:"cancion 23",artista: "artista 23", año: "año 23",duracion: "duracion 23", genero: "genero 23"),
            new Song(nombre:"cancion 24",artista: "artista 24", año: "año 24",duracion: "duracion 24", genero: "genero 24"),
            new Song(nombre:"cancion 25",artista: "artista 25", año: "año 25",duracion: "duracion 25", genero: "genero 25"),
            new Song(nombre:"cancion 26",artista: "artista 26", año: "año 26",duracion: "duracion 26", genero: "genero 26"),
            new Song(nombre:"cancion 27",artista: "artista 27", año: "año 27",duracion: "duracion 27", genero: "genero 27"),
            new Song(nombre:"cancion 28",artista: "artista 28", año: "año 28",duracion: "duracion 28", genero: "genero 28"),
            new Song(nombre:"cancion 29",artista: "artista 29", año: "año 29",duracion: "duracion 29", genero: "genero 29"),
            new Song(nombre:"cancion 30",artista: "artista 30", año: "año 30",duracion: "duracion 30", genero: "genero 30"),    
        ];
        this.currentSong = this.catalogodecanciones[0];

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
console.log(misFavoritos.canciones);

