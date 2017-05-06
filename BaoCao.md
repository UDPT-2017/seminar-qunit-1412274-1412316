# Giới thiệu
QUnit là 1 framework dùng để kiểm thử đơn vị (Unit Testing) mạnh, dễ sử dụng.

*Kiểm thử đơn vị là gì?*
Kiểm thử đơn vị là 1 phương pháp kiểm thử phần mềm, công việc chính là kiểm thử chức năng, cụ thể là các thành phần trong chức năng 1 cách riêng biệt với nhau.

*Kiểm thử đơn vị dùng để làm gì?*
* Đảm bảo các thành phần của chức năng hoạt động độc lập với nhau, dùng để tìm kiếm bug, phát hiện hồi quy (gây nên việc những thứ đang làm việc tốt bỗng nhiên bất ngờ dừng hoạt động), ngoài ra còn để thiết kế các thành phần trong phần mềm một cách tốt hơn.
*	Dùng bởi nhóm jQuery Project để test jQuery, jQuery UI, jQuery Mobile
*	Là 1 framework để kiểm tra các loại code Javascript và cả chính nó
*	Hỗ trợ máy chủ (Vd: node.js) và môi trường của máy client.
*	Được phát triển bởi John Resig là 1 thành phần của jQuery.
*	Các phiên bản mới nhất đều có thể kiểm thử và sửa lỗi thông qua trang github

*Tính chất*
*	Cài đặt đơn giản, không có yêu cầu gì nhiều.
*	Tính thực thi: vừa đơn giản và vừa nhanh.
*	Cố định và dựa vào API nhưng có thể mở rộng.
*	Tính tương thích: hoạt động được trên nhiều môi trường khác nhau.
*	Đặc biệt là nó miễn phí.

# Cài đặt
Cài đặt bằng nodejs:
* Cài đặt global:
**npm install -g qunitjs**
* Cài đặt cục bộ:
**npm install --save-dev qunitjs**
* Tải trực tiếp 2 file vào folder có chứa file .html:
1. **qunit-xxx.js**
2. **qunit-xxx.css**

# Nguyên tắc làm việc

# Chức năng

# Bao gồm các phương pháp chính (Main methods)
*	module: các test được nhóm lại theo 1 nhãn
*	only: tạo 1 test chạy riêng, ngăn các test khác thực thi
*	skip: tạo 1 test như 1 đối tượng bị bỏ qua
*	start: sử dụng để bắt đầu 1 tập test bất đồng bộ
*	test: thêm 1 test để thực thi
*	todo: thêm 1 test mà có ít nhất 1 khẳng định(assertion) không thành công khi thực thi

# Các khẳng định (Assertions):
*	async: hướng dẫn QUnit đợi 1 test bất đồng bộ
*	deepEqual: dùng để so sánh đệ quy sâu, làm việc trên các kiểu nguyên hàm, các mảng, các đối tượng, các biểu thức thông thường, ngày tháng và các hàm
* equal: dùng để kiểm tra bằng (so sánh không nghiêm ngặt)
*	expect: xác định có bao nhiêu khẳng định(assertion) dự kiến sẽ chạy trong test
*	notDeepEqual: dùng để so sánh đệ quy sâu ngược, làm việc trên các kiểu nguyên hàm, các mảng, các đối tượng, các biểu thức thông thường, ngày tháng và các hàm
*	notEqual: dùng để kiểm tra không bằng (so sánh không nghiêm ngặt)
*	notOk: dùng để kiểm tra luận lý. Thành công nếu tham số đầu tiên là sai
*	notPropEqual: dùng để kiểm tra không bằng (so sánh nghiêm ngặt đến thuộc tính của đối tượng)
*	notStrictEqual: dùng để kiểm tra bằng (so sánh nghiêm ngặt về giá trị)
*	ok: dùng để kiểm tra luận lý. Thành công nếu tham số đầu tiên là đúng
*	propEqual: dùng để kiểm tra bằng (so sánh nghiêm ngặt đến thuộc tính của đối tượng)
*	pushResult: báo cáo kết quả của 1 khẳng định tuỳ chỉnh
*	step: dùng để đánh dấu sự tiến triển trong 1 test cho trước
*	strictEqual: dùng để kiểm tra bằng (so sánh nghiêm ngặt về giá trị)
*	throws: dùng để kiểm tra nếu lệnh gọi lại(callback) có đưa ra(throw) ra 1 ngoại lệ và so sánh tuỳ ý lỗi được đưa ra(throw) ra
*	verifySteps: dùng để giúp đỡ xác nhận thứ tự và số bước trong 1 test

# Cấu hình (Config):
*	QUnit.assert: tạo namespace cho các khẳng định(assertion) của QUnit
*	QUnit.config: cấu hình cho QUnit, tuỳ chỉnh cú pháp theo yêu cầu cấu hình
*	QUnit.dump.parse: kết xuất dữ liệu nâng cao và mở rộng cho Javascript
*	QUnit.extend: sao chép các thuộc tính được định nghĩa trong đối tượng trộn lẫn vào đối tượng đích
*	QUnit.push: báo cáo kết quả của 1 khẳng định(assertion) tuỳ chỉnh (mang tính phản kháng)
*	QUnit.stack: trả về 1 chuỗi dòng biểu diễn stacktrace (gọi stack)

# Callbacks:
*	QUnit.begin: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào bộ test bắt đầu
*	QUnit.done: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào bộ test kết thúc
*	QUnit.log: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 khẳng định(assertion) hoàn thành
*	QUnit.moduleDone: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 module kết thúc
* QUnit.moduleStart: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 module bắt đầu
*	QUnit.on: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 sự kiện được chỉ định phát ra
*	QUnit.testDone: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 test kết thúc
*	QUnit.testStart: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 test bắt đầu

# Điều khiển bất đồng bộ (Async control):
*	async: hướng dẫn QUnit đợi 1 test bất đồng bộ
*	start: sử dụng để bắt đầu 1 tập test bất đồng bộ
*	test: thêm 1 test để thực thi

#Ứng dụng
