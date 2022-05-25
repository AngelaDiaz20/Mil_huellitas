import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Pets from '../components/pets/Pets';
import Slides from '../components/slide/Slide';
import Requirement from '../components/requirement/Requirement';

function Adopcion(){
    return(
        <div>
            <Header />
            <Slides />
            <Pets />
            <Requirement />
            <Footer />
        </div>
    )
}

export default Adopcion;


