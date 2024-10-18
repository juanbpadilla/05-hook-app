import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


/**
 * Componente CallbackHook.
 * 
 * Este componente demuestra el uso del hook `useCallback` para memorizar una función
 * que incrementa un contador. El estado del contador se maneja usando el hook `useState`.
 * La función `incrementFather` está memorizada para prevenir renderizados innecesarios.
 * 
 * @componente
 * @ejemplo
 * return (
 *   <CallbackHook />
 * )
 */

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );

  /**
   * Incrementa el contador en 1.
   * 
   * Esta función está memorizada usando `useCallback` para prevenir renderizados innecesarios.
   * Actualiza el estado del contador incrementando su valor actual en 1.
   * 
   * Actualización:
   * - Se ha añadido un argumento `value` a la función para incrementar el contador en `value` en lugar de 1.
   * La función incrementFather acepta un parámetro value, que representa el valor por el cual se incrementará el contador.
   * 
   * @function
   */
  const incrementFather = useCallback(
    (value) => {
      setCounter( (c) => c + value );
    },
    [],
  );

  useEffect(() => {
    // incrementFather();
  }, [incrementFather]);
  

  // const incrementFather = () => {
  //   setCounter( counter + 1 );
  // }

  return (
    <>
      <h1>Callback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather } />
    </>
  )
}
