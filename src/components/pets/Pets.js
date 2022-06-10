import { getAllPets } from "../../js/pets.js";
import { Link } from "react-router-dom";
//import { Ocult } from "../../elements/Formularios.js";
import Line_dashed from './img/line.svg';
import './Pets.css'



function Pets(){
    const pets = getAllPets(); 

    return (
        <section className="adoption-container">

        <div className="adoption">
            <h1>Peluditos Mil Huellitas</h1>
            <p>Nos alegra saber que estas pensando en adoptar, todos nuestros peludos están a la espera de una familia y son entregados en óptimas condiciones de salud y belleza a adoptantes responsables y amorosos</p>
        </div>

        <div className="line-dashed">
            <img src={Line_dashed} alt="Linea punteada"></img>
        </div>

        <div className="filter-buttons">
            <input type="radio" name="filtro" id="todos" checked/>
            <label class="label-todos" for="todos">Todos</label>

            <input type="radio" name="filtro" id="perros"/>
            <label class="label-dog" for="perros">Perros</label>
            
            <input type="radio" name="filtro" id="gatos"/>
            <label class="label-cat" for="gatos">Gatos</label>
        </div>

        <div className="line-dashed">
            <img src={Line_dashed} alt="Linea punteada"></img>
        </div>

            <div className="adoption-galery">
                {pets.map(pett=> 
                    <div key={pett.id} className="adoption-galery__pet"><br/>

                        <div className="adoption-galery__image">
                            {pett.image}
                            <div className="adoption-galery__layer">
                                <Link to={`${pett.id}`} className="link">¡Cónoce su historia!</Link>
                            </div>
                        </div>
                        
                        <div className="adoption-galery__information">
                            <p className="information pet__name">Nombre: {pett.name} </p>
                            <p className="information pet__age">Edad: {pett.age}</p>
                            <p className="information pet__size">Tamaño: {pett.size}</p>
                        </div>
                        
                    </div> 
                )}
                
            </div>

            <div className="controller">
                    <i class="fa-solid fa-circle-arrow-left"></i>
                    <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            
        </section> 

    );
}

export default Pets;