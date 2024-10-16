import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  });

  useEffect(() => {
    getFetch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  /**
   * Esta función se encarga de actualizar el estado del componente 
   * en un estado de carga. Se llama antes de realizar la petición fetch 
   * para indicar que los datos se están cargando.
   */
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    });
  }
  
  /**
   * Esta función asíncrona se encarga de realizar la petición fetch
   * a la URL indicada en el hook useFetch.
   * 
   * Si la petición es exitosa, se actualiza el estado del componente
   * con la data obtenida, y se almacena en el cache local.
   * 
   * Si la petición falla, se actualiza el estado del componente
   * con un error y se muestra el mensaje de error.
   */
  const getFetch = async () => {

    {/* 
      Esta sección verifica si la URL ya fue consultada previamente y si los datos están almacenados en el cache local.
      Si es así, se utilizan los datos de la caché y se actualiza el 
      estado del componente sin realizar una nueva solicitud de red.
    */}
    if ( localCache[url] ) {
      console.log('Usando cache')
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      })
      return;
    }

    setLoadingState();

    const resp = await fetch( url );

    // sleep
    await new Promise( resolve => setTimeout( resolve, 1500 ) );

    if ( !resp.ok ) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      });
      return;
    }

    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null
    });

    // Manejo del cache
    localCache[url] = data;

  }
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
