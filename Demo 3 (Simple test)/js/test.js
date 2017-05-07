QUnit.test("TestGiaTriSo", function(assert) {
    assert.equal(tong(1, 2), 3, '1 + 2 = 3');
    assert.equal(tong(7, 8), 15, '7 + 8 = 15');
});

QUnit.test("TestChuoi", function(assert) {
    assert.equal(tong('a', -9), null, '');
});
