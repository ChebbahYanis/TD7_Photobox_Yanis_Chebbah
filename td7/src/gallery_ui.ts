import Handlebars from "handlebars";
import { BASE_IMG } from "./config";
import { ApiResponseGallery, GalleryPhoto } from "./types";


export function display_galerie(gal: ApiResponseGallery): void {
    // On extrait le tableau de photos depuis la réponse de l'API
    const res: GalleryPhoto[] = gal.photos;

    // On récupère le template HTML depuis la page
    const templateEl = document.querySelector('#galerieTemplate')!.innerHTML;

    // On compile le template pour pouvoir l'utiliser avec des données
    const template = Handlebars.compile(templateEl);

    // Pour chaque photo, on construit l'URL complète de la vignette
    // car l'API retourne seulement le chemin relatif (sans le domaine)
    const photos = res.map(item => ({
        ...item, // on copie toutes les propriétés existantes de la photo
        thumbnailUrl: BASE_IMG + item.photo.thumbnail.href // on ajoute l'URL complète
    }));

    // On injecte le HTML généré par le template dans la section galerie
    document.querySelector("#la_galerie")!.innerHTML = template(photos);
}