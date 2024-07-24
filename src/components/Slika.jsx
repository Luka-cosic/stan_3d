import {  useTexture } from '@react-three/drei';


const Slika = ({nodes, materials})=>{

    const slika = useTexture('../images/zaFrame.jpg');
    return(
        <group>
          <mesh geometry={nodes.ram.geometry} material={materials['Material.005']} position={[3.095, 1.353, 1.036]} rotation={[0, 0, -Math.PI / 2]} scale={[0.6, 0.025, 1.5]} castShadow receiveShadow />
          <mesh position={[4,-0.3,1.1]} rotation={[0,-1.57,0]} >
            <planeGeometry args={[2, 0.8]} />
            <meshStandardMaterial map={slika} />
          </mesh>
        </group>
    )
}

export default Slika;