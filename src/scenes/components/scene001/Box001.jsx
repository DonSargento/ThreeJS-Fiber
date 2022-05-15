
// import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { DoubleSide } from 'three';
// import { Matrix4 } from 'three';

const Box001 = ( { pos }) => {

  const [ hover, setHover ] = useState( false );
  const [ active, setActive ] = useState( false );

  const refBox = useRef();

  // const { camera } = useThree();
  // const matrix = new Matrix4();

  // useFrame( () => {
  //   matrix.copy( camera.matrix ).invert();
  //   // refBox.current.quaternion.setFromRotationMatrix( matrix );
  //   refBox.current.lookAt( camera.position.x, refBox.current.position.y, camera.position.z );
  // } );

  return (
    <mesh
      ref={ refBox }
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
          document.body.style.cursor = 'default';
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