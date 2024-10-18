import { PropTypes } from 'prop-types';
import React from 'react';

/**
 * Componente ShowIncrement.
 * 
 * Este componente renderiza un botón que, al ser clicado, llama a la función `increment` pasada como prop.
 * Utiliza `React.memo` para prevenir renders innecesarios.
 * 
 * @componente
 * @ejemplo
 * const increment = () => console.log('Incrementado');
 * return <ShowIncrement increment={increment} />;
 * 
 * @param {Object} props - Las props del componente.
 * @param {Function} props.increment - La función a llamar cuando se clica el botón.
 * 
 * @returns {JSX.Element} El componente del botón renderizado.
 */
export const ShowIncrement = React.memo(({ increment }) => {

  console.log('Me volví a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increment( 5 );
      }}
    >
      Incrementar
    </button>
  )
})

ShowIncrement.displayName = 'ShowIncrement';

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}
