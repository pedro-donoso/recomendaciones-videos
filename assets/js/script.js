class Multimedia {
    constructor(url) {
        const _url = url;
        this.videoYoutube = () => _url;
    }

    get url() {
        return this.videoYoutube();
    }

    set setInicio(nuevaMusica) {
        this.videoYoutube = () => nuevaMusica;
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        console.log("constructor url : " + url);
        console.log("constructor id  : " + id);

        super(url);
        const _id = id;
        this.getId = () => _id
    }

    get id() {
        return this.getId();
    }

    playMultimedia() {


        Youtube(this.url, this.id);
    }


}


const Youtube = (() => {
    {

        const agregarMedio = (url, id) => {



            const idHTML = document.getElementById(id);

            if (!idHTML) return;

            idHTML.setAttribute("src", url);
        }


        const agregarMedioPublica = (url, id) => agregarMedio(url, id);

        return agregarMedioPublica;
    }
})();


const URLmusica = "https://www.youtube.com/embed/ax4KCpfoPRg";
const URLPelicula = "https://www.youtube.com/embed/aknWfAczkZA";
const URLSerie = "https://www.youtube.com/embed/53C3683MkUw";

let objMusica = new Reproductor(URLmusica, "iframeMusica");
let objPelicula = new Reproductor(URLPelicula, "iframePelicula");
let objSerie = new Reproductor(URLSerie, "iframeSerie");

objMusica.playMultimedia();
objPelicula.playMultimedia();
objSerie.playMultimedia();
