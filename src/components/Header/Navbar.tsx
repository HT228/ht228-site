import Image from 'next/image';

export default function HeaderNavbar() {
  return (
    <header>
      <Image src="/logo-header.png" alt="Header Logo" width={100} height={50} />
    </header>
  );
}

