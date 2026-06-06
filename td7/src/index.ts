import { loadPicture, loadResource } from "./photoloader";
import {displayPicture, displayCategorie, displayComments} from "./ui";
import { ApiResponse, Categorie, Comments, ApiResponseCategorie, ApiResponseComments} from "./types";
import { load, next, prev, first, last } from "./gallery";
import { display_galerie } from "./gallery_ui";


function getPicture(id: number): void {
    loadPicture(id).then((data: ApiResponse) => {
        displayPicture(data.photo);
        loadCategorie(data).then((categorie) => displayCategorie(categorie))
                .catch(handleError);
        loadComments(data).then((comments) => displayComments(comments))
                 .catch(handleError);

    })
    .catch(handleError);

    
}

function handleError(err: unknown): void {
    if (err instanceof Error) console.error(err.message);
}

function loadCategorie(data: ApiResponse): Promise<Categorie> {
    return loadResource(data.links.categorie.href)
        .then((catData: ApiResponseCategorie) => catData.categorie) ;
}

function loadComments(data: ApiResponse): Promise<Comments[]> {
    return loadResource(data.links.comments.href)
        .then((commData: ApiResponseComments) => commData.comments);
}



// Quand l'utilisateur clique sur "load", on charge et affiche la galerie
document.querySelector('#btn_load')!.addEventListener('click', () => {
    // load() appelle l'API et retourne une Promise
    // quand les données arrivent, on affiche la galerie
    load().then((galerie) => {
        display_galerie(galerie)})
    .catch(handleError);


});


// Navigation : page suivante
document.querySelector('#btn_next')!.addEventListener('click', () => {
    next().then((galerie) => {
        display_galerie(galerie);})
    .catch(handleError);

});

// Navigation : page précédente
document.querySelector('#btn_prev')!.addEventListener('click', () => {
    prev().then((galerie) => {

        display_galerie(galerie);})
    .catch(handleError);

});

// Navigation : première page
document.querySelector('#btn_first')!.addEventListener('click', () => {
    first().then((galerie) => {
        display_galerie(galerie);})
    .catch(handleError);

});

// Navigation : dernière page
document.querySelector('#btn_last')!.addEventListener('click', () => {
    last().then((galerie) => {
        display_galerie(galerie);})
    .catch(handleError);

});

// Au clic sur une vignette de la galerie, on affiche la photo correspondante
document.querySelector('#la_galerie')!.addEventListener('click', (event) => {
    // On récupère l'élément cliqué
    const target = event.target as HTMLElement;
    
    // On remonte jusqu'à la div.vignette pour récupérer le data-photoId
    const vignette = target.closest('.vignette') as HTMLElement;
    
    // Si on n'a pas cliqué sur une vignette, on ne fait rien
    if (!vignette) return;
    
    // On récupère l'id depuis data-photoId
    const photoId = parseInt(vignette.dataset.photoid!);
    
    // On charge et affiche la photo
    getPicture(photoId);
});

// Appel avec id=105
getPicture(105);

// Récupérer l'id depuis l'URL : exe :index.html#106
const hash = window.location.hash;  // pour recuprer la photo dnas l'url
if (hash) {
    const id = parseInt(hash.substring(1)); // 106
    getPicture(id);
}

