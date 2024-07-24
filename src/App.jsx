import * as THREE from 'three';
import { useState, useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber'
import { useGLTF, useTexture, useHelper  } from '@react-three/drei';
import { easing } from 'maath';
import Lopte from './components/Lopte';
import LopteSto from './components/LopteSto';
import Strelica from "./components/Strelica";
import Experience from './components/video/Experience';
import Music from "./components/music/Music";
import Stolice from "./components/Stolice";
import Sto from "./components/Sto";
import Slika from "./components/Slika";
import Drawer from "./components/Drawer";
import Tv from "./components/Tv";
import Biljka from "./components/Biljka";
import Slika1 from "./components/Slika1";
import Kauc from "./components/Kauc";
import Vaza from "./components/Vaza"

import './App.css';



function App(props) {
  
  const buffer = useLoader(THREE.AudioLoader, "music/Where The Hood At.mp3");
  const [count, setCount] = useState(0);
  const { nodes, materials } = useGLTF('/ent.glb');

  const [paintChair, setPaintChair] = useState("#e6e6e6");
  const [paintTable, setPaintTable] = useState({ color: "#e6e6e6", map: false });

  const [clicked, click] = useState(false);
  const [showLopteS, setShowLopteS] = useState(false);
  const [showTableMa, setShowTableMa] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [turnOnTV, setTrunOnTV] = useState(false)
 
  const pod = useTexture('/pod/textures/wood_floor_diff_4k.jpg');
 
  const platno = useTexture('/images/bakeKrov2.jpg');


  const mainRef = useRef();
  const lightRef = useRef();
  // const sphereRef = useRef();

  const nogare1Ref = useRef();
  const nogare2Ref = useRef();


  const [target, setTarget] = useState();
  // useHelper(lightRef, DirectionalLightHelper, 2, "red");

  // useFrame((state, delta) => {

  //   easing.damp3(nogare2Ref.current.position, clicked ? [-2.205, -1.977, -1.035] : [-1.205, -1.977, -1.035], 0.25, delta)
  //   easing.damp3(nogare1Ref.current.position, clicked ? [-2.154, -1.932, 0.454] : [-1.154, -1.932, 0.454], 0.25, delta)
  //   easing.dampE(mainRef.current.rotation, clicked ? [0.1, -2.5, 0] : [0.1, Math.PI, 0], 0.5, delta)
  //   easing.damp3(mainRef.current.position, clicked ? [0, 0, 1.5] : [-1, -0.5, -0.5], 0.25, delta)
  // })


  useEffect(() => {
    
    // if (sphereRef.current) {
    //   setTarget(sphereRef.current);
    // }
  }, []);


  return (

    <>

      <group {...props} dispose={null} ref={mainRef} className="mainRef" position={[-1, -0.5, -1]} rotation={[0.1, Math.PI, 0]}>
        <group position={[-3.048, -2.308, -2.116]} rotation={[0, 1.508, 0]} scale={0.773} >
          {showLopteS && (<Lopte setPaintChair={setPaintChair} />)}
          {showTableMa && (<LopteSto setPaintTable={setPaintTable} />)}
          <Kauc nodes={nodes} materials={materials} />
        </group>
        <Drawer materials={materials} nodes={nodes} />
        <Stolice paintChair={paintChair} setShowArrow={setShowArrow} showLopteS={showLopteS} materials={materials} clicked={clicked} click={click} setShowLopteS={setShowLopteS} setShowTableMa={setShowTableMa} nodes={nodes} />
        {turnOnTV && ( <Experience turnOnTV={turnOnTV} /> )}
      {turnOnTV &&  <Music turnOnTV={turnOnTV} buffer={buffer} /> }
      <Tv turnOnTV={turnOnTV} setTrunOnTV={setTrunOnTV} nodes={nodes} materials={materials}  />
      <Biljka nodes={nodes} materials={materials} />
      <Slika1 nodes={nodes} materials={materials} />
      <Vaza nodes={nodes} materials={materials} /> 
      
        <mesh geometry={nodes.outdoor_table_chair_set_01_chair_01.geometry} material={materials.outdoor_table_chair_set_01_chair} position={[-0.091, 0.088, 0]} rotation={[0, 0.243, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.outdoor_table_chair_set_01_table.geometry} material={materials.outdoor_table_chair_set_01_table} position={[-0.091, 0.088, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.outdoor_table_chair_set_01_chair_02.geometry} material={materials.outdoor_table_chair_set_01_chair} position={[-0.091, 0.088, 0]} rotation={[0, 0.268, 0]} castShadow receiveShadow />
        <group position={[0.111, 0.087, -0.203]}>
          <mesh geometry={nodes.ChessRook003.geometry} material={materials.chess_set_pieces_white} />
          <mesh geometry={nodes.ChessRook003_1.geometry} material={materials.chess_set_board} />
          <mesh geometry={nodes.ChessRook003_2.geometry} material={materials.chess_set_pieces_black} />
        </group>
        <mesh geometry={nodes.RubberFigPottedPlant_mesh001.geometry} material={materials.RubberFigPottedPlant_mat} position={[-2.762, -2.189, 2.89]} scale={0.185} castShadow receiveShadow>
          <meshBasicMaterial color="#003300" />
        </mesh>
        <mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[-1.514, 1.316, -1.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.423} >
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[-1.204, 1.398, -1.269]} rotation={[Math.PI / 2, 0, 0]} scale={0.423} >
          <meshBasicMaterial color="#004d4d" />
        </mesh>
        <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[-1.202, 1.414, -1.295]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.423} >
          <meshBasicMaterial color="white" />
        </mesh>
        {showArrow && <Strelica nodes={nodes} click={click} setShowTableMa={setShowTableMa} setShowTableMa={setShowTableMa} setShowArrow={setShowArrow} setShowLopteS={setShowLopteS} />}

        <group position={[0.006, 0.092, 0]} scale={[4.2, 2.5, 4.2]}>

          <mesh geometry={nodes.Cube011_1.geometry} material={materials.zid} castShadow receiveShadow />
          <mesh geometry={nodes.Cube011_2.geometry} material={materials.plafon} castShadow receiveShadow>
            <meshBasicMaterial color="white" />
          </mesh>
          <mesh geometry={nodes.Cube011_3.geometry} material={materials.zid2} castShadow receiveShadow>

          </mesh>
          <mesh geometry={nodes.Cube011_4.geometry} castShadow receiveShadow>
            <meshStandardMaterial map={pod} />
          </mesh>
        </group>
        <Sto nodes={nodes} materials={materials} setShowArrow={setShowArrow} paintTable={paintTable} setShowLopteS={setShowLopteS} setShowTableMa={setShowTableMa} click={click} />

        <Slika nodes={nodes} materials={materials} />
        
        <mesh geometry={nodes.zidovi.geometry} material={materials['Dark Iron']} position={[-3.101, -1.955, 1.194]} rotation={[0, 0.659, 0]} scale={1.191}>

          <mesh geometry={nodes.grede.geometry} material={materials['Material.002']} position={[0.001, -0.155, 0.212]} scale={[0.352, 0.008, 0.008]} />
          <mesh geometry={nodes.nogice.geometry} material={materials['Material.001']} position={[-0.003, -0.229, -0.007]} rotation={[0.069, -0.664, -3.098]} />
          <mesh geometry={nodes.platno.geometry} material={materials['Laces 02']} position={[0, -0.159, 0.222]} scale={[0.324, 0.0016, 0.0016]} >
            <meshBasicMaterial map={platno} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.nogare002.geometry} material={nodes.nogare002.material} position={[1.316, -1.994, 0.375]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} castShadow receiveShadow />
        <mesh geometry={nodes.nogare001.geometry} material={nodes.nogare001.material} position={[1.452, -1.998, -1.34]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} castShadow receiveShadow />
        <mesh geometry={nodes.nogare003.geometry} ref={nogare2Ref} material={nodes.nogare003.material} position={[-1.205, -1.977, -1.035]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} castShadow receiveShadow />
        <mesh geometry={nodes.nogare004.geometry} ref={nogare1Ref} material={nodes.nogare004.material} position={[-1.154, -1.932, 0.454]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} castShadow receiveShadow />
        <mesh geometry={nodes.podOkvir.geometry} material={materials.okvir} position={[-4.062, -0.142, 0.663]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.286, 1, 1.492]} castShadow receiveShadow />
        <mesh geometry={nodes.okvir001.geometry} material={materials.prozori} position={[-1.242, -0.379, 4]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[1.928, 0.674, 2.608]} castShadow receiveShadow />
        {/* <mesh geometry={nodes.Plane.geometry} material={materials['Material.012']} position={[-25.253, -1.345, 4]} rotation={[Math.PI / 2, Math.PI, Math.PI]} scale={[1, 0.673, 1]} >
          <meshStandardMaterial map={more} />
        </mesh> */}
        <mesh geometry={nodes.instagram.geometry} material={materials['Material.009']} position={[1.63, 1.436, -1.246]} rotation={[0, 1.571, 0]} scale={[0.15, 0.25, 0.25]} />
        <mesh geometry={nodes.krugovi.geometry} material={nodes.krugovi.material} position={[1.63, 1.436, -1.426]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.1, 0.03, 0.1]} />
        <mesh geometry={nodes.luster001.geometry} material={nodes.luster001.material} position={[0.368, 0.729, 4]} scale={0.645} castShadow receiveShadow>
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.kabal.geometry} material={nodes.kabal.material} position={[0.007, 1.549, -0.051]} scale={[0.005, 0.9, 0.005]} />
        <mesh geometry={nodes.treasure_chest_bottom.geometry} material={materials['treasure_chest.001']} position={[2.844, -1.92, 0.51]} rotation={[0, -1.571, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.treasure_chest_handle_left.geometry} material={materials['treasure_chest.001']} position={[2.832, -1.877, 0.043]} rotation={[0, -1.571, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.treasure_chest_handle_right.geometry} material={materials['treasure_chest.001']} position={[2.832, -1.877, 0.977]} rotation={[0, -1.571, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.treasure_chest_lid.geometry} material={materials['treasure_chest.001']} position={[2.821, -1.632, 0.51]} rotation={[0, -1.571, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.treasure_chest_lock.geometry} material={materials['treasure_chest.001']} position={[2.577, -1.796, 0.51]} rotation={[0, -1.571, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.Plane001.geometry} material={materials['Material.011']} position={[-1.141, 1.369, -0.342]} rotation={[Math.PI / 2, 0, 0]} >
          <meshBasicMaterial color="#009999" />
        </mesh>
        <mesh geometry={nodes.Text.geometry} position={[-1.059, 1.148, 0.704]} rotation={[Math.PI / 2, 0, 0]} >
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[0.345, 1.374, 0.01]} rotation={[Math.PI / 2, 0, Math.PI]} >
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.BezierCurve.geometry} material={nodes.BezierCurve.material} position={[2.825, -0.829, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.625} castShadow receiveShadow>
          <meshStandardMaterial color="#a6a6a6" />
        </mesh>
        <mesh geometry={nodes.BezierCurve001.geometry} material={nodes.BezierCurve001.material} position={[2.825, -0.829, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.625} castShadow receiveShadow>
          <meshStandardMaterial color="white" />
        </mesh>
        <group position={[0, 0.322, -4.329]} scale={[1.673, 0.99, 0.025]}>
        <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} />
        <mesh geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
      </group>
        <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[0, 0.322, -4.296]} scale={[1.561, 0.924, 0.024]} />
      <mesh geometry={nodes.kvaka.geometry} material={nodes.kvaka.material} position={[-1.554, 0.326, -4.274]} scale={[0.015, 0.025, 0.015]} />
      </group>


    </>
  )
}

export default App;

useGLTF.preload('/ent.glb');