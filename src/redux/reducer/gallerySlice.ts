import {GalleryModel, GalleryArrayModel, Status} from '../../models/redux-models';
import { createSlice,PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/galleryService";

const initializeGalleryState: GalleryArrayModel={
    all_pictures: [],
    particular_picture: {
        id:0,
        title: "",
        thumbnailUrl: "",
        url: "",
       
    },
    status: Status.PENDING
}


export const fetchPost = createAsyncThunk('all_gallery/galleryImages', async (): Promise<GalleryArrayModel> => {
    const data = await api.getAllGallery();
    return data
})


const gallerySlice = createSlice({
    name:'gallery',
    initialState: initializeGalleryState,
    reducers:{
        setPictures(state, action: PayloadAction<GalleryModel[]>){
            state.all_pictures=action.payload;
        },
        setParticularPicture(state, action: PayloadAction<GalleryModel>){
            state.particular_picture=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.all_pictures = action.payload.all_pictures;
            state.status = Status.FULFILLED;
        })
        .addCase(fetchPost.pending, (state, action) => {
            state.status = Status.PENDING;
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.status = Status.REJECTED;
        })
    }
})

export const {setPictures, setParticularPicture} = gallerySlice.actions;

export default gallerySlice.reducer;
