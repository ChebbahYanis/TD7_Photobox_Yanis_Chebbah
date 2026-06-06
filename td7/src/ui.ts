import Handlebars from "handlebars";
import { BASE_IMG } from "./config";
import { Photo, ApiResponse, Categorie, Comments } from "./types";



export function displayPicture(photo: Photo): void {
    // 1. Récupérer le template depuis le HTML
    const templateEl = document.querySelector('#photoTemplate')!.innerHTML;

    // 2. Compiler avec les données
    const template = Handlebars.compile(templateEl);
    const urlComplete = BASE_IMG + photo.url.href;

    // 3. Insérer dans le DOM
    document.querySelector("#la_photo")!.innerHTML = template( {urlComplete: urlComplete, ...photo});//le spread ... copie les propriétés d’un objet
}

export function displayCategorie(categorie: Categorie): void {
    const templateEl = document.querySelector('#categorieTemplate')!.innerHTML;
    const template = Handlebars.compile(templateEl);
    document.querySelector("#la_categorie")!.innerHTML = template( { ...categorie});//le spread ... copie les propriétés d’un objet
}

export function displayComments(comments: Comments[]): void {
    const templateEl = document.querySelector('#commentsTemplate')!.innerHTML;
    const template = Handlebars.compile(templateEl);
    document.querySelector("#les_commentaires")!.innerHTML = template( comments);
}