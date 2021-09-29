function convert08ke62(no_hp) {
    let fix_no_hp = no_hp.split("").filter((e, i) => {
        if (i === 0 || i === 1) {
            return false
        }
        return true
    });
    return "628" + fix_no_hp.join("");
}
function convert62ke08(no_hp) {
    let fix_no_hp = no_hp.split("").filter((e, i) => {
        if (i === 0 || i === 1) {
            return false
        }
        return true
    });
    return "0" + fix_no_hp.join("");
}

function formatRupiah(angka, prefix) {
    if (Number.isInteger(angka)) {
        angka = angka.toString();
    }
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        var separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? prefix + rupiah : "";
}

function bulan_indo(bulan) {
    var int = parseInt(bulan);
    if (int === 1) {
        return "Januari";
    } else if (int === 2) {
        return "Februari";
    } else if (int === 3) {
        return "Maret";
    } else if (int === 4) {
        return "April";
    } else if (int === 5) {
        return "Mei";
    } else if (int === 6) {
        return "Juni";
    } else if (int === 7) {
        return "Juli";
    } else if (int === 8) {
        return "Agustus";
    } else if (int === 9) {
        return "September";
    } else if (int === 10) {
        return "Oktober";
    } else if (int === 11) {
        return "November";
    } else if (int === 12) {
        return "Desember";
    }
}

function pagi_siang_sore_malam() {
    var jam = new Date().getHours();
    if (jam >= 4 && jam < 10) {
        return "pagi";
    } else if (jam >= 10 && jam < 14) {
        return "siang";
    } else if (jam >= 14 && jam < 18) {
        return "sore";
    } else {
        return "malam";
    }
}

function getDateTime(addSecond = true, reverse = false) {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length === 1) {
        month = '0' + month;
    }
    if (day.toString().length === 1) {
        day = '0' + day;
    }
    if (hour.toString().length === 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length === 1) {
        minute = '0' + minute;
    }
    if (second.toString().length === 1) {
        second = '0' + second;
    }

    // rekap
    let time = hour + ':' + minute;
    if (addSecond) {
        time += ':' + second
    }
    const date = year + '/' + month + '/' + day;

    if (reverse) {
        return time + ' ' + date;
    } else {
        return date + ' ' + time;
    }
}

function convertTimeToTanggalIndo(timestamp, bulan_dari_nol = true) {
    const date = new Date(parseInt(timestamp));
    let nol = 0;
    if (bulan_dari_nol) {
        nol = 1;
    }
    return `${date.getDate()} ${bulan_indo(date.getMonth() + nol)} ${date.getFullYear()}`;
}

function convertTimeToDateFullIndo(timestamp, second = false, bulan_dari_nol = true) {
    const date = new Date(parseInt(timestamp));
    let nol = 0;
    if (bulan_dari_nol) {
        nol = 1;
    }

    let print = "";
    print += `${date.getHours()}:${date.getMinutes()}`;
    if (second) {
        print += `:${date.getSeconds()}`;
    }
    print += ` ${date.getDate()} ${bulan_indo(date.getMonth() + nol)} ${date.getFullYear()}`;
    return print;
}

module.exports = {
    convert08ke62,
    convert62ke08,
    //
    formatRupiah,
    //
    bulan_indo,
    pagi_siang_sore_malam,
    getDateTime,
    convertTimeToTanggalIndo,
    convertTimeToDateFullIndo,
}