import { Canvas } from '@react-three/fiber'
import HeroText from "../components/HeroText"
import { Suspense, useState, useEffect, lazy } from "react"
import { OrbitControls, Environment } from "@react-three/drei"
import ParallaxBackground from "../components/ParallaxBackground"

// Lazy load the 3D model to reduce initial bundle size
const Astronaut = lazy(() => import('../components/Astronaut').then(module => ({ default: module.Astronaut })));

// Lightweight fallback component for 3D model loading
const ModelFallback = ({ config }) => (
  <mesh position={config.position} rotation={config.rotation} scale={config.scale}>
    <boxGeometry args={[0.5, 1, 0.3]} />
    <meshStandardMaterial 
      color="#00aaff" 
      transparent 
      opacity={0.3}
      emissive="#001122"
    />
  </mesh>
);

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [modelLoaded, setModelLoaded] = useState(false)
    const [showModel, setShowModel] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        // Delay 3D model loading to prioritize text content - longer delay on mobile
        const modelDelay = isMobile ? 2000 : 1000;
        const modelTimer = setTimeout(() => {
            setShowModel(true)
        }, modelDelay)
        
        return () => {
            window.removeEventListener('resize', checkMobile)
            clearTimeout(modelTimer)
        }
    }, [])

    // Fixed positioning and scaling for mobile with performance optimization
    const mobileModelConfig = {
        position: [1.2, -1.8, 0],
        rotation: [0, Math.PI, 0],
        scale: 0.012 // Reduced for better performance
    }

    const desktopModelConfig = {
        position: [0.5, -1.5, 0],
        rotation: [0, Math.PI, 0], 
        scale: 0.020
    }

    const modelConfig = isMobile ? mobileModelConfig : desktopModelConfig

    return (
        <section className="flex items-start justify-center
        md:items-start md:justify-start min-h-screen overflow-hidden 
        c-space">
            <HeroText />
            <ParallaxBackground />
            <figure
                className={`absolute inset-0 ${
                    isMobile ? 'fixed' : ''
                }`}
                style={{ 
                    width: "100vw", 
                    height: "100vh",
                    zIndex: isMobile ? 1 : 'auto'
                }}>
                {/* Only render Canvas and 3D model on desktop */}
                {!isMobile && (
                    <Canvas 
                        camera={{ 
                            position: [0, 2, 5], 
                            fov: 60 
                        }}
                        performance={{ min: 0.8 }}
                        dpr={Math.min(window.devicePixelRatio, 2)}
                    >
                        {/* Lighting */}
                        <ambientLight intensity={2} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />

                        {/* 3D Model with lazy loading - Desktop only */}
                        {showModel ? (
                            <Suspense fallback={<ModelFallback config={desktopModelConfig} />}>
                                <Astronaut
                                    position={desktopModelConfig.position}
                                    rotation={desktopModelConfig.rotation}
                                    scale={desktopModelConfig.scale}
                                    onLoad={() => setModelLoaded(true)}
                                />
                                <Environment 
                                    preset="sunset" 
                                    background={false}
                                />
                            </Suspense>
                        ) : (
                            <ModelFallback config={desktopModelConfig} />
                        )}

                        {/* Controls - Desktop only */}
                        {modelLoaded && (
                            <OrbitControls 
                                enableZoom={true} 
                                enableRotate={true} 
                                enablePan={false}
                                enableDamping={true}
                                dampingFactor={0.05}
                            />
                        )}
                    </Canvas>
                )}
            </figure>
        </section>
    )
}

export default Hero
