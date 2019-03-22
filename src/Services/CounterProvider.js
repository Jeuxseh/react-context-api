import React, { Component } from 'react';
const MyContext = React.createContext();

// vamos a hacer la función withCounter a la que le pasaremos un componente
// esta función tendra que inyectar props cogiendo el contexto del consumer
// esta función automatiza el proceso de crear componentes que reciban las props desde el context
export const withCounter = (Comp) => {
  return class WithCounter extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {(value) => (
            <Comp 
              counter={value.counter}
              increase={value.increase}
              // estas this props son las propiedades que le voy a pasar cuando llame al NavbarWithCounter desde el app.js, las propago para que no se pierdan
              {...this.props}
            />
          )}
        </MyContext.Consumer>
      )
    }
  }
}

class CounterProvider extends Component {

  state = {
    counter: 0,
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      // aqui estoy creando el provider
      // ahora estamos creando un objeto para pasar como value
      // estoy pasando tb la función para que sea capaz de ejecutarla en el boton que creare
      <MyContext.Provider value={{
        counter: this.state.counter,
        increase: this.handleIncrease
      }}>
        {this.props.children}
      </MyContext.Provider>

    );
  }
}

export default CounterProvider;