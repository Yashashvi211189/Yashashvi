import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Astronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/star-wars-portfolio/models/scene.gltf')
  const { actions: _actions } = useAnimations(animations, group)

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="73a8aadddd604d178e3d780bb4785059fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="default" position={[-1.707, 131.715, 2.599]} scale={93.336} />
                <group
                  name="Armature"
                  position={[0, 94.19, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={95.832}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Anakin_face}
                      skeleton={nodes.Object_9.skeleton}
                      morphTargetDictionary={nodes.Object_9.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_9.morphTargetInfluences}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.eyebrows}
                      skeleton={nodes.Object_10.skeleton}
                      morphTargetDictionary={nodes.Object_10.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_10.morphTargetInfluences}
                    />
                    <group name="Object_8" position={[-1.707, 131.715, 2.599]} scale={93.336} />
                    <group
                      name="default005"
                      position={[-0.71, -0.001, -0.988]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.997}
                    >
                      <mesh
                        name="default005_ANAKIN_BODY_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.default005_ANAKIN_BODY_0.geometry}
                        material={materials.ANAKIN_BODY}
                      />
                    </group>
                    <group
                      name="Cylinder004"
                      position={[0.403, 0.015, 0.424]}
                      rotation={[0, -0.805, 0]}
                      scale={[0.105, 0.105, 0.374]}
                    >
                      <mesh
                        name="Cylinder004_sleeves_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_sleeves_0.geometry}
                        material={materials.sleeves}
                      />
                    </group>
                    <group
                      name="obiwan002"
                      position={[0.087, -0.763, -1.246]}
                      rotation={[0, 0, -Math.PI]}
                      scale={0.026}
                    >
                      <mesh
                        name="obiwan002_hands_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.obiwan002_hands_0.geometry}
                        material={materials.hands}
                      />
                    </group>
                    <group
                      name="default003"
                      position={[-0.71, -0.001, -0.988]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.997}
                    >
                      <mesh
                        name="default003_ANAKIN_BODY_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.default003_ANAKIN_BODY_0.geometry}
                        material={materials.ANAKIN_BODY}
                      />
                    </group>
                    <group
                      name="default004"
                      position={[-0.71, -0.001, -0.988]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.997}
                    >
                      <mesh
                        name="default004_ANAKIN_BODY_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.default004_ANAKIN_BODY_0.geometry}
                        material={materials.ANAKIN_BODY}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Cylinder"
                  position={[-19.396, 170.813, -29.607]}
                  rotation={[0.241, -0.921, 0.136]}
                  scale={100}
                >
                  <mesh
                    name="Cylinder_blue_saber_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_blue_saber_0.geometry}
                    material={materials.blue_saber}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/star-wars-portfolio/models/scene.gltf')
