# LuxeCar V3 — Luxury Automotive Experience

## Điểm mới
- Màn hình thương hiệu/logo khi mở **trang chủ ~3 giây**, sau đó fade-out.
- Trang chủ phong cách luxury editorial/cinematic, nhiều chủ đề xe và hiệu ứng hover/zoom.
- Không Flash Sale.
- Bổ sung Maybach S 680, Range Rover SV, Bentley Bentayga Speed, BMW XM Label, Ferrari Roma Spider, Aston Martin DB12 Volante.
- Trang riêng cho từng xe.
- Mỗi trang xe có:
  - Nhà sản xuất: quốc gia, năm thành lập, trụ sở, pháp nhân, lĩnh vực, định vị.
  - Sản xuất: đời xe, giai đoạn, cách xác minh ngày xuất xưởng.
  - Thiết kế: kiểu thân, hình dáng tổng thể, vật liệu, khí động học, bố trí.
  - Cấu phần: động cơ, hộp số, chassis, treo, phanh, mâm/lốp, điện tử, cabin.
  - Kích thước/trọng lượng.
- Ngày sản xuất chính xác của một xe cụ thể được ghi rõ là cần VIN/CoC/hồ sơ nhà máy, tránh bịa ngày.

## Chạy
```bash
gcc server.c -o luxecar_server -pthread
./luxecar_server 9000
```
Mở `http://localhost:9000`.

Đổi port:
```bash
./luxecar_server 8080
```

## Lưu ý giá
MSRP/giá quốc tế chỉ là giá tham khảo. Giá tại Việt Nam phụ thuộc cấu hình, nguồn xe, thuế, VAT, phí nhập khẩu, trước bạ, đăng ký, vận chuyển và đại lý.
