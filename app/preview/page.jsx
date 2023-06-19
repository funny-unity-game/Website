"use client";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, KeyboardControls, PointerLockControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
	const gltf = useLoader(GLTFLoader, "/models/FutureMicroscope.gltf");
	return (
		<>
			<primitive
				object={gltf.scene}
				scale={0.4}
			/>
		</>
	);
};

export default function Preview() {
	return (
		<main>
			<Canvas
				style={{
					height: "100vh"
				}}
			>
				<Suspense fallback={null}>
					<Model />
					<PointerLockControls />
					<Environment
						preset="sunset"
						background
					/>
				</Suspense>
			</Canvas>
		</main>
	);
}
