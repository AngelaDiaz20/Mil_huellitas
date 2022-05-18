import logo from './pokebola.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p className="App-paragraph">
          POKEMON
        </p>
       
        <a
          className="App-link"
          href="https://www.pokemon.com/el/pokedex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokedex | ¡Cónocelos todos!
        </a>

      </header>
    </div>
  );
}

export default App;
