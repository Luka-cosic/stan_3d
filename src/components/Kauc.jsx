

const Kauc = ({nodes, materials}) => {
    return(
        <group position={[0.76, 0, -0.048]} rotation={[-Math.PI / 2, 0, 0]} scale={67.151}>
            <mesh geometry={nodes.Couch_Medium1_1.geometry} material={materials.Couch_Blue} />
            <mesh geometry={nodes.Couch_Medium1_2.geometry} material={materials.Black} />
          </group>
    )
}

export default Kauc;