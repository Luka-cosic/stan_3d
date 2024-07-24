import { useRef } from "react";


const Lopte = ({ setPaintChair }) => {

    
    return (
        <group position={[-2,2.5,3]} rotation={[0,-0.5,0]}>
            <mesh position={[0,0,0]} onClick={ ()=>{ setPaintChair("#e6e6e6") } }>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#e6e6e6"  />
            </mesh>
            <mesh position={[0,0,1]} onClick={ ()=>{ setPaintChair("green") } } >
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="green" />
            </mesh>
            <mesh position={[0,0,2]} onClick={ ()=>{ setPaintChair("red") } }>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </group>
    )
}


export default Lopte;