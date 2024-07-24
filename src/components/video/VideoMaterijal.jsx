/* eslint-disable react/no-unknown-property */
import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";

// eslint-disable-next-line react/prop-types
const VideoMaterial = ({ src }) => {
  const texture = useVideoTexture(src);
  
  return (
    texture? <meshStandardMaterial side={DoubleSide} map={texture} toneMapped={false} /> : null
  );
};

export default VideoMaterial;