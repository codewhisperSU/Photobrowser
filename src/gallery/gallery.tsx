import { useEffect} from 'react'
import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import { setParticularPicture, fetchPost} from "../redux/reducer/gallerySlice";
import {useNavigate} from "react-router-dom";
import "./gallery.css"
import { Status } from '../models/redux-models';


const Gallery=()=>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const getAllPictures = useAppSelector(state => state.gallery.all_pictures);
    const serverStatus = useAppSelector(state => state.gallery.status);
  

    
    useEffect(() => {
        dispatch(fetchPost());
        console.log(getAllPictures)
    },[])
    
    function SelectPicture(id: number){
        const picture = getAllPictures.find(r => r.id === id);

        if(picture){
            dispatch(setParticularPicture(picture));
            navigate("/image");
        }else{
            alert("Picture not found in system!");
        }
    }
    
    return(
       
        <>
            <div>
                <header>
                    <h1>Gallery</h1>
                </header>
                {( serverStatus !== Status.REJECTED ?
                serverStatus === Status.PENDING ? 
                    <h1>Loading...</h1>
                 :
                <div className='galleryPosition'>
                <div className='gallery'>
                   {
                   getAllPictures.map(data => (
                       <div key={data.id} onClick={() => {
                        SelectPicture(data.id);
                       } } className='gallery-item'>
                        <img src={data.thumbnailUrl} />
                       </div>
                   ))
                   }
                   </div>
               
                </div>
                 : <h1>cannot get data from server!</h1>
                )}
            </div>
        </>

    );
}
export default Gallery;