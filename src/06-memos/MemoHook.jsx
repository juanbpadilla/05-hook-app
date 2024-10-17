import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"


/**
 * Definición de la función heavyStuff
 * 
 * Esta función simula una tarea costosa realizando un bucle hasta iterationNumber y registrando un mensaje en la consola en cada iteración.
 * Finalmente, retorna una cadena indicando el número de iteraciones realizadas.
 * 
 * @param {*} iterationNumber 
 * @returns 
 */
const heavyStuff = ( iterationNumber ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }

  return `${ iterationNumber } iteraciones realizadas`;
}

/**
 * Definición del componente MemoHook
 * Este componente utiliza varios hooks de React para manejar el estado y optimizar el rendimiento.
 * 
 * @returns 
 */
export const MemoHook = () => {

  /**
   * useCounter es un hook personalizado que maneja el estado del contador.
   * Inicializa el contador con un valor de 3000 y proporciona una función increment para incrementar el valor del contador.
   */
  const { counter, increment } = useCounter( 3000 );

  /**
   * useState se utiliza para manejar el estado booleano 'show', que se inicializa en true. 
   * La función setShow se utiliza para actualizar el valor de 'show'.
   */
  const [show, setShow] = useState(true);

  /**
   * useMemo se utiliza para memorizar el resultado de la función heavyStuff basada en el valor del contador.
   * heavyStuff es una función que realiza cálculos costosos.
   * useMemo asegura que estos cálculos solo se realicen cuando el valor del contador cambie, optimizando así el rendimiento.
   */
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  /**
   * El componente retorna un fragmento JSX que incluye:
   * - Un encabezado <h1> que muestra el valor actual del contador dentro de un elemento <small>.
   * - Una línea horizontal <hr /> para separar visualmente el contenido.
   * - Un encabezado <h4> que muestra el valor memorizado calculado por heavyStuff.
   * - Un botón con la clase 'btn btn-primary' que, al hacer clic, llama a la función increment para incrementar el valor del contador.
   * - Un botón con la clase 'btn btn-outline-primary' que, al hacer clic, alterna el valor de 'show' entre true y false.
   *  El texto del botón muestra el estado actual de 'show' utilizando JSON.stringify(show).
   */
  return (
    <>
      <h1>Counter: <small>{ counter }</small></h1>
      <hr />

      {/* <h4>{ heavyStuff( counter ) }</h4> */}
      <h4>{ memorizedValue }</h4>

      <button
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow( !show ) }
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}
