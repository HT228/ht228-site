"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Html } from "@react-three/drei";

const trustItems = [
  { title: "Chất lượng đảm bảo", img: "/assets/images/mat2chatluong.png" },
  { title: "Hỗ trợ kiểm hàng",      img: "/assets/images/mat2kiemtra.png" },
  { title: "Vận chuyển toàn quốc", img: "/assets/images/mat2vanchuyen.jpg" },
];

export default function TrustCircle3DNew() {
  return (
    <section className="w-full py-12 text-center space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Cam kết HT228</h2>
      <div className="relative flex justify-center">
        <Canvas className="w-64 h-64 book anti-alias">
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            {trustItems.map((item, idx) => {
              const angle = (idx / trustItems.length) * Math.PI * 2;
              const x = Math.cos(angle) * 2.5;
              const z = Math.sin(angle) * 2.5;
              return (
                <group key={idx} position={[x, 0, z]}>
                  <mesh>
                    <circleGeometry args={[1, 32]} />
                    <meshStandardMaterial color="white" />
                  </mesh>
                  <Html center>
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 shadow-lg">
                      <img src={item.img} alt={item.title} className="object-contain w-full h-full" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
                  </Html>
                </group>
              );
            })}
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}

