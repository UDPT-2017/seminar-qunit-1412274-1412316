function tong() {
    var tong = 0,
        so = 0,
        thamso = arguments.length;

    if (thamso === 0) {
        throw new Error('Khong co tham so');
    }
    else {
        for (var i = 0; i < thamso; i++)
        {
            so = arguments[i];
            if (typeof (so) !== 'number') {
                throw new Error('Day khong phai kieu giá tri so');
            }

            tong += so;
        }
    }
    return tong;
};
