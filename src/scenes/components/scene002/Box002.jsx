
import { BackSide } from 'three'

const Box002 = ( { boxColor } ) => {
  return (
    <>
      <mesh>
        <boxBufferGeometry args={ [ 2, 2, 2, 4, 4, 4 ] } />
        <meshStandardMaterial color={ boxColor } />
      </mesh>
      {/*
            Outline
      */}
      <mesh>
        <boxBufferGeometry args={ [ 2.1, 2.1, 2.1, 4, 4, 4 ] } />
        <meshBasicMaterial color={ 0x000000 } side={ BackSide } />
      </mesh>
    </>
  )
}

export default Box002