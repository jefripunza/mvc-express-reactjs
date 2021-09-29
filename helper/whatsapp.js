const standardFormatWhatsappSender = function (number) {
    // 1. Menghilangkan karakter selain angka
    let formatted = number.replace(/\D/g, '');

    // 2. Menghilangkan angka 62 di depan (prefix)
    //    Kemudian diganti dengan 0
    if (formatted.startsWith('62')) {
        formatted = '0' + formatted.substr(2);
    }

    // 3. Tambahkan standar pengiriman whatsapp
    if (!formatted.endsWith('@c.us')) {
        formatted += '@c.us';
    }

    return formatted;
}

module.exports = standardFormatWhatsappSender;