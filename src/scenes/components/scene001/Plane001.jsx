import { DoubleSide } from "three"

const Plane001 = () => {
  return (
    <mesh
      rotation={ [ - Math.PI / 2, 0, 0 ] }
      receiveShadow
    >
      <planeBufferGeometry
        args={ [ 10, 10, 4, 4 ] }
      />
      <meshStandardMaterial
        color={ 0xffffff }
        side={ DoubleSide }
      />
    </mesh>
  )
}

export default Plane001