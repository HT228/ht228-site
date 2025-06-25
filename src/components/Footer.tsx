'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <p><Link href="/">Trang chủ</Link></p>
      <Image src="/logo.png" alt="HT228 Logo" width={120} height={60} />
    </footer>
  );
}

