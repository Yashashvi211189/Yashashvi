import { Canvas } from '@react-three/fiber'
import HeroText from "../components/HeroText"
import { Suspense } from "react"
import { OrbitControls, Environment } from "@react-three/drei"
import { Astronaut } from "../components/Astronaut"
import ParallaxBackground from "../components/ParallaxBackground"
const Hero = () => {
    return (
        <section className="flex items-start justify-center
        md:items-start md:justify-start min-h-screen overflow-hidden 
        c-space">
            <HeroText />
            <ParallaxBackground />
            <figure
                className="absolute inset-0"
                style={{ width: "100vw", height: "100vh" }}>
                <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
                    {/* Lighting */}
                    <ambientLight intensity={2} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    {/* 3D Model */}
                    <Suspense fallback={null}>
                        <Astronaut
                            position={[0.5, -1.5, 0]}  // ← move X, Y, Z
                            rotation={[0, Math.PI, 0]} // ← rotate Y axis 180°
                            scale={0.020}              // ← increase size slightly
                        />
                        <Environment preset="sunset" />
                    </Suspense>

                    {/* Controls (you can turn zoom off later) */}
                    <OrbitControls enableZoom={false} enableRotate={true} />
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero
