import { useCounter } from "../hooks/useCounter"

/**
 * CounterWithCustomHook component
 * 
 * Este componente muestra un contador que utiliza un custom hook para manejar el estado del contador.
 *  
 * @returns 
 */
export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  /**
   * Contiene tres botones que permiten incrementar, decrementar y resetear el contador.
   * 
   * Tanto en el botón de incrementar como en el de decrementar, se debe pasar un argumento al método
   * increment o decrement. Esto se debe a que en el custom hook, los métodos increment y decrement
   * reciben un argumento. Por lo que se debe pasar un argumento al método.
   * 
   * El botón de incrementar si no se especifica un valor, incrementa en 1.
   * Para incrementar en un valor específico, se debe pasar un argumento al método increment.
   * por ejemplo: increment( 2 ). Pero la forma de hacerlo es con una arrow function, por ejemplo:
   * onClick={ () => increment( 2 ) }. Esto se debe a que en el custom hook, el método increment
   * recibe un argumento, por lo que se debe pasar un argumento al método.
   * 
   * 🚫 No se debe enviar de esta manera onClick={ increment }, ya que así estamos enviando
   * el evento del click, y no el valor de incremento.
   * 
   * ✅ De manera predeterminada, el valor de incremento es 1. en este caso, 
   * se debe pasar de esta manera: onClick={ () => increment() }.
   * 
   * En el caso del botón reset, no se necesita pasar un argumento, ya que la función reset
   * no recibe argumentos. Por lo que se puede pasar de esta manera: onClick={reset}.
   * 
   * El caso de decrementar es similar al de incrementar, se debe pasar un argumento al método decrement.
   * Por ejemplo: onClick={ () => decrement( 2 ) }, para decrementar en 2.
   */
  return (
    <>
      <h1>Counter With Hook: { counter }</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ () => increment() }
      >+1</button>
      <button 
        className="btn btn-primary"
        onClick={reset}
      >Reset</button>
      <button 
        className="btn btn-primary"
        onClick={ () => decrement() }
      >-1</button>
    </>
  )
}
