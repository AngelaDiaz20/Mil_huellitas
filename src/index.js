import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Adopcion from './pages/Adopcion'
import Form from './pages/Formulario';
import FormAdoptantes from './pages/FormAdoptantes';
import Mascota from './pages/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Adopcion/>}></Route>


        <Route path='/adopcion'  element={<Navigate replace to={"/"} />}></Route>
        <Route path='/form-adoptantes' element={<FormAdoptantes/>}></Route>
        <Route path='/formulario' element={<Form/>}></Route>
        <Route path='/:id' element={<Mascota/>}></Route>

      </Routes>
    
    </BrowserRouter>
);
