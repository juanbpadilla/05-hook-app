import { useRef } from "react"

/**
 * Este componente proporciona una interfaz de usuario simple donde un campo de entrada (input)
 * puede recibir el foco automáticamente cuando se hace clic en un botón.
 * 
 * @returns 
 */
export const FocusScreen = () => {

  /**
   * Se utiliza el hook useRef para crear una referencia mutable que 
   * persiste durante todo el ciclo de vida del componente. 
   * inputRef se utilizará para referenciar el elemento de entrada (input).
   */
  const inputRef = useRef();

  /**
   * La función onClick se ejecuta cuando se hace clic en el botón. 
   * Utiliza inputRef.current.select() para seleccionar el contenido del campo de entrada.
   * 
   * inputRef.current hace referencia al elemento DOM del campo de entrada. 
   * La propiedad current de la referencia contiene el elemento DOM real al que se ha asignado la referencia.
   */
  const onClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={ onClick }
      >
        Set focus
      </button>
    </>
  )
}
