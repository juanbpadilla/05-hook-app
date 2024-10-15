import { useState } from "react";


/**
 * Hook personalizado para gestionar el estado del formulario.
 *
 * @param {Object} initialForm - El estado inicial del formulario.
 * @returns {Object} - Un objeto que contiene el estado del formulario y un manejador de cambios de entrada.
 * @property {Object} formState - El estado actual del formulario.
 * @property {Function} onInputChange - Función manejadora para actualizar el estado del formulario al cambiar la entrada.
 */
export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState( initialForm );

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }
  
  const onResetForm = () => {
    setFormState( initialForm );
  };

  /**
   * Se devuelve un objeto que contiene el estado del formulario y un manejador de cambios de entrada.
   * 
   * ...formState: Se utiliza para desestructurar el estado del formulario y devolverlo como parte del objeto de retorno.
   * formState: Es el estado actual del formulario.
   * onInputChange: Es una función manejadora que se utiliza para actualizar el estado del formulario al cambiar la entrada.
   */
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
