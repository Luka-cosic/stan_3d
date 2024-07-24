

const Slika1 = ({nodes, materials })=>{
    return(
         <group position={[0, 0.088, 0]} >
          <mesh geometry={nodes.Cube013.geometry} material={materials['standing_picture_frame_02_artwork.001']} />
          <mesh geometry={nodes.Cube013_1.geometry} material={materials['standing_picture_frame_02.001']} />
          <mesh geometry={nodes.Cube013_2.geometry} material={materials['standing_picture_frame_02_glass.001']} />
        </group> 
    )
}

export default Slika1;