"use client";
export default function FeaturedArticles() {
  const articles = [
    { title: "Mẹo đóng gói tiết kiệm", link: "/tin-tuc/meo-dong-goi" },
    { title: "Xu hướng vận chuyển 2025", link: "/tin-tuc/xu-huong-2025" },
  ];
  return (
    <section className="max-w-4xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4">Bài viết nổi bật</h2>
      <ul className="list-disc pl-5 space-y-1">
        {articles.map(a => (
          <li key={a.link}>
            <a href={a.link} className="text-blue-700 hover:underline">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
