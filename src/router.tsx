import { Routes, Route } from 'react-router-dom';

import App  from './App';
import Picture from './picture/picture';

const Router = () => {
return (         
    <Routes>
    <Route path='/image' element={<Picture />} />
    <Route path='/' element={<App />} />
  </Routes>
);
}
export default Router;