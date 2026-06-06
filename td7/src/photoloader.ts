// photoloader.ts
import { BASE_IMG, API_URL } from "./config";
import { ApiResponse} from "./types";


export function loadPicture(idPicture: number): Promise<ApiResponse> {

    return fetch(`${API_URL}/photos/${idPicture}`, { credentials: 'include' })
        .then((response: Response) => {
            if (!response.ok) {
                // Si le serveur répond 404, 500, etc.
                return Promise.reject(new Error(response.statusText));
            }
            return response.json(); // ← retourne une Promise<ApiResponse> avec les données JSON
        })
        .catch((err: unknown) => {
            if (err instanceof Error) console.error(err.message);
        });
}

export function loadResource( uri : string ): Promise<any> {//any car le type peut changer selon si on appel vers un commentaire ou une categorie
    //console.log("URL appelée : " + BASE_IMG + uri); 

    return fetch(`${BASE_IMG}${uri}`, { credentials: 'include' })
        .then((response: Response) => {
            if (!response.ok) {
                // Si le serveur répond 404, 500, etc.
                return Promise.reject(new Error(response.statusText));
            }
            return response.json(); // ← retourne une Promise<any> avec les données JSON
        })
        .catch((err: unknown) => {
            if (err instanceof Error) console.error(err.message);
        });

}