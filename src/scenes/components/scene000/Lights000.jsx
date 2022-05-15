
const Lights000 = () => {
  return (
    <>
      {/*
        https://threejs.org/docs/index.html?q=ambient#api/en/lights/AmbientLight
        AmbientLight( color : Integer, intensity : Float )
      */}
      <ambientLight
        args={ [ 0xffffff, 0.25 ] } />
      {/*
        https://threejs.org/docs/index.html?q=directiona#api/en/lights/DirectionalLight
        DirectionalLight( color : Integer, intensity : Float )
      */}
      <directionalLight
        // Se puede poner así:
        // args={ [ 0xffffff, 0.7 ] }
        // o como a continuación
        color={ 0xffffff }
        intensity={ 1.5 }
        position={ [ 3, 10, 2 ] }
        castShadow
        shadow-mapSize-height={ 512 }
        shadow-mapSize-width={ 512 }
      />
    </>
  )
}

export default Lights000