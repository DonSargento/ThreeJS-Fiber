
import { OrthographicCamera, useCamera } from '@react-three/drei'
import { createPortal, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react';
import { Scene } from 'three'

const Controles002 = ( { props } ) => {

  const { setBoxColor } = props;

  const { gl, scene, camera, size } = useThree();
  const virtualScene = useMemo( () => new Scene(), [] );

  const refVirtualCam = useRef();

  useFrame( () => {
    gl.autoClear = true;
    gl.render( scene, camera );
    gl.autoClear = false;
    gl.clearDepth();
    gl.render( virtualScene, refVirtualCam.current );
  }, 1 );


  const pointerDownHandler = ( e, clr ) => {
    setBoxColor( clr );
  }
  const pointerOverHandler = () => {
    document.body.style.cursor = 'pointer';
  }
  const pointerOutHandler = () => {
    document.body.style.cursor = 'default';
  }


  return createPortal(
    <>
      <OrthographicCamera
        ref={ refVirtualCam }
        makeDefault={ false }
        position={ [ 0, 0, 100 ] }
      />
      <mesh
        position={ [ ( - size.width / 2 ) + 80, ( - size.height / 2 ) + 80, 0 ] }
        raycast={ useCamera( refVirtualCam ) }
        onPointerDown={ ( e ) => { pointerDownHandler( e, 0xffffff ) } }
        onPointerOver={ pointerOverHandler }
        onPointerOut={ pointerOutHandler }
        >
        <planeGeometry args={ [ 60, 60, 60 ] } />
        <meshBasicMaterial color={ 0xffffff } />
      </mesh>
      <mesh
        position={ [ ( - size.width / 2 ) + 160, ( - size.height / 2 ) + 80, 0 ] }
        raycast={ useCamera( refVirtualCam ) }
        onPointerDown={ ( e ) => { pointerDownHandler( e, 0xff0000 ) } }
        onPointerOver={ pointerOverHandler }
        onPointerOut={ pointerOutHandler }
        >
        <planeGeometry args={ [ 60, 60, 60 ] } />
        <meshBasicMaterial color={ 0xff0000 } />
      </mesh>
      <mesh
        position={ [ ( - size.width / 2 ) + 240, ( - size.height / 2 ) + 80, 0 ] }
        raycast={ useCamera( refVirtualCam ) }
        onPointerDown={ ( e ) => { pointerDownHandler( e, 0x0077ff ) } }
        onPointerOver={ pointerOverHandler }
        onPointerOut={ pointerOutHandler }
      >
        <planeGeometry args={ [ 60, 60, 60 ] } />
        <meshBasicMaterial color={ 0x0077ff } />
      </mesh>
      {/*  Outlines  */}
      <mesh
        position={ [ ( - size.width / 2 ) + 80, ( - size.height / 2 ) + 80, -1 ] }
      >
        <planeGeometry args={ [ 70, 70, 70 ] } />
        <meshBasicMaterial color={ 0x000000 } />
      </mesh>
      <mesh
        position={ [ ( - size.width / 2 ) + 160, ( - size.height / 2 ) + 80, -1 ] }
      >
        <planeGeometry args={ [ 70, 70, 70 ] } />
        <meshBasicMaterial color={ 0x000000 } />
      </mesh>
      <mesh
        position={ [ ( - size.width / 2 ) + 240, ( - size.height / 2 ) + 80, -1 ] }
      >
        <planeGeometry args={ [ 70, 70, 70 ] } />
        <meshBasicMaterial color={ 0x000000 } />
      </mesh>
    </>,
    virtualScene
  )
}

export default Controles002