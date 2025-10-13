import { Canvas } from '@react-three/fiber'
import HeroText from "../components/HeroText"
import { Suspense, useState, useEffect } from "react"
import { OrbitControls, Environment } from "@react-three/drei"
import { Astronaut } from "../components/Astronaut"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Fixed positioning and scaling for mobile
    const mobileModelConfig = {
        position: [1.2, -1.8, 0],
        rotation: [0, Math.PI, 0],
        scale: 0.015
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
                <Canvas 
                    camera={{ 
                        position: isMobile ? [0, 1.5, 4] : [0, 2, 5], 
                        fov: isMobile ? 50 : 60 
                    }}
                    style={{
                        pointerEvents: isMobile ? 'none' : 'auto'
                    }}
                >
                    {/* Lighting */}
                    <ambientLight intensity={isMobile ? 1.5 : 2} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    {/* 3D Model */}
                    <Suspense fallback={null}>
                        <Astronaut
                            position={modelConfig.position}
                            rotation={modelConfig.rotation}
                            scale={modelConfig.scale}
                        />
                        <Environment preset="sunset" />
                    </Suspense>

                    {/* Controls - disabled on mobile for better performance */}
                    {!isMobile && (
                        <OrbitControls 
                            enableZoom={true} 
                            enableRotate={true} 
                            enablePan={false}
                        />
                    )}
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero
