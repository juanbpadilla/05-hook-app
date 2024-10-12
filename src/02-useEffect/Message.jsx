import { useEffect } from "react"


/**
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
 */
export const Message = () => {

  useEffect(() => {
    console.log('Message Mounted');
    
    return () => {
      console.log('Message UnMounted');
    }
  }, [])
  

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
