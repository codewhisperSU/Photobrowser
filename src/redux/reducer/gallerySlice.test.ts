import { GalleryArrayModel, Status } from "../../models/redux-models";
import reducer, {setPictures, setParticularPicture} from "./gallerySlice";

describe('Gallery slice testing', () => {
    test('Set data to gallerias', () => {
    
        const previousState: GalleryArrayModel = {
            all_pictures: [],
            particular_picture: {
                id:0,
                title: "",
                thumbnailUrl: "",
                url: "",
            },
            status:  Status.FULFILLED
        };

        expect(reducer(previousState, setPictures([{
                id: 1,
                title: "test",
                url: "https://test.picture.com",
                thumbnailUrl: "https://test.thumpnailUrlPicture.com",
               
            }],
        ))).toEqual({
            all_pictures: [{
                id: 1,
                title: "test",
                url: "https://test.picture.com",
                thumbnailUrl: "https://test.thumpnailUrlPicture.com",
               
            }],
            particular_picture: {
                id:0,
                title: "",
                thumbnailUrl: "",
                url: "",
            },
            status: Status.FULFILLED,
        })

    });

    test('Set particular picture', () => {

        const previousState: GalleryArrayModel = {
            all_pictures: [],
            particular_picture: {
                id:0,
                title: "",
                thumbnailUrl: "",
                url: "",
            },
            status: Status.FULFILLED
        };

        expect(reducer(previousState, setParticularPicture({
            id: 1,
            title: "Beautiful picture",
            url: "https://test.thumpnailUrlBeautifulPicture.com",
            thumbnailUrl: "https://test.thumpnailUrlBeautifulPicture.com",
           
        }))).toEqual({
            all_pictures: [],
            particular_picture: {
                id:1,
                title: "Beautiful picture",
                thumbnailUrl: "https://test.thumpnailUrlBeautifulPicture.com",
                url: "https://test.thumpnailUrlBeautifulPicture.com",
            },
            status: Status.FULFILLED,
        })
    });

})