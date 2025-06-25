#!/bin/bash
echo '🔧 Đang ghi đè các file đã fix lint...'

echo 'import Image from '\''next/image'\'';

export default function BannerSlider() {
  return (
    <div>
      <Image src="/banner.jpg" alt="Banner" width={800} height={400} />
    </div>
  );
}
' > components/BannerSlider.tsx

echo 'import Link from '\''next/link'\'';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Trang chủ</Link>
    </nav>
  );
}
' > components/Navbar.tsx

echo ''\''use client'\'';

export default function CallToAction() {
  return <section>Gọi hành động</section>;
}
' > src/components/CallToAction.tsx

echo ''\''use client'\'';
import Link from '\''next/link'\'';
import Image from '\''next/image'\'';

export default function Footer() {
  return (
    <footer>
      <p><Link href="/">Trang chủ</Link></p>
      <Image src="/logo.png" alt="HT228 Logo" width={120} height={60} />
    </footer>
  );
}
' > src/components/Footer.tsx

echo 'import Image from '\''next/image'\'';

export default function HeaderNavbar() {
  return (
    <header>
      <Image src="/logo-header.png" alt="Header Logo" width={100} height={50} />
    </header>
  );
}
' > src/components/Header/Navbar.tsx

echo ''\''use client'\'';

export default function HookIntro() {
  return <div>Giới thiệu hook</div>;
}
' > src/components/HookIntro.tsx

echo 'export default function NewsPromo() {
  return (
    <div>
      {/* Đã xoá idx không dùng */}
      <p>Khuyến mãi mới nhất</p>
    </div>
  );
}
' > src/components/NewsPromo.tsx

echo 'import Image from '\''next/image'\'';

export default function PopupGHSV() {
  return <Image src="/ghsv.png" alt="Popup GHSV" width={300} height={200} />;
}
' > src/components/PopupGHSV.tsx

echo 'import Image from '\''next/image'\'';

export default function TrustCircle3D() {
  return (
    <div>
      <Image src="/trust1.png" alt="Trust 1" width={120} height={120} />
      <Image src="/trust2.png" alt="Trust 2" width={120} height={120} />
    </div>
  );
}
' > src/components/TrustCircle3D.tsx

echo '✅ Ghi đè hoàn tất!'
