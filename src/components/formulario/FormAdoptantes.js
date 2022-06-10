import React, {useState} from 'react';
import {ContainerForm,Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
//import Radio from './Radio'
import DogForm from '../../assets/img/dog-form.svg'

const FormAdoptantes =()=>{
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [identificacion, cambiarIdentificacion] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
	const [ciudad, cambiarCiudad] = useState({campo: '', valido: null});
	const [ocupacion, cambiarOcupacion] = useState({campo: '', valido: null});
	const [ingresos, cambiarIngresos] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 

  const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
		identificacion: /^\d{7,14}$/
	}

const onChangeTerminos=(e)=>{ 
cambiarTerminos(e.target.checked);
}

const onSubmit = (e) => {
	e.preventDefault();

	if(
		nombre.valido === 'true' &&
		apellido.valido === 'true' &&
		identificacion.valido === 'true' &&
		correo.valido === 'true' &&
		telefono.valido === 'true' &&
		direccion.valido === 'true' &&
		ciudad.valido === 'true' &&
		ocupacion.valido === 'true' &&
		ingresos.valido === 'true' &&
		terminos
	){
		cambiarFormularioValido(true);
		cambiarNombre({campo: '', valido: null});
		cambiarApellido({campo: '', valido: null});
		cambiarIdentificacion({campo: '', valido: null});
		cambiarCorreo({campo: '', valido: null});
		cambiarTelefono({campo: '', valido: null});

		// ... 
	} else {
		cambiarFormularioValido(false);
	}
}


  return ( 
    <main>

	<ContainerForm>

	<h2>Formulario de Adopción</h2>
	<h3>Información de adoptantes</h3>
     
      <Formulario action="" onSubmit={onSubmit}>
       
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombres"
					placeholder="Angela Patricia"
					name="nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>

				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Díaz Martin"
					name="apellido"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>

				<Input
					estado={identificacion}
					cambiarEstado={cambiarIdentificacion}
					tipo="number"
					label="Número de identificación"
					placeholder="Díaz Martin"
					name="identificacion"
					leyendaError="Solo puede contener números (7-12 caracteres)"
					expresionRegular={expresiones.identificacion}
				/>

				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="number"
					label="Teléfono"
					placeholder="3104567891"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/> 
				
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="andres@micorreo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>

				<ContenedorBotonCentrado><p>*En caso de ser arrendador, el dueño del inmueble tiene conocimiento de la posible adopción y dio autorización para llevarla a cabo?</p></ContenedorBotonCentrado>

				

				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Dirección"
					placeholder="Kra 12 N° 20-25"
					name="direccion"
					leyendaError="Campo sin llenar"
					expresionRegular={expresiones.nombre}
				/>

				<Input
					estado={ciudad}
					cambiarEstado={cambiarCiudad}
					tipo="text"
					label="Ciudad"
					placeholder="Bogotá DC"
					name="ciudad"
					leyendaError="Solo puede contener letras y espacios"
					expresionRegular={expresiones.nombre}
				/>

				<Input
					estado={ocupacion}
					cambiarEstado={cambiarOcupacion}
					tipo="text"
					label="Ciudad"
					placeholder="Desarrollador(a) web"
					name="ocupacion"
					leyendaError="Solo puede contener letras y espacios"
					expresionRegular={expresiones.nombre}
				/>

				<Input
					estado={ingresos}
					cambiarEstado={cambiarIngresos}
					tipo="number"
					label="Ingresos mensuales apróximados"
					placeholder="1 200 000"
					name="ciudad"
					leyendaError="Solo puede contener números y espacios"
					expresionRegular={expresiones.nombre}
				/>

				<img src={DogForm} alt='Imagen de perrito'/>
				<p><strong>Para tener en cuenta</strong><br/> Cuando se cambia a un animal de ambiente, en ocasiones pueden presentarse síntomas como diarrea, inapetencia, falta de energía o incluso puede presentar patologías que se encontraban imperceptibles en un entorno habitual y controlado; dichas situaciones pueden explicarse como una respuesta fisiológica al cambio de hábitat.</p>


      <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
      {formularioValido===false && <MensajeError>
        <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
      </MensajeError>}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
		{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
      </ContenedorBotonCentrado>
     
      </Formulario>

	  </ContainerForm>
    </main>
    
    );
}



export default FormAdoptantes;