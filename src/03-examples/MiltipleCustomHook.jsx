import { useFetch } from "../hooks"


export const MiltipleCustomHook = () => {

  // eslint-disable-next-line no-unused-vars
  const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/4');

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      { isLoading && <p>Cargando...</p> }

      {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}

      <h2>{ data?.name }</h2>
    </>
  )
}
