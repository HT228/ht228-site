'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-[#1c1639] text-white py-10 px-4 mt-16">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h4 className="text-xl font-semibold text-yellow-400">Đăng ký nhận tin & Ưu đãi HT228</h4>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 justify-center">
          <label htmlFor="footer-email" className="sr-only">Email</label>
          <input
            id="footer-email"
            type="email"
            placeholder="Nhập email của bạn"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="flex-1 px-4 py-2 rounded text-black border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded disabled:opacity-50"
          >
            {status === 'loading' ? 'Đang gửi…' : 'Đăng ký'}
          </button>
        </form>
        {status === 'success' && <p className="text-green-400 text-sm">🎉 Đăng ký thành công!</p>}
        {status === 'error' && <p className="text-red-400 text-sm">❌ Có lỗi xảy ra. Vui lòng thử lại.</p>}

        <div className="flex flex-wrap justify-center gap-6 text-sm mt-6">
          <a href="https://www.facebook.com/Tongkhoxopnohopshipcodbangkeo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">Facebook</a>
          <a href="https://www.youtube.com/@Giaiphapdonggoitietkiemm" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">YouTube</a>
          <a href="tel:0975257980" className="hover:text-yellow-300">📞 0975 257 980</a>
          <a href="mailto:ceo@tongkhoht228.com" className="hover:text-yellow-300">📧 ceo@tongkhoht228.com</a>
        </div>

        <p className="text-xs text-yellow-500 mt-6">&copy; 2025 HT228 – Vì Shop Phục Vụ</p>
      </div>
    </footer>
  );
}

