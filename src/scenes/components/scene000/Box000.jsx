
/**
 * 
 * No es necesario importar { mesh, boxGeometry, meshStandardMaterial }
 * 
 */

const Box000 = () => {
  return (
    <mesh
      position={ [ 0, 0.3, 0 ] }
      rotation={ [ 0, 0, 0 ] }
      castShadow
      receiveShadow
    >
      {/*
        https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry
        BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
      */}
      <boxGeometry
        args={ [
          1.4, // width ( x )
          1.4, // height ( y )
          1.4, // depth ( z )
          1, // widthSegments
          1, // heightSegments
          1, // depthSegments
        ] }
      />
      {/*
        https://threejs.org/docs/index.html?q=mesh#api/en/materials/MeshStandardMaterial
      */}
      <meshStandardMaterial
        color={ 'rgb( 255, 255, 0 )' } // también soporta '#rrggbb', 'rgb( R, G, B )'
      />
    </mesh>
  )
}

export default Box000