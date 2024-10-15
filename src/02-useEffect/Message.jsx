import { useEffect, useState } from "react"


/**
 * ⚠️ Ver los comentarios agregados al final del código para más detalles de la actualización del hook.
 * 
 * En este caso, utilizamos el hook useEffect para montar y desmontar el componente.
 * 
 * El componente Message se monta cuando se renderiza por primera vez.
 * Cuando el componente se monta, se imprime en consola el mensaje 'Message Mounted'.
 * 
 * El componente Message se desmonta cuando se elimina del árbol de componentes, es decir,
 * cuando se elimina del DOM. En el componente SimpleForm, el componente Message se renderiza
 * condicionalmente, solo se renderiza si el usuario ya existe. Por lo tanto, el componente
 * Message se desmonta cuando el usuario no existe.
 * cuando el componente se desmonta, se imprime en consola el mensaje 'Message UnMounted'.
 * 
 * 🚫 Esto no se podría hacer si en lugar de destruir el componente, se ocultara con CSS, ya que
 * el componente seguiría montado en el árbol de componentes, y no se ejecutaría el código de
 * limpieza del hook useEffect.
 * 
 * ⚠️ Ver los comentarios agregados al final del código para más detalles de la actualización del hook.
 */
export const Message = () => {
  // Declaramos el estado coords con useState, inicializado en { x: 0, y: 0 }
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Utilizamos useEffect para manejar efectos secundarios
  useEffect(() => {
    // Este código se ejecuta cuando el componente se monta
    // console.log('Message Mounted');

    // Definimos la función onMouseMove que actualiza el estado coords con las coordenadas del ratón
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y })
    }

    // Añadimos un event listener para el evento mousemove en el objeto window
    window.addEventListener( 'mousemove', onMouseMove )
    
    // La función de limpieza se ejecuta cuando el componente se desmonta
    return () => {
      // Este código se ejecuta cuando el componente se desmonta
      // console.log('Message UnMounted');

      // Eliminamos el event listener para evitar fugas de memoria
      window.removeEventListener( 'mousemove', onMouseMove );
    }
  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez al montar y desmontar el componente
  
  // Renderizamos el componente
  return (
    <>
      <h3>Usuario ya existe</h3>
      {/* Mostramos las coordenadas del ratón en formato JSON */}
      { JSON.stringify( coords ) }
    </>
  )
}
/*
  Actualización del hook useEffect:
  
  1. Importamos los hooks necesarios de React.
  2. Definimos el componente funcional Message.
  3. Declaramos el estado coords con useState, inicializado en { x: 0, y: 0 }.
  4. Utilizamos useEffect para manejar efectos secundarios:
    - Este código se ejecuta cuando el componente se monta.
    - Definimos la función onMouseMove que actualiza el estado coords con las coordenadas del ratón.
    - Añadimos un event listener para el evento mousemove en el objeto window.
    - La función de limpieza se ejecuta cuando el componente se desmonta:
      - Este código se ejecuta cuando el componente se desmonta.
      - Eliminamos el event listener para evitar fugas de memoria.
    - El array vacío [] asegura que este efecto solo se ejecute una vez al montar y desmontar el componente.
  5. Renderizamos el componente:
    - Mostramos un mensaje "Usuario ya existe".
    - Mostramos las coordenadas del ratón en formato JSON.

  Importancia de la limpieza:
  Es crucial eliminar los event listeners cuando el componente se desmonta para evitar fugas de memoria y comportamientos inesperados. Esto se logra mediante la función de limpieza retornada en useEffect.
*/
