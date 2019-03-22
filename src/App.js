import React, { Component } from 'react';
import './App.css';
// const MyContext = React.createContext();
import CounterProvider, { withCounter } from './Services/CounterProvider'
import MiddleComponent from './Component/MiddleComponent'
import PokemonList from './Component/PokemonList';


// // vamos a crear un componente funcional para poder usarlo de consumer
// const MiddleComponent = () => {
//   return (
//     <div>
//       <h1>Im the middle component (Consumer)</h1>
//       <MyContext.Consumer>
//         {(value) => (
//           //ponemos un fragment para que englobe lo que queremos retornar sin necesidad de poner un div que despues nos quedara obsoleto en el arbol
//           //fragment es una especie de div que lo único que hace es retornar los hijos, seria lo mismo que poner
//           // <> estas dos cosas son los shortcats del fragment sin necesidad de importar el fragment, hacen la misma función "un div fantasma"
//           // </>
//           <Fragment>
//             <h2>Context consumer</h2>
//             <p>{value}</p>
//           </Fragment>

//         )}
//       </MyContext.Consumer>
//     </div>
//   )
// }

const Navbar = (props) => {
  return (
    // <MyContext.Consumer>
    //   {(value) => (
        <nav>
          <h1>{props.title}</h1>
          <ul>
            <li>Home</li>
            <li>Favoritos: {props.counter}</li>
          </ul>
        </nav>
    //   )}
    // </MyContext.Consumer>
  )
}

// aquí estamos creando un componente que es el componente qe le estamos pasando con la habilidad de conectarse a la información del provider
// le pasamos el componente Navbar y tendra las props que le pasemos desde el withcCounter
const NavbarWithCounter = withCounter(Navbar);


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* dentro de myContectProvider se pintara todo aquello qe yo quiera pintar (xD) */}
        {/* le pasamos el componente que tendrá el "componente de consumer", será el que reciba la info */}
        {/* si nos fijamos en middleComponent no hay ninguna props qe estemos pasando, ahi esta el salto que hace el context */}
        {/* <MyContext.Provider value="My Provider value"> */}
        {/* hemos quitado myContextProvider para hacer un componente que nos los de(CounterProvider) */}
        <CounterProvider>
          <MiddleComponent />
          <NavbarWithCounter title="Navbar" />
          <PokemonList/>
        </CounterProvider>
        {/* </MyContext.Provider> */}
      </div>
    );
  }
}

export default App;
