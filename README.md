# MVC-EXPRESS-REACTJS
![banner](banner.png)

---

[![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fsubscriber)](https://www.youtube.com/user/jefripunza/videos/)
[![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fviews)](https://www.youtube.com/user/jefripunza/videos/)
<!-- [![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fcomments)](https://www.youtube.com/user/jefripunza/videos/) -->
[![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fvideos)](https://www.youtube.com/user/jefripunza/videos/)

## Donate

[![Donate](https://img.shields.io/badge/paypal-%2300457C.svg?&style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/jefripunza)

## Sosial Media

[![Custom badge](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/user/jefripunza/)
[![Custom badge](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/jefripunza/)
[![Custom badge](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://fb.com/jefripunza/)
[![Custom badge](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/jefripunza/)
[![Custom badge](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jefri-herdi-triyanto-ba76a8106/)
[![Custom badge](https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://jefriherditriyanto.com/)




## Introduction
[![Custom badge](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Custom badge](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![Custom badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Custom badge](https://img.shields.io/badge/react_js-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Custom badge](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)


MVC atau Model View Controller adalah sebuah pola desain arsitektur dalam sistem pengembangan website yang terdiri dari tiga bagian, yaitu: 
* Model, bagian yang mengelola dan berhubungan langsung dengan database; 
* View, bagian yang akan menyajikan tampilan informasi kepada pengguna;
* Controller, bagian yang menghubungkan model dan view dalam setiap proses request dari user.

![MVC](Model-View-Controller-High-Level-Diagram.png)

Dengan konsep MVC ini, website seakan memiliki bagian yang terpisah dan bisa dikembangkan masing-masing. Maka, proses pembuatan website bisa dilakukan lebih cepat karena developer akan lebih fokus pada pengerjaan salah satu bagian saja. 
Karena dianggap efektif, konsep MVC banyak diterapkan di berbagai framework.

Melihat dari beberapa kelebihan dari MVC maka saya membuat repositori ini agar saya dan kawan-kawan bisa merasakan bagaimana menggunakan konsep MVC di NodeJS.
Mudah-mudahan bermanfaat...


---
<br />
<b></b>




## Preparation

Tidak terlalu rumit untuk inisial awal, cukup copy saja file <b>connection.js</b> nya kedalam project anda lalu di import dan langsung bisa digunakan

##### judul script
```txt
_id               = primary key (string|int)
_create_at        = kapan dibuat (timestamp)
_modified_at      = kapan terakhir dirubah (timestamp)
_modified_history = history modifikasi data (array)
_deleted_at       = menghapus sementara data dari list (tidak permanen)
_SEO              = untuk keperluan SEO (integer)
```




<br />

---
<br />




## Testing
untuk anda yang ingin mencoba perngalaman terbaik menggunakan module ini, silahkan ikuti step berikut ini :

##### download this source
```bash
git clone https://github.com/jefripunza/advance-json-database
```
##### install node_modules
```bash
npm install
```

buka file <b>test.js</b> dan ikuti perintah selanjutnya (indonesian language)

##### running test
```bash
node test

// or

npm start
```




<br />

---
<br />




## How to USE

### judul step

##### judul script
```javascript
//  request argument :
//      select key (object) = pilih key yang value nya ingin di cari
//      show = berapa data yang ingin ditampilkan
//      page = sekarang dihalaman berapa
//      button_page = jumlah alinyemen button

// for test
const keyword = "and or on for in is woman";

console.log(database.searchWithPagination({
    description: keyword,
    title: keyword,
    category: keyword,
}, show, page, button_page));
```











<br />

---
<br />












## Support the project

Apakah kamu menyukai project ini? Please support saya dengan menekan subscribe di [Youtube Channel](https://www.youtube.com/user/jefripunza/videos/) saya...

<br />

## Donation Please

Butuh ngopi gans, kasih lah untuk biaya pengembangan agar mudah membeli alat dan buat makan <br />
[![Donate](https://img.shields.io/badge/paypal-%2300457C.svg?&style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/jefripunza)
