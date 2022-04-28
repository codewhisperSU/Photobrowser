
  
import Api from './Api';
import { GalleryModel,GalleryArrayModel, PictureApiModel, Status } from '../models/redux-models';
import { stringify } from 'querystring';
export default{
    async getAllGallery(): Promise<GalleryArrayModel> {
        var response=await Api().get('');
        const data = response.data.map( (r: PictureApiModel )=> {
            return { 
                id: r.id as unknown as number,
                title: r.title as unknown as string,
                url: r.url as unknown as string,
                thumbnailUrl: r.thumbnailUrl as unknown as string,
            } as GalleryModel
        }) as GalleryModel[];

        const galleryArrayModel: GalleryArrayModel = {
            all_pictures: data,
            particular_picture: {
                id: 0,
                title: "",
                url: "",
                thumbnailUrl: "",
            },
            status: Status.PENDING,
        };

        return galleryArrayModel;
    },
    async getParticularGalleryPicture(gallery_id:number){
        var response=await Api().get('todos');
        return response.data.filter((gallery:GalleryModel)=>gallery.id===gallery_id)[0];
    }
}

