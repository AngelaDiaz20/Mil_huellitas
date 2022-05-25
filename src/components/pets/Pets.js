import { getAllPets } from "../../js/pets.js";
import { Link } from "react-router-dom";
import './Pets.css'

function Pets(){
    const pets = getAllPets(); 
    return (
        <div className="container-all">

            <div className="adoption-galery">
                {pets.map(pet=> 
                    <div key={pet.id} className="adoption-galery__pet"><br/>

                        <div className="adoption-galery__image">
                            {pet.image}
                            <div className="adoption-galery__layer">
                                <Link to={`${pet.id}`} className="link">¡Cónoce su historia!</Link>
                            </div>
                        </div>
                        
                        <div className="adoption-galery__information">
                            <p className="information pet__name">Nombre: {pet.name} </p>
                            <p className="information pet__age">Edad: {pet.age}</p>
                            <p className="information pet__size">Tamaño: {pet.size}</p>
                        </div>
                        
                    </div> 
                )}
                
            </div>
        </div> 

    );
}

export default Pets;