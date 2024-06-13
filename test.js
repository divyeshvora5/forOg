import { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber';  // For rendering 3D models
import {Html, OrbitControls, useGLTF } from '@react-three/drei'; // Helper hooks and controls for 3D models
import { MediaRenderer } from "thirdweb/react";
import { client } from "@/constant/walletPrefrences";

// const ImageLoader = ({ src, alt, click = () => {} , rounded = false, classProp = ""}) => {
//     //State
//     const [imageLoaded, setImageLoaded] = useState(false);

//     //Handler
//     const handleImageLoad = () => {
//         setImageLoaded(true);
//     };
//     return (
//         <div className={`image-loader ${imageLoaded ? "image-loaded" : ""} ${rounded ? "rounded-circle" : ""} ${classProp}`}>
//             <img
//                 src={src}
//                 alt={alt}
//                 onLoad={handleImageLoad}
//                 className={imageLoaded ? "fade-in" : ""}
//                 onClick={click}
//             />
//             <div className={!imageLoaded ? "loading-animation" : ""} />
//         </div>
//     );
// };


const ImageLoader = ({ src = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf', alt, type = 'gltf', click = () => { }, rounded = false, classProp = "" }) => {

    console.log('type', type)
    // State
    const [mediaLoaded, setMediaLoaded] = useState(false);

    // Handler for media loading
    const handleMediaLoad = () => {
        setMediaLoaded(true);
    };

    // Component for rendering 3D models
    const Model = () => {
        const { scene } = useGLTF('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf');
        return <primitive object={scene} />;
    };

    // Function to render media based on type
    const renderMedia = () => {
        const fileExtension = type?.toLowerCase();

        switch (fileExtension) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={handleMediaLoad}
                        onClick={click}
                        className={`${mediaLoaded ? "fade-in" : ""} ${classProp}`}
                    />
                );
            case 'mp3':
            case 'wav':
            case 'flac':
                return (
                    <audio
                        controls
                        onLoadedData={handleMediaLoad}
                        className={`${mediaLoaded ? "fade-in" : ""} ${classProp}`}
                    >
                        <source src={src} type={`audio/${fileExtension}`} />
                        Your browser does not support the audio element.
                    </audio>
                );
            case 'mp4':
                return (
                    <video
                        controls
                        onLoadedMetadata={handleMediaLoad}
                        onClick={click}
                        className={`${mediaLoaded ? "fade-in" : ""} ${classProp}`}
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                );
            case 'gltf':
                return (
                    <MediaRenderer client={client} src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf" />
                    // <Canvas className={`canvas-container ${mediaLoaded ? "fade-in" : ""} ${classProp}`}>
                    //     <ambientLight intensity={0.5} />
                    //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    //     <pointLight position={[-10, -10, -10]} />
                    //     <Suspense fallback={<Html><div>Loading Model...</div></Html>}>
                    //         <Model />
                    //         <OrbitControls />
                    //     </Suspense>
                    // </Canvas>
                );
            default:
                return (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={handleMediaLoad}
                        onClick={click}
                        className={`${mediaLoaded ? "fade-in" : ""} ${classProp}`}
                    />
                )
        }
    };

    return (
        <div className={`media-loader ${mediaLoaded ? "media-loaded" : ""} ${rounded ? "rounded-circle" : ""} ${classProp}`}>
            {renderMedia()}
            {!mediaLoaded && <div className="loading-animation" />}
        </div>
    );
};

export default ImageLoader;
