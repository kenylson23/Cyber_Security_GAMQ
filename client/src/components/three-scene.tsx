import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameIdRef = useRef<number>();

  const handleResize = useCallback(() => {
    if (!mountRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Update camera and renderer with debounced resize
    const camera = mountRef.current.querySelector('canvas')?.__camera as THREE.PerspectiveCamera;
    const renderer = mountRef.current.querySelector('canvas')?.__renderer as THREE.WebGLRenderer;
    
    if (camera && renderer) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with performance optimizations
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: window.devicePixelRatio <= 1, // Disable antialiasing on high DPI
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = false; // Disable shadows for better performance
    mountRef.current.appendChild(renderer.domElement);

    // Store references for resize handler
    (renderer.domElement as any).__camera = camera;
    (renderer.domElement as any).__renderer = renderer;

    // Create floating geometric shapes with shared geometries/materials
    const cubes: THREE.Mesh[] = [];
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xFFD700,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    // Reduce number of cubes for better performance
    const cubeCount = window.innerWidth < 768 ? 5 : 8;
    for (let i = 0; i < cubeCount; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (Math.random() - 0.5) * 20;
      cube.position.y = (Math.random() - 0.5) * 20;
      cube.position.z = (Math.random() - 0.5) * 20;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      scene.add(cube);
      cubes.push(cube);
    }

    // Add torus shapes with reduced complexity
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 8, 50); // Reduced segments
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFFD700,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });

    const torusCount = window.innerWidth < 768 ? 2 : 4;
    for (let i = 0; i < torusCount; i++) {
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.x = (Math.random() - 0.5) * 25;
      torus.position.y = (Math.random() - 0.5) * 25;
      torus.position.z = (Math.random() - 0.5) * 25;
      scene.add(torus);
      cubes.push(torus);
    }

    camera.position.z = 15;

    // Performance-optimized animation loop
    let lastTime = 0;
    const targetFPS = 60;
    const interval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (currentTime - lastTime < interval) return;
      lastTime = currentTime;
      
      const time = currentTime * 0.001;
      
      cubes.forEach((shape, index) => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
        shape.position.y += Math.sin(time + shape.position.x) * 0.01;
        
        // Different rotation speeds for variety
        if (index % 2 === 0) {
          shape.rotation.z += 0.002;
        }
      });
      
      renderer.render(scene, camera);
    };

    animate(0);

    // Handle window resize with debouncing
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of Three.js objects
      geometry.dispose();
      material.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, [handleResize]);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}
