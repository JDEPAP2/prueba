import "./styles.css";
import React, { createContext } from "react";
import { ARMarker, ARCanvas } from "@artcom/react-three-arjs";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

const App = () => {
  const Model = () => {
    const materials = useLoader(MTLLoader, "textures/RAM/RAM.mtl");
    const object = useLoader(OBJLoader, "models/RAM.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    return <primitive object={object} scale={0.2} />;
  };

  return (
    <>
      <ARCanvas
        patternRatio={0.5}
        gl={{
          antialias: false,
          powerPreference: "default",
          physicallyCorrectLights: true,
        }}
        onCameraStreamReady={() => console.log("Camera stream ready")}
        onCameraStreamError={() => console.error("Camera stream error")}
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 0]} intensity={10.0} />
        <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
          <mesh>
            <Model />
            <meshStandardMaterial color={"hotpink"} />
          </mesh>
        </ARMarker>
      </ARCanvas>
    </>
  );
};

export default App;
