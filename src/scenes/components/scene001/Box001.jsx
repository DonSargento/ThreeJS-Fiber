
import { useState } from 'react';
import { DoubleSide } from 'three';

const Box001 = ( { pos }) => {

  const [ hover, setHover ] = useState( false );
  const [ active, setActive ] = useState( false );

  return (
    <mesh
      position={ pos }
      castShadow
      onPointerOver ={
        ( e ) => {
          e.stopPropagation(); // necesario para evitar activar objetos detrás del elegido
          setHover( true );
          document.body.style.cursor = 'pointer';
        }
      }
      onPointerOut = {
        ( e ) => {
          setHover( false );
          document.body.style.cursor = 'pointer';
        }
      }
      onPointerDown = {
        ( e ) => {
          e.stopPropagation(); // necesario para evitar activar objetos detrás del elegido
          setActive( !active );
        }
      }
    >
      <boxBufferGeometry
        args={ [ 0.5, 3, 0.5 ] }
      />
      <meshStandardMaterial
        color={ active ? ( hover ? 0xffdd99 : 0xffcc00 ) : ( hover ? 0x99ddff : 0x00ccff ) }
        side={ DoubleSide }
      />
    </mesh>
  )
}

export default Box001