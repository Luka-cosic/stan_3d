

const Strelica = ({ nodes, click, setShowLopteS, setShowArrow, setShowTableMa })=>{
    
    const handleClick = ()=>{
        click(false);
        setShowLopteS(false);
        setShowArrow(false);
        setShowTableMa(false);
        setShowTableMa(false);
    }
    return(
        <mesh onClick={ handleClick } geometry={nodes.strelica.geometry} material={nodes.strelica.material} position={[2.124, -0.274, 1.945]} rotation={[0, 0, -1.578]} scale={[0.121, 0.484, 0.121]} />
    )
}

export default Strelica;