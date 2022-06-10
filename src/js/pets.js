import Kirara from '../components/pets/img/galery/kirara.svg';
import Hades from '../components/pets/img/galery/hades.svg';
import Atenea from '../components/pets/img/galery/atenea.svg';
import Hera from '../components/pets/img/galery/hera.svg';
import Dante from '../components/pets/img/galery/dante.svg';
import Osiris from '../components/pets/img/galery/osiris.svg';
import Persefone from '../components/pets/img/galery/persefone.svg';
import Cronos from '../components/pets/img/galery/cronos.svg';
import Thor from '../components/pets/img/galery/thor.svg';
import Medusa from '../components/pets/img/galery/medusa.svg';
import Poseidon from '../components/pets/img/galery/poseidon.svg';
import Apolo from '../components/pets/img/galery/apolo.svg';
import Hercules from '../components/pets/img/galery/hercules.svg';
import Zeus from '../components/pets/img/galery/zeus.svg';
import Iris from '../components/pets/img/galery/iris.svg';
import Aurora from '../components/pets/img/galery/aurora.svg';

let pets=[
    {
        id:1,
        name:"Kirara",
        age:"6 meses",
        size:"mediano",
        image:<img src={Kirara} alt="Imagen de Kirara" className='pet-image'></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/XqtGVqRJ/kirara1.png",
        photo2: "https://i.postimg.cc/brZSckFW/kirara2.png",
        photo3: "https://i.postimg.cc/wvfRG0FD/kirara3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:2,
        name:"Hades",
        age:"2 años",
        size:"mediano",
        image:<img src={Hades} alt="Imagen de Hades"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/76xScC4r/Hades1.png",
        photo2: "https://i.postimg.cc/YqVf9q6Q/Hades2.png",
        photo3: "https://i.postimg.cc/jdC4tJ7s/Hades3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:3,
        name:"Atenea",
        age:"1 año",
        size:"mediano",
        image:<img src={Atenea} alt="Imagen de Atenea"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/VsgKY8ZF/Atenea1.png",
        photo2: "https://i.postimg.cc/gk0NjTfb/Atenea2.png",
        photo3: "https://i.postimg.cc/63LY4JWt/Atenea3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:4,
        name:"Hera",
        age:"4 años",
        size:"pequeño",
        image:<img src={Hera} alt="Imagen de Hera"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/NMpRwgG9/Hera1.png",
        photo2: "https://i.postimg.cc/G3gv7hS6/Hera2.png",
        photo3: "https://i.postimg.cc/02LDvXvf/Hera3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:5,
        name:"Dante",
        age:"2 años",
        size:"grande",
        image:<img src={Dante} alt="Imagen de Dante"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/W1kmJL8C/Dante1.png",
        photo2: "https://i.postimg.cc/Y0Cf4vDz/Dante2.png",
        photo3: "https://i.postimg.cc/ZqPrV81L/Dante3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:6,
        name:"Osiris",
        age:"3 años",
        size:"mediano",
        image:<img src={Osiris} alt="Imagen de Osiris"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/4dSn5nN5/Osiris1.png",
        photo2: "https://i.postimg.cc/zGCbrJ0z/Osiris2.png",
        photo3: "https://i.postimg.cc/DZZ8L1F0/Osiris3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:7,
        name:"Perséfone",
        age:"2 años",
        size:"pequeño",
        image:<img src={Persefone} alt="Imagen de Persefone"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/vmX443JC/Persefone1.png",
        photo2: "https://i.postimg.cc/rsRsYcDL/Persefone2.png",
        photo3: "https://i.postimg.cc/w3KvCPNR/Persefone3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:8,
        name:"Cronos",
        age:"6 años",
        size:"mediano",
        image:<img src={Cronos} alt="Imagen de Cronos"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/fRGKHTkM/Cronos1.png",
        photo2: "https://i.postimg.cc/L5QkjmrK/Cronos2.png",
        photo3: "https://i.postimg.cc/CMcs34dP/Cronos3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:9,
        name:"Thor",
        age:"5 meses",
        size:"pequeño",
        image:<img src={Thor} alt="Imagen de Thor"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/dVj29mMj/Thor1.png",
        photo2: "https://i.postimg.cc/05h05ydD/Thor2.png",
        photo3: "https://i.postimg.cc/wx1kdmJ9/Thor3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:10,
        name:"Medusa",
        age:"8 años",
        size:"grande",
        image:<img src={Medusa} alt="Imagen de Medusa"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/ryHtGZDk/Medusa1.png",
        photo2: "https://i.postimg.cc/9Q5RK4Pg/Medusa2.png",
        photo3: "https://i.postimg.cc/bvqGYKBQ/Medusa3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:11,
        name:"Poseidón",
        age:"4 años",
        size:"mediano",
        image:<img src={Poseidon} alt="Imagen de Poseidon"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/wTJc1Y0P/Poseidon1.png",
        photo2: "https://i.postimg.cc/kgmN8YH5/Poseidon2.png",
        photo3: "https://i.postimg.cc/W4pMYFTL/Poseidon3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:12,
        name:"Apolo",
        age:"2 años",
        size:"grande",
        image:<img src={Apolo} alt="Imagen de Apolo"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/CxzPPQNs/Apolo1.png",
        photo2: "https://i.postimg.cc/y8tfwyp4/Apolo2.png",
        photo3: "https://i.postimg.cc/hGmCgQNJ/Apolo3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:13,
        name:"Hércules",
        age:"8 años",
        size:"grande",
        image:<img src={Hercules} alt="Imagen de Hercules"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/vZf9Z7Hd/Hercules1.png",
        photo2: "https://i.postimg.cc/SRP8JDMm/Hercules2.png",
        photo3: "https://i.postimg.cc/5NHLZdhy/Hercules3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:14,
        name:"Zeús",
        age:"4 años",
        size:"mediano",
        image:<img src={Zeus} alt="Imagen de Zeus"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/CKvb3hxZ/Zeus1.png",
        photo2: "https://i.postimg.cc/cHrfZpvF/Zeus2.png",
        photo3: "https://i.postimg.cc/0QFDNVmP/Zeus3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:15,
        name:"Iris",
        age:"6 meses",
        size:"pequeño",
        image:<img src={Iris} alt="Imagen de Iris"></img>,
        category:"Perro",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/5tmCwxC7/Iris1.png",
        photo2: "https://i.postimg.cc/W4VZFDhq/Iris2.png",
        photo3: "https://i.postimg.cc/j5dJcG6s/Iris3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

    {
        id:16,
        name:"Aurora",
        age:"5 años",
        size:"mediano",
        image:<img src={Aurora} alt="Imagen de Aurora"></img>,
        category:"Gato",
        history:"Tengo 6 meses apróximadamente, provengo de un basurero ubicado en el sector de San Cristobal, fui abandonada junto con otros dos gatitos poco tiempo después de haber nacido, la calle representa un peligro inminente para mí. Es por eso que una mano amiga me acogió y ahora estoy en Mil Huellitas. <br/> Estoy buscando un hogar, tengo mucho amor para ofrecer y espero encontrar a alguien que me comprenda y me ayude a confiar nuevamente en los demás.",
        photo1: "https://i.postimg.cc/9MjLfFjL/Aurora1.png",
        photo2: "https://i.postimg.cc/QC8Sp4C5/Aurora2.png",
        photo3: "https://i.postimg.cc/28XTZxDb/Aurora3.png",
        gender: "Hembra",
        sterilization:"Si",
        deworming:"Si",
        color:"Blanco, negro y café",
        teeth:"Dentadura permanente, completos, mordida en tijera",
        eyes:"Ovales, color azul claro",
        weight:"25 lbs",
        observations:"Es muy juguetona"
    },

]


export function getAllPets(){
    return pets;
}

export function getPet(id){
    return pets.find((pet)=> pet.id===id)
}
