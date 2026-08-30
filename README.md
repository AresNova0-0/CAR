# LuxeCar V5 — GitHub Pages Ready + Private Client

## Chạy GitHub Pages
Upload **toàn bộ nội dung `public/` vào root của repository** (để `index.html` nằm ngay ở root). Các đường dẫn nội bộ đã đổi sang relative (`./...`) nên chạy đúng ở project site như `https://USERNAME.github.io/luxecar/`.

## Chạy local bằng C
```bash
gcc server.c -o luxecar_server -pthread
./luxecar_server 9000
```
Mở http://localhost:9000.

## Tài khoản
- Đăng nhập / đăng ký giao diện luxury.
- GitHub Pages mặc định: demo localStorage.
- Demo admin: `admin@luxecar.local` / `LuxeCarAdmin2026!` (chỉ để xem giao diện, KHÔNG dùng production).

## Production thật
Frontend GitHub Pages không thể tự chạy database, xử lý secret thanh toán hoặc gửi email. Thư mục `backend/` có kiến trúc + schema để nối Supabase/Postgres, Stripe Checkout và email provider. Chỉ đưa **public anon key** vào `public/config.js`; secret/service-role/Stripe/email keys phải ở backend.

## Cấu hình backend
Sửa:
`public/config.js`
```js
window.LUXECAR_CONFIG={
  SUPABASE_URL:'https://YOUR_PROJECT.supabase.co',
  SUPABASE_ANON_KEY:'YOUR_PUBLIC_ANON_KEY',
  API_BASE:'https://api.yourdomain.com',
  CURRENCY:'VND',
  DEMO_MODE:false
};
```
