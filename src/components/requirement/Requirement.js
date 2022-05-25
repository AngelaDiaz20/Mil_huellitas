import './Requirement.css';
import Hero from './img/hero-dog.svg';

function Requirement(){
 return(
    /*Características del componente*/
    <section id="adoption-requirement">
            <h1>Requisitos para adoptantes</h1>
            <p>Nos encantaría poder entregar un peludito a cada persona que desee adoptar, pero la gran responsabilidad que sentimos con nuestros ángeles nos obliga a tener unos requisitos mínimos que nos permitan tener cierta seguridad en que los hogares donde llegarán serán los definitivos.
            </p>
            <div className="hero-dog">
                <div className="img-hero">
                    <img src={Hero} alt="Imagen de Heroe"></img>
                </div>
                <div className="list-requirement">
                    <ul>
                        <li>La persona responsable del peludito debe ser mayor de 25 años.</li>
                        <li>Este o esta pequeñita será miembro de la familia alrededor de 15 años.</li>
                        <li>Diligencia el Pre-formulario de Adopción</li>
                        <li>Este o esta pequeñita será miembro de la familia alrededor de 15 años.</li>
                        <li>Los datos ingresados serán verificados por funcionarios de la Fundación (esta verificación tarda 3 días hábiles).</li>
                        <li>Si tu solicitud y todo está en orden, nos contactaremos contigo para coordinar el día en que el peludito que escogiste llegue a tu casa.</li>
                        <li>Es importante tener el tiempo y el espacio para que tú y ellos estén muy bien.</li>
                        <li>Es importante contar con estabilidad económica, desde el primer momento que llegue a tus manos será una gran responsabilidad y requerirá de muchos cuidados y mimos para vivir feliz. Recuerda, todos han sido rescatados.</li>
                    </ul>
                </div>
            </div>
        </section>
 );
}

export default Requirement;