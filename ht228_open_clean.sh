#!/bin/bash

echo "=== 🔄 HT228 – MỞ DỰ ÁN VÀ DỌN DẸP TỰ ĐỘNG ==="

cd /var/www/ht228-site || {
  echo "❌ Không tìm thấy thư mục dự án."
  exit 1
}

echo "📦 Backup trước khi dọn..."
tar -czf ~/ht228-backup-before-clean-$(date +%F).tar.gz .

echo "🧹 Xoá node_modules + cache..."
rm -rf node_modules package-lock.json .next
npm cache clean --force

echo "📥 Cài lại dependencies..."
npm install

echo "🔧 Dedupe dependencies..."
npm dedupe

echo "🔍 Kiểm tra three/stats-gl..."
npm ls three | grep three
npm ls stats-gl | grep stats-gl

echo "🚀 Build lại project..."
NEXT_DISABLE_ESLINT=true npm run build

echo "✅ HT228 đã sẵn sàng!"

