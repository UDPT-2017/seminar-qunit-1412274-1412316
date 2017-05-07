# I. Giới thiệu chung
**1. Kiểm thử đơn vị là gì?**
Kiểm thử đơn vị là 1 phương pháp kiểm thử phần mềm, công việc chính là kiểm thử chức năng, cụ thể là các thành phần trong chức năng 1 cách riêng biệt với nhau.

**2. Kiểm thử đơn vị dùng để làm gì?**
* Đảm bảo các thành phần của chức năng hoạt động độc lập với nhau, dùng để tìm kiếm bug, phát hiện hồi quy (gây nên việc những thứ đang làm việc tốt bỗng nhiên bất ngờ dừng hoạt động), ngoài ra còn để thiết kế các thành phần trong phần mềm một cách tốt hơn.
*	Dùng bởi nhóm jQuery Project để test jQuery, jQuery UI, jQuery Mobile
*	Là 1 framework để kiểm tra các loại code Javascript và cả chính nó
*	Hỗ trợ máy chủ (Vd: node.js) và môi trường của máy client.
*	Được phát triển bởi John Resig là 1 thành phần của jQuery.
*	Các phiên bản mới nhất đều có thể kiểm thử và sửa lỗi thông qua trang github
* Dùng để thực hiện các quy trình Agile phổ biến như TDD, BDD

**3. TDD(Test Driven Development)**
Là mô hình phát triển với trọng tâm hướng về việc kiểm thử. TDD được xây dựng theo hai tiêu chí: Test-First (Kiểm thử trước) và Refactoring (Điều chỉnh mã nguồn). Trong đó, khi một yêu cầu phần mềm (requirement) được đặt ra:
* Người developer soạn thảo kịch bản kiểm thử (test case) cho yêu cầu đó trước tiên và chạy thử kịch bản đó lần đầu tiên. Hiển nhiên, việc chạy thử sẽ đưa ra 1 kết quả thất bại vì hiện tại chức năng đó chưa được xây dựng (và thông qua kết quả đó, ta cũng kiểm tra được là kịch bản kiểm thử đó được viết đúng).
* Theo đó, dựa vào mong muốn (expectation) của kịch bản kia, người developer sẽ xây dựng một lượng mã nguồn (source code) vừa đủ để lần chạy thứ 2 của kịch bản đó thành công.
* Nếu trong lần chạy thứ 2 vẫn đưa ra 1 kết quả thất bại, điều đó có nghĩa là thiết kế chưa ổn và người developer lại chỉnh sửa mã nguồn và chạy lại kịch bản đến khi thành công.
* Khi kịch bản kiểm thử được chạy thành công, người developer tiến hành chuẩn hóa đoạn mã nguồn (base-line code) và tiếp tục hồi quy với kịch bản kiểm thử tiếp theo. Việc chuẩn hóa bao gồm thêm các comment, loại bỏ các dư thừa, tối ưu các biến…

**4. BDD(Behavior Driven Development)**
* BDD là sự mở rộng của TDD (Test driven development). Thay vì tập trung vào phát triển phần mềm theo hướng kiểm thử, BDD tập trung vào phát triển phần mềm theo hướng hành vi.
* Dựa vào requirement các kịch bản test (Scenarios) sẽ được viết trước dưới dạng ngôn ngữ tự nhiên và dễ hiểu nhất sau đó mới thực hiện cài đặt source code đễ pass qua tất cả các stories đó.
* Những kịch bản test này được viết dưới dạng các feature file và đòi hỏi sự cộng tác từ tất cả các thành viên tham gia dự án hay stakeholder.

**5. QUnit**
*5.1 Định nghĩa*

  QUnit là 1 framework dùng để kiểm thử đơn vị (Unit Testing) mạnh, dễ sử dụng.

*5.2 Đặc điểm*
*	Là một Framework mã nguồn mở dùng để tạo ra những bộ kiểm tra lỗi.
*	Chỉ rõ những phép so sánh về kết quả đạt được với kết quả mong đợi. Các phần mã có kết quả chạy đúng sẽ hiển thị dòng màu xanh, ngược lại thì màu đỏ => dễ phát hiện những phần mã nguồn bị lỗi.
*	Câu lệnh của QUnit thường ít phức tạp, cho phép lập trình viên tiết kiệm nhiều thời gian trong việc code.
*	Những khâu kiểm tra của QUnit là tự động cùng với việc gửi về kết quả phản hồi một cách nhanh chóng.
*	Các bộ kiểm tra của QUnit có thể bao gồm nhiều bộ kiểm tra khác.  
*	QUnit khiến cho việc thiết kế luôn tuân theo những nguyên tắc cơ bản như KISS, YAGNI làm cho code dễ hiểu.
*	QUnit rất phù hợp cho việc kiểm tra hồi quy.

# II. Tính chất của Qunit
*	Cài đặt đơn giản, không có yêu cầu gì nhiều.
*	Tính thực thi: vừa đơn giản và vừa nhanh.
*	Cố định và dựa vào API nhưng có thể mở rộng.
*	Tính tương thích: hoạt động được trên nhiều môi trường khác nhau.
*	Đặc biệt là nó miễn phí.

# III. Cài đặt Qunit
Cài đặt bằng nodejs:
* Cài đặt global:
**npm install -g qunitjs**
* Cài đặt cục bộ:
**npm install --save-dev qunitjs**
* Tải trực tiếp 2 file vào folder có chứa file .html:
1. **qunit-xxx.js**
2. **qunit-xxx.css**

# IV. Các phương thức chính (Main methods) của Qunit
*	module: các test được nhóm lại theo 1 nhãn
*	only: tạo 1 test chạy riêng, ngăn các test khác thực thi
*	skip: tạo 1 test như 1 đối tượng bị bỏ qua
*	start: sử dụng để bắt đầu 1 tập test bất đồng bộ
*	test: thêm 1 test để thực thi
*	todo: thêm 1 test mà có ít nhất 1 khẳng định(assertion) không thành công khi thực thi

# V. Các khẳng định (Assertions) của Qunit
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

# VI. Cấu hình (Config) của Qunit
*	QUnit.assert: tạo namespace cho các khẳng định(assertion) của QUnit
*	QUnit.config: cấu hình cho QUnit, tuỳ chỉnh cú pháp theo yêu cầu cấu hình
*	QUnit.dump.parse: kết xuất dữ liệu nâng cao và mở rộng cho Javascript
*	QUnit.extend: sao chép các thuộc tính được định nghĩa trong đối tượng trộn lẫn vào đối tượng đích
*	QUnit.push: báo cáo kết quả của 1 khẳng định(assertion) tuỳ chỉnh (mang tính phản kháng)
*	QUnit.stack: trả về 1 chuỗi dòng biểu diễn stacktrace (gọi stack)

# VII. Callbacks của Qunit
*	QUnit.begin: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào bộ test bắt đầu
*	QUnit.done: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào bộ test kết thúc
*	QUnit.log: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 khẳng định(assertion) hoàn thành
*	QUnit.moduleDone: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 module kết thúc
* QUnit.moduleStart: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 module bắt đầu
*	QUnit.on: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 sự kiện được chỉ định phát ra
*	QUnit.testDone: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 test kết thúc
*	QUnit.testStart: dùng để viết lệnh gọi lại để kích hoạt bất cứ khi nào 1 test bắt đầu

# VIII. Điều khiển bất đồng bộ (Async control) của Qunit
*	async: hướng dẫn QUnit đợi 1 test bất đồng bộ
*	start: sử dụng để bắt đầu 1 tập test bất đồng bộ
*	test: thêm 1 test để thực thi
