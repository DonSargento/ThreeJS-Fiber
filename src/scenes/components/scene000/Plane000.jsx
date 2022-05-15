
import { DoubleSide } from 'three'

const Plane000 = () => {
  return (
    <mesh
      rotation={ [ -Math.PI / 2, 0, 0 ] }
      position={ [ 0, -0.7, 0 ] }
      receiveShadow
    >
      {/*
        https://threejs.org/docs/index.html?q=plane#api/en/geometries/PlaneGeometry
        PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)
      */}
      <planeGeometry
        args={ [ 6, 6, 2, 2 ] }
      />
      <meshStandardMaterial
        color={ 0xffffff }
        side={ DoubleSide }
        reflectivity={ 0 }
      />
    </mesh>
  )
}

export default Plane000