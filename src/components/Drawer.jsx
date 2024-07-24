

const Drawer = ({nodes, materials})=>{
    return(
<group position={[3.024, -1.986, -1.952]} rotation={[0, -1.489, 0]} scale={0.47} >
          <group position={[0.006, -0.634, -0.077]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Drawer_2_1.geometry} material={materials.Wood} castShadow receiveShadow />
            <mesh geometry={nodes.Drawer_2_2.geometry} material={materials.Wood_Light} />
            <mesh geometry={nodes.Drawer_2_3.geometry} material={materials.Wood_Dark} />
          </group>
        </group>
    )
}

export default Drawer;