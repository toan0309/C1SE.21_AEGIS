# AEGIS Backend

## 🚀 Cách setup

```bash
# 1. Clone project
git clone https://github.com/toan0309/C1SE.21_AEGIS.git

# 2. Chuyển sang branch Backend
cd C1SE.21_AEGIS
git fetch origin
git switch feature/backend-setup

# 3. Vào thư mục backend
cd backend

# 4. Tạo và kích hoạt môi trường ảo
py -m venv venv
.\venv\Scripts\Activate.ps1

# 5. Cài thư viện
pip install -r requirements.txt

# 6. Tạo file cấu hình .env
copy .env.example .env

# 7. Chạy server
python app.py
```

> Server sẽ chạy tại `http://127.0.0.1:5000`

---

## 📦 Thư viện sử dụng

| Thư viện | Mô tả ngắn |
|---|---|
| **Flask** | Framework chính để xây dựng API |
| **python-dotenv** | Đọc cấu hình từ file `.env` (APP_NAME, FLASK_ENV, ...) |

### Các thư viện đi kèm Flask (tự động cài, không cần quan tâm):

| Thư viện | Mô tả ngắn |
|---|---|
| Werkzeug | Xử lý HTTP bên dưới Flask |
| Jinja2 | Render template HTML |
| MarkupSafe | Chống lỗi XSS khi render HTML |
| click | Hỗ trợ lệnh `flask run` trên terminal |
| itsdangerous | Bảo mật session/cookie |
| blinker | Hệ thống sự kiện nội bộ |
| colorama | Hiển thị màu trên terminal Windows |