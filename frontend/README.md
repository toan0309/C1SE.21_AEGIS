# Hướng Dẫn Setup Dự Án React Native Cho Máy Mới

Nếu bạn clone source code này về trên một máy tính **hoàn toàn mới (chưa từng code React Native hoặc chưa cài Android Studio)**, vui lòng làm theo các bước dưới đây để có thể chạy dự án.

---

## Phần 1: Cài đặt Môi trường (Chỉ làm 1 lần cho máy mới)

Vì dự án này sử dụng **React Native CLI** (không phải Expo), nên việc thiết lập môi trường (như Java, Android SDK) là **BẮT BUỘC**. Nếu không cài đặt môi trường, máy tính sẽ không thể build được file App (APK/AAB).

1. **Cài đặt Node.js**:
   - Tải và cài đặt bản LTS mới nhất từ trang chủ Node.js.
   
2. **Cài đặt Java JDK 17**:
   - Đây là phiên bản Java khuyên dùng và tương thích tốt nhất cho các phiên bản React Native hiện hành.

3. **Cài đặt Android Studio (Bắt buộc)**:
   - Mặc dù bạn có thể dùng VS Code để viết code, nhưng **BẮT BUỘC phải cài Android Studio** để hệ thống tự động cài đặt **Android SDK**, công cụ Build và cấu hình Máy ảo Android (Emulator).

4. **Cấu hình biến môi trường (Environment Variables) - RẤT QUAN TRỌNG**:
   - Bạn phải thêm biến `ANDROID_HOME` vào hệ thống Windows/macOS và trỏ nó tới thư mục chứa Android SDK. 
   - Không có bước này, lệnh `run-android` sẽ báo lỗi `SDK location not found`.

> **Mẹo:** Bạn có thể chạy lệnh `npx react-native doctor` trong terminal để công cụ này tự quét xem máy tính đã cài đặt đủ các môi trường yêu cầu chưa và xem hướng dẫn sửa lỗi nếu thiếu.

---

## Phần 2: Cài đặt Dự án (Sau khi clone code)

Bạn **không cần phải tự tay tải hay cấu hình thêm bất kỳ thư viện nào mới** (như sass, components,...). Toàn bộ danh sách thư viện đã được định nghĩa sẵn trong file `package.json`. 

Ngay sau khi clone code về, bạn chỉ cần mở Terminal tại thư mục dự án và làm theo các bước sau:

**Bước 1: Tải tất cả các thư viện của dự án**
```bash
npm install
```
*(Lệnh này sẽ tự động đọc file `package.json` và tải tất cả mã nguồn thư viện về thư mục `node_modules`)*

**Bước 2: Bật máy ảo hoặc cắm điện thoại**
- Mở Android Studio và khởi động Máy ảo Android (Emulator).
- Hoặc cắm cáp điện thoại Android thật vào máy tính (nhớ bật chế độ Developer Options và USB Debugging).

**Bước 3: Chạy dự án**

Để đảm bảo không bị lỗi cache (đặc biệt là với các thư viện SCSS), hãy mở terminal và chạy:
```bash
npx react-native start --reset-cache
```

Giữ terminal trên chạy ngầm, sau đó **mở một tab terminal mới** và chạy lệnh build:
```bash
npx react-native run-android
```

Đợi một lúc để Gradle build và cài ứng dụng vào điện thoại/máy ảo của bạn!
