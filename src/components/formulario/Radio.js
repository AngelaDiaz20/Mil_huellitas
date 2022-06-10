import React from 'react';
import { useState } from 'react';
import {Input,Label,GrupoInput} from '../../elements/Formularios';

const ComponenteRadio=({estado,cambiarEstado,tipo,label,placeholder,name,leyendaError,expresionRegular,funcion})=>{

  const[option, setOption] = useState(1);

  const cambioRadioOption=e=>{
    setOption(e.target.value);
  }

    return(
    <div>    
        <GrupoInput>     
            <Input
                id="radio1"
                type="radio"
                value="1"
                checked={option === 1 ? true : false}
                onChange={cambioRadioOption}
            />
            <Label for="radio1">
                Si
            </Label>
        </GrupoInput>
        <GrupoInput>     
            <Input
                id="radio2"
                type="radio"
                value="2"
                checked={option === 2 ? true : false}
                onChange={cambioRadioOption}
            />
            <Label for="radio2">
                No
            </Label>
        </GrupoInput>

        <p>El radio button seleccionado es: <b>{option}</b></p>

    </div>
    );
}

export default ComponenteRadio;
