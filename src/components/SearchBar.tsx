// src/components/SearchBar.tsx
"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
        className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
