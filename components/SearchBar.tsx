"use client";
export default function SearchBar() {
  return (
    <div className="w-full flex justify-center py-4">
      <form
        className="flex w-full max-w-md"
        onSubmit={e => {
          e.preventDefault();
          // TODO: Xử lý tìm kiếm ở đây nếu muốn
        }}
      >
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-l w-full focus:outline-none focus:border-blue-600"
          placeholder="Tìm kiếm sản phẩm..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 flex items-center"
        >
          {/* ICON search dạng SVG, luôn hiển thị đẹp, không cần import gì thêm */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          Tìm
        </button>
      </form>
    </div>
  );
}

