// ThreeCanvas.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // 🌀 Torus Knot Geometry
    const baseGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

    // 🔲 Outer mesh (White border)
    const outerMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000, // Correct – black

      metalness: 0.1,
      roughness: 0.1,
    });
    const outerGeometry = baseGeometry.clone();
    outerGeometry.scale(1.05, 1.05, 1.05); // Slightly bigger for border
    const outerTorusKnot = new THREE.Mesh(outerGeometry, outerMaterial);
    scene.add(outerTorusKnot);

    // ⬛ Inner mesh (Black center)
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.5,
      roughness: 0.2,
    });
    const innerTorusKnot = new THREE.Mesh(baseGeometry, innerMaterial);
    scene.add(innerTorusKnot);

    // 💡 Lighting
    const pointLight = new THREE.PointLight(0xff54900, 3, 200);
    pointLight.position.set(30, 30, 30);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    camera.position.z = 40;

    // 🎞️ Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      innerTorusKnot.rotation.x += 0.01;
      innerTorusKnot.rotation.y += 0.01;
      outerTorusKnot.rotation.x += 0.01;
      outerTorusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // 📏 Handle resizing
    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hidden sm:flex"
      style={{
        position: "absolute",
        bottom: "150px",
        right: 0,
        width: "100%",
        height: "100px",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
