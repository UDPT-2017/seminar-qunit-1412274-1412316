test( "timeElapsed should be Zero before we start the Timer", function() {
    equal( T.timeStarted, 0);
});

test( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime);
});

test( "stopTimer() stops counting", function() {
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( T.startTimer(startTime), startTime);
    endTime = startTime + 2000; // tự cho thêm 1 giây
    timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), timeElapsed);
});

test( "startTimer() should continue counting after stopTimer()", function() {
    T.resetTimer(); // reset

    // Khởi tạo bấm lúc đầu
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( T.startTimer(startTime), startTime);
    endTime = startTime + 5000; // tự cho thêm 5 giây
    // timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), 5000);
    console.log("Pause timer ...");

    // Bấm tiếp
    startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime);
    // đo tiếp 7 giây sau
    endTime = startTime + 7000; // tự cho thêm 7 giây
    // Kết quả mong đợi là 12 giây gồm 5 giây lúc đầu và 7 giây sau đó
    // timeElapsed = endTime - startTime + timeElapsed;
    equal( T.stopTimer(endTime), 12000);
});

test( "resetTimer() should reset to zero ready for a new activity", function() {
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = T.resetTimer();
    equal( T.startTimer(startTime), startTime);
    endTime = startTime + 2000; // tự cho thêm 1 giây
    timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), timeElapsed);
    equal( T.resetTimer(), 0);
});

test( "renderTimer() displays time as a string of digits separated by colons", function() {
    //                       giờ     phút      giây     mili giây
    var dayInMilliseconds =  24   *   60    *   60    *   1000;
    // Đếm lại ngày mới
    var startTime = new Date().getTime() - (dayInMilliseconds - 1000) ;
    // equal( T.startTimer(startTime), startTime);
    T.resetTimer(); // reset lại trước khi bắt đầu
    console.log('>>>>>>>' + startTime + ' | dayInMilliseconds: '+ dayInMilliseconds)
    console.log('>>>>>>>'+ new Date(startTime));
    T.startTimer(startTime); // Khởi tạo thời gian
    equal( T.renderTimer(startTime), '23:59:59:00')
});

// hiển thị số 0 cho giờ/phút/giây nhỏ hơn 10
test( "renderTimer() display leading zeros", function() {
    // ví dụ thời gian là 09:08:07:06
    var h = 60 * 60 * 1000 * 9; // 9 giờ bằng mili giây
    var m = 60 * 1000 * 8;      // 8 phút
    var s = 1000 * 7;           // 7 giây
    var leadingZeroStartTime = h + m + s + 6;
    // Đếm lại ngày mới
    var startTime = new Date().getTime() - leadingZeroStartTime;
    T.startTimer(startTime);
    // equal( T.startTimer(startTime), startTime);
    equal( T.renderTimer(startTime), '09:08:07:00');
});

test("Start Timing() programatically", function(Q) {
    var startTime = new Date().getTime();
    Q.equal( T.startTimer(startTime), startTime);
    var done = Q.async();
    T.timing(); // Bắt đầu tính thời gian
    setTimeout(function() {
      ok( true, "timing done" );
      done();
    }, 100);
});
