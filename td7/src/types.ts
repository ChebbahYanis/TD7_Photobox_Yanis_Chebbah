export interface Photo {
    id : number
    titre : string 
    file : string
    descr : string
    format : string
    type : string
    size : number
    width : number
    height : number
    url : {
        href :string 
    }

}
export interface ApiResponseCategorie {
    type: string
    categorie: Categorie
    links: {
        photos: { href: string }
    }
}
export interface GalleryPhoto {
    photo: {
        id: number
        titre: string
        thumbnail: { href: string }
        original: { href: string }
    }
    links: {
        self: { href: string }
    }
}

export interface ApiResponseGallery {
    type: string
    count: number
    size: number
    photos: GalleryPhoto[]
    links: {
        next: { href: string }
        prev: { href: string }
        first: { href: string }
        last: { href: string }
    }
}

export interface ApiResponseComments {
    type: string
    count: number
    size: number
    comments: Comments[]
}


export interface ApiResponse {
    type: string
    photo: Photo        
    links: {
        categorie: { href: string }
        comments: { href: string }
    }
}

export interface Categorie {
    id : number
    nom : string
    descr : string
}

export interface Comments {
    titre : string
    content : string
    pseudo : string
    created_at : string
}