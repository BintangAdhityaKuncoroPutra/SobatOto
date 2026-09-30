# Tentang SobatOto
## *Chatbot* *Troubleshooting* Sepeda Motor Matic Berbasis *Knowledge-Base System*

Ketika sepeda motor mengalami masalah, pengguna biasanya mulai memeriksa gejala yang paling mudah terlihat. Contohnya adalah kondisi panel, suara starter, jumlah bahan bakar, lampu indikator, rem, dan ban. Namun, tidak semua pengguna mengetahui arti dari gejala tersebut atau urutan pemeriksaan yang sebaiknya dilakukan.

SobatOto dibuat untuk membantu proses pemeriksaan awal tersebut. Aplikasi ini berbentuk *chatbot* sederhana yang dapat dibuka melalui browser. Pengguna hanya perlu menjawab pertanyaan yang muncul satu per satu. Setelah seluruh pertanyaan selesai, SobatOto menghubungkan jawaban pengguna dengan pengetahuan yang tersimpan di dalam sistem, lalu menampilkan kemungkinan masalah dan tindakan awal yang sesuai.

Hasil yang ditampilkan bukan diagnosis akhir. SobatOto berfungsi sebagai panduan awal agar pengguna lebih memahami kondisi motornya dan mengetahui kapan kendaraan sebaiknya tidak digunakan sebelum diperiksa oleh teknisi.

## Apa Itu *Knowledge-Base System*?

*Knowledge-base system* adalah sistem yang bekerja menggunakan kumpulan pengetahuan dan aturan yang sudah disiapkan sebelumnya. Pada SobatOto, pengetahuan tersebut berasal dari manual resmi Honda PCX160 dan Yamaha NMAX. Informasi dari kedua manual kemudian disusun menjadi aturan sederhana yang dapat dibaca oleh program.

Salah satu contoh aturannya adalah: jika panel motor mati dan starter tidak berbunyi, maka terdapat kemungkinan gangguan pada sumber listrik. Bentuk aturan seperti ini biasa disebut aturan IF–THEN, yaitu **jika** beberapa kondisi terpenuhi, **maka** sistem menghasilkan suatu kesimpulan.

SobatOto tidak menulis jawaban baru secara bebas seperti *chatbot* generatif. Sistem hanya memberikan hasil yang sesuai dengan aturan yang tersimpan. Karena itu, alasan di balik setiap hasil dapat dilihat dari gejala yang dipilih, aturan yang aktif, dan sumber manualnya.

## Tautan Proyek

