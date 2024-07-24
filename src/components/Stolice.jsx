import { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const Stolice = ({paintChair,setShowArrow, clicked, click, setShowLopteS,setShowTableMa, nodes, materials, showLopteS, setPaintChair})=>{
  
    const chairRef = useRef();
    const chair1Ref = useRef();
    const chair2Ref = useRef();

    const chairStyle = (e) => {
        e.stopPropagation();
        click(true);
        setShowLopteS(true);
        setShowArrow(true);
        setShowTableMa(false);
      }

    useFrame((state, delta)=>{
        easing.damp3(chair1Ref.current.position, clicked ? [-2.301, -2.377, -0.908] : [-1.301, -2.377, -0.908], 0.25, delta)
        easing.damp3(chair2Ref.current.position, clicked ? [-2.261, -2.329, 0.581] : [-1.261, -2.329, 0.581], 0.25, delta)
    })
    return(
        <>
        <group position={[1.225, -2.389, 0.514]} ref={chairRef} className="chair" onClick={chairStyle} rotation={[0, -1.571, 0]} scale={0.368}>
          <mesh geometry={nodes.Bolt.geometry} material={materials['Material.007']} position={[0.786, 2.049, -0.203]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
          <mesh geometry={nodes.Bolt001.geometry} material={materials['Material.007']} position={[0.782, 1.991, 0.152]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
          <mesh geometry={nodes.New_Object.geometry} material={materials['Material.004']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow />
          <mesh geometry={nodes.New_Object001.geometry} material={materials['Material.003']} position={[0, 1.531, 0]} scale={4.635} castShadow receiveShadow >
            <meshStandardMaterial color={paintChair} />
          </mesh>
          <mesh geometry={nodes.New_Object002.geometry} material={materials['Material.003']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow >
          <meshStandardMaterial color={ paintChair } />
          </mesh>
        </group>
        <group position={[1.358, -2.403, -1.201]} onClick={chairStyle} rotation={[-1.571, -1.559, -1.571]} scale={0.368}>
        <mesh geometry={nodes.Bolt002.geometry} material={materials['Material.007']} position={[0.782, 1.991, 0.152]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
        <mesh geometry={nodes.Bolt003.geometry} material={materials['Material.007']} position={[0.786, 2.049, -0.203]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
        <mesh geometry={nodes.New_Object003.geometry} material={materials['Material.003']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow >
        <meshStandardMaterial color={ paintChair } />
          </mesh>
        <mesh geometry={nodes.New_Object004.geometry} material={materials['Material.003']} position={[0, 1.531, 0]} scale={4.635} castShadow receiveShadow >
        <meshStandardMaterial color={ paintChair } />
        </mesh>
        <mesh geometry={nodes.New_Object005.geometry} material={materials['Material.004']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow >
        {/* <meshStandardMaterial color={ paintChair } /> */}
          </mesh>
      </group>
        <group position={[-1.301, -2.377, -0.908]} onClick={chairStyle} ref={chair1Ref} rotation={[1.571, 1.566, -1.571]} scale={0.368} >
          < mesh geometry={nodes.Bolt004.geometry} material={materials['Material.007']} position={[0.782, 1.991, 0.152]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
          <mesh geometry={nodes.Bolt005.geometry} material={materials['Material.007']} position={[0.786, 2.049, -0.203]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
          <mesh geometry={nodes.New_Object006.geometry} material={materials['Material.003']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow >
          <meshStandardMaterial color={ paintChair } />
          </mesh>
          
          <mesh geometry={nodes.New_Object007.geometry} material={materials['Material.003']} position={[0, 1.531, 0]} scale={4.635} castShadow receiveShadow >
          <meshStandardMaterial color={ paintChair } />
          </mesh>
          < mesh geometry={nodes.New_Object008.geometry} material={materials['Material.004']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow />
        </group>
        <group position={[-1.261, -2.329, 0.581]} ref={chair2Ref} rotation={[1.571, 1.535, -1.571]} scale={0.368}>
          <mesh geometry={nodes.Bolt006.geometry} material={materials['Material.007']} position={[0.782, 1.991, 0.152]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
          < mesh geometry={nodes.Bolt007.geometry} material={materials['Material.007']} position={[0.786, 2.049, -0.203]} rotation={[0, 0, -1.734]} scale={0.013} castShadow receiveShadow />
          <mesh geometry={nodes.New_Object009.geometry} material={materials['Material.003']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow >
          <meshStandardMaterial color={ paintChair } />
          </mesh>
          <mesh geometry={nodes.New_Object010.geometry} material={materials['Material.003']} position={[0, 1.531, 0]} scale={4.635} castShadow receiveShadow >
          <meshStandardMaterial color={ paintChair } />
          </mesh>
          <mesh geometry={nodes.New_Object011.geometry} material={materials['Material.004']} position={[0, 1.546, 0]} scale={4.635} castShadow receiveShadow />
        </group>
        </>
    )
}

export default Stolice;