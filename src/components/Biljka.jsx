

const Biljka = ({nodes, materials})=>{
    return(
        <mesh geometry={nodes.RubberFigPottedPlant_mesh.geometry} material={materials.RubberFigPottedPlant_mat} position={[-2.762, -2.189, 2.89]} scale={0.185} />
    )
}

export default Biljka;