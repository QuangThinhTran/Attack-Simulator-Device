# Attack Simulator Device

Một hệ thống mô phỏng thiết bị tấn công được phát triển bằng Node.js, bao gồm hai thành phần chính: một website dummy để làm mục tiêu và một thiết bị inject để thực hiện các cuộc tấn công thử nghiệm.

## 📖 Tổng quan

Project này được thiết kế nhằm mục đích giáo dục và nghiên cứu về bảo mật, giúp hiểu rõ hơn về các phương thức tấn công và cách phòng chống. Hệ thống bao gồm:

- **DummyWebsite**: Website mục tiêu được thiết kế để làm đối tượng thử nghiệm
- **InjectDevice**: Thiết bị mô phỏng thực hiện các cuộc tấn công inject

## 🏗️ Cấu trúc Project

```
Attack-Simulator-Device/
├── DummyWebsite/           # Website mục tiêu
│   ├── src/
│   │   ├── public/         # Static files
│   │   ├── routes/         # API routes
│   │   ├── views/          # View templates
│   │   └── main.js         # Entry point
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
└── InjectDevice/           # Thiết bị tấn công
    ├── src/
    │   ├── main.js         # Entry point
    │   └── sql.js          # SQL injection modules
    ├── package.json
    ├── .env
    └── .gitignore
```

## 🚀 Cài đặt và Chạy

### Yêu cầu hệ thống
- Node.js (v14.0.0 trở lên)
- npm hoặc yarn

### DummyWebsite

1. Di chuyển vào thư mục DummyWebsite:
```bash
cd DummyWebsite
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Cấu hình file `.env` (nếu cần):
```bash
cp .env.example .env
# Chỉnh sửa các biến môi trường phù hợp
```

4. Chạy website:
```bash
npm start
# hoặc
npm run dev
```

Website sẽ chạy tại `http://localhost:3000` (mặc định)

### InjectDevice

1. Di chuyển vào thư mục InjectDevice:
```bash
cd InjectDevice
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Cấu hình file `.env`:
```bash
cp .env.example .env
# Thiết lập target URL và các tham số cần thiết
```

4. Chạy inject device:
```bash
npm start
# hoặc
npm run dev
```

## 🔧 Công nghệ sử dụng

### DummyWebsite
- **Express.js**: Web framework chính
- **CORS**: Xử lý Cross-Origin Resource Sharing
- **Body-parser**: Parse request body
- **EJS/Handlebars**: Template engine (tùy cấu hình)

### InjectDevice
- **Express.js**: HTTP server và routing
- **CORS**: Cross-origin request handling
- **OS Module**: System information gathering
- **SystemInformation**: Advanced system info
- **dotenv**: Environment variables management

## 📋 Tính năng

### DummyWebsite
- ✅ Web server cơ bản với API endpoints
- ✅ Các trang web mẫu để thử nghiệm
- ✅ Logging và monitoring cơ bản
- ✅ CORS configuration linh hoạt

### InjectDevice
- ✅ HTTP request injection
- ✅ SQL injection simulation
- ✅ System information gathering
- ✅ Customizable attack parameters
- ✅ Environment-based configuration

## ⚠️ Cảnh báo bảo mật

**QUAN TRỌNG**: Project này được phát triển CHỈ cho mục đích:
- 🎓 Giáo dục và học tập về bảo mật
- 🔬 Nghiên cứu và phát triển
- 🧪 Thử nghiệm trong môi trường an toàn

**KHÔNG được sử dụng để**:
- ❌ Tấn công các hệ thống thực tế
- ❌ Thực hiện các hoạt động bất hợp pháp
- ❌ Xâm phạm quyền riêng tư của người khác

## 🛡️ Khuyến nghị sử dụng

1. **Môi trường isolated**: Chỉ chạy trong môi trường thử nghiệm riêng biệt
2. **Network segmentation**: Tách biệt khỏi mạng production
3. **Regular updates**: Cập nhật dependencies thường xuyên
4. **Monitoring**: Theo dõi và ghi log tất cả hoạt động

## 📝 Scripts có sẵn

### DummyWebsite
```bash
npm start          # Chạy production mode
npm run dev        # Chạy development mode với nodemon
npm test           # Chạy test cases (nếu có)
```

### InjectDevice
```bash
npm start          # Chạy inject device
npm run dev        # Development mode với auto-restart
```

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the ISC License. See `LICENSE` for more information.

## 👨‍💻 Tác giả

**QuangThinhTranLe**
- GitHub: [@QuangThinhTran](https://github.com/QuangThinhTran)

## 📞 Liên hệ

Nếu có bất kỳ câu hỏi nào về project, vui lòng tạo issue trên GitHub repository.

---

**Lưu ý**: Hãy luôn sử dụng project này một cách có trách nhiệm và tuân thủ các quy định pháp luật địa phương về bảo mật thông tin.
