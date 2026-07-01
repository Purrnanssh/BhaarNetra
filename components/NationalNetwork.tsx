"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const nodes = [
  [-0.6, 3.2, 0.1],   // Delhi
  [-1.8, 0.4, 0.2],   // Mumbai
  [-0.8, -2.5, 0.1],  // Bangalore
  [0.5, -2.0, 0],     // Chennai
  [2.2, 1.2, -0.1],   // Kolkata
  [-0.1, -0.4, 0.3],  // Hyderabad
  [-1.9, 1.6, 0.1],   // Ahmedabad
  [-1.6, -0.1, 0.2],  // Pune
  [0.4, 0.9, 0.2],    // Nagpur
  [0.8, 2.6, 0],      // Lucknow
  [-1.2, 2.4, 0.1],   // Jaipur
  [3.2, 1.8, -0.2],   // Guwahati
] as const;

const links = [
  [0, 10], // Delhi - Jaipur
  [10, 6], // Jaipur - Ahmedabad
  [6, 1],  // Ahmedabad - Mumbai
  [1, 7],  // Mumbai - Pune
  [7, 2],  // Pune - Bangalore
  [2, 3],  // Bangalore - Chennai
  [3, 5],  // Chennai - Hyderabad
  [5, 8],  // Hyderabad - Nagpur
  [8, 4],  // Nagpur - Kolkata
  [4, 11], // Kolkata - Guwahati
  [0, 9],  // Delhi - Lucknow
  [9, 4],  // Lucknow - Kolkata
  [0, 8],  // Delhi - Nagpur
  [8, 1],  // Nagpur - Mumbai
  [5, 2],  // Hyderabad - Bangalore
  [10, 0], // Jaipur - Delhi
  [8, 5],  // Nagpur - Hyderabad
] as const;

export function NationalNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (
      !mount ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x0c1626, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.x = -0.1;
    group.rotation.z = -0.05;
    scene.add(group);

    // Premium glowing node material
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    nodes.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 24, 24),
        nodeMaterial,
      );
      node.position.set(x, y, z);
      group.add(node);
    });

    // Subtle, elegant route connections
    const routeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
    });
    links.forEach(([from, to]) => {
      const a = nodes[from];
      const b = nodes[to];
      const midpoint = new THREE.Vector3(
        (a[0] + b[0]) / 2,
        (a[1] + b[1]) / 2,
        Math.max(a[2], b[2]) + 0.3,
      );
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(...a),
        midpoint,
        new THREE.Vector3(...b),
      );
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)),
        routeMaterial,
      );
      group.add(line);
    });

    // Stunning India Outline
    const outlinePoints = [
      [-0.6, 3.8],  // Kashmir top
      [0.2, 3.3],   // Ladakh right
      [0.6, 2.8],   // Himachal/UK
      [1.6, 2.3],   // UP/Nepal border
      [2.2, 2.2],   // Sikkim/Bhutan
      [3.6, 2.4],   // Arunachal
      [3.8, 1.8],   // Nagaland/Manipur
      [2.8, 1.0],   // Tripura/Mizoram
      [2.4, 1.4],   // Meghalaya/Bangladesh border
      [2.2, 0.8],   // West Bengal
      [1.6, 0.0],   // Odisha coast
      [1.0, -1.2],  // Andhra coast
      [0.4, -2.5],  // Chennai
      [-0.2, -3.5], // Kanyakumari
      [-0.8, -2.2], // Kerala coast
      [-1.6, -0.2], // Karnataka/Goa
      [-2.0, 1.0],  // Mumbai/Maharashtra
      [-2.8, 1.6],  // Gujarat Saurashtra
      [-2.2, 2.2],  // Gujarat Kutch
      [-1.4, 2.8],  // Rajasthan
      [-0.9, 3.4],  // Punjab/J&K
    ].map(p => new THREE.Vector3(p[0], p[1], -0.1));

    const outlineCurve = new THREE.CatmullRomCurve3(outlinePoints, true, "catmullrom", 0.5);
    const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlineCurve.getPoints(150));
    const outlineMaterial = new THREE.LineBasicMaterial({
      color: 0x4a7298, // Premium deep glowing blue/silver
      transparent: true,
      opacity: 0.35,
    });
    const indiaOutline = new THREE.Line(outlineGeometry, outlineMaterial);
    group.add(indiaOutline);

    let frame = 0;
    const render = (time: number) => {
      group.rotation.y = Math.sin(time / 7000) * 0.12;
      routeMaterial.opacity = 0.46 + Math.sin(time / 1400) * 0.1;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="network-visual" aria-hidden="true">
      <div className="network-visual__fallback">
        {nodes.map((node, index) => (
          <i
            key={index}
            style={{
              left: `${50 + node[0] * 9}%`,
              top: `${50 - node[1] * 9}%`,
            }}
          />
        ))}
      </div>
      <div ref={mountRef} className="network-visual__webgl" />
      <div className="network-visual__legend mono">
        <span>ILLUSTRATIVE CORRIDOR TOPOLOGY</span>
        <span>NATIONAL DEPLOYMENT VISION · NOT LIVE DATA</span>
      </div>
    </div>
  );
}
