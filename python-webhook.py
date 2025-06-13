cd /var/www/ht228-site

# (tuỳ chọn) lưu tạm những thay đổi local nếu cần
git stash save "WIP before reset"

# Lấy về dữ liệu mới nhất
git fetch origin

# Reset cứng về đúng commit của origin/main
git reset --hard origin/main

# Xác nhận về đúng nhánh và đã cập nhật
git status

