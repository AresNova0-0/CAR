# LuxeCar Production Architecture

GitHub Pages chỉ host frontend. Để có đăng nhập/database/thanh toán/email thật, deploy backend riêng và đặt `API_BASE` trong `public/config.js`.

## Recommended stack
- Auth + PostgreSQL: Supabase Auth + Supabase Postgres (public anon key only in frontend).
- Payment: Stripe Checkout. Secret key chỉ ở backend/Edge Function; frontend gọi `/api/create-checkout-session`.
- Email: Resend/SMTP từ backend sau khi tạo đơn/thanh toán thành công.
- Admin: role/claims `admin`, kiểm tra quyền ở server; không tin role do client gửi lên.
- C server trong repository vẫn dùng được cho local/static hosting, nhưng GitHub Pages không chạy được C.

## Data flow
Client -> Supabase Auth -> API -> PostgreSQL -> Stripe Checkout -> webhook -> Orders -> Email -> Admin dashboard.

## Environment (backend only)
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
ADMIN_EMAIL=

Never put service-role, Stripe secret, webhook secret or email API keys in GitHub Pages JS.
