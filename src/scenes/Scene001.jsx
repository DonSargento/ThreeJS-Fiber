
/**
 * 
 * Probando las softShadows de drei + interacción con el ratón
 * 
 */



import {
  BakeShadows,
  OrbitControls,
  softShadows // << --------------------  Importamos el componente
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box001 from './components/scene001/Box001'
import Plane001 from './components/scene001/Plane001'

// ----------------------------------------------------------------

        softShadows( {
          frustum: 3.75,
          size: 0.01, // 0.005,
          near: 9.5,
          samples:20,
          rings: 11, // Rings (default: 11) must be a int
        } );

// ----------------------------------------------------------------

const Scene001 = () => {

  return (
    <Canvas
      shadows
      camera={ {
        position : [ 0, 2, 5 ],
        near : 0.1,
        far : 1000
      } }
    >
      <color attach='background' args={ [ 0xa2b9e7 ] } />
      <ambientLight args={ [ 0xffffff, 0.5 ] } />
      {/* <directionalLight position={ [ -5, 4, 4 ] } intensity={ 1.4 } color={ 0xccddff } /> */}
      <directionalLight
        castShadow
        color={ 0xffffff }
        intensity={ 1.2 }
        position={ [ 4, 6, 5 ] }

        // Resolución de las sombras
        shadow-mapSize-width={ 512 }
        shadow-mapSize-height={ 512 }

        // Zona en las que aparecerán las sombras ( medidas relativas a la cámara )
        shadow-camera-far={ 16 }
        shadow-camera-left={ -5 }
        shadow-camera-right={ 5 }
        shadow-camera-top={ 5 }
        shadow-camera-bottom={ -2 }

      />
      {/* 

        Se pueden agrupar los objetos <group> y transformarse en conjunto

      */}
      <group position={ [ 0, .2, 0 ] }>
        <Box001 pos={ [ 1, 1.5, 1 ] } />
        <Box001 pos={ [ 1, 1.5, -1 ] } />
        <Box001 pos={ [ -1, 1.5, 1 ] } />
        <Box001 pos={ [ -1, 1.5, -1 ] } />
      </group>

      <Plane001 />

      <OrbitControls
        target={ [ 0, 0.8, 0 ] }    // Ajusta la posición del target de la cámara
        enablePan={ false }         // paneo
        minDistance={ 4 }           // dolly mínimo
        maxDistance={ 20 }          // dolly máximo
        rotateSpeed={ 0.6 }         // default 1
        minPolarAngle={ 0 }         // Polo norte
        maxPolarAngle={ Math.PI / 2 } // Polo sur ( Ecuador en este caso )
      />
      {/*
        
        Se pueden 'bakear' las sombras para que no las calcule nuevamente

      */}
      <BakeShadows />
      
    </Canvas>
  )
}

export default Scene001