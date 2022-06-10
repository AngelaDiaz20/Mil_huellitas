import { getPet } from "../js/pets";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../css/Mascota.css'
import Huella from '../assets/img/huella.svg'
import Buttoncat from "../components/buttons/ButtonCat";
import Boton from "../components/buttons/Boton";
import BtnGato  from "../components/buttons/btongato.svg";
import BtnPerro from "../assets/img/dog-bton.svg";
import BtnDog from "../assets/img/Perro.png";
import BtnCat from "../assets/img/Gato.png";

function Mascota(){
    const params = useParams();
    const pet=getPet(parseInt(params.id));

    let hideInformation = document.getElementById('hideInformation');
    let hideInformation_cares = document.getElementById('hideInformation_cares');
    let link;

    function toggleText(e){
    e.preventDefault();
    hideInformation.classList.toggle('show');

    if(hideInformation.classList.contains('show')){
      link.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else{
      link.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
} 

function toggleCare(e){
    e.preventDefault();
    hideInformation_cares.classList.toggle('show');

    if(hideInformation_cares.classList.contains('show')){
      link.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else{
      link.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }}

    return(
        <>
            <Header />
        <div id="adoption-kirara">
            <main id="peludito">
                <h1>{pet.name}</h1>

                <div class="container-pet">

                    <section id="pet">

                        <article class="img-pet">   
                            {pet.image}
                        </article>

                        <article class="pet-resumen">
                            <br/><br/>
                            <input type="radio" name="filtro" id="description" checked/>
                            <label class="label-description" for="description">Descripción</label>

                            <input type="radio" name="filtro" id="history"/>
                            <label class="label-history" for="history">Historia</label>

                            <div class="info-mascota">
                                <ul class="folder-pet">
                                    <li><strong>Animal:</strong>&nbsp;{pet.category}</li>
                                    <li><strong>Edad:</strong>&nbsp;{pet.age}</li>
                                    <li><strong>Sexo:</strong>&nbsp;{pet.gender}</li>
                                    <li><strong>Tamaño:</strong>&nbsp;{pet.size}</li>
                                    <li><strong>Esterilización/castración</strong>&nbsp;{pet.sterilization}</li>
                                    <li><strong>Desparasitado:</strong>&nbsp;{pet.deworming}</li>
                                    <li><strong>Color:</strong>&nbsp;{pet.color}</li>
                                    <li><strong>Dentadura:</strong>&nbsp;{pet.teeth}</li>
                                    <li><strong>Ojos:</strong>&nbsp;{pet.eyes}</li>
                                    <li><strong>Peso apróximado:</strong>&nbsp;{pet.weight}</li>
                                    <li><strong>Observaciones:</strong>&nbsp;{pet.observations}</li>
                                </ul>
                            </div>

                        <div class="history-pet">
                            <div class="folder-pet">
                                <p>{pet.history}</p>
                            </div>
                        </div></article> </section>

                        <div class="slider-galery-pet">

                            <div class="container">
                                <input type="radio" name="slider" id="item-1" checked/>
                                <input type="radio" name="slider" id="item-2"/>
                                <input type="radio" name="slider" id="item-3"/>
                    
                                <div class="cards">
                                    <label class="card" for="item-1" id="selector-1">
                                        <img src={pet.photo1} alt="Galería de imagenes de la mascota"/>
                                    </label>
                                    <label class="card" for="item-2" id="selector-2">
                                        <img src={pet.photo2} alt="Galería de imagenes de la mascota"/>
                                    </label>
                                    <label class="card" for="item-3" id="selector-3">
                                        <img src={pet.photo3} alt="Galería de imagenes de la mascota"/>
                                    </label>
                    
                                </div>
                            </div>
                    
                        </div></div>

                        <div className="cat-bton btn__pets">
                            <button className="bton-cat"> 
                            <img src={BtnDog} alt="Imagen de botón de gato"></img>
                            Sigue mirando más peluditos
                            <img src={BtnCat} alt="Imagen de botón de gato"></img>
                        </button></div>

            <section id="adoption-process">
           
            <h2 class="ocult">Inicia el proceso de adopción</h2>     

            <div class="bg-documents">   
            <article class="process-step1">
            
            <div class="step1">
                <h2 class="h2-ocult">Inicia el proceso de adopción</h2>
                <h2 class="subtitle">Paso 1</h2>
                <img src={Huella} alt=""/>

                <Link to="/formulario" className="la_a">
                <div className='btn-container'>
                    <button className='btn_pago'> Llenar formulario </button>
                    <i class="fa-solid fa-paper-plane"></i>
                </div></Link>
                <a href="https://drive.google.com/file/d/1U5FpQ_L3SDP6QixE57KnE4UdmpGJw4xg/view" target="blank"> O haz click aquí para descargarlo </a>
            </div>

            <div class="documents">
                <h3>DOCUMENTOS ADICIONALES</h3>
                <p>A continuación encontrará el listado de documentos y formatos descargables que debe consultar para su proceso de adopción:</p>
                <ul>
                    <li>Acta de adopción</li>
                    <li>Instrucciones para adoptar o apadrinar un animal del refugio canino.</li>
                    <li>Instrucciones para adoptantes de animales cachorros.</li>
                    <li>Instrucciones para adoptantes de animales adultos.</li>
                </ul>
            </div></article>

            <article class="process-step2">
            <div class="step2">
                <h2>Paso 2</h2>
                    <div class="huellas-step2">
                        <img class="huella1" src={Huella} alt=""/>
                        <img class="huella2" src={Huella} alt=""/>
                    </div>
                    <p>Una vez diligenciado, completa los campos y espera nuestra respuesta.</p>
            </div>

            <div class="formulario">
            <form action="post">
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="&nbsp;Nombre"/>
                </div>
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="&nbsp;Número teléfonico"/>
                </div>
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="&nbsp;Correo electrónico"/>
                </div>
            </form>     
            </div>

            <div className='btn-container'>
                    <button className='btn_pago'> Enviar </button>
                    <i class="fa-solid fa-paper-plane"></i>
            </div>

            </article> 
            </div> 
            </section>


            <div className="container-dropdown">
            <section id="information-responsabilities">
            <div className="cat-bton">
                <a href="noreferrer" onClick={toggleText}>
                    <button className="bton-cat"> 
                    Responsabilidades de un adoptante 
                    <img src={BtnGato} alt="Imagen de botón de gato"></img>    
            </button></a></div>

            <div class="hide" id="hideInformation">
                <div class="date">
                <p><ul>
                    <li>Obrar en concordancia a lo establecido en la ley 1774 del 6 de enero de 2016 y asumir la adopción del canino o felino, con responsabilidad y compromiso.
                    </li>
                    <li>Prestarle el debido cuidado en caso de enfermedad y suministrarle atención veterinaria necesaria, evitando exponerlo al dolor o crueldad.
                    </li>
                    <li>Garantizarle alimento, agua, abrigo, y protección contra el clima.
                    </li>
                    <li>Proporcionarle un trato humano y digno, lo cual significa no golpearlo, ni maltratarlo de ninguna forma. Será educado con paciencia y amor.
                    </li>
                    <li>Respetar el estado de su cola, orejas y extremidades en general; no realizarle intervenciones quirúrgicas con el fin de acortar o cambiar de forma o tamaño sus extremidades.
                    </li>
                    <li>No aplicarle eutanasia por vejez o por problemas de comportamiento ni por algún otro problema que tenga una solución sin importar que sea costoso.
                    </li>
                    <li>Aceptar la realización de visitas periódicas y verificaciones vía telefónica para constatar la tenencia responsable y adecuada del adoptado.
                    </li>
                    <li>En tiempo vacaciones o situaciones similares los adoptantes deben tomar medidas con el fin de evitar que el animal quede solo por periodos prolongados y quede expuesto a situaciones de hambre, frio o abandono lejos de sus propietarios.</li>
                </ul>
                </p>
                </div>
            </div>
        </section>

        <section id="special-cares">
            <div className="dog-bton">
                <a href="noreferrer" onClick={toggleCare}>
                    <button className="bton-dog"> 
                    Cuidados especiales
                    <img src={BtnPerro} alt="Imagen de botón de perro"></img>    
            </button></a></div>

            <div class="hide" id="hideInformation_cares">
                <div class="date">
                <p><ul>
                        <li>Estos cuidados especiales deben aplicarse a lo largo de toda la vida y tenencia del animal:
                        </li>
                        <li>No sacarlo a la calle sin collar, correa, ni placa de identificación.</li>
                        <li>Tener precaución al dejar puertas abiertas para evitar que el animal huya, se extravíe o sufra un accidente.
                        </li>
                        <li>Vacunarlo en el momento correspondiente (esquema de vacunación completo y/o reforzarlas anualmente).
                        </li>
                        <li>Desparasitarlo por lo menos dos veces al año.
                        </li>
                        <li>Cepillarlo una vez a la semana, bañarlo cuando sea necesario y limpiar con frecuencia sus dientes.</li>
                        <li>Recoger sus desechos fisiológicos, tanto en el lugar de vivienda como en espacios públicos y parques. Garantizar un hábitat limpio y libre de desechos y malos olores</li>
                    </ul>
                </p>
                </div>
            </div>
        </section></div>


        </main>

        </div>
        <Footer />
        </>
    )
}

export default Mascota;