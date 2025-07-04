import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Eye, Camera, Shield, Wifi, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SecuritySystem {
  id: string;
  name: string;
  icon: any;
  description: string;
  color: number;
}

const securitySystems: SecuritySystem[] = [
  {
    id: "cctv",
    name: "Sistema CFTV",
    icon: Camera,
    description: "Câmeras de monitoramento com cobertura 360°",
    color: 0x00ff00
  },
  {
    id: "motion",
    name: "Sensor de Movimento",
    icon: Eye,
    description: "Detectores infravermelhos com alcance de 12m",
    color: 0xff0000
  },
  {
    id: "access",
    name: "Controle de Acesso",
    icon: Shield,
    description: "Sistemas biométricos e cartão RFID",
    color: 0x0099ff
  },
  {
    id: "wireless",
    name: "Rede Wireless",
    icon: Wifi,
    description: "Conectividade segura entre dispositivos",
    color: 0xffff00
  }
];

export default function SecuritySimulator() {
  const { ref, inView } = useScrollAnimation();
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationRef = useRef<number>();
  
  const [activeSystem, setActiveSystem] = useState<string>("cctv");
  const [isPlaying, setIsPlaying] = useState(true);
  const [objects, setObjects] = useState<{ [key: string]: THREE.Group }>({});

  useEffect(() => {
    if (!mountRef.current || !inView) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(800, 500);
    renderer.setClearColor(0x000000, 0.1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create building structure
    createBuilding(scene);
    
    // Create security systems
    const systemObjects = createSecuritySystems(scene);
    setObjects(systemObjects);
    
    camera.position.set(15, 10, 15);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      if (isPlaying) {
        animateSecuritySystems(systemObjects, activeSystem);
      }
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [inView]);

  useEffect(() => {
    if (objects && sceneRef.current) {
      // Reset all systems
      Object.values(objects).forEach(group => {
        group.children.forEach(child => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
            child.material.emissive.setHex(0x000000);
          }
        });
      });
      
      // Activate selected system
      activateSystem(activeSystem);
    }
  }, [activeSystem, objects]);

  const createBuilding = (scene: THREE.Scene) => {
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      transparent: true,
      opacity: 0.8
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls
    const wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x666666,
      transparent: true,
      opacity: 0.6
    });
    
    // Back wall
    const backWallGeometry = new THREE.PlaneGeometry(20, 8);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, 4, -10);
    scene.add(backWall);
    
    // Side walls
    const sideWallGeometry = new THREE.PlaneGeometry(20, 8);
    const leftWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-10, 4, 0);
    scene.add(leftWall);
    
    const rightWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(10, 4, 0);
    scene.add(rightWall);

    // Doors and windows
    const doorGeometry = new THREE.PlaneGeometry(2, 6);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 3, 9.9);
    scene.add(door);
  };

  const createSecuritySystems = (scene: THREE.Scene) => {
    const systemObjects: { [key: string]: THREE.Group } = {};

    // CCTV Cameras
    const cctvGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const cameraGeometry = new THREE.ConeGeometry(0.3, 1, 8);
      const cameraMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
      const camera = new THREE.Mesh(cameraGeometry, cameraMaterial);
      
      const angle = (i / 4) * Math.PI * 2;
      const radius = 8;
      camera.position.set(
        Math.cos(angle) * radius,
        6,
        Math.sin(angle) * radius
      );
      camera.rotation.y = angle + Math.PI;
      camera.castShadow = true;
      
      cctvGroup.add(camera);
      
      // Camera coverage area
      const coverageGeometry = new THREE.ConeGeometry(3, 8, 8, 1, true);
      const coverageMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x00ff00,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide
      });
      const coverage = new THREE.Mesh(coverageGeometry, coverageMaterial);
      coverage.position.copy(camera.position);
      coverage.rotation.copy(camera.rotation);
      coverage.rotation.x = Math.PI / 2;
      cctvGroup.add(coverage);
    }
    scene.add(cctvGroup);
    systemObjects.cctv = cctvGroup;

    // Motion Sensors
    const motionGroup = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const sensorGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const sensorMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const sensor = new THREE.Mesh(sensorGeometry, sensorMaterial);
      
      const x = (i % 3 - 1) * 6;
      const z = Math.floor(i / 3) * 8 - 4;
      sensor.position.set(x, 2, z);
      sensor.castShadow = true;
      
      motionGroup.add(sensor);
      
      // Detection radius
      const radiusGeometry = new THREE.RingGeometry(2, 4, 16);
      const radiusMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff0000,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide
      });
      const radius = new THREE.Mesh(radiusGeometry, radiusMaterial);
      radius.position.copy(sensor.position);
      radius.position.y = 0.1;
      radius.rotation.x = -Math.PI / 2;
      motionGroup.add(radius);
    }
    scene.add(motionGroup);
    systemObjects.motion = motionGroup;

    // Access Control Points
    const accessGroup = new THREE.Group();
    const accessPoints = [
      { x: 0, z: 9, rotation: 0 }, // Main entrance
      { x: -9, z: 0, rotation: Math.PI / 2 }, // Side entrance
      { x: 9, z: 0, rotation: -Math.PI / 2 } // Side entrance
    ];
    
    accessPoints.forEach(point => {
      const controlGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.2);
      const controlMaterial = new THREE.MeshStandardMaterial({ color: 0x0099ff });
      const control = new THREE.Mesh(controlGeometry, controlMaterial);
      control.position.set(point.x, 1, point.z);
      control.rotation.y = point.rotation;
      control.castShadow = true;
      
      accessGroup.add(control);
      
      // Access zone
      const zoneGeometry = new THREE.BoxGeometry(2, 0.1, 2);
      const zoneMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0099ff,
        transparent: true,
        opacity: 0.3
      });
      const zone = new THREE.Mesh(zoneGeometry, zoneMaterial);
      zone.position.set(point.x, 0.1, point.z);
      accessGroup.add(zone);
    });
    scene.add(accessGroup);
    systemObjects.access = accessGroup;

    // Wireless Network
    const wirelessGroup = new THREE.Group();
    const routerGeometry = new THREE.BoxGeometry(1, 0.3, 1);
    const routerMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const router = new THREE.Mesh(routerGeometry, routerMaterial);
    router.position.set(0, 7, 0);
    router.castShadow = true;
    wirelessGroup.add(router);
    
    // Signal waves
    for (let i = 1; i <= 3; i++) {
      const waveGeometry = new THREE.RingGeometry(i * 2, i * 2 + 0.5, 32);
      const waveMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffff00,
        transparent: true,
        opacity: 0.2 / i
      });
      const wave = new THREE.Mesh(waveGeometry, waveMaterial);
      wave.position.copy(router.position);
      wave.rotation.x = -Math.PI / 2;
      wirelessGroup.add(wave);
    }
    scene.add(wirelessGroup);
    systemObjects.wireless = wirelessGroup;

    return systemObjects;
  };

  const animateSecuritySystems = (systemObjects: { [key: string]: THREE.Group }, activeSystem: string) => {
    const time = Date.now() * 0.001;
    
    // Animate active system
    if (systemObjects[activeSystem]) {
      systemObjects[activeSystem].children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          // Pulsing effect
          const pulse = Math.sin(time * 3 + index) * 0.5 + 0.5;
          if (child.material instanceof THREE.MeshStandardMaterial) {
            const system = securitySystems.find(s => s.id === activeSystem);
            if (system) {
              child.material.emissive.setHex(system.color);
              child.material.emissiveIntensity = pulse * 0.3;
            }
          }
        }
      });
    }

    // Animate CCTV rotation
    if (systemObjects.cctv && activeSystem === "cctv") {
      systemObjects.cctv.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.ConeGeometry) {
          child.rotation.y += 0.01;
        }
      });
    }

    // Animate wireless signals
    if (systemObjects.wireless && activeSystem === "wireless") {
      systemObjects.wireless.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.RingGeometry) {
          child.rotation.z += 0.02 * (index + 1);
          child.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.1);
        }
      });
    }
  };

  const activateSystem = (systemId: string) => {
    if (!objects[systemId]) return;
    
    const system = securitySystems.find(s => s.id === systemId);
    if (!system) return;
    
    objects[systemId].children.forEach(child => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.emissive.setHex(system.color);
        child.material.emissiveIntensity = 0.2;
      }
    });
  };

  const resetSimulation = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(15, 10, 15);
      cameraRef.current.lookAt(0, 0, 0);
    }
    setActiveSystem("cctv");
    setIsPlaying(true);
  };

  return (
    <section id="simulator" ref={ref} className="py-20 bg-black-deep">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gold">
            SIMULADOR 3D DE SEGURANÇA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore como nossos sistemas de segurança trabalham juntos para proteger seu ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* 3D Simulator */}
          <div className="xl:col-span-2">
            <Card className="simulator-card p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-orbitron font-bold text-gold">
                  Ambiente Simulado
                </h3>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="control-button text-gold"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    className="control-button text-gold"
                    onClick={resetSimulation}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div 
                ref={mountRef} 
                className="w-full h-[500px] bg-black-deep rounded-lg border border-gold/30 overflow-hidden simulator-3d-container"
              />
            </Card>
          </div>

          {/* Control Panel */}
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-gold mb-4">
              Sistemas de Segurança
            </h3>
            
            {securitySystems.map((system) => (
              <Card
                key={system.id}
                className={`p-4 cursor-pointer transition-all duration-300 simulator-card ${
                  activeSystem === system.id
                    ? 'simulator-active'
                    : ''
                }`}
                onClick={() => setActiveSystem(system.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activeSystem === system.id ? 'bg-gold text-black' : 'bg-gray-tech text-gold'
                  }`}>
                    <system.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-orbitron font-bold mb-1 ${
                      activeSystem === system.id ? 'text-gold' : 'text-white'
                    }`}>
                      {system.name}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {system.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="bg-black-medium border-gold/30 p-4 mt-6">
              <h4 className="font-orbitron font-bold text-gold mb-2">
                Como Usar
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Clique nos sistemas para ativá-los</li>
                <li>• Use ⏸️ para pausar a animação</li>
                <li>• Use 🔄 para resetar a visualização</li>
                <li>• Observe as áreas de cobertura</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Interessado em implementar estes sistemas? Entre em contato conosco!
          </p>
          <Button 
            className="bg-gold text-black px-8 py-3 font-rajdhani font-bold text-lg hover-3d animate-glow"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            SOLICITAR ORÇAMENTO
          </Button>
        </div>
      </motion.div>
    </section>
  );
}