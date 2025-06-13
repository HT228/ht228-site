"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Html } from "@react-three/drei";

const items = [
  { title: "Chất lượng đảm bảo", img: "/assets/images/mat2chatluong.png" },
  { title: "Hỗ trợ kiểm hàng",     img: "/assets/images/mat2kiemtra.png" },
  { title: "Vận chuyển toàn quốc", img: "/assets/images/shipping (1).svg" },
];

export default function TrustCircle3D() {
  return (
    <section className="w-full py-12 text-center space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Vì sao khách chọn HT228?</h2>
      <div className="flex justify-center">
        <Canvas className="w-72 h-72 filter drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            {items.map((item, idx) => {
              const angle = (idx / items.length) * Math.PI * 2;
              const x = Math.cos(angle) * 3;
              const z = Math.sin(angle) * 3;
              return (
                <group key={idx} position={[x, 0, z]}>
                  <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial emissive="hotpink" emissiveIntensity={0.7} />
                  </mesh>
                  <Html center className="cursor-pointer">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping" />
                      <div className="absolute inset-0 rounded-full border-2 border-pink-600 animate-spin" />
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-cover rounded-full w-full h-full"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
                  </Html>
                </group>
              );
            })}
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </section>
  );
}

