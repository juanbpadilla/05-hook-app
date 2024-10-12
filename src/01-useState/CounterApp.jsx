import { useState } from "react"

/**
 * Este componente es un contador que utiliza el hook useState
 * para manejar el estado del componente.
 * 
 * @returns 
 */
export const CounterApp = () => {
  // const [counter, setCounter] = useState({
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  /**
   * En este caso, si se utiliza el spread operator para actualizar el estado
   * de un objeto, se debe de tener en cuenta que si no se actualizan todos los
   * valores del objeto, los valores que no se actualicen se mantendrán con el
   * valor que tenían antes de la actualización.
   * 
   * En este caso, si se actualiza el valor de counter1, los valores de counter2
   * y counter3 se mantendrán con el valor que tenían antes de la actualización.
   * 
   * Para evitar esto, se puede utilizar el spread operator para copiar el estado
   * actual y luego actualizar el valor que se desea cambiar.
   * 
   * @returns
   */
  return (
    <>
      <h1>Counter1: { counter1 }</h1>
      <h1>Counter2: { counter2 }</h1>
      <h1>Counter3: { counter3 }</h1>

      <hr />

      <button 
        className="btn btn-primary" 
        onClick={ 
          () => setCounter({
            ...state,
            counter1: counter1 + 1
          })
        }>+1</button>
    </>
  )
}
