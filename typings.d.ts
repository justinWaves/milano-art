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