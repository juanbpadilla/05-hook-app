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
   * @function
   */
  const incrementFather = useCallback(
    () => {
      // console.log('setCounter( counter + 1 );');
      setCounter( (value) => value + 1 );
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
