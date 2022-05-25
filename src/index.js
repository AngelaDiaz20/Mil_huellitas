import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Adopcion from './pages/Adopcion'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

      <Routes>

        <Route path='/adopcion' element={<Adopcion/>}></Route>

      </Routes>
    
    </BrowserRouter>
);
