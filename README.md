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

[![Custom badge](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/downloads)
[![Custom badge](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Custom badge](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![Custom badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Custom badge](https://img.shields.io/badge/react_js-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Custom badge](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

MVC atau Model View Controller adalah sebuah pola desain arsitektur dalam sistem pengembangan website yang terdiri dari tiga bagian, yaitu:

- Model, bagian yang mengelola dan berhubungan langsung dengan database;
- View, bagian yang akan menyajikan tampilan informasi kepada pengguna;
- Controller, bagian yang menghubungkan model dan view dalam setiap proses request dari user.

![MVC](MVC-architecture.png)

Dengan konsep MVC ini, website seakan memiliki bagian yang terpisah dan bisa dikembangkan masing-masing. Maka, proses pembuatan website bisa dilakukan lebih cepat karena developer akan lebih fokus pada pengerjaan salah satu bagian saja.
Karena dianggap efektif, konsep MVC banyak diterapkan di berbagai framework.

Melihat dari beberapa kelebihan dari MVC maka saya membuat repositori ini agar saya dan kawan-kawan bisa merasakan bagaimana menggunakan konsep MVC di NodeJS.
Mudah-mudahan bermanfaat...

---

<br />
<b></b>

## Software & Account Request

Aplikasi yang wajib digunakan jika belum punya adalah :

1. NodeJS [<a href="https://nodejs.org/" target="_blank">link</a>]

2. GitBash [<a href="https://git-scm.com/downloads" target="_blank">link</a>]

3. XAMPP [<a href="https://www.apachefriends.org/download.html" target="_blank">link</a>]

Dan akun yang harus punya yaitu :

1. github [<a href="https://github.com/" target="_blank">link</a>]

2. ngrok [<a href="https://ngrok.com/" target="_blank">link</a>]

<br />

---

<br />

## Preparation

Langkah awal untuk menggunakan template ini yaitu :

##### install requirements

```bash
node run require
```

##### install node_modules

```bash
node run install
```

##### edit config.js

```txt
...
    // Application init
    app_name: "MVC NodeJS ReactJS",
    description: "this is website programming MVC environment",

    // Github Config
    template_markdown: "https://raw.githubusercontent.com/jefripunza/storage/main/README.md", // include "{{judul_project}}" for replace to name project

    // your secure
    password_encrypt: "mvc", // change this for new security (only once)
...
```

jika selesai maka project sudah siap digunakan. :)

<br />

---

<br />

## How to USE

### Start Project

##### main app

```bash
node run start
```

##### template (on folder template)

```bash
node run template
```

##### push localhost (main app) to internet (with ngrok)

```bash
node run ngrok
```

<br />

### Access Application

##### main app

```bash
http://localhost:5000
```

##### template (if running)

```bash
http://localhost:4000
```

##### reactjs (direct)

```bash
http://localhost:3000
```

<br />

### Build Project (to be accessible at port 5000)

```bash
node run build
```

<br />

### Create README.md

rubah template markdown anda didalam `config.js` pada bagian `template_markdown` (simpan saja didalam repository pada github anda)

```bash
node run create-readme
```

<br />

### Push to Github Repository

jangan lupa untuk mengedit file `config.js` agar semua kegiatan yang ada didalam github lancar dan tepat sasaran...

##### init

```bash
node run github init
```

##### first commit

```bash
node run github first
```

##### push

```bash
node run github push "commit-message"
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
