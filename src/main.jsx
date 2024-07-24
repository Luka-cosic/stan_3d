import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useHelper,  Environment } from "@react-three/drei";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <Canvas shadows >
    <Environment preset="forest" background />
      {/* <ambientLight intensity={1.3} /> */}

      <App className={"app"} />
      <OrbitControls />
    </Canvas>
   
  </React.StrictMode>,
)
