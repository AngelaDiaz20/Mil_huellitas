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
        photo1: "https://i.postimg.cc/TYG8zMc3/Kirara1.png",
        photo2: "https://i.postimg.cc/Pr4Gh36z/Kirara2.png",
        photo3: "https://i.postimg.cc/VkLxNqpy/Kirara3.png",
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
    },

    {
        id:3,
        name:"Atenea",
        age:"1 año",
        size:"mediano",
        image:<img src={Atenea} alt="Imagen de Atenea"></img>,
    },

    {
        id:4,
        name:"Hera",
        age:"4 años",
        size:"pequeño",
        image:<img src={Hera} alt="Imagen de Hera"></img>,
    },

    {
        id:5,
        name:"Dante",
        age:"2 años",
        size:"grande",
        image:<img src={Dante} alt="Imagen de Dante"></img>,
    },

    {
        id:6,
        name:"Osiris",
        age:"3 años",
        size:"mediano",
        image:<img src={Osiris} alt="Imagen de Osiris"></img>,
    },

    {
        id:7,
        name:"Perséfone",
        age:"2 años",
        size:"pequeño",
        image:<img src={Persefone} alt="Imagen de Persefone"></img>,
    },

    {
        id:8,
        name:"Cronos",
        age:"6 años",
        size:"mediano",
        image:<img src={Cronos} alt="Imagen de Cronos"></img>,
    },

    {
        id:9,
        name:"Thor",
        age:"5 meses",
        size:"pequeño",
        image:<img src={Thor} alt="Imagen de Thor"></img>,
    },

    {
        id:10,
        name:"Medusa",
        age:"8 años",
        size:"grande",
        image:<img src={Medusa} alt="Imagen de Medusa"></img>,
    },

    {
        id:11,
        name:"Poseidón",
        age:"4 años",
        size:"mediano",
        image:<img src={Poseidon} alt="Imagen de Poseidon"></img>,
    },

    {
        id:12,
        name:"Apolo",
        age:"2 años",
        size:"grande",
        image:<img src={Apolo} alt="Imagen de Apolo"></img>,
    },

    {
        id:13,
        name:"Hércules",
        age:"8 años",
        size:"grande",
        image:<img src={Hercules} alt="Imagen de Hercules"></img>,
    },

    {
        id:14,
        name:"Zeús",
        age:"4 años",
        size:"mediano",
        image:<img src={Zeus} alt="Imagen de Zeus"></img>,
    },

    {
        id:15,
        name:"Iris",
        age:"6 meses",
        size:"pequeño",
        image:<img src={Iris} alt="Imagen de Iris"></img>,
    },

    {
        id:16,
        name:"Aurora",
        age:"5 años",
        size:"mediano",
        image:<img src={Aurora} alt="Imagen de Aurora"></img>,
    },

]


export function getAllPets(){
    return pets;
}

export function getPet(id){
    return pets.find((pet)=> pet.id===id)
}