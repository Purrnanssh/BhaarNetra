"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function prefersStaticScene() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches
  );
}

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || prefersStaticScene()) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0c1626, 0.047);

    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      120,
    );
    camera.position.set(0, 5.8, 12.8);
    camera.lookAt(0, -0.5, -16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x0c1626, 0);
    mount.appendChild(renderer.domElement);

    const road = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 76),
      new THREE.MeshBasicMaterial({ color: 0x101d30 }),
    );
    road.rotation.x = -Math.PI / 2;
    road.position.z = -25;
    scene.add(road);

    const shoulderMaterial = new THREE.MeshBasicMaterial({
      color: 0x31506b,
      transparent: true,
      opacity: 0.45,
    });
    [-5.65, 5.65].forEach((x) => {
      const shoulder = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.025, 76),
        shoulderMaterial,
      );
      shoulder.position.set(x, 0.02, -25);
      scene.add(shoulder);
    });

    const laneMaterial = new THREE.MeshBasicMaterial({
      color: 0xe8eef4,
      transparent: true,
      opacity: 0.24,
    });
    [-2, 2].forEach((x) => {
      for (let z = 8; z > -62; z -= 7) {
        const dash = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.02, 3.2),
          laneMaterial,
        );
        dash.position.set(x, 0.03, z);
        scene.add(dash);
      }
    });

    const sensorMaterial = new THREE.MeshBasicMaterial({
      color: 0x0e7c7b,
      transparent: true,
      opacity: 0.9,
    });
    const sensor = new THREE.Mesh(
      new THREE.BoxGeometry(10.8, 0.035, 0.18),
      sensorMaterial,
    );
    sensor.position.set(0, 0.055, -5);
    scene.add(sensor);

    const gantry = new THREE.Group();
    const gantryMaterial = new THREE.MeshBasicMaterial({ color: 0x31506b });
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(11, 0.12, 0.12),
      gantryMaterial,
    );
    beam.position.y = 3.2;
    gantry.add(beam);
    [-5.3, 5.3].forEach((x) => {
      const post = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 3.2, 0.12),
        gantryMaterial,
      );
      post.position.set(x, 1.6, 0);
      gantry.add(post);
    });
    gantry.position.z = -4.3;
    scene.add(gantry);

    const truck = new THREE.Group();
    const truckBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.3, 1.25, 4.8),
      new THREE.MeshBasicMaterial({ color: 0x555555 }),
    );
    truckBody.position.y = 1.12;
    truck.add(truckBody);
    const cab = new THREE.Mesh(
      new THREE.BoxGeometry(2.15, 1.45, 1.45),
      new THREE.MeshBasicMaterial({ color: 0x31506b }),
    );
    cab.position.set(0, 0.98, 3.05);
    truck.add(cab);
    const wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x07101d });
    [-1.15, 1.1].forEach((z) => {
      [-1.13, 1.13].forEach((x) => {
        const wheel = new THREE.Mesh(
          new THREE.CylinderGeometry(0.36, 0.36, 0.2, 18),
          wheelMaterial,
        );
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x, 0.42, z);
        truck.add(wheel);
      });
    });
    truck.position.set(0, 0, -24);
    scene.add(truck);

    const scan = new THREE.Mesh(
      new THREE.PlaneGeometry(10.6, 2.8),
      new THREE.MeshBasicMaterial({
        color: 0x0e7c7b,
        transparent: true,
        opacity: 0.045,
        side: THREE.DoubleSide,
      }),
    );
    scan.position.set(0, 1.4, -5);
    scene.add(scan);

    let frame = 0;
    let start = performance.now();
    const render = (time: number) => {
      const elapsed = (time - start) / 1000;
      truck.position.z = -30 + ((elapsed * 3.1) % 36);
      sensorMaterial.opacity =
        Math.abs(truck.position.z + 5) < 2.8
          ? 0.75 + Math.sin(elapsed * 7) * 0.18
          : 0.45;
      camera.position.z = 12.8 - Math.min(window.scrollY / 1400, 1.6);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    const resize = () => {
      if (!mount) return;
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
        if (object instanceof THREE.Mesh) {
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
      start = 0;
    };
  }, []);

  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-scene__fallback">
        <div className="hero-scene__road">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="hero-scene__webgl" ref={mountRef} />
      <div className="hero-scene__instrument mono">
        <span>NH CORRIDOR NODE · 28.6139° N</span>
        <span>SCREENING ACTIVE</span>
      </div>
    </div>
  );
}
