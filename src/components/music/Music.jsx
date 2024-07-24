
import React, { Suspense, useState } from 'react'
import { PositionalAudio } from '@react-three/drei';
import Sound from "./Sound.jsx";

function Music({ turnOnTV, buffer }) {


  return (

    <group>
      <Suspense fallback={null}>
        <mesh>
        {/* {turnOnTV &&  <PositionalAudio autoplay loop={false} url="/music/Where The Hood At.mp3" distance={3} />} */}
        <Sound buffer={buffer} />
        </mesh>
      </Suspense>

    </group>

  )
}

export default Music;