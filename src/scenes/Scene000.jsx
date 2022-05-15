
/**
 * 
 * Se generaron 2 objetos: un plano y un cubo
 * Se les asignó material
 * Se generaron un par de luces ( ambiental y direccional )
 * Se agregó y ajustó el componente OrbitControls
 * Se asignaron materiales y sombras a los objetos. OJO: no todos los materiales reciben sombras
 * 
 */


import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Box000 from './components/scene000/Box000'
import Lights000 from './components/scene000/Lights000'
import Plane000 from './components/scene000/Plane000'

const Scene000 = () => {
  return (
    <Canvas shadows camera={ { position : [ 0, 2, 5 ], near : 0.1, far : 1000 } } >
      <Lights000 />
      <Box000 />
      <Plane000 />
      {/*
        https://threejs.org/docs/index.html?q=orbit#examples/en/controls/OrbitControls
      */}
      <OrbitControls
        // autoRotate
        // autoRotateSpeed={ -2 }
        enablePan={ false }
        minDistance={ 2 }
        maxDistance={ 20 }
        rotateSpeed={ 0.6 } // default 1
        maxPolarAngle={ Math.PI / 2 }
        minPolarAngle={ 0 }
      />
    </Canvas>
  )
}

export default Scene000