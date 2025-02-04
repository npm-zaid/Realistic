import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import homeModel from '../models/17_wilson_place_papakura_development.glb';
import { div } from 'three/src/nodes/TSL.js';

export default function GLBModel() {
  const mountRef = useRef(null); // Ref to the container element
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Set up the Three.js scene
    const scene = new THREE.Scene();

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 18;
    camera.lookAt(scene.position); // Ensure the camera looks at the center of the scene

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    // Append the renderer's DOM element to the mountRef container
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Ambient Light - for general scene brightness
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Directional Light - simulating sunlight
    const directionalLight = new THREE.DirectionalLight('#FFFADC', 2);
    directionalLight.position.set(-100, 200, 300); // Adjust position to cast light onto the front
    directionalLight.target.position.set(0, 50, 0); // Adjust target towards the house
    scene.add(directionalLight);

    // Enable Shadows (if needed)
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 1000;

    scene.add(directionalLight.target);

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(
      homeModel,
      (gltf) => {
        console.log('Model loaded successfully');
        const home = gltf.scene;
        home.rotation.y = 2.2;

        // Calculate the bounding box of the model
        const box = new THREE.Box3().setFromObject(home);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Move the model so that its center is at the origin
        home.position.sub(center);

        scene.add(home);

        // Update loading state
        setIsLoading(false);
      },
      (progress) => {
        console.log(`Loading model: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
        setIsLoading(false); // Ensure loading state is updated even if there's an error
      }
    );

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth controls
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Required for damping
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose(); // Clean up the renderer
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-blue-200/30 overflow-hidden rounded-2xl mb-10">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className={`flex justify-center items-center h-screen w-full ${isLoading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-800`}>
  
<div class="loader">
  <li class="ball"></li>
  <li class="ball"></li>
  <li class="ball"></li>
</div>
    </div>
      )}

      {/* Three.js Canvas */}
      <div ref={mountRef} className="h-full w-full"></div>
    </div>
  );
}