export interface GalleryModel{
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

export interface GalleryArrayModel{
    all_pictures: GalleryModel[],
    particular_picture: GalleryModel,
    status: Status,
}


export interface PictureApiModel{
    albumId: unknown,
    id: unknown,
    title: unknown,
    url: unknown,
    thumbnailUrl: unknown,

}

export enum Status{
    PENDING,
    FULFILLED,
    REJECTED,
}