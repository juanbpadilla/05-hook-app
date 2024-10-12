import { useState } from "react"

/**
 * Custom Hook useCounter
 * 
 * Este custom hook maneja el estado de un contador y provee funciones 
 * para incrementar, decrementar y resetear el contador.
 * 
 * Tanto el valor inicial como el valor de incremento/decremento son opcionales.
 * 
 * Para pasar un valor inicial, se debe pasar un argumento al custom hook, por ejemplo:
 * useCounter( 10 )
 * 
 * @param {*} initialValue 
 * @returns 
 */
export const useCounter = ( initialValue = 10 ) => {

  const [counter, setCounter] = useState( initialValue )

  /**
   * Incrementa el contador en el valor especificado.
   * 
   * Para incrementar el contador en un valor específico,
   * se debe pasar un argumento al método, por ejemplo:
   * increment( 2 )
   * 
   * Si no se especifica un valor, se incrementa en 1.
   * 
   * @param {*} value 
   * @returns 
   */
  const increment = ( value = 1 ) => setCounter( counter + value );

  /**
   * Decrementa el contador en el valor especificado.
   * 
   * Antes de decrementar el contador, se verifica que el contador no pueda decrementar
   * por debajo de 0.
   * 
   * Para decrementar el contador en un valor específico,
   * se debe pasar un argumento al método, por ejemplo:
   * decrement( 2 )
   * 
   * Si no se especifica un valor, se decrementa en 1.
   * 
   * @param {*} value 
   * @returns 
   */
  const decrement = ( value = 1 ) => {
    if ( counter < 1 ) return;
    setCounter( counter - value )
  };

  const reset = () => setCounter ( initialValue );

  /**
   * Se retorna un objeto con las propiedades counter, increment, decrement y reset, 
   * para poder utilizarlas en el componente que utilice este custom hook.
   */
  return {
    counter,
    increment,
    decrement,
    reset
  }

}