/*import { Link } from 'react-router-dom';*/
import './Formulario.css';

function Formulario() {
    
    return (
        <div class="information">
            <main id="main-adoption-form">
                <section id="adoption-form">

                <h2>Formulario de adopción</h2>

                <p>La adopción de un nuevo integrante de la familia no es algo que debe tomarse a la ligera, es una decisión que implica una gran responsabilidad para todos y de cada uno de los integrantes de la familia, no es un objeto que adquieres por impulso y luego solo lo devuelves porque no te satisfizo como cliente, es un nuevo integrante de tú familia y te acompañará por una o dos décadas; por estas razones, te presentamos esta evaluación para que te asegures en compañía del núcleo familiar si están listos para tomar esta gran decisión.</p>

                <div class="question-form">

                <p>¿Alguna de las personas dentro del hogar sufre de ataques de ira o alguna enfermedad que desencadene algún tipo de violencia? </p>

                <div class="adoption-form-group">
                    <div>
                        <label for="selection" class="label-form">Si</label>
                        <input name="selection_primary" type="radio"/>
                    </div>
                    <div>
                        <label for="selection" class="label-form">No</label>
                        <input name="selection_primary" type="radio"/>
                    </div>
                </div></div>

                <div class="question-form">
                <p>¿Alguna de las personas dentro del hogar padece de enfermedades alérgicas o patologías a las cuales el médico tratante les ha recomendado no tener mascotas?</p>

                <div class="adoption-form-group">
                    <div>
                        <label for="selection" class="label-form">Si</label>
                        <input name="selection_second" type="radio"/>
                    </div>
                    <div>
                        <label for="selection" class="label-form">No</label>
                        <input name="selection_second" type="radio"/>
                    </div>
                </div></div>

                <div class="question-form">
                <p>¿Por qué quieres tener una mascota?</p>

                <label for="observaciones"></label>
                <textarea rows="4" cols="30" name="observaciones"></textarea></div>

                <div class="question-form">
                <label for="persons">¡Cuántas personas hay en tu casa?</label>
                <input name="persons" id="persons" type="number" placeholder="0" min="0"/></div>

                <div class="question-form"><p>¿Todas las personas en el hogar están de acuerdo con tener una mascota?</p>

                <div class="adoption-form-group">
                    <div>
                        <label for="selection" class="label-form">Si</label>
                        <input name="selection_third" type="radio"/>
                    </div>
                    <div>
                        <label for="selection" class="label-form">No</label>
                        <input name="selection_third" type="radio"/>
                    </div>
                </div></div>

                <div class="question-form">
                <p>¿Has tenido o tienes mascotas actualmente?</p>

                <div class="adoption-form-group">
                    <div>
                        <label for="selection" class="label-form">Si</label>
                        <input name="selection_forth" type="radio"/>
                    </div>
                    <div>
                        <label for="selection" class="label-form">No</label>
                        <input name="selection_forth" type="radio"/>
                    </div>
                </div></div>

                <div class="question-form">
                <p>Describe tu experiencia</p>

                <label for="observaciones"></label>
                <textarea rows="4" cols="30" name="observaciones"></textarea></div>

                <div class="question-form">
                <p>¿En qué espacio o lugar de la casa viviría la mascota, en que barrio y ciudad?</p>

                <label for="observaciones"></label>
                <textarea rows="3" cols="30" name="observaciones"></textarea></div>
                    
                <div class="question-form">
                <p>¿Has investigado o leído acerca de los cuidados y recomendaciones para tener una mascota?</p>

                <div class="adoption-form-group">
                    <div>
                        <label for="selection" class="label-form">Si</label>
                        <input name="selection_fifth" type="radio"/>
                    </div>
                    <div>
                        <label for="selection" class="label-form">No</label>
                        <input name="selection_fifth" type="radio"/>
                    </div>
                </div></div>

                <div class="question-form">
                <label for="persons">¡Cuánto tiempo puedes dedicarle?</label>
                <input name="persons" id="persons" type="number" placeholder="0" min="0"/>horas</div>

                <div class="question-form">
                <p>¿Cuándo tu mascota muerda o rasguñe zapatos, muebles u otro objeto de la casa y haga travesuras cual sería tu reacción?</p>

                <label for="observaciones"></label>
                <textarea rows="4" cols="30" name="observaciones"></textarea></div>

                <div class="question-form">
                <p>¿Quién se encargaría de tu mascota sino pudieras hacerte cargo? 
                Plantea todos los escenarios posibles antes de responder la pregunta.</p>

                <label for="observaciones"></label>
                <textarea rows="4" cols="30" name="observaciones"></textarea></div>

                <div class="question-form">                
                <p>¿Cuándo salgas de viaje donde se quedará tu mascota?</p></div>

                <div class="question-form">
                <label for="locate">¿Con quién se quedaría?</label>
                <select name="locate" id="locate">
                    <option value="0" selected>-Selecciona-</option>
                    <option value="1">Con un familiar</option>
                    <option value="2">Con un amigo\a</option>
                    <option value="3">Con un vecino\a</option>
                    <option value="4">Solo\a</option> 
                </select></div>

                <div class="question-form">
                <p>¿Tiene en cuenta los gastos de la mascota y está dispuesto a asumirlos?</p>

                <table>
                    <thead>
                        <tr>
                        <td></td>
                        <td>Si</td>
                        <td>No</td>
                        <td>No es necesario</td>
                    </tr>
                </thead>
                    <tr>
                        <th>Veterinario</th>
                        <td><input type="radio" name="check" id="check-radio"/></td>
                        <td><input type="radio" name="check" id="check-radio"/></td>
                        <td><input type="radio" name="check" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Vacunación</th>
                        <td><input type="radio" name="check_primary" id="check-radio"/></td>
                        <td><input type="radio" name="check_primary" id="check-radio"/></td>
                        <td><input type="radio" name="check_primary" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Esterilización</th>
                        <td><input type="radio" name="check_second" id="check-radio"/></td>
                        <td><input type="radio" name="check_second" id="check-radio"/></td>
                        <td><input type="radio" name="check_second" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Collar y placa de identificación</th>
                        <td><input type="radio" name="check_third" id="check-radio"/></td>
                        <td><input type="radio" name="check_third" id="check-radio"/></td>
                        <td><input type="radio" name="check_third" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Alimentación</th>
                        <td><input type="radio" name="check_fourth" id="check-radio"/></td>
                        <td><input type="radio" name="check_fourth" id="check-radio"/></td>
                        <td><input type="radio" name="check_fourth" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Insumos de aseo</th>
                        <td><input type="radio" name="check_fifth" id="check-radio"/></td>
                        <td><input type="radio" name="check_fifth" id="check-radio"/></td>
                        <td><input type="radio" name="check_fifth" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Mallas de seguridad</th>
                        <td><input type="radio" name="check_sixth" id="check-radio"/></td>
                        <td><input type="radio" name="check_sixth" id="check-radio"/></td>
                        <td><input type="radio" name="check_sixth" id="check-radio"/></td>
                    </tr>
                    <tr>
                        <th>Antiparasitarios</th>
                        <td><input type="radio" name="check_seventh" id="check-radio"/></td>
                        <td><input type="radio" name="check_seventh" id="check-radio"/></td>
                        <td><input type="radio" name="check_seventh" id="check-radio"/></td>
                    </tr>
                </table></div>

                <div class="question-form">
                <p>En caso tal de que a su hogar llegue un nuevo integrante familiar (un bebé, un familiar alérgico o un nuevo animal), ¿qué sucedería con el animal de compañía adoptado en nuestra Corporación? Plantea todos los escenarios posibles antes de responder la pregunta.</p>

                <label for="observaciones"></label>
                <textarea rows="5" cols="30" name="observaciones"></textarea></div>

                <div class="btn-enviar">
                    <i class="fa-solid fa-paper-plane"></i>
                    <a href="datos-adoptante.html"><button>Enviar datos</button></a>
                </div>

                </section>
            </main>
        </div>
    );
}

export default Formulario;