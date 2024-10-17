import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // console.log( pRef.current.getBoundingClientRect() );
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });

  }, [sprites])

  return (
    <>
      <section style={{ height: 200, display: 'flex' }}>
        <h2  ref={ pRef } className="text-capitalize">#{ id } - { name }</h2>

        {/* Imágenes */}
        <div>
          {
            sprites.map( (sprite) => (
              <img 
                key={ sprite }
                src={ sprite }
                alt={ name }
              />
            ))
          }        
        </div>

      </section>

      <code>
        { JSON.stringify(boxSize) }
      </code>
    </>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array
}
