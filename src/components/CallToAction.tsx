"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-10 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center rounded-xl mx-4 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Cần hỗ trợ? Đặt hàng ngay!</h2>
      <p className="mb-6">Liên hệ qua Zalo OA hoặc gọi hotline để được tư vấn nhanh chóng.</p>
      <div className="flex justify-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://zalo.me/738042415649016822"
          target="_blank"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Nhắn Zalo ngay
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="tel:0975257980"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Gọi hotline
        </motion.a>
      </div>
    </section>
  );
}
