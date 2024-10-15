import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

  /**
   * Se desestructura el objeto que se devuelve del hook personalizado useForm.
   * 
   * Podemos desestructurar directamente el username, email y password del objeto que se devuelve del hook personalizado useForm, gracias a que en el hook useForm se utiliza el operador ...spread para devolver el estado del formulario y la función manejadora de cambios de entrada.
   * 
   * username, email, password: Estas son las propiedades del estado del formulario que se desestructuran del objeto retornado por useForm. Estas variables contienen los valores actuales de los campos del formulario y se inicializan con los valores proporcionados en el objeto pasado a useForm. Por ejemplo, username se inicializa con una cadena vacía ''.
   */
  // eslint-disable-next-line no-unused-vars
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  /**
   * En este caso, no es necesario desestructurar el objeto formState, ya que ya se ha desestructurado previamente en la declaración de variables.
   */
  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>
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

      <input
        type="password"
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={ password }
        onChange={ onInputChange }
      />

      <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
