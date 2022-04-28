import { useAppSelector } from "../hooks/redux-hooks";
import {Link} from 'react-router-dom'
import './picture.css';

const Picture=()=>{

    const picture = useAppSelector(state => state.gallery.particular_picture);

    return(

        <div>
           
        <div className='pictureContext'>
            <div className='pictureTitle'>{picture.title}</div>
            <img className='picture' src={picture.url} />
            <div>
                <Link className='pictureGalleryLink' to="/" >Goto picture gallery</Link>
            </div>
        </div>
        </div>

    );
}


export default Picture;