import PropTypes from 'prop-types';
import React from 'react';
// La importación de memo está comentada porque utilizamos React.memo directamente.
// import { memo } from 'react';

/**
 * Definimos el componente Small utilizando React.memo para memorizarlo. 
 * Esto evita renderizados innecesarios si las propiedades no han cambiado.
 * 
 * @param {number} value
 */
export const Small = React.memo(({ value }) => {

  // Este console.log se utiliza para depuración, mostrando cuándo el componente se vuelve a renderizar.
  console.log('Me volví a dibujar :(');

  // El componente retorna un elemento <small> que muestra el valor de la propiedad 'value'.
  return (
    <small>{ value }</small>
  )
})

{/*
 * Definimos un nombre de visualización para el componente. 
 * 
 * Esto es útil para propósitos de depuración y para mejorar la legibilidad 
 * en las herramientas de desarrollo de React.
 */}
Small.displayName = 'Small';

Small.propTypes = {
  value: PropTypes.number.isRequired
}