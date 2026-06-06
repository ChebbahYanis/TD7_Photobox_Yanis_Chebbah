import { ApiResponseGallery } from "./types";
import { loadResource } from "./photoloader";

// Variable persistante qui stocke les liens de pagination de la page courante
// null au départ car aucune galerie n'est encore chargée
let currentLinks: ApiResponseGallery['links'] | null = null;

// Fonction interne (non exportée) qui charge une galerie depuis une URI
// et met à jour les liens de pagination
function loadGalerie(uri: string): Promise<ApiResponseGallery> {
    return (loadResource(uri) as Promise<ApiResponseGallery>)
        .then((data: ApiResponseGallery) => {
            // On sauvegarde les liens pour pouvoir naviguer ensuite
            currentLinks = data.links;
            return data; // on retourne la galerie complète
        });
}

// Charge la première page de la galerie
export function load(): Promise<ApiResponseGallery> {
    return loadGalerie(`/www/canals5/phox/api/photos`);
}

// Charge la page suivante
export function next(): Promise<ApiResponseGallery> {
    return loadGalerie(currentLinks!.next.href);
}

// Charge la page précédente
export function prev(): Promise<ApiResponseGallery> {
    return loadGalerie(currentLinks!.prev.href);
}

// Charge la première page
export function first(): Promise<ApiResponseGallery> {
    return loadGalerie(currentLinks!.first.href);
}

// Charge la dernière page
export function last(): Promise<ApiResponseGallery> {
    return loadGalerie(currentLinks!.last.href);
}