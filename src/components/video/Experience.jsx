import { Environment, OrbitControls, Plane } from "@react-three/drei";
// import { Ground } from "./Ground";
import VideoMaterial from "./VideoMaterijal";
import { Suspense, useRef } from "react";


const Experience = () => {
  
  return (
    <group>
      <Plane position={[3.05,-1.05,-1.91]} args={[1.8, 0.9]} rotation={[0,1.66,0]} >
        <Suspense fallback={<meshStandardMaterial wireframe={true} />}>
          <VideoMaterial src={"video/DMX - Where The Hood At (Dirty) (Music Video) HQ.mp4"} />
        </Suspense>
      </Plane>
      
     
      </group>
    
  );
};

export default Experience;