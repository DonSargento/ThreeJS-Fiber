
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Box002 from './components/scene002/Box002'
import Controles002 from './components/scene002/Controles002'

const Scene002 = () => {

  const [ boxColor, setBoxColor ] = useState( 0xff0000 );

  return (
    <Canvas
      camera={ { position : [ 2, 1, 6 ] } }
    >
      <ambientLight color={ 0xffffff } intensity={ 0.6 } />
      <pointLight color={ 0xffffff } intensity={ 1.8 } position={ [ 3, 6, 5 ] } decay={ 0 } />
      <pointLight color={ 0xffffff } intensity={ 0.2 } position={ [ -4, -2, -5 ] } decay={ 0 } />


      <Box002 boxColor={ boxColor } />

      <OrbitControls
        target={ [ 0, 0, 0 ]}
        enablePan={ false }
        minDistance={ 4 }
        maxDistance={ 20 }
        rotateSpeed={ 0.6 } // default 1
        maxPolarAngle={ Math.PI * 0.9 }
        minPolarAngle={ Math.PI * 0.1 }
      />

      <Controles002 props={ { boxColor, setBoxColor } } />

    </Canvas>
  )
}

export default Scene002