- Demo chatbot: [SobatOto](https://bintangadhityakuncoroputra.github.io/SobatOto/)
- Repository source code: [GitHub SobatOto](https://github.com/BintangAdhityaKuncoroPutra/SobatOto)
- Laporan dan PPT: [Penjelasan](https://drive.google.com/drive/folders/1Dbpwmw43ebVreyou-A0sh0NcY_cnH0Of?usp=sharing)

## Apa yang Dapat Dilakukan SobatOto?

SobatOto mengumpulkan informasi melalui pertanyaan bertahap agar pengguna tidak perlu menuliskan istilah teknis. Setiap jawaban akan dicatat sebagai informasi mengenai kondisi motor. Setelah itu, sistem mencari aturan yang cocok dengan kumpulan jawaban tersebut.

Hasil pemeriksaan berisi kemungkinan masalah, alasan hasil tersebut muncul, tingkat urgensi, tindakan yang disarankan, dan sumber manual. Jika beberapa aturan cocok pada saat yang sama, SobatOto dapat menampilkan lebih dari satu hasil. Hal ini memungkinkan pengguna melihat beberapa kondisi yang mungkin saling berkaitan.

## Cara Menjalankan

### Persyaratan

Proyek ini tidak memerlukan *framework* atau package tambahan. Untuk menjalankannya, pengguna hanya memerlukan browser modern seperti Google Chrome, Microsoft Edge, atau Mozilla Firefox. Python 3 diperlukan apabila proyek ingin dijalankan menggunakan *local server*.

### Langkah Menjalankan dengan Web

Buka tautan https://bintangadhityakuncoroputra.github.io/SobatOto/ pada _browser_ yang diinginkan.

### Langkah Menjalankan Secara Lokal

1. Clone repository:

   ```bash
   git clone https://github.com/BintangAdhityaKuncoroPutra/SobatOto.git
   cd SobatOto
   ```

2. Jalankan local server:

   ```bash
   python -m http.server 8000
   ```

3. Buka alamat berikut pada browser:

   ```text
   http://localhost:8000
   ```

*Local server* digunakan karena sistem memuat `rules.json` melalui Fetch API. Membuka `index.html` secara langsung dengan *double-click* dapat menyebabkan browser memblokir pemuatan file JSON.

## Bagaimana Aplikasi Ini Dibangun?

SobatOto merupakan aplikasi web sederhana. Artinya, aplikasi dapat dijalankan melalui browser tanpa perlu memasang aplikasi khusus. Beberapa teknologi digunakan karena masing-masing memiliki tugas yang berbeda.

HTML digunakan untuk membentuk bagian-bagian halaman, seperti area percakapan, gambar, dan tombol jawaban. CSS mengatur tampilannya agar halaman lebih nyaman dibaca, termasuk warna, ukuran, dan posisi setiap elemen. JavaScript menjalankan interaksi *chatbot*, menyimpan jawaban pengguna, dan melakukan proses penalaran. Sementara itu, JSON digunakan sebagai tempat penyimpanan aturan *troubleshooting* agar pengetahuan sistem terpisah dari kode tampilan.

Pembagian tersebut menghasilkan struktur file berikut:

```text
SobatOto/
├── index.html      # Struktur halaman chatbot
├── style.css       # Tampilan dan layout antarmuka
├── script.js       # Alur pertanyaan dan interaksi pengguna
├── engine.js       # Inference engine forward chaining
├── rules.json      # Knowledge base berisi aturan troubleshooting
└── images/         # Gambar indikator dan aset antarmuka
```

## Bagaimana Sistem Menghasilkan Kesimpulan?

Ketika pengguna memilih jawaban, program mengubah jawaban tersebut menjadi fakta sederhana. Sebagai contoh, jawaban bahwa panel tidak menyala disimpan sebagai `panel_mati`, sedangkan indikator suhu yang menyala disimpan sebagai `indikator_suhu`. Nama tersebut hanya digunakan oleh program untuk mencatat kondisi yang telah dipilih.

Selanjutnya, sistem menggunakan metode *forward chaining*. Secara sederhana, metode ini bekerja dari informasi yang sudah diketahui menuju suatu kesimpulan. Sistem memeriksa setiap aturan dan mencari aturan yang seluruh kondisinya telah terpenuhi. Jika cocok, kesimpulan dari aturan tersebut ditambahkan sebagai informasi baru.

Proses ini dapat berlangsung beberapa kali. Sebuah kesimpulan dari aturan pertama dapat digunakan untuk memenuhi aturan berikutnya. Pemeriksaan berhenti ketika tidak ada kesimpulan baru yang dapat ditambahkan. Setelah itu, SobatOto menampilkan seluruh hasil yang sesuai kepada pengguna.

## Isi Pengetahuan Sistem

Seluruh aturan SobatOto disimpan dalam file `rules.json`. Setiap aturan mencatat gejala yang diperlukan, kesimpulan, tingkat urgensi, penjelasan, tindakan yang disarankan, dan sumber informasi. Dengan menyimpan aturan secara terpisah, isi pengetahuan dapat diperiksa atau diperbarui tanpa harus mengubah tampilan *chatbot* dan algoritma utamanya.

Aturan tersebut disusun berdasarkan manual resmi Honda PCX160 dan Yamaha NMAX. Informasi yang dipilih mencakup prosedur menyalakan motor, indikator peringatan, bahan bakar, aki, sekring, rem, ban, oli, dan sistem pendingin. Aturan ditulis berdasarkan gejala umum agar dapat digunakan sebagai panduan pemeriksaan awal, tetapi tidak dimaksudkan untuk mewakili seluruh jenis dan model sepeda motor.

## Batasan Sistem

SobatOto hanya memberikan pemeriksaan awal berdasarkan jawaban diskrit dari pengguna. Sistem belum dapat membaca sensor, suara mesin, tegangan aki, atau kondisi fisik kendaraan secara langsung. Aturan yang digunakan juga terbatas pada pengetahuan yang disusun dari manual Honda PCX160 dan Yamaha NMAX, sehingga hasilnya tidak mencakup seluruh kemungkinan kerusakan pada semua jenis sepeda motor.

Untuk masalah yang berhubungan dengan rem, ban, mesin terlalu panas, kelistrikan, atau kondisi lain yang berisiko, pengguna tetap perlu menghentikan penggunaan kendaraan dan meminta pemeriksaan teknisi. Hasil *chatbot* sebaiknya dipahami sebagai panduan pemeriksaan awal, bukan sebagai pengganti diagnosis profesional.

## Informasi Akademik

Judul proyek: ***Chatbot* *Troubleshooting* Sepeda Motor Matic Berbasis *Knowledge-Base System***
Oleh kelompok OT9 beranggotakan Alfian Lazuardi Kalani (23/518890/TK/57187) dan Bintang Adhitya Kuncoro Putra (23/518604/TK/57118). 

Proyek ini dibuat untuk memenuhi tugas akhir mata kuliah Artificial Intelligence, Departemen Teknik Elektro dan Teknologi Informasi, Universitas Gadjah Mada.
