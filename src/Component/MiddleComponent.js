// import React, { Component, Fragment } from 'react';
import React from 'react';
import { withCounter } from '../Services/CounterProvider'

// hemos transformado la clase con su render en una constante y le hemos ido quitando todo lo que hay dentro comentado

const MiddleComponent = (props) => {

    return (
      // vamos a comentarlo todo menos lo que queremos pasar y ponemos un withCounter
      <>
        <h1>Im the middle component (Consumer)</h1>
        {/* <MyContext.Consumer> */}
        {/* lo siguiente es un render-props-callback */}
        {/* al consumer le tengo qe pasar una funcion para que haga lo que sea, manipular el valor qe envio o lo que sea */}

        {/* {(value) => ( */}
        {/* //ponemos un fragment para que englobe lo que queremos retornar sin necesidad de poner un div que despues nos quedara obsoleto en el arbol
                //fragment es una especie de div que lo único que hace es retornar los hijos, seria lo mismo que poner
                // <> estas dos cosas son los shortcuts del fragment sin necesidad de importar el fragment, hacen la misma función "un div fantasma"
                // </> */}
        {/* <Fragment> */}
        <h2>Context consumer</h2>
        {/* aqui estoy accediento a los valores que le he pasado desde mi Provider */}
        <p>{props.counter}</p>
        <button onClick={props.increase}>Incrementar</button>
        {/* </Fragment> */}

        {/* )} */}
        {/* </MyContext.Consumer> */}
      </>
    )
  };

export default withCounter(MiddleComponent);