export interface GalleryItem {
    _id : string;
    _createdAt: string;
    title: string;
    mainImage: {
        asset: {
            url: string;
        }
    };
    body: object[];
}

export interface MainPageImage {
    title: string;
    mainImage: {  asset: {
        url: string;
    }}
    caption: object[];
}