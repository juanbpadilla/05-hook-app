import { useEffect, useState } from "react"


export const SimpleForm = () => {

  /**
   * useState
   * 
   * inicializamos el estado del formulario, con un objeto que contiene
   * dos propiedades: username y email.
   */
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'juan@google.com'
  })

  /**
   * Desestructuramos el objeto formState, para obtener las propiedades
   * username y email.
   */
  const { username, email } = formState;

  /**
   * onInputChange es un manejador de eventos que se encarga de actualizar
   * el estado del formulario, cada vez que el usuario escribe en los campos de texto.
   * 
   * Este manejador de eventos recibe un objeto event, que contiene la información del evento
   * ocurrido. Destructuramos el objeto event, para obtener las propiedades name y value.
   * 
   * Luego, actualizamos el estado del formulario, utilizando el método setFormState,
   * y pasamos un nuevo objeto que contiene las propiedades del formulario, y actualizamos
   * la propiedad que se corresponde con el campo de texto que se está editando.
   * 
   * En el setState, utilizamos el operador spread para copiar las propiedades del objeto
   * formState, y luego actualizamos la propiedad que se corresponde con el campo de texto
   * que se está editando.
   * 
   * La expresión [ name ]: value es una forma de actualizar una propiedad de un objeto,
   * sobreescribiendo la propiedad que se corresponde con el campo de texto que se está
   * editando. Es decir, si el campo de texto que se está editando es username, entonces
   * se actualiza la propiedad username del objeto formState, con el nuevo valor que se
   * está escribiendo en el campo de texto. Lo mismo ocurre con el campo de texto email.
   * Esta es una propiedad computada, que se evalúa en tiempo de ejecución.
   * 
   * @param {Event} event 
   */
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  // Se ejecuta una sola vez, cuando el componente es renderizado por primera vez.
  useEffect( () => {
    console.log('useEffect called!');
  }, []);

  // Se ejecuta cada vez que el formState cambia.
  useEffect( () => {
    console.log('formState changed!');
  }, [formState]);

  // Se ejecuta cada vez que el email cambia.
  useEffect( () => {
    console.log('email changed!');
  }, [ email ]);


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className='form-control'
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className='form-control mt-2'
        placeholder='email@example.com'
        name='email'
        value={ email }
        onChange={ onInputChange }
      />
    </>
  )
}
