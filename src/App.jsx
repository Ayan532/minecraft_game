import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import { Player } from "./components/Player";
import FPV from "./components/FPV";
import { Cubes } from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Menu from "./components/Menu";


function App() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.8} />
        <FPV />
        <Physics>
          <Player />
        <Cubes/>
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute cursor-style text-xl font-bold text-red-600">+</div>
      <Menu/>

      <TextureSelector/>
    </div>
  );
}

export default App;
