// ==================== APP STATE ====================
let currentScreen = 'homeScreen';
let currentBook = null;
let currentChapter = 0;
let bookmarkedBooks = JSON.parse(localStorage.getItem('bookmarkedBooks')) || [];
let currentCategory = 'all';

// ==================== BOOK DATA ====================
const booksData = [
    // ==================== KORESPONDENSI ====================
    {
        id: 1,
        title: "Sejarah Korespondensi: Dari Prasasti hingga Digital",
        author: "Dr. Siti Nurhaliza, M.M.",
        category: "korespondensi",
        year: "2024",
        pages: 450,
        rating: 4.9,
        isbn: "978-623-1234-01-5",
        publisher: "Penerbit Andi",
        description: "Buku lengkap yang mengupas tuntas sejarah korespondensi dari masa prasasti, surat kuno, hingga era digital. Membahas evolusi komunikasi tertulis dan dampaknya terhadap peradaban manusia.",
        cover: "📜",
        chapters: [
            {
                title: "Korespondensi pada Masa Prasejarah",
                content: `
                    <h2>Korespondensi pada Masa Prasejarah</h2>
                    <h3>Awal Komunikasi Tertulis</h3>
                    <p>Sejarah korespondensi dimulai dari kebutuhan manusia untuk berkomunikasi antar individu atau kelompok yang berjauhan. Pada masa prasejarah, manusia menggunakan berbagai media untuk menyampaikan pesan.</p>

                    <h3>Media Komunikasi Awal</h3>
                    <ul>
                        <li><strong>Lukisan Dinding (Cave Paintings):</strong> Sebagai cara untuk menyampaikan cerita dan informasi</li>
                        <li><strong>Petroglyphs:</strong> Lukisan pada batu untuk markah dan pesan</li>
                        <li><strong>Knot Records:</strong> Sistem pengikat tali untuk menghitung dan mengirim pesan</li>
                        <li><strong>Smoke Signals:</strong> Sinyal asap untuk komunikasi jarak jauh</li>
                    </ul>

                    <h3>Kehidupan Berkomunikasi</h3>
                    <p>Manusia purba menggunakan berbagai cara untuk berkomunikasi:</p>
                    <ol>
                        <li>Gerakan tubuh dan bahasa isyarat</li>
                        <li>Suara dan teriakan</li>
                        <li>Alat musik sederhana untuk mengirim sinyal</li>
                        <li>Media visual seperti lukinan dan ukiran</li>
                    </ol>

                    <h3>Evolusi Menuju Tulisan</h3>
                    <p>Kebutuhan untuk menyimpan dan mengirim informasi yang lebih kompleks mendorong munculnya sistem tulisan:</p>
                    <ul>
                        <li><strong>Pictographs:</strong> Gambar yang mewakili objek</li>
                        <li><strong>Ideographs:</strong> Simbol yang mewakili ide</li>
                        <li><strong>Phonetic Writing:</strong> Simbol yang mewakili bunyi</li>
                    </ul>
                `
            },
            {
                title: "Korespondensi di Era Kuno",
                content: `
                    <h2>Korespondensi di Era Kuno</h2>
                    <h3>Mesopotamia dan Cuneiform</h3>
                    <p>Pada tahun 3200 SM, bangsa Sumeria di Mesopotamia menciptakan sistem tulisan cuneiform. Tulisan ini digunakan untuk berbagai keperluan termasuk korespondensi resmi.</p>

                    <h3>Mesir Kuno dan Hieroglyphics</h3>
                    <p>Bangsa Mesir kuno menggunakan hieroglif untuk menulis pada papirus dan dinding. Surat-surat resmi dan dokumen penting ditulis dengan sistem ini.</p>

                    <h3>Korespondensi di Asia</h3>
                    <h3>1. Cina Kuno</h3>
                    <ul>
                        <li>Oracle Bone Script (1200 SM)</li>
                        <li>Surat pada bambu dan sutra</li>
                        <li>Sistem pos resmi pada dinasti Qin dan Han</li>
                    </ul>

                    <h3>2. India Kuno</h3>
                    <ul>
                        <li>Sistem tulisan Brahmi</li>
                        <li>Surat pada daun lontar</li>
                        <li>Korespondensi kerajaan pada masa Maurya</li>
                    </ul>

                    <h3>Korespondensi Romawi dan Yunani</h3>
                    <p>Kekaisaran Romawi memiliki sistem pos yang sangat maju:</p>
                    <ol>
                        <li><strong>Cursus Publicus:</strong> Sistem pos resmi pemerintah</li>
                        <li><strong>Tabellarii:</strong> Kurir resmi yang mengantar surat</li>
                        <li><strong>Diploma:</strong> Surat perjalanan dan dokumen resmi</li>
                    </ol>

                    <h3>Surat dari Pompeii</h3>
                    <p>Penemuan arkeologi di Pompeii mengungkap banyak surat pribadi yang menunjukkan kehidupan sosial dan komunikasi pada masa Romawi kuno.</p>
                `
            },
            {
                title: "Era Abad Pertengahan",
                content: `
                    <h2>Era Abad Pertengahan</h2>
                    <h3>Monasteries sebagai Pusat Komunikasi</h3>
                    <p>Pada abad pertengahan, biara-biara menjadi pusat penyimpanan dan penyalinan dokumen. Para monk menyalin surat dan dokumen penting dengan tangan.</p>

                    <h3>Korespondensi Kerajaan</h3>
                    <p>Raja-raja dan bangsawan menggunakan surat untuk berkomunikasi:</p>
                    <ul>
                        <li>Surat perintah (writs)</li>
                        <li>Surat perjanjian (charters)</li>
                        <li>Surat undangan</li>
                    </ul>

                    <h3>Perkembangan di Dunia Islam</h3>
                    <p>Peradaban Islam memberikan kontribusi besar dalam korespondensi:</p>
                    <ol>
                        <li><strong>Diwan al-Insha:</strong> Kantor surat resmi</li>
                        <li><strong>Barid:</strong> Sistem pos dan kurir</li>
                        <li><strong>Rasa:</strong> Surat-menyurat yang artistik</li>
                    </ol>

                    <h3>Korespondensi di Nusantara</h3>
                    <p>Di Indonesia, korespondensi berkembang melalui:</p>
                    <ul>
                        <li>Prasasti dan batu bertulis</li>
                        <li>Surat pada daun lontar dan kulit kayu</li>
                        <li>Korespondensi kerajaan Majapahit dan Mataram</li>
                    </ul>
                `
            },
            {
                title: "Revolusi Industri dan Korespondensi Modern",
                content: `
                    <h2>Revolusi Industri dan Korespondensi Modern</h2>
                    <h3>Penemuan Percetakan</h3>
                    <p>Johannes Gutenberg menciptakan mesin cetak sekitar 1440. Ini merevolusi cara surat dan dokumen diproduksi:</p>
                    <ul>
                        <li>Produksi surat yang lebih cepat</li>
                        <li>Standarisasi format surat</li>
                        <li>Penyebaran informasi yang lebih luas</li>
                    </ul>

                    <h3>Era Victorian dan Surat-menyurat</h3>
                    <p>Abad ke-19 melihat puncak popularitas surat pribadi:</p>
                    <ol>
                        <li>Surat pribadi menjadi bagian penting dari kehidupan sosial</li>
                        <li>Evolusi etiket surat yang rumit</li>
                        <li>Pengiriman surat yang reguler dan teratur</li>
                    </ol>

                    <h3>Korespondensi Bisnis Modern</h3>
                    <p>Revolusi industri mendorong perkembangan korespondensi bisnis:</p>
                    <ul>
                        <li>Formal letter writing menjadi standar</li>
                        <li>Penggunaan kop surat (letterhead)</li>
                        <li>Struktur surat yang baku</li>
                    </ul>

                    <h3>Dunia Postal</h3>
                    <p>Sistem pos berkembang pesat:</p>
                    <ol>
                        <li>Penny Post (1840) - membuat pengiriman surat terjangkau</li>
                        <li>Stempel dan tanda terima</li>
                        <li>Kotak surat publik</li>
                    </ol>
                `
            },
            {
                title: "Era Digital dan Masa Kini",
                content: `
                    <h2>Era Digital dan Masa Kini</h2>
                    <h3>Internet dan Email</h3>
                    <p>Penemuan internet pada 1969 membuka era baru dalam korespondensi. Email menjadi salah satu aplikasi paling penting di internet.</p>

                    <h3>Evolusi Email</h3>
                    <ul>
                        <li><strong>1971:</strong> Ray Tomlinson mengirim email pertama</li>
                        <li><strong>1980s:</strong> Email komersial dimulai</li>
                        <li><strong>1990s:</strong> Email mainstream dengan internet</li>
                        <li><strong>2000s:</strong> Webmail dan email mobile</li>
                    </ul>

                    <h3>Korespondensi di Era Sosial Media</h3>
                    <p>Sekarang kita memiliki banyak platform komunikasi:</p>
                    <ol>
                        <li>Email profesional</li>
                        <li>Instant messaging (WhatsApp, Telegram)</li>
                        <li>Social media (LinkedIn, Twitter)</li>
                        <li>Video conferencing (Zoom, Teams)</li>
                    </ol>

                    <h3>Tantangan Modern</h3>
                    <p>Korespondensi modern menghadapi tantangan:</p>
                    <ul>
                        <li>Information overload</li>
                        <li>Spam dan phishing</li>
                        <li>Kebutuhan untuk email etiquette</li>
                        <li>Privacy dan security concerns</li>
                    </ul>

                    <h3>Masa Depan Korespondensi</h3>
                    <p>Korespondensi akan terus berkembang dengan:</p>
                    <ol>
                        <li>AI-assisted writing</li>
                        <li>Automated communication</li>
                        <li>Enhanced security dan encryption</li>
                        <li>Integration dengan various platforms</li>
                    </ol>
                `
            }
        ]
    },
    {
        id: 2,
        title: "Panduan Lengkap Surat Bisnis Modern",
        author: "Prof. Dr. Bambang Sutrisno",
        category: "korespondensi",
        year: "2024",
        pages: 380,
        rating: 4.8,
        isbn: "978-623-1234-02-2",
        publisher: "Penerbit Rajawali",
        description: "Panduan komprehensif menulis surat bisnis modern. Dilengkapi dengan 50+ contoh surat yang bisa langsung digunakan: surat penawaran, permintaan, keluhan, lamaran kerja, dan banyak lagi. Setiap contoh bisa di-copy paste.",
        cover: "💼",
        chapters: [
            {
                title: "Struktur Surat Bisnis yang Baik",
                content: `
                    <h2>Struktur Surat Bisnis yang Baik</h2>
                    <h3>Komponen Surat Bisnis</h3>
                    <p>Surat bisnis yang profesional memiliki struktur yang jelas:</p>

                    <h3>1. Kop Surat (Letterhead)</h3>
                    <p>Kop surat mencakup identitas perusahaan:</p>
                    <ul>
                        <li>Logo perusahaan</li>
                        <li>Nama perusahaan</li>
                        <li>Alamat lengkap</li>
                        <li>Kontak: Telepon, Fax, Email, Website</li>
                    </ul>

                    <h3>2. Informasi Surat</h3>
                    <ul>
                        <li><strong>Nomor Surat:</strong> Untuk identifikasi dan arsip</li>
                        <li><strong>Lampiran:</strong> Daftar dokumen yang disertakan</li>
                        <li><strong>Perihal:</strong> Ringkasan isi surat</li>
                    </ul>

                    <h3>3. Alamat dan Tanggal</h3>
                    <p>Format alamat penerima:</p>
                    <ul>
                        <li>Nama dan gelar penerima</li>
                        <li>Jabatan</li>
                        <li>Nama perusahaan</li>
                        <li>Alamat lengkap</li>
                    </ul>

                    <h3>4. Salam Pembuka</h3>
                    <p>Gunakan salam yang sesuai:</p>
                    <ul>
                        <li>"Yth. Bapak/Ibu" - Formal</li>
                        <li>"Dear Mr./Ms." - Internasional</li>
                        <li>"Kepada Yth." - Resmi</li>
                    </ul>

                    <h3>5. Isi Surat</h3>
                    <p>Struktur isi surat:</p>
                    <ol>
                        <li>Paragraf pembuka: Latar belakang</li>
                        <li>Paragraf isi: Detail dan penjelasan</li>
                        <li>Paragraf penutup: Tindakan yang diharapkan</li>
                    </ol>

                    <h3>6. Salam Penutup</h3>
                    <ul>
                        <li>"Hormat Kami" - Formal</li>
                        <li>"Best regards" - Semi-formal</li>
                        <li>"Sincerely" - Internasional</li>
                    </ul>

                    <h3>7. Tanda Tangan</h3>
                    <p>Tanda tangan basah atau digital dengan nama lengkap dan jabatan.</p>
                `
            },
            {
                title: "Contoh Surat Penawaran (Copy-Paste Ready)",
                content: `
                    <h2>Contoh Surat Penawaran (Copy-Paste Ready)</h2>
                    <h3>Surat Penawaran Produk/Jasa</h3>
                    <p>Berikut adalah contoh surat penawaran yang bisa langsung di-copy dan digunakan:</p>

                    <h3>CONTOH 1: Surat Penawaran Jasa Konsultasi</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
PT. KONSULTAN UTAMA
Jl. Sudirman No. 123, Jakarta Pusat 10110
Telp: (021) 123-4567 | Email: info@konsultanutama.co.id
Website: www.konsultanutama.co.id

Nomor: 001/PNW/III/2024
Lampiran: 1 (satu) berkas proposal
Perihal: Penawaran Jasa Konsultasi Manajemen

Yth. Bapak/Ibu Direktur
PT. INDUSTRI MAJU JAYA
Jl. Gatot Subroto No. 45, Jakarta Selatan 12930

Dengan hormat,

Melalui surat ini, kami dari PT. Konsultan Utama ingin menawarkan jasa konsultasi manajemen untuk perusahaan Bapak/Ibu.

Berdasarkan informasi yang kami peroleh, PT. Industri Maju Jaya sedang dalam proses ekspansi operasional. Dengan pengalaman kami selama 15 tahun di bidang konsultasi manajemen, kami yakin dapat memberikan solusi yang optimal untuk mendukung pertumbuhan perusahaan Bapak/Ibu.

Layanan yang kami tawarkan meliputi:
1. Konsultasi strategi bisnis dan pengembangan organisasi
2. Optimasi proses operasional
3. Pelatihan dan pengembangan SDM
4. Sistem informasi manajemen

Kami telah menyiapkan proposal detail yang mencakup metodologi, timeline, dan estimasi biaya. Kami tunggu kesempatan untuk dapat bertemu dan mendiskusikan lebih lanjut mengenai penawaran ini.

Hormat kami,

PT. KONSULTAN UTAMA
Direktur,

[T tanda tangan ]

Dr. Ahmad Wijaya, M.M.
                    </pre>

                    <h3>CONTOH 2: Surat Penawaran Kerjasama</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
PT. TEKNOLOGI INOVATIF
Jl. Thamrin No. 88, Jakarta Pusat 10310
Email: marketing@teknologiinovatif.co.id

Nomor: 002/KER/IV/2024
Perihal: Penawaran Kerjasama Pengembangan Sistem

Yth. Bapak/Ibu Manager
PT. SOLUSI DIGITAL
di Tempat

Dengan hormat,

Kami dari PT. Teknologi Inovatif ingin menawarkan kerjasama dalam pengembangan sistem informasi untuk perusahaan Bapak/Ibu.

Kami adalah perusahaan yang bergerak di bidang pengembangan software dengan spesialisasi:
- Web Application Development
- Mobile App Development
- System Integration
- Cloud Solutions

Dengan tim yang terdiri dari 25+ experienced developers, kami siap membantu transformasi digital perusahaan Bapak/Ibu.

Mohon konfirmasi ketersediaan Bapak/Ibu untuk meeting diskusi lebih lanjut.

Salam,
Marketing Manager
PT. Teknologi Inovatif
                    </pre>
                `
            },
            {
                title: "Contoh Surat Permintaan dan Pesanan",
                content: `
                    <h2>Contoh Surat Permintaan dan Pesanan</h2>
                    <h3>Surat Permintaan Penawaran (Request for Quotation)</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
PT. PERUSAHAAN MANDIRI
Jl. Merdeka No. 10, Bandung 40115
NPWP: 01.234.567.8-901.000

Nomor: 003/RFP/V/2024
Perihal: Permintaan Penawaran Harga Barang

Kepada Yth,
Supplier Terpercaya
di Tempat

Dengan hormat,

Bersama surat ini, kami dari PT. Perusahaan Mandiri ingin meminta penawaran harga untuk kebutuhan kantor kami:

1. Kertas A4 80gsm - 50 rim
2. Toner Printer Laser - 10 unit
3. Alat Tulis Kantor (ATK) - paket bulanan

Spesifikasi detail terlampir dalam lampiran surat ini.

Kami meminta penawaran harga paling lambat tanggal 15 Mei 2024. Silakan kirimkan penawaran melalui email procurement@perusahaanmandiri.co.id atau fax (022) 123-4567.

Demikian surat permintaan ini kami sampaikan, atas perhatian dan kerjasamanya kami ucapkan terima kasih.

Hormat kami,

PT. PERUSAHAAN MANDIRI
Procurement Manager,

[ Tanda Tangan ]

Budi Santoso, S.E.
                    </pre>

                    <h3>Surat Pesanan (Purchase Order)</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
PURCHASE ORDER

No. PO: PO-2024-0056
Tanggal: 10 Mei 2024
Estimasi Pengiriman: 17 Mei 2024

Kepada:
PT. SUPPLIER TEKNOLOGI
Jl. Industri No. 25, Jakarta Barat 11530
Contact: (021) 555-1234

Dengan ini kami memesan barang-barang berikut:

No  | Barang           | Qty | Satuan | Harga Satuan  | Total
----|------------------|-----|--------|---------------|----------
1   | Laptop Dell Vostro | 5  | Unit   | Rp 12.500.000 | Rp 62.500.000
2   | Monitor 24"       | 5  | Unit   | Rp 2.300.000  | Rp 11.500.000
3   | Keyboard & Mouse  | 5  | Set    | Rp 350.000    | Rp 1.750.000

TOTAL: Rp 75.750.000 (Tujuh puluh lima juta tujuh ratus lima puluh ribu rupiah)

Termin: Net 30
Pengiriman ke: Jl. Sudirman No. 50, Jakarta Pusat

Hormat kami,
PT. PERUSAHAAN MANDIRI
Procurement Manager
                    </pre>
                `
            },
            {
                title: "Contoh Surat Lamaran Kerja dan Resign",
                content: `
                    <h2>Contoh Surat Lamaran Kerja dan Resign</h2>
                    <h3>Surat Lamaran Kerja Profesional</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
SURAT LAMARAN KERJA

Yth. HRD Manager
PT. TEKNOLOGI DIGITAL
Jl. Kuningan No. 1, Jakarta Selatan 12950

Dengan hormat,

Saya yang bertanda tangan di bawah ini:

Nama: Rizki Pratama Putra, S.Kom.
Tempat/Tgl Lahir: Jakarta, 15 Agustus 1995
Alamat: Jl. Cempaka No. 20, Depok 16452
Telepon: 0812-3456-7890
Email: rizki.pratama@email.com

Melamar untuk posisi: Software Developer

Dengan surat ini, saya mengajukan lamaran kerja di perusahaan Bapak/Ibu. Sebagai lulusan Teknik Informatika dengan IPK 3.75, saya memiliki kompetensi dalam:

- Pemrograman: JavaScript, Python, Java, PHP
- Framework: React, Node.js, Laravel, Django
- Database: MySQL, PostgreSQL, MongoDB
- Tools: Git, Docker, AWS, CI/CD

Pengalaman kerja:
1. Full Stack Developer di PT. StartupTech (2022-2024)
   - Mengembangkan 10+ aplikasi web
   - Lead team of 3 developers

2. Junior Developer di CV. DigitalSolus (2021-2022)
   - Maintenance dan pengembangan sistem existing

Saya bersedia untuk wawancara kapan saja sesuai kesediaan Bapak/Ibu. Terlampir saya sertakan CV, portofolio, dan dokumen pendukung lainnya.

Demikian surat lamaran ini saya buat dengan sebenar-benarnya. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.

Hormat saya,

Rizki Pratama Putra, S.Kom.
                    </pre>

                    <h3>Surat Pengunduran Diri (Resignation Letter)</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
SURAT PENGUNDURAN DIRI

Nomor: RES-001/VI/2024
Tanggal: 1 Juni 2024

Yth. HRD Manager
PT. PERUSAHAAN SAHABAT
Jl. Asia Afrika No. 8, Bandung 40111

Dengan hormat,

Saya yang bertanda tangan di bawah ini:

Nama: Siti Nurhaliza, S.E.
Jabatan: Senior Accountant
Departemen: Finance

Melalui surat ini, saya mengajukan pengunduran diri dari posisi saya di PT. Perusahaan Sahabat, efektif mulai tanggal 1 Juli 2024.

Saya mengucapkan terima kasih yang sebesar-besarnya atas kesempatan bekerja di perusahaan ini selama 3 tahun. Saya sangat menghargai pengalaman dan pengetahuan yang telah saya peroleh selama bekerja di sini.

Saya akan memastikan semua tanggung jawab saya diserahkan dengan baik sebelum tanggal efektif pengunduran diri. Saya siap membantu proses transisi dan pelatihan pengganti saya.

Semoga perusahaan terus berkembang dan sukses di masa depan.

Hormat saya,

Siti Nurhaliza, S.E.
Senior Accountant
                    </pre>
                `
            },
            {
                title: "Etika dan Tata Bahasa dalam Surat Bisnis",
                content: `
                    <h2>Etika dan Tata Bahasa dalam Surat Bisnis</h2>
                    <h3>Prinsip Dasar Etika Surat Bisnis</h3>
                    <ol>
                        <li><strong>Kesopanan:</strong> Gunakan bahasa yang santun dan menghormati</li>
                        <li><strong>Kejujuran:</strong> Sampaikan informasi yang benar dan transparan</li>
                        <li><strong>Klaritas:</strong> Pastikan pesan mudah dipahami</li>
                        <li><strong>Profesionalisme:</strong> Jaga image profesional</li>
                    </ol>

                    <h3>Kesalahan Umum yang Harus Dihindari</h3>
                    <ul>
                        <li>Kesalahan ejaan dan grammar</li>
                        <li>Kalimat yang terlalu panjang</li>
                        <li>Menggunakan bahasa slang atau tidak formal</li>
                        <li>Informasi yang tidak lengkap</li>
                        <li>Tone yang terlalu emosional</li>
                    </ul>

                    <h3>Tips Menulis Surat yang Efektif</h3>
                    <ol>
                        <li>Gunakan kalimat aktif</li>
                        <li>Hindari jargon yang tidak perlu</li>
                        <li>Jelaskan tujuan surat di paragraf pertama</li>
                        <li>Gunakan bullet points untuk daftar</li>
                        <li>Review sebelum mengirim</li>
                    </ol>

                    <h3>Format yang Tersedia</h3>
                    <p>Pilih format sesuai kebutuhan:</p>
                    <ul>
                        <li><strong>Full Block:</strong> Semua rata kiri (paling umum)</li>
                        <li><strong>Modified Block:</strong> Header dan tanggal rata kanan</li>
                        <li><strong>Semi-Block:</strong> Paragraf menjorok</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 3,
        title: "Sejarah Kearsipan: Dari Papyrus hingga Digital",
        author: "Ahmad Fauzi, M.Arch.",
        category: "kearsipan",
        year: "2024",
        pages: 420,
        rating: 4.7,
        isbn: "978-623-1234-03-9",
        publisher: "Penerbit Informatika",
        description: "Buku komprehensif tentang sejarah kearsipan dari zaman kuno hingga era digital. Membahas evolusi media penyimpanan, sistem pengelolaan arsip, dan transformasi digital di berbagai peradaban.",
        cover: "📜",
        chapters: [
            {
                title: "Awal Mula Kearsipan",
                content: `
                    <h2>Awal Mula Kearsipan</h2>
                    <h3>Kebutuhan Arsip</h3>
                    <p>Sejak awal peradaban, manusia membutuhkan cara untuk menyimpan dan mengelola informasi. Kearsipan lahir dari kebutuhan untuk:</p>
                    <ul>
                        <li>Menyimpan catatan perdagangan</li>
                        <li>Mendokumentasikan hukum dan peraturan</li>
                        <li>Mencatat sejarah dan warisan</li>
                        <li>Mengelola administrasi pemerintahan</li>
                    </ul>

                    <h3>Media Arsip Awal</h3>
                    <h3>1. Batu dan Tanah Liat</h3>
                    <p>Media penyimpanan tertua:</p>
                    <ul>
                        <li><strong>Prasasti:</strong> Tulisan pada batu untuk dokumen permanen</li>
                        <li><strong>Clay Tablets:</strong> Tablet tanah liat di Mesopotamia</li>
                        <li><strong>Oracle Bones:</strong> Tulisan pada tulang di Tiongkok</li>
                    </ul>

                    <h3>2. Organik Materials</h3>
                    <ul>
                        <li><strong>Papyrus:</strong> Dari tumbuhan papirus di Mesir</li>
                        <li><strong>Parchment/Vellum:</strong> Kulit hewan yang diolah</li>
                        <li><strong>Paper:</strong> Ditemukan oleh Cai Lun di Tiongkok (105 M)</li>
                    </ul>

                    <h3>Kearsipan di Peradaban Awal</h3>
                    <p>Setiap peradaban memiliki sistem kearsipan mereka:</p>
                    <ol>
                        <li><strong>Mesopotamia:</strong> Arsip di kuil-kuil</li>
                        <li><strong>Mesir:</strong> Arsip negara di Memphis dan Thebes</li>
                        <li><strong>Yunani:</strong> Arsip di Athena</li>
                        <li><strong>Romawi:</strong> Tabularium di Roma</li>
                    </ol>
                `
            },
            {
                title: "Kearsipan Abad Pertengahan",
                content: `
                    <h2>Kearsipan Abad Pertengahan</h2>
                    <h3>Monasteries sebagai Pusat Arsip</h3>
                    <p>Pada abad pertengahan, biara-biara Kristen menjadi pusat penyimpanan dan pengelolaan arsip di Eropa:</p>
                    <ul>
                        <li>Scriptorium: Ruang penyalinan manuskrip</li>
                        <li>Library: Perpustakaan biara</li>
                        <li>Archivum: Penyimpanan dokumen resmi</li>
                    </ul>

                    <h3>Kearsipan Kerajaan</h3>
                    <p>Raja-raja dan kerajaan memelihara arsip mereka:</p>
                    <ol>
                        <li>Chancery: Kantor pengelola surat resmi</li>
                        <li>Exchequer: Arsip keuangan</li>
                        <li>Charter repositories: Penyimpanan piagam</li>
                    </ol>

                    <h3>Kearsipan di Nusantara</h3>
                    <p>Di Indonesia, kearsipan berkembang melalui:</p>
                    <ul>
                        <li><strong>Prasasti:</strong> Batu bertulis dari masa Hindu-Buddha</li>
                        <li><strong>Lontar:</strong> Tulisan pada daun palem</li>
                        <li><strong>Kopiah:</strong> Arsip kerajaan Islam</li>
                        <li><strong>Gedong:</strong> Gudang penyimpanan arsip</li>
                    </ul>

                    <h3>Organisasi Arsip</h3>
                    <p>Sistem organisasi arsip mulai terbentuk:</p>
                    <ol>
                        <li>Klasifikasi berdasarkan jenis dokumen</li>
                        <li>Penomoran untuk identifikasi</li>
                        <li>Penyimpanan berdasarkan periode</li>
                    </ol>
                `
            },
            {
                title: "Revolusi Industri dan Modernisasi Kearsipan",
                content: `
                    <h2>Revolusi Industri dan Modernisasi Kearsipan</h2>
                    <h3>Dampuk Revolusi Industri</h3>
                    <p>Revolusi industri membawa perubahan besar dalam kearsipan:</p>
                    <ul>
                        <li>Peningkatan volume dokumen</li>
                        <li>Kebutuhan sistem yang lebih terorganisir</li>
                        <li>Pengembangan lemari arsip (filing cabinet)</li>
                    </ul>

                    <h3>Era Victorian dan Filing System</h3>
                    <p>Abad ke-19 melihat perkembangan sistem filing:</p>
                    <ol>
                        <li><strong>Vertical Filing:</strong> Lemari arsip vertikal</li>
                        <li><strong>Index Card System:</strong> Sistem kartu indeks</li>
                        <li><strong>Alphabetic Filing:</strong> Pengurutan berdasarkan abjad</li>
                    </ol>

                    <h3>Standarisasi Kearsipan</h3>
                    <p>Upaya standarisasi dimulai:</p>
                    <ul>
                        <li>Formulir formulir standar</li>
                        <li>Prosedur pengelolaan arsip</li>
                        <li>Manual arsip untuk organisasi</li>
                    </ul>

                    <h3>Perkembangan di Indonesia</h3>
                    <p>Di Indonesia, kearsipan mulai dibentuk secara sistemik:</p>
                    <ol>
                        <li>Era VOC: Arsip kolonial</li>
                        <li>Era Jepang: Sistem arsip militer</li>
                        <li>Era Kemerdekaan: Pembangunan arsip nasional</li>
                    </ol>
                `
            },
            {
                title: "Era Digital dan Transformasi Kearsipan",
                content: `
                    <h2>Era Digital dan Transformasi Kearsipan</h2>
                    <h3>Komputerisasi Arsip</h3>
                    <p>Penemuan komputer membawa revolusi dalam kearsipan:</p>
                    <ul>
                        <li><strong>1960s:</strong> Komputer mainframe untuk arsip besar</li>
                        <li><strong>1970s:</strong> Database untuk arsip</li>
                        <li><strong>1980s:</strong> Personal computer untuk kantor</li>
                        <li><strong>1990s:</strong> Document Management System</li>
                    </ul>

                    <h3>Internet dan E-Arsip</h3>
                    <p>Internet mengubah cara kita mengelola arsip:</p>
                    <ol>
                        <li>Email sebagai media komunikasi dan arsip</li>
                        <li>Cloud storage untuk backup</li>
                        <li>Content Management System (CMS)</li>
                        <li>Electronic Records Management (ERM)</li>
                    </ol>

                    <h3>Standar Internasional</h3>
                    <p>Standar kearsipan modern:</p>
                    <ul>
                        <li><strong>ISO 15489:</strong> Manajemen arsip</li>
                        <li><strong>MoReq:</strong> Model requirements for electronic records</li>
                        <li><strong>PDF/A:</strong> Format arsip digital</li>
                        <li><strong>Dublin Core:</strong> Metadata standar</li>
                    </ul>

                    <h3>Indonesia di Era Digital</h3>
                    <p>Pengembangan kearsipan digital di Indonesia:</p>
                    <ol>
                        <li>ANRI (Arsip Nasional Republik Indonesia)</li>
                        <li>Sistem informasi manajemen arsip</li>
                        <li>Digitasi arsip historis</li>
                        <li>E-archiving di instansi pemerintah</li>
                    </ol>
                `
            },
            {
                title: "Masa Depan Kearsipan",
                content: `
                    <h2>Masa Depan Kearsipan</h2>
                    <h3>Tren Kearsipan Modern</h3>
                    <p>Kearsipan terus berkembang dengan teknologi baru:</p>
                    <ul>
                        <li><strong>Artificial Intelligence:</strong> Automated classification dan retrieval</li>
                        <li><strong>Blockchain:</strong> Untuk verifikasi keaslian dokumen</li>
                        <li><strong>Cloud Computing:</strong> Storage dan akses yang fleksibel</li>
                        <li><strong>Big Data Analytics:</strong> Analisis pola arsip</li>
                    </ul>

                    <h3> tantangan Masa Depan</h3>
                    <ol>
                        <li>Digital preservation dan format longevity</li>
                        <li>Privacy dan data protection</li>
                        <li>Cybersecurity untuk arsip sensitif</li>
                        <li>Training dan kompetensi SDM</li>
                    </ol>

                    <h3>Peluang Pengembangan</h3>
                    <p>Kearsipan memiliki peluang besar:</p>
                    <ul>
                        <li>Smart archives dengan IoT</li>
                        <li>Automated retention schedules</li>
                        <li>Predictive analytics untuk arsip management</li>
                        <li>Integration dengan sistem enterprise</li>
                    </ul>

                    <h3>Kesimpulan</h3>
                    <p>Kearsipan adalah bidang yang terus berkembang. Dari prasasti batu hingga cloud storage, cara kita menyimpan dan mengelola informasi terus beradaptasi dengan teknologi dan kebutuhan masyarakat.</p>
                `
            }
        ]
    },
    {
        id: 4,
        title: "Manajemen Arsip Modern: Teori dan Praktik",
        author: "Rina Wulandari, M.M.",
        category: "kearsipan",
        year: "2024",
        pages: 380,
        rating: 4.6,
        isbn: "978-623-1234-04-6",
        publisher: "Penerbit Erlangga",
        description: "Buku lengkap tentang manajemen arsip modern. Mencakup teori manajemen arsip, sistem klasifikasi, retensi, dan implementasi di organisasi. Dilengkapi dengan studi kasus dan best practices.",
        cover: "📊",
        chapters: [
            {
                title: "Konsep Dasar Manajemen Arsip",
                content: `
                    <h2>Konsep Dasar Manajemen Arsip</h2>
                    <h3>Apa Itu Manajemen Arsip?</h3>
                    <p>Manajemen arsip adalah proses pengelolaan arsip secara sistematis dari pembuatan hingga pemusnahan. Tujuan utama adalah memastikan arsip dapat ditemukan dan digunakan ketika dibutuhkan.</p>

                    <h3>Siklus Hidup Arsip</h3>
                    <p>Setiap arsip melalui siklus:</p>
                    <ol>
                        <li><strong>Creation:</strong> Pembuatan atau penerimaan</li>
                        <li><strong>Distribution:</strong> Distribusi ke pihak terkait</li>
                        <li><strong>Use:</strong> Penggunaan untuk operasional</li>
                        <li><strong>Maintenance:</strong> Penyimpanan dan pemeliharaan</li>
                        <li><strong>Retention:</strong> Penyimpanan sesuai jadwal</li>
                        <li><strong>Disposition:</strong> Pemusnahan atau transfer permanen</li>
                    </ol>

                    <h3>Jenis-jenis Arsip</h3>
                    <ul>
                        <li><strong>Arsip Aktif:</strong> Sering digunakan</li>
                        <li><strong>Arsip Inaktif:</strong> Jarang digunakan</li>
                        <li><strong>Arsip Vital:</strong> Sangat penting</li>
                        <li><strong>Arsip Permanen:</strong> Disimpan selamanya</li>
                    </ul>

                    <h3>Prinsip Manajemen Arsip</h3>
                    <ol>
                        <li>Prinsip Origin (arsip disimpan bersama dokumen asal)</li>
                        <li>Prinsip Pertalian (arsip terkait disimpan bersama)</li>
                        <li>Prinsip Akses (mudah diakses)</li>
                        <li>Prinsip Perlindungan (dilindungi dari kerusakan)</li>
                    </ol>
                `
            },
            {
                title: "Sistem Klasifikasi dan Penomoran",
                content: `
                    <h2>Sistem Klasifikasi dan Penomoran</h2>
                    <h3>Mengapa Klasifikasi Penting?</h3>
                    <p>Sistem klasifikasi yang baik memudahkan:</p>
                    <ul>
                        <li>Pencarian arsip</li>
                        <li>Pengambilan arsip</li>
                        <li>Penyimpanan yang teratur</li>
                        <li>Pengelolaan retensi</li>
                    </ul>

                    <h3>Metode Klasifikasi</h3>
                    <h3>1. Berdasarkan Fungsi</h3>
                    <p>Mengelompokkan berdasarkan fungsi organisasi:</p>
                    <ul>
                        <li>Keuangan (KE)</li>
                        <li>Sumber Daya Manusia (SDM)</li>
                        <li>Operasional (OP)</li>
                        <li>Pemasaran (PM)</li>
                    </ul>

                    <h3>2. Berdasarkan Alfanumerik</h3>
                    <p>Kombinasi huruf dan angka:</p>
                    <ul>
                        <li>Kode fungsi: 2-3 huruf</li>
                        <li>Kode sub-fungsi: 2 digit</li>
                        <li>Nomor urut: 3 digit</li>
                        <li>Tahun: 4 digit</li>
                    </ul>

                    <h3>Contoh Kode Arsip</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
KE.01/001/2024 - Surat pengeluaran uang
SDM.03/015/2024 - Surat cuti karyawan
OP.02/008/2024 - Surat pemesanan barang
                    </pre>

                    <h3>Best Practices</h3>
                    <ol>
                        <li>Buat panduan klasifikasi yang jelas</li>
                        <li>Training seluruh staf</li>
                        <li>Review dan update secara berkala</li>
                        <li>Dokumentasikan perubahan</li>
                    </ol>
                `
            },
            {
                title: "Penyimpanan dan Pemeliharaan Arsip",
                content: `
                    <h2>Penyimpanan dan Pemeliharaan Arsip</h2>
                    <h3>Prinsip Penyimpanan</h3>
                    <ul>
                        <li><strong>Aksesibilitas:</strong> Mudah diakses</li>
                        <li><strong>Keamanan:</strong> Dilindungi dari akses tidak berwenang</li>
                        <li><strong>Perlindungan:</strong> Dari kerusakan fisik</li>
                        <li><strong>Efisiensi:</strong> Penggunaan ruang optimal</li>
                    </ul>

                    <h3>Penyimpanan Fisik</h3>
                    <h3>1. Lemari Arsip</h3>
                    <ul>
                        <li>Vertical File Cabinet - untuk dokumen folio</li>
                        <li>Lateral File Cabinet - untuk akses cepat</li>
                        <li>Mobile Shelving - untuk efisiensi ruang</li>
                    </ul>

                    <h3>2. Rak Arsip</h3>
                    <ul>
                        <li>Binder storage untuk dokumen aktif</li>
                        <li>Box storage untuk arsip inaktif</li>
                        <li>Label yang jelas dan konsisten</li>
                    </ul>

                    <h3>Kontrol Lingkungan</h3>
                    <p>Kondisi ideal untuk arsip fisik:</p>
                    <ul>
                        <li>Suhu: 18-22°C</li>
                        <li>Kelembaban: 40-50%</li>
                        <li>Hindari sinar UV langsung</li>
                        <li>Pest control secara rutin</li>
                    </ul>

                    <h3>Backup Digital</h3>
                    <p>Scan dokumen penting untuk backup:</p>
                    <ol>
                        <li>Gunakan scanner berkualitas</li>
                        <li>Format: PDF/A untuk arsip</li>
                        <li>Simpan di multiple locations</li>
                        <li>Verify berkala</li>
                    </ol>
                `
            },
            {
                title: "Retensi dan Pemusnahan Arsip",
                content: `
                    <h2>Retensi dan Pemusnahan Arsip</h2>
                    <h3>Konsep Retensi</h3>
                    <p>Retensi adalah periode waktu arsip harus disimpan sebelum dimusnahkan. Setiap organisasi perlu retensi schedule yang jelas.</p>

                    <h3>Faktor yang Mempengaruhi Retensi</h3>
                    <ol>
                        <li>Kebutuhan hukum dan regulasi</li>
                        <li>Kebutuhan operasional</li>
                        <li>Nilai historis</li>
                        <li>Kebutuhan audit</li>
                        <li>Asuransi dan klaim</li>
                    </ol>

                    <h3>Contoh Jadwal Retensi</h3>
                    <ul>
                        <li>Surat masuk/keluar: 5 tahun</li>
                        <li>Laporan keuangan: 10 tahun</li>
                        <li>Dokumen hukum: Selamanya</li>
                        <li>Surat cuti: 2 tahun setelah karyawan berhenti</li>
                    </ul>

                    <h3>Prosedur Pemusnahan</h3>
                    <ol>
                        <li>Verifikasi arsip sudah melebihi masa retensi</li>
                        <li>Dapatkan persetujuan pejabat berwenang</li>
                        <li>Buat daftar arsip yang dimusnahkan</li>
                        <li>Eksekusi pemusnahan (shredding/burning)</li>
                        <li>Buat laporan pemusnahan</li>
                    </ol>

                    <h3>Dokumentasi Pemusnahan</h3>
                    <p>Setiap pemusnahan harus didokumentasikan:</p>
                    <ul>
                        <li>Daftar arsip yang dimusnahkan</li>
                        <li>Tanggal dan metode</li>
                        <li>Nama pelaksana dan saksi</li>
                        <li>Persetujuan pejabat</li>
                    </ul>
                `
            },
            {
                title: "Arsip Digital dan E-Arsip",
                content: `
                    <h2>Arsip Digital dan E-Arsip</h2>
                    <h3>Keunggulan E-Arsip</h3>
                    <ol>
                        <li>Aksesibilitas: Dari mana saja</li>
                        <li>Efisiensi ruang</li>
                        <li>Keamanan: Enkripsi dan password</li>
                        <li>Backup mudah</li>
                        <li>Pencarian cepat</li>
                        <li>Kolaborasi tim</li>
                    </ol>

                    <h3>Tantangan E-Arsip</h3>
                    <ul>
                        <li>Keamanan siber</li>
                        <li>Format file compatibility</li>
                        <li>Digital divide</li>
                        <li>Biaya awal investasi</li>
                        <li>Training staf</li>
                    </ul>

                    <h3>Standar E-Arsip</h3>
                    <ul>
                        <li><strong>ISO 15489:</strong> Manajemen arsip</li>
                        <li><strong>PDF/A:</strong> Format arsip digital</li>
                        <li><strong>Dublin Core:</strong> Metadata</li>
                        <li><strong>PREMIS:</strong> Preservasi digital</li>
                    </ul>

                    <h3>Implementasi E-Arsip</h3>
                    <p>Tahapan implementasi:</p>
                    <ol>
                        <li>Assessment kebutuhan</li>
                        <li>Perencanaan sistem</li>
                        <li>Pemilihan software</li>
                        <li>Migrasi data</li>
                        <li>Training pengguna</li>
                        <li>Go-live dan maintenance</li>
                    </ol>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Gunakan format file terbuka</li>
                        <li>Backup rutin (3-2-1 strategy)</li>
                        <li>Audit berkala</li>
                        <li>Disaster recovery plan</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 5,
        title: "Kearsipan untuk Pemula: Panduan Praktis",
        author: "Sari Indah, A.Md.Arch.",
        category: "kearsipan",
        year: "2024",
        pages: 250,
        rating: 4.5,
        isbn: "978-623-1234-05-3",
        publisher: "Penerbit Pustaka",
        description: "Panduan praktis kearsipan untuk pemula. Dilengkapi dengan langkah-langkah mudah diikuti, contoh aplikasi, dan tips praktis. Cocok untuk staf administrasi, mahasiswa, dan siapa yang ingin belajar kearsipan.",
        cover: "📋",
        chapters: [
            {
                title: "Memulai Kearsipan",
                content: `
                    <h2>Memulai Kearsipan</h2>
                    <h3>Apa yang Perlu Dipersiapkan?</h3>
                    <p>Untuk memulai kearsipan, persiapkan:</p>
                    <ul>
                        <li>Ruang penyimpanan yang aman</li>
                        <li>Lemari arsip atau rak</li>
                        <li>Label dan marker</li>
                        <li>Sistem klasifikasi</li>
                        <li>Buku register atau software</li>
                    </ul>

                    <h3>Langkah Pertama</h3>
                    <ol>
                        <li>Inventarisasi arsip yang ada</li>
                        <li>Buat sistem klasifikasi sederhana</li>
                        <li>Label semua arsip</li>
                        <li>Buat jadwal retensi</li>
                        <li>Documentasikan prosedur</li>
                    </ol>

                    <h3>Tips untuk Pemula</h3>
                    <ul>
                        <li>Mulai dari yang kecil dan sederhana</li>
                        <li>Konsisten dalam penerapan sistem</li>
                        <li>Review secara berkala</li>
                        <li>Minta bantuan jika diperlukan</li>
                    </ul>
                `
            },
            {
                title: "Teknik Filing dan Pengorganisasian",
                content: `
                    <h2>Teknik Filing dan Pengorganisasian</h2>
                    <h3>Metode Filing yang Umum</h3>
                    <p>Berbagai metode filing yang bisa digunakan:</p>
                    
                    <h3>1. Alphabetical Filing</h3>
                    <p>Mengurutkan berdasarkan nama:</p>
                    <ul>
                        <li>Cocok untuk nama orang atau perusahaan</li>
                        <li>Mudah dipahami dan diikuti</li>
                        <li>Contoh: Anderson, Budi, Chandra</li>
                    </ul>

                    <h3>2. Numerical Filing</h3>
                    <p>Menggunakan nomor untuk identifikasi:</p>
                    <ul>
                        <li>Setiap orang/perusahaan mendapat nomor</li>
                        <li>Lebih rapi dan teratur</li>
                        <li>Membutuhkan index untuk referensi</li>
                    </ul>

                    <h3>3. Subject Filing</h3>
                    <p>Mengelompokkan berdasarkan subjek:</p>
                    <ul>
                        <li>Keuangan, SDM, Operasional</li>
                        <li>Mudah untuk mencari berdasarkan topik</li>
                        <li>Cocok untuk organisasi besar</li>
                    </ul>

                    <h3>4. Geographic Filing</h3>
                    <p>Berdasarkan lokasi:</p>
                    <ul>
                        <li>Daerah, kota, wilayah</li>
                        <li>Cocok untuk organisasi dengan cabang</li>
                        <li>Mudah tracking per region</li>
                    </ul>

                    <h3>Prinsip Good Filing</h3>
                    <ol>
                        <li>Consistency: Konsisten dalam sistem</li>
                        <li>Accessibility: Mudah diakses</li>
                        <li>Flexibility: Dapat berkembang</li>
                        <li>Simplicity: Jangan terlalu rumit</li>
                    </ol>
                `
            },
            {
                title: "Klasifikasi dan Penomoran Arsip",
                content: `
                    <h2>Klasifikasi dan Penomoran Arsip</h2>
                    <h3>Mengapa Klasifikasi Penting?</h3>
                    <p>Sistem klasifikasi yang baik memudahkan pengelolaan arsip dan memastikan dokumen dapat ditemukan dengan cepat ketika dibutuhkan.</p>

                    <h3>Sistem Klasifikasi Dasar</h3>
                    <h3>1. Klasifikasi Fungsi</h3>
                    <p>Berdasarkan fungsi organisasi:</p>
                    <ul>
                        <li><strong>KE (Keuangan):</strong> Pembayaran, laporan, budget</li>
                        <li><strong>SDM (Sumber Daya Manusia):</strong> Karyawan, cuti, training</li>
                        <li><strong>OP (Operasional):</strong> Produksi, inventory, QC</li>
                        <li><strong>PM (Pemasaran):</strong> Iklan, promosi, event</li>
                        <li><strong>UM (Umum):</strong> Administrasi umum</li>
                    </ul>

                    <h3>2. Sistem Penomoran</h3>
                    <p>Format penomoran yang terstruktur:</p>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
Format: [KODE]/[SUB-KODE]/[NOMOR]/[TAHUN]

Contoh:
KE.01/001/2024 - Surat pengeluaran uang
SDM.03/015/2024 - Surat cuti karyawan
OP.02/008/2024 - Surat pemesanan barang
                    </pre>

                    <h3>3. Panduan Klasifikasi</h3>
                    <p>Langkah membuat panduan:</p>
                    <ol>
                        <li>Identifikasi semua fungsi organisasi</li>
                        <li>Buat kode untuk setiap fungsi</li>
                        <li>Tentukan sub-fungsi</li>
                        <li>Documentasikan dalam manual</li>
                        <li>Training seluruh staf</li>
                    </ol>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Gunakan kode yang mudah diingat</li>
                        <li>Konsisten dalam penerapan</li>
                        <li>Review dan update secara berkala</li>
                        <li>Dokumentasikan semua perubahan</li>
                    </ul>
                `
            },
            {
                title: "Penyimpanan dan Perlindungan Arsip",
                content: `
                    <h2>Penyimpanan dan Perlindungan Arsip</h2>
                    <h3>Prinsip Dasar Penyimpanan</h3>
                    <p>Arsip harus disimpan dengan mempertimbangkan:</p>
                    <ul>
                        <li><strong>Aksesibilitas:</strong> Mudah dicari dan diambil</li>
                        <li><strong>Keamanan:</strong> Dilindungi dari theft atau damage</li>
                        <li><strong>Perlindungan:</strong> Dari fire, water, pests</li>
                        <li><strong>Efisiensi:</strong> Optimal penggunaan ruang</li>
                    </ul>

                    <h3>Penyimpanan Arsip Fisik</h3>
                    <h3>1. Jenis Lemari Arsip</h3>
                    <ul>
                        <li><strong>Vertical File Cabinet:</strong> Untuk dokumen folio, hemat ruang</li>
                        <li><strong>Lateral File Cabinet:</strong> Akses mudah, wider drawer</li>
                        <li><strong>Mobile Shelving:</strong> Efisiensi ruang maksimal</li>
                        <li><strong>Open Shelving:</strong> Untuk arsip yang sering diakses</li>
                    </ul>

                    <h3>2. Sistem Penyimpanan</h3>
                    <p>Organisasi dalam lemari:</p>
                    <ol>
                        <li>Folder yang jelas dan berlabel</li>
                        <li>Urutan chronological atau alphabetical</li>
                        <li>Color coding untuk kategori</li>
                        <li>Regular purging dan reorganization</li>
                    </ol>

                    <h3>Kontrol Lingkungan</h3>
                    <p>Kondisi ideal untuk arsip fisik:</p>
                    <ul>
                        <li><strong>Suhu:</strong> 18-22°C (64-72°F)</li>
                        <li><strong>Kelembaban:</strong> 40-50% RH</li>
                        <li><strong>Cahaya:</strong> Hindari sinar UV langsung</li>
                        <li><strong>Ventilasi:</strong> Sirkulasi udara yang baik</li>
                        <li><strong>Pest Control:</strong> Rutin extermination</li>
                    </ul>

                    <h3>Perlindungan dari Bencana</h3>
                    <ol>
                        <li>Fireproof cabinet untuk dokumen penting</li>
                        <li>Waterproof storage di area basement</li>
                        <li>Off-site backup untuk arsip vital</li>
                        <li>Disaster recovery plan</li>
                    </ol>
                `
            },
            {
                title: "Retensi dan Pemusnahan Arsip",
                content: `
                    <h2>Retensi dan Pemusnahan Arsip</h2>
                    <h3>Konsep Retention Schedule</h3>
                    <p>Retention schedule adalah panduan yang menentukan berapa lama arsip harus disimpan sebelum dimusnahkan. Setiap organisasi perlu retention schedule yang jelas dan legal.</p>

                    <h3>Faktor yang Mempengaruhi Retensi</h3>
                    <ol>
                        <li><strong>Kebutuhan Hukum:</strong> Regulatory requirements</li>
                        <li><strong>Kebutuhan Operasional:</strong> Untuk daily operations</li>
                        <li><strong>Nilai Historis:</strong> Untuk penelitian dan warisan</li>
                        <li><strong>Kebutuhan Audit:</strong> Untuk financial dan compliance</li>
                        <li><strong>Asuransi:</strong> Untuk claims dan litigation</li>
                    </ol>

                    <h3>Contoh Retention Schedule</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
JENIS ARSIP              | PERIODE RETENSI
-------------------------|------------------
Surat Masuk/Keluar       | 5 tahun setelah terakhir
Laporan Keuangan         | 10 tahun (minimal)
Dokumen Pajak            | 10 tahun
Surat Karyawan           | 2 tahun setelah berhenti
Laporan Tahunan           | Selamanya
Dokumen Hukum            | Selamanya
Invoice                  | 5 tahun
Kontrak                  | 7 tahun setelah berakhir
                    </pre>

                    <h3>Prosedur Pemusnahan</h3>
                    <p>Langkah-langkah pemusnahan yang benar:</p>
                    <ol>
                        <li><strong>Verifikasi:</strong> Pastikan arsip sudah melebihi masa retensi</li>
                        <li><strong>Persetujuan:</strong> Dapatkan approval dari pejabat berwenang</li>
                        <li><strong>Dokumentasi:</strong> Buat daftar arsip yang dimusnahkan</li>
                        <li><strong>Eksekusi:</strong> Lakukan shredding atau burning</li>
                        <li><strong>Laporan:</strong> Buat laporan pemusnahan</li>
                    </ol>

                    <h3>Metode Pemusnahan</h3>
                    <ul>
                        <li><strong>Shredding:</strong> Untuk dokumen rahasia/confidential</li>
                        <li><strong>Burning:</strong> Untuk volume besar (dengan kontrol)</li>
                        <li><strong>Pulping:</strong> Untuk kertas yang bisa didaur ulang</li>
                        <li><strong>Deletion:</strong> Untuk digital files</li>
                    </ul>
                `
            },
            {
                title: "Digitalisasi dan E-Arsip",
                content: `
                    <h2>Digitalisasi dan E-Arsip</h2>
                    <h3>Keunggulan E-Arsip</h3>
                    <p>Transisi ke arsip digital memberikan banyak manfaat:</p>
                    <ol>
                        <li><strong>Aksesibilitas:</strong> Diakses dari mana saja</li>
                        <li><strong>Efisiensi Ruang:</strong> Hemat ruang penyimpanan fisik</li>
                        <li><strong>Keamanan:</strong> Enkripsi dan access control</li>
                        <li><strong>Backup:</strong> Mudah diduplikasi</li>
                        <li><strong>Pencarian:</strong> Fast search dan retrieval</li>
                        <li><strong>Kolaborasi:</strong> Multiple users bisa akses</li>
                    </ol>

                    <h3>Tantangan Digitalisasi</h3>
                    <ul>
                        <li>Biaya awal investasi equipment</li>
                        <li>Training staf untuk sistem baru</li>
                        <li>Format compatibility issues</li>
                        <li>Digital preservation challenges</li>
                        <li>Cybersecurity concerns</li>
                    </ul>

                    <h3>Proses Digitalisasi</h3>
                    <h3>1. Persiapan</h3>
                    <ul>
                        <li>Assessment arsip yang akan didigitalisasi</li>
                        <li>Pemilihan scanner yang sesuai</li>
                        <li>Penentuan format file (PDF/A recommended)</li>
                        <li>Planning workflow dan timeline</li>
                    </ul>

                    <h3>2. Eksekusi</h3>
                    <ol>
                        <li>Scan dengan resolusi yang tepat (300-600 DPI)</li>
                        <li>Quality control untuk setiap scan</li>
                        <li>Naming convention yang konsisten</li>
                        <li>Metadata tagging</li>
                        <li>Indexing untuk searchability</li>
                    </ol>

                    <h3>3. Quality Control</h3>
                    <ul>
                        <li>Verify setiap scanned document</li>
                        <li>Check legibility dan completeness</li>
                        <li>Ensure proper orientation</li>
                        <li>Test search functionality</li>
                    </ul>

                    <h3>Software untuk E-Arsip</h3>
                    <p>Beberapa pilihan software:</p>
                    <ul>
                        <li><strong>Document Management System:</strong> Untuk medium-large organisasi</li>
                        <li><strong>Cloud Storage:</strong> Google Drive, Dropbox, OneDrive</li>
                        <li><strong>Specialized Archive Software:</strong> Untuk institusi arsip</li>
                        <li><strong>Open Source:</strong> Alfresco, OpenKM</li>
                    </ul>

                    <h3>Best Practices</h3>
                    <ol>
                        <li>Gunakan format file terbuka (PDF/A, TIFF)</li>
                        <li>Implement 3-2-1 backup strategy</li>
                        <li>Regular audit dan quality checks</li>
                        <li>Training untuk semua users</li>
                        <li>Disaster recovery plan</li>
                    </ol>
                `
            },
            {
                title: "Studi Kasus dan Praktik Terbaik",
                content: `
                    <h2>Studi Kasus dan Praktik Terbaik</h2>
                    <h3>Studi Kasus 1: Kantor kecil yang sukses</h3>
                    <p>PT. Maju Bersama adalah perusahaan kecil dengan 20 karyawan. Mereka berhasil mengimplementasikan sistem arsip yang efisien:</p>
                    <ul>
                        <li>Menggunakan sistem hybrid (fisik + digital)</li>
                        <li>Klasifikasi sederhana berdasarkan departemen</li>
                        <li>Retention schedule yang jelas</li>
                        <li>Training bulanan untuk staf</li>
                    </ul>
                    <p><strong>Hasil:</strong> Efisiensi pencarian arsip meningkat 70%, space terhemat 40%.</p>

                    <h3>Studi Kasus 2: Transformasi Digital</h3>
                    <p>Yayasan Pendidikan Nusantara memiliki ribuan dokumen fisik. Mereka melakukan digitalisasi bertahap:</p>
                    <ol>
                        <li>Tahun 1: Digitalisasi dokumen vital (10% dari total)</li>
                        <li>Tahun 2: Digitalisasi dokumen aktif (30%)</li>
                        <li>Tahun 3: Digitalisasi dokumen inaktif (60%)</li>
                    </ol>
                    <p><strong>Hasil:</strong> Akses dokumen menjadi 10x lebih cepat, cost saving Rp 50 juta/tahun.</p>

                    <h3>Praktik Terbaik dari Berbagai Organisasi</h3>
                    <h3>1. Kementerian Pendidikan</h3>
                    <ul>
                        <li>Sistem klasifikasi nasional</li>
                        <li>Digitalisasi seluruh arsip penting</li>
                        <li>Training rutin untuk seluruh staf</li>
                    </ul>

                    <h3>2. Perusahaan Multinasional</h3>
                    <ul>
                        <li>Cloud-based document management</li>
                        <li>Automated retention schedules</li>
                        <li>AI-powered search dan classification</li>
                    </ul>

                    <h3>3. Lembaga Arsip Nasional</h3>
                    <ul>
                        <li>Standar ISO 15489 compliance</li>
                        <li>Preservation program untuk dokumen historis</li>
                        <li>Public access system</li>
                    </ul>

                    <h3>Tips dari Praktisi</h3>
                    <ol>
                        <li>Mulai dari yang kecil, konsisten, dan berkembang</li>
                        <li>Jangan terburu-buru dalam digitalisasi</li>
                        <li>Investasi di training lebih penting dari software</li>
                        <li>Review dan audit secara berkala</li>
                        <li>Dokumentasikan everything untuk continuity</li>
                    </ol>

                    <h3>Kesimpulan</h3>
                    <p>Kearsipan yang baik membutuhkan perencanaan, konsistensi, dan komitmen. Dengan menerapkan prinsip dan praktik terbaik, organisasi dapat mencapai efisiensi tinggi dan compliance yang baik.</p>
                `
            }
        ]
    },
    {
        id: 6,
        title: "Korespondensi untuk Pemula: Panduan Praktis",
        author: "Dr. Hendra Wijaya, M.Si.",
        category: "korespondensi",
        year: "2024",
        pages: 280,
        rating: 4.5,
        isbn: "978-623-1234-06-0",
        publisher: "Penerbit Pustaka",
        description: "Panduan praktis korespondensi untuk pemula. Dilengkapi dengan contoh surat sehari-hari, tips menulis surat yang baik, dan latihan-latihan untuk meningkatkan kemampuan menulis surat.",
        cover: "✍️",
        chapters: [
            {
                title: "Dasar-Dasar Menulis Surat",
                content: `
                    <h2>Dasar-Dasar Menulis Surat</h2>
                    <h3>Komponen Surat yang Wajib Ada</h3>
                    <p>Setiap surat yang baik harus memiliki komponen-komponen berikut:</p>
                    <ul>
                        <li><strong>Kop surat:</strong> Identitas pengirim</li>
                        <li><strong>Nomor surat:</strong> Untuk administrasi</li>
                        <li><strong>Perihal:</strong> Ringkasan isi surat</li>
                        <li><strong>Alamat penerima:</strong> Lengkap dan benar</li>
                        <li><strong>Salam:</strong> Sesuai dengan tujuan</li>
                        <li><strong>Isi surat:</strong> Jelas dan terstruktur</li>
                        <li><strong>Penutup:</strong> Salam penutup dan tanda tangan</li>
                    </ul>

                    <h3>Prinsip KISS (Keep It Simple, Stupid)</h3>
                    <p>Prinsip ini sangat penting dalam menulis surat:</p>
                    <ol>
                        <li>Gunakan bahasa yang sederhana</li>
                        <li>Hindari jargon yang tidak perlu</li>
                        <li>Kalimat langsung ke inti</li>
                        <li>Paragraf pendek (3-5 baris)</li>
                    </ol>

                    <h3>Struktur Paragraf yang Efektif</h3>
                    <p>Setiap paragraf harus memiliki:</p>
                    <ul>
                        <li><strong>Topic sentence:</strong> Kalimat utama</li>
                        <li><strong>Supporting sentences:</strong> Penjelasan</li>
                        <li><strong>Concluding sentence:</strong> Kalimat penutup</li>
                    </ul>
                `
            },
            {
                title: "Menulis Surat Formal dan Informal",
                content: `
                    <h2>Menulis Surat Formal dan Informal</h2>
                    <h3>Surat Formal</h3>
                    <p>Surat formal digunakan untuk keperluan resmi:</p>
                    <ul>
                        <li>Surat ke instansi pemerintah</li>
                        <li>Surat lamaran kerja</li>
                        <li>Surat pengaduan</li>
                        <li>Surat permohonan</li>
                    </ul>

                    <h3>Ciri Surat Formal</h3>
                    <ol>
                        <li>Menggunakan bahasa baku dan resmi</li>
                        <li>Tidak menggunakan singkatan</li>
                        <li>Salam pembuka dan penutup formal</li>
                        <li>Tanda tangan basah</li>
                        <li>Struktur yang terorganisir</li>
                    </ol>

                    <h3>Surat Informal</h3>
                    <p>Surat informal untuk keperluan pribadi:</p>
                    <ul>
                        <li>Surat ke teman atau keluarga</li>
                        <li>Surat ke kenalan</li>
                        <li>Surat yang less formal</li>
                    </ul>

                    <h3>Ciri Surat Informal</h3>
                    <ol>
                        <li>Bahasa santai dan akrab</li>
                        <li>Bisa menggunakan singkatan</li>
                        <li>Salam yang lebih fleksibel</li>
                        <li>Tidak perlu kop surat</li>
                    </ol>
                `
            },
            {
                title: "Contoh Surat Pribadi dan Keluarga",
                content: `
                    <h2>Contoh Surat Pribadi dan Keluarga</h2>
                    <h3>Surat untuk Orang Tua</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
Yth. Bapak dan Ibu yang saya cintai,

Alhamdulillah, saya sehat dan sedang menempuh pendidikan di kota dengan baik. 
Sekolahnya cukup menantang, tapi saya berusaha maksimal.

Ibu dan Bapak jangan lupa makan dan istirahat yang cukup. Jangan terlalu 
bekerja keras sampai lupa kesehatan.

Semoga Bapak dan Ibu selalu dalam lindungan Tuhan.

Anak yang merindukan,
[Your Name]
                    </pre>

                    <h3>Surat untuk Sahabat</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
Hai [Nama Sahabat]!

Gimana kabarnya? Lama tidak berkomunikasi, saya rindu cerita-cerita kita 
dulu. Semoga kamu sehat dan selalu happy.

Kita harus kapan-kapan ketemu ya! Ada banyak cerita yang ingin saya 
bagikan. Tunggu kabar dari kamu.

Best regards,
[Your Name]
                    </pre>
                `
            },
            {
                title: "Tips Menulis Surat yang Efektif",
                content: `
                    <h2>Tips Menulis Surat yang Efektif</h2>
                    <h3>1. Tujuan yang Jelas</h3>
                    <p>Sebelum menulis, tentukan:</p>
                    <ul>
                        <li>Apa tujuan surat ini?</li>
                        <li>Siapa pembacanya?</li>
                        <li>Apa yang diharapkan dari surat ini?</li>
                    </ul>

                    <h3>2. Struktur yang Logis</h3>
                    <ol>
                        <li>Pembuka: Latar belakang dan tujuan</li>
                        <li>Isi: Detail dan penjelasan</li>
                        <li>Penutup: Tindakan selanjutnya</li>
                    </ol>

                    <h3>3. Bahasa yang Tepat</h3>
                    <ul>
                        <li>Sesuaikan dengan pembaca</li>
                        <li>Gunakan kata-kata positif</li>
                        <li>Hindari kata-kata emosional</li>
                        <li>Jelas dan spesifik</li>
                    </ul>

                    <h3>4. Review dan Revisi</h3>
                    <p>Selalu review surat sebelum dikirim:</p>
                    <ol>
                        <li>Cek ejaan dan grammar</li>
                        <li>Pastikan informasi lengkap</li>
                        <li>Baca dari perspektif pembaca</li>
                        <li>Minta orang lain membaca</li>
                    </ol>

                    <h3>5. Format yang Tepat</h3>
                    <ul>
                        <li>Gunakan format standar</li>
                        <li>Spasi yang nyaman</li>
                        <li>Font yang mudah dibaca</li>
                        <li>Margin yang sesuai</li>
                    </ul>
                `
            },
            {
                title: "Kesalahan Umum dan Cara Menghindarinya",
                content: `
                    <h2>Kesalahan Umum dan Cara Menghindarinya</h2>
                    <h3>Kesalahan 1: Surat Terlalu Panjang</h3>
                    <p><strong>Masalah:</strong> Surat yang terlalu panjang membuat pembaca bosan.</p>
                    <p><strong>Solusi:</strong> Buat surat concise, maksimal 1 halaman untuk surat bisnis.</p>

                    <h3>Kesalahan 2: Bahasa yang Tidak Jelas</h3>
                    <p><strong>Masalah:</strong> Pesan tidak tersampaikan dengan baik.</p>
                    <p><strong>Solusi:</strong> Gunakan kalimat sederhana, hindari jargon.</p>

                    <h3>Kesalahan 3: Tidak ada Call to Action</h3>
                    <p><strong>Masalah:</strong> Pembaca tidak tahu apa yang harus dilakukan.</p>
                    <p><strong>Solusi:</strong> Sertakan instruksi yang jelas di bagian penutup.</p>

                    <h3>Kesalahan 4: Ejaan dan Grammar yang Buruk</h3>
                    <p><strong>Masalah:</strong> Surat terlihat tidak profesional.</p>
                    <p><strong>Solusi:</strong> Gunakan spell checker, proofread berkala.</p>

                    <h3>Kesalahan 5: Tone yang Tidak Sesuai</h3>
                    <p><strong>Masalah:</strong> Surat terlihat tidak sopan atau terlalu agresif.</p>
                    <p><strong>Solusi:</strong> Sesuaikan tone dengan tujuan dan pembaca.</p>

                    <h3>Checklist Sebelum Mengirim</h3>
                    <ul>
                        <li>✓ Semua informasi lengkap</li>
                        <li>✓ Tidak ada kesalahan ejaan</li>
                        <li>✓ Tujuan surat jelas</li>
                        <li>✓ Tone sesuai</li>
                        <li>✓ Format rapi</li>
                        <li>✓ Lampiran terlampir</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 8,
        title: "Surat-Menyurat dalam Bahasa Indonesia",
        author: "Prof. Dr. Lily Kurniawati",
        category: "korespondensi",
        year: "2024",
        pages: 350,
        rating: 4.6,
        isbn: "978-623-1234-08-4",
        publisher: "Penerbit UI Press",
        description: "Buku akademik tentang korespondensi dalam bahasa Indonesia dengan pendekatan linguistik. Menganalisis struktur, gaya bahasa, dan strategi komunikasi dalam surat-menyurat.",
        cover: "📝",
        chapters: [
            {
                title: "Linguistik dan Korespondensi",
                content: `
                    <h2>Linguistik dan Korespondensi</h2>
                    <h3>Aspek Linguistik</h3>
                    <p>Pemahaman linguistik penting untuk menulis surat yang efektif:</p>
                    <ul>
                        <li><strong>Fonologi:</strong> Pemilihan kata yang tepat</li>
                        <li><strong>Morfologi:</strong> Struktur kata</li>
                        <li><strong>Sintaksis:</strong> Struktur kalimat</li>
                        <li><strong>Semantik:</strong> Makna kata</li>
                        <li><strong>Pragmatik:</strong> Fungsi bahasa dalam konteks</li>
                    </ul>

                    <h3>Register dalam Korespondensi</h3>
                    <p>Variasi bahasa sesuai situasi:</p>
                    <ul>
                        <li>Frozen: Sangat formal dan baku</li>
                        <li>Formal: Bahasa resmi</li>
                        <li>Consultative: Semi-formal</li>
                        <li>Casual: Informal</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 10,
        title: "Korespondensi dan Protokoler",
        author: "Hj. Fatimah Zahra, M.M.",
        category: "korespondensi",
        year: "2024",
        pages: 290,
        rating: 4.4,
        isbn: "978-623-1234-10-7",
        publisher: "Penerbit Sinar Grafika",
        description: "Buku tentang protokoler dan korespondensi di lingkungan pemerintahan. Mencakup tata cara penulisan surat resmi, protokoler acara, dan komunikasi dengan pejabat.",
        cover: "🏛️",
        chapters: [
            {
                title: "Konsep Protokoler",
                content: `
                    <h2>Konsep Protokoler</h2>
                    <h3>Apa Itu Protokoler?</h3>
                    <p>Protokoler adalah sekumpulan aturan, norma, dan tata cara yang mengatur hubungan antar individu, instansi, atau negara dalam konteks resmi.</p>

                    <h3>Prinsip Dasar</h3>
                    <ol>
                        <li>Prinsip Hierarki</li>
                        <li>Prinsip Kesetaraan</li>
                        <li>Prinsip Kesopanan</li>
                        <li>Prinsip Konsistensi</li>
                    </ol>

                    <h3>Jenis-Jenis Protokoler</h3>
                    <ul>
                        <li>Protokoler Pemerintah</li>
                        <li>Protokoler Diplomatik</li>
                        <li>Protokoler Korporat</li>
                        <li>Protokoler Sosial</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 15,
        title: "Kumpulan Cerita Pendek Inspiratif",
        author: "Various Authors",
        category: "cerita",
        year: "2024",
        pages: 250,
        rating: 4.5,
        isbn: "978-623-1234-15-2",
        publisher: "Penerbit Cerita",
        description: "Kumpulan cerita pendek yang penuh inspirasi dan motivasi. Setiap cerita memberikan pelajaran berharga tentang kehidupan, perjuangan, dan kegigihan.",
        cover: "📖",
        chapters: [
            {
                title: "Kisah Sukses dari Nol",
                content: `
                    <h2>Kisah Sukses dari Nol</h2>
                    <h3>Jalan yang Tidak Mudah</h3>
                    <p>Di sebuah desa kecil, hiduplah seorang pemuda bernama Andi. Andi tumbuh dalam keluarga yang sangat miskin. Setiap hari ia harus berjalan 5 kilometer ke sekolah, dan sering kali tidak memiliki cukup makanan.</p>

                    <h3>Perjuangan dan Tekad</h3>
                    <p>Meskipun kondisi tidak menguntungkan, Andi memiliki tekad yang kuat. Ia berkata pada dirinya sendiri: "Someday, I will make my family proud." Setiap malam, setelah membantu orang tuanya di toko kecil mereka, Andi belajar dengan cahaya lilin.</p>

                    <h3>Momen Penentu</h3>
                    <p>Saat SMA, Andi mendapatkan beasiswa dari organisasi nirlaba. Ini adalah momen yang mengubah hidupnya. Dengan beasiswa tersebut, ia bisa fokus belajar tanpa perlu khawatir tentang biaya hidup.</p>

                    <h3>Prestasi dan Pengakuan</h3>
                    <p>Andi masuk ke universitas terbaik di negara ini. Ia mempelajari ilmu komputer dan lulus dengan cum laude. Setelah lulus, ia diterima di perusahaan teknologi terkemuka internasional.</p>

                    <h3>Pelajaran dari Kisah Andi</h3>
                    <ol>
                        <li><strong>Tekad:</strong> Keinginan yang kuat adalah langkah pertama</li>
                        <li><strong>Konsistensi:</strong> Langkah kecil setiap hari menghasilkan perubahan besar</li>
                        <li><strong>Optimisme:</strong> Percaya pada diri sendiri meskipun orang lain meragukan</li>
                        <li><strong>Gratitude:</strong> Jangan pernah lupa dari mana kamu berasal</li>
                    </ol>
                `
            },
            {
                title: "Kebersamaan yang Mengubah Hidup",
                content: `
                    <h2>Kebersamaan yang Mengubah Hidup</h2>
                    <h3>Desa yang Terisolasi</h3>
                    <p>Di pegunungan Jawa Barat, ada desa terpencil yang sulit diakses. Masyarakatnya hidup dari pertanian dan sangat terbelakang. Tidak ada listrik, tidak ada jalan aspal, dan sekolah hanya sampai kelas 3 SD.</p>

                    <h3>Guru yang Berdedikasi</h3>
                    <p>Suatu hari, datanglah seorang guru muda bernama Bu Sari. Ia relakan karirnya di kota untuk mengajar di desa ini. Dengan semangat yang tinggi, Bu Sari mulai mengajar anak-anak desa.</p>

                    <h3>Perubahan Bertahap</h3>
                    <p>Bu Sari tidak hanya mengajar, tetapi juga:</p>
                    <ul>
                        <li>Mengajarkan kebersihan dan kesehatan</li>
                        <li>Membuka kelas untuk orang dewasa</li>
                        <li>Membantu petani dengan teknik pertanian modern</li>
                        <li>Mendirikan perpustakaan kecil</li>
                    </ul>

                    <h3>Hasil yang Luar Biasa</h3>
                    <p>Dalam 5 tahun, desa itu berubah total:</p>
                    <ol>
                        <li>Semua anak bisa membaca dan menulis</li>
                        <li>Beberapa siswa masuk ke SMA di kota</li>
                        <li>Pendapatan petani meningkat 200%</li>
                        <li>Desa mendapat bantuan untuk listrik dan jalan</li>
                    </ol>

                    <h3>Pesan Moral</h3>
                    <p>Kisah ini mengajarkan kita bahwa satu orang yang peduli bisa membuat perubahan besar. Kebersamaan dan dedikasi adalah kunci untuk mengubah kehidupan banyak orang.</p>
                `
            },
            {
                title: "Jangan Pernah Menyerah",
                content: `
                    <h2>Jangan Pernah Menyerah</h2>
                    <h3>Atlet yang Luar Biasa</h3>
                    <p>Rina adalah atlet lari maraton berbakat. Setiap lomba, ia selalu masuk 3 besar. Namun, saat latihan untuk Olimpiade, Rina mengalami kecelakaan yang parah. Kakinya patah dan dokter mengatakan ia mungkin tidak bisa berlari lagi.</p>

                    <h3>Perjuangan Pemulihan</h3>
                    <p>Rina tidak mau menyerah. Ia melalui proses pemulihan yang sangat sulit:</p>
                    <ul>
                        <li>Fisioterapi intensif setiap hari</li>
                        <li>Operasi berulang kali</li>
                        <li>Nyeri yang tak tertahankan</li>
                        <li>Proses rehabilitasi yang panjang</li>
                    </ul>

                    <h3>Kembali ke Jalur</h3>
                    <p>Setelah 2 tahun perjuangan, Rina akhirnya bisa berjalan lagi. Ia mulai berlari perlahan-lahan. Meskipun lambat, ia terus berlatih dengan konsisten.</p>

                    <h3>Kemenangan di Olimpiade</h3>
                    <p>4 tahun setelah kecelakaan, Rina berhasil masuk tim nasional. Di Olimpiade, ia memenangkan medali emas. Saat memegang medali, Rina menangis. Bukan karena kemenangan, tapi karena semua perjuangannya terbayar.</p>

                    <h3>Inspirasi dari Rina</h3>
                    <ol>
                        <li><strong>Mentalitas:</strong> Jangan pernah menyerah meskipun sulit</li>
                        <li><strong>Konsistensi:</strong> Langkah kecil setiap hari matters</li>
                        <li><strong>Support System:</strong> Keluarga dan teman adalah kekuatan</li>
                        <li><strong>Purpose:</strong> Tujuan yang jelas membuat kita kuat</li>
                    </ol>
                `
            },
            {
                title: "Kisah Ibu yang Hebat",
                content: `
                    <h2>Kisah Ibu yang Hebat</h2>
                    <h3>Keluarga yang Sederhana</h3>
                    <p>Ibu Siti adalah seorang janda dengan 3 anak. Ia bekerja sebagai pembantu rumah tangga dengan gaji yang sangat kecil. Setiap hari, ia bangun sebelum subuh untuk membersihkan rumah majiknya sebelum pergi bekerja.</p>

                    <h3>Pengorbanan yang Tak Terhingga</h3>
                    <p>Ibu Siti selalu mengutamakan kebutuhan anak-anaknya:</p>
                    <ul>
                        <li>Menyediakan makanan meskipun ia sendiri sering kelaparan</li>
                        <li>Membayar sekolah anak-anaknya meskipun harus pinjam uang</li>
                        <li>Tidak pernah membeli pakaian baru untuk dirinya</li>
                        <li>Bekerja 16 jam sehari tanpa keluhan</li>
                    </ul>

                    <h3>Anak-anak yang Berprestasi</h3>
                    <p>Dengan pengorbanan Ibu Siti, ketiga anaknya berhasil:</p>
                    <ol>
                        <li>Anak pertama menjadi dokter</li>
                        <li>Anak kedua menjadi insinyur</li>
                        <li>Anak ketiga menjadi guru</li>
                    </ol>

                    <h3>Hari yang Ditunggu</h3>
                    <p>Sa</p>
                `
            },
            {
                title: "Mengubah Misfortune menjadi Keberuntungan",
                content: `
                    <h2>Mengubah Misfortune menjadi Keberuntungan</h2>
                    <h3>Pecahnya Usaha Pertama</h3>
                    <p>Pak Ahmad memulai usaha warung kopi kecil. Setiap pagi, ia membuka warungnya dengan penuh semangat. Namun, setelah 6 bulan, warungnya tutup karena kurang pelanggan. Ia sangat kecewa dan hampir menyerah.</p>

                    <h3>Krisis yang Menjadi Peluang</h3>
                    <p>Setelah warung tutup, Pak Ahmad memulai kembali dari nol. Ia menganalisis mengapa warungnya gagal:</p>
                    <ul>
                        <li>Lokasi yang kurang strategis</li>
                        <li>Menu yang terlalu banyak</li>
                        <li>Harga yang tidak kompetitif</li>
                        <li>Pelayanan yang kurang</li>
                    </ul>

                    <h3>Strategi Baru</h3>
                    <p>Pak Ahmad memulai kembali dengan strategi berbeda:</p>
                    <ol>
                        <li>Mencari lokasi yang lebih strategis</li>
                        <li>Fokus pada kopi specialty saja</li>
                        <li>Harga yang terjangkau</li>
                        <li>Pelayanan yang ramah dan cepat</li>
                    </ol>

                    <h3>Keberhasulan yang Luar Biasa</h3>
                    <p>Warung kopi kedua Pak Ahmad menjadi sangat sukses. Dalam 2 tahun, ia membuka 5 cabang. Kini, Pak Ahmad menjadi pengusaha kopi ternama di kotanya.</p>

                    <h3>Pelajaran dari Pak Ahmad</h3>
                    <p>Kegagalan bukanlah akhir. Kegagalan adalah pelajaran yang membuat kita lebih kuat dan lebih bijak.</p>
                `
            },
            {
                title: "Kisah Persahabatan yang Abadi",
                content: `
                    <h2>Kisah Persahabatan yang Abadi</h2>
                    <h3>Bertemu di Masa Sulit</h3>
                    <p>Di sekolah asrama, ada dua anak yang selalu sendiri. Budi adalah anak dari keluarga miskin yang mendapat beasiswa. Sementara itu, Anto adalah anak kaya yang merasa tidak cocok dengan lingkungan sekolah.</p>

                    <h3>Menggapai Mimpi Bersama</h3>
                    <p>Mereka bertemu di perpustakaan. Budi sedang mencari buku sastra, Anto sedang mencari buku bisnis. Mereka mulai berbincang dan menemukan kesamaan minat.</p>

                    <h3>Dukungan dan Keberhasilan</h3>
                    <p>Mereka menjadi sahabat yang selalu mendukung:</p>
                    <ul>
                        <li>Budi membantu Anto memahami kehidupan sederhana</li>
                        <li>Anto membantu Budi dengan akses ke resources</li>
                        <li>Bersama-sama mereka belajar dan berkembang</li>
                    </ul>

                    <h3>Kisah yang Berlanjut</h3>
                    <p>Setelah lulus sekolah, mereka memulai bisnis bersama. Budi yang ahli di bidang kreatif dan Anto yang ahli di bidang bisnis. Perusahaan mereka berkembang pesat dan menjadi salah satu startup terbaik di Indonesia.</p>

                    <h3>Nilai Persahabatan</h3>
                    <p>Persahabatan sejati tidak memandang latar belakang. Persahabatan adalah tentang saling mendukung dan berkembang bersama.</p>
                `
            }
        ]
    },
    {
        id: 16,
        title: "Dongeng Klasik Indonesia",
        author: "Various Authors",
        category: "cerita",
        year: "2024",
        pages: 180,
        rating: 4.6,
        isbn: "978-623-1234-16-9",
        publisher: "Penerbit Cerita",
        description: "Kumpulan dongeng klasik Indonesia yang diwariskan dari generasi ke generasi. Berisi kisah-kisah yang penuh nilai moral dan ajaran kehidupan.",
        cover: "🧚",
        chapters: [
            {
                title: "Legenda Danau Toba",
                content: `
                    <h2>Legenda Danau Toba</h2>
                    <h3>Jaman Dahulu Kala</h3>
                    <p>Di zaman dahulu, hiduplah seorang pemuda bernama Toba. Ia adalah seorang petani yang tinggal di sebuah desa di Sumatera Utara. Toba dikenal sebagai pemuda yang kuat, baik hati, dan pekerja keras.</p>

                    <h3>Kisah yang Mengubah Segalanya</h3>
                    <p>Suatu hari, saat sedang menangkap ikan di sungai, Toba menemukan seekor ikan yang sangat indah. Ia membawa ikan itu pulang dan menyimpannya dalam sebuah tempayan. Keesokan harinya, Toba terkejut ketika melihat ikan itu telah berubah menjadi seorang gadis cantik.</p>

                    <h3>Perjanjian yang Harus Ditepati</h3>
                    <p>Gadis itu memperkenalkan diri sebagai putri ikan. Ia meminta Toba untuk tidak pernah memberitahu asal-usulnya kepada siapapun. Jika perjanjian itu dilanggar, akan terjadi bencana besar. Toba berjanji dan mereka eventually menikah.</p>

                    <h3>Kehidupan Bersama</h3>
                    <p>Mereka hidup bahagia dan memiliki seorang anak laki-laki. Namun, seiring berjalannya waktu, Toba mulai melupakan perjanjiannya. Suatu hari, dalam kemarahannya, Toba menyebut istrinya sebagai ikan.</p>

                    <h3>Bencana yang Datang</h3>
                    <p>Segera setelah itu, terjadi gempa bumi hebat. Air laut naik dan menenggelamkan desa mereka. Danau Toba terbentuk dari tempat desa itu berada. Toba dan keluarganya harus meninggalkan tempat itu.</p>

                    <h3>Pelajaran Moral</h3>
                    <ol>
                        <li><strong>Menepati Janji:</strong> Jangan pernah melanggar perjanjian</li>
                        <li><strong>Menghormati Orang Tua:</strong> Dengarkan nasihat</li>
                        <li><strong>Sifat Sombong:</strong> Sombong dapat menghancurkan</li>
                        <li><strong>Konsekuensi:</strong> Setiap tindakan memiliki akibat</li>
                    </ol>
                `
            },
            {
                title: "Legenda Sangkuriang",
                content: `
                    <h2>Legenda Sangkuriang</h2>
                    <h3>Kisah Cinta yang Tragis</h3>
                    <p>Di Jawa Barat, hiduplah seorang putri cantik bernama Dayang Sumbi. Ia memiliki seorang putra bernama Sangkuriang. Karena kesalahan yang dilakukan, Sangkuriang diusir dari rumah.</p>

                    <h3>Kembali dan Cinta yang Terlarang</h3>
                    <p>Bertahun kemudian, Sangkuriang kembali sebagai pemuda yang kuat dan gagah. Ia tidak mengenali ibunya dan jatuh cinta kepadanya. Dayang Sumbi mengenali Sangkuriang tetapi tidak berani mengungkapkan kebenaran.</p>

                    <h3>Perintah yang Mustahil</h3>
                    <p>Ketika Sangkuriang meminta Dayang Sumbi untuk menikah, ia memberikan syarat yang mustahil:</p>
                    <ul>
                        <li>Membuat danau dalam satu malam</li>
                        <li>Membuat perahu dari kayu</li>
                    </ul>

                    <h3>Kegigihan dan Keterpurukan</h3>
                    <p>Sangkuriang mulai mengerjakan tugas itu dengan bantuan jin. Ia hampir berhasil ketika Dayang Sumbi menggagalkan rencananya dengan mengadukan kain putih ke timur.</p>

                    <h3>Pembentukan Gunung Tangkuban Perahu</h3>
                    <p>Melihat kegagalannya, Sangkuriang menendang perahu yang sedang dibuat. Perahu itu terbalik dan menjadi Gunung Tangkuban Perahu. Danau yang sedang digali menjadi Situ Bandung.</p>

                    <h3>Pesan dari Legenda</h3>
                    <p>Kisah ini mengajarkan kita tentang pentingnya mengenali batasan dan menghormati hubungan keluarga.</p>
                `
            },
            {
                title: "Legenda Banyuwangi",
                content: `
                    <h2>Legenda Banyuwangi</h2>
                    <h3>Asal Usul Nama Banyuwangi</h3>
                    <p>Banyuwangi adalah kota di ujung timur Jawa. Nama kota ini berasal dari kata "Banyu" (air) dan "Wang" (wangsa/keturunan). Legenda ini berkaitan dengan kerajaan Blambangan.</p>

                    <h3>Kisah Putri dan Pangeran</h3>
                    <p>Ada seorang putri cantik dari kerajaan Blambangan yang jatuh cinta pada seorang pangeran dari kerajaan lain. Namun, pernikahan mereka ditolak karena perbedaan keyakinan.</p>

                    <h3>Pengorbanan dan Air Mata</h3>
                    <p>Putri itu sangat sedih. Air matanya mengalir deras dan membentuk sungai. Air mata itu kemudian bertemu dengan laut, menciptakan tempat yang dinamai Banyuwangi.</p>

                    <h3>Makna yang Terkandung</h3>
                    <p>Legenda ini menceritakan tentang:</p>
                    <ul>
                        <li>Pengorbanan demi cinta</li>
                        <li>Kekuatan air mata yang bisa mengubah geografi</li>
                        <li>Asal-usul nama daerah yang penuh makna</li>
                    </ul>

                    <h3>Pelajaran dari Legenda</h3>
                    <p>Cinta sejati membutuhkan pengorbanan. Dan terkadang, pengorbanan itu bisa menciptakan sesuatu yang indah dan bernilai untuk generasi mendatang.</p>
                `
            },
            {
                title: "Kisah Naga dan Putri Dangai",
                content: `
                    <h2>Kisah Naga dan Putri Dangai</h2>
                    <h3>Naga yang Baik Hati</h3>
                    <p>Di Kalimantan Barat, hiduplah seekor naga yang baik hati. Naga itu tinggal di gunung dan sering membantu masyarakat desa yang membutuhkan.</p>

                    <h3>Anak-anak yang Berani</h3>
                    <p>Suatu hari, ada dua anak-anak yang ingin bertemu naga. Mereka membawa persembahan dan berjalan menuju gunung. Di tengah perjalanan, mereka bertemu dengan naga.</p>

                    <h3>Ujian Keberanian</h3>
                    <p>Naga memberikan ujian kepada kedua anak itu:</p>
                    <ul>
                        <li>Mengambil telur naga dari sarang</li>
                        <li>Menyeberangi sungai berbahaya</li>
                        <li>Mengatasi rasa takut mereka</li>
                    </ul>

                    <h3>Kisah yang Berakhir Baik</h3>
                    <p>Kedua anak itu berhasil mengatasi semua ujian. Naga memberikan mereka hadiah berupa biji-bijian ajaib yang bisa menumbuhkan tanaman dalam jumlah banyak.</p>

                    <h3>Nilai yang Terkandung</h3>
                    <p>Kisah ini mengajarkan keberanian, kejujuran, dan kebaikan hati. Naga yang seharusnya menakutkan ternyata baik hati kepada mereka yang baik.</p>
                `
            },
            {
                title: "Legenda Batu Menangis",
                content: `
                    <h2>Legenda Batu Menangis</h2>
                    <h3>Kisah Cinta yang Patah</h3>
                    <p>Di sebuah desa di Jawa Tengah, ada seorang pemuda yang sangat mencintai seorang gadis. Namun, gadis itu dipaksa menikah dengan orang lain yang kaya.</p>

                    <h3>Air Mata yang Membatu</h3>
                    <p>Pemuda itu sangat sedih. Ia duduk di batu besar dan menangis selama berhari-hari. Air matanya begitu banyak hingga membatu. Batu itu kemudian dikenal sebagai "Batu Menangis".</p>

                    <h3>Kisah yang Terus Dikenang</h3>
                    <p>Masyarakat desa percaya bahwa batu itu masih menangis hingga hari ini. Setiap kali hujan turun, terdengar suara tangisan dari batu itu.</p>

                    <h3>Pesan dari Legenda</h3>
                    <p>Kisah ini mengajarkan tentang:</p>
                    <ul>
                        <li>Kekuatan cinta yang sejati</li>
                        <li>Kesedihan yang bisa bertahan selamanya</li>
                        <li>Kenangan yang tidak pernah pudar</li>
                    </ul>

                    <h3>Kesimpulan</h3>
                    <p>Legenda Batu Menangis adalah pengingat bahwa cinta sejati adalah sesuatu yang sakral dan harus dihargai.</p>
                `
            }
        ]
    },
    {
        id: 18,
        title: "Cerita Rakyat Nusantara",
        author: "Various Authors",
        category: "cerita",
        year: "2024",
        pages: 220,
        rating: 4.8,
        isbn: "978-623-1234-18-3",
        publisher: "Penerbit Cerita",
        description: "Kumpulan cerita rakyat dari berbagai daerah di Indonesia. Setiap cerita mengandung nilai-nilai luhur bangsa dan kearifan lokal.",
        cover: "🏝️",
        chapters: [
            {
                title: "Malin Kundang",
                content: `
                    <h2>Malin Kundang</h2>
                    <h3>Asal Usul Malin Kundang</h3>
                    <p>Di sebuah desa di Sumatera Barat, hiduplah seorang janda bernama Mande Rubayah bersama putranya yang bernama Malin Kundang. Mereka hidup dalam kemiskinan, tetapi Mande Rubayah bekerja keras untuk menyekolahkan putranya.</p>

                    <h3>Perjalanan Malin Kundang</h3>
                    <p>Setelah dewasa, Malin Kundang meminta izin kepada ibunya untuk merantau mencari pekerjaan di kota. Dengan berat hati, Mande Rubayah membiarkan putranya pergi.</p>

                    <h3>Kesuksesan dan Penolakan</h3>
                    <p>Bertahun-tahun berlalu, Malin Kundang berhasil menjadi saudagar kaya. Namun ketika bertemu ibunya yang miskin, ia merasa malu dan menyangkalnya.</p>

                    <h3>Kutukan dan Konsekuensi</h3>
                    <p>Mande Rubayah yang sedih memanjatkan doa. Ia meminta Tuhan untuk mengajar putranya yang somong itu. Tiba-tiba, Malin Kundang dan keluarganya berubah menjadi batu.</p>

                    <h3>Pelajaran dari Cerita</h3>
                    <ol>
                        <li><strong>Bakti kepada Orang Tua:</strong> Jangan pernah melupakan orang tua</li>
                        <li><strong>Kesombongan:</strong> Kesombongan dapat menghancurkan</li>
                        <li><strong>Rasa Syukur:</strong> Jangan lupa akan asal-usul</li>
                        <li><strong>Konsekuensi:</strong> Setiap perbuatan ada balasannya</li>
                    </ol>

                    <h3>Warisan yang Tetap</h3>
                    <p>Kisah Malin Kundang hingga kini tetap hidup di Sumatera Barat. Batu-batu yang diduga adalah Malin Kundang dan keluarganya menjadi objek wisata dan pengingat akan pentingnya bakti kepada orang tua.</p>
                `
            },
            {
                title: "Legenda Roro Jonggrang",
                content: `
                    <h2>Legenda Roro Jonggrang</h2>
                    <h3>Candi yang Ditinggalkan</h3>
                    <p>Di Jawa Tengah, ada legenda tentang pembangunan Candi Prambanan. Bandung Bondowoso, seorang pangeran yang kuat, ingin menikahi Roro Jonggrang, putri cantik dari kerajaan sebelah.</p>

                    <h3>Syarat yang Mustahil</h3>
                    <p>Roro Jonggrang tidak ingin menikah dengan Bandung Bondowoso. Ia memberikan syarat yang mustahil: membangun 1000 candi dalam satu malam.</p>

                    <h3>Upaya dan Tipu Muslihat</h3>
                    <p>Bandung Bondowoso memulai pembangunan dengan bantuan jin. Ketika hampir selesai, Roro Jonggrang melakukan trik:</p>
                    <ul>
                        <li>Membangun api unggun di timur</li>
                        <li>Memotong tebu untuk menciptakan suara seperti pagi</li>
                        <li>Menggiring ayam untuk berkokok</li>
                    </ul>

                    <h3>Kegagalan dan Kutukan</h3>
                    <p>Jin pun pergi karena mengira pagi telah tiba. Bandung Bondowoso marah karena hanya 999 candi yang selesai. Ia mengutuk Roro Jonggrang menjadi patung batu.</p>

                    <h3>Pesan dari Legenda</h3>
                    <p>Kisah ini mengajarkan tentang kecerdikan women dan konsekuensi dari tipu muslihat. Candi Prambanan yang belum selesai menjadi bukti dari kisah tragis ini.</p>
                `
            },
            {
                title: "Si Pahit Lidah",
                content: `
                    <h2>Si Pahit Lidah</h2>
                    <h3>Anak yang Dihukum</h3>
                    <p>Di sebuah desa di Jawa Timur, hiduplah seorang anak bernama Jaka. Ia dikenal sebagai anak yang baik dan jujur. Namun, ia memiliki satu kelebihan: lidahnya yang pahit.</p>

                    <h3>Kisah yang Mengubah Nasib</h3>
                    <p>Suatu hari, Jaka menemukan dompet yang berisi uang banyak. Ia mengembalikannya kepada pemiliknya yang sangat kaya. Pemilik itu ingin memberikan hadiah, tetapi Jaka menolak.</p>

                    <h3>Ujian Kejujuran</h3>
                    <p>Pemilik dompet itu kemudian menguji Jaka dengan berbagai cara:</p>
                    <ul>
                        <li>Memberi uang untuk dibelikan sesuatu</li>
                        <li>Mengajak bekerja di perusahaan</li>
                        <li>Menguji kesabaran dan kejujuran</li>
                    </ul>

                    <h3>Kisah yang Berakhir Baik</h3>
                    <p>Jaka lulus semua ujian. Ia diangkat sebagai manajer di perusahaan itu. Lidah pahitnya yang sebenarnya adalah simbol dari kejujuran dan kejujuran yang tinggi.</p>

                    <h3>Pelajaran dari Jaka</h3>
                    <p>Kejujuran adalah harta yang paling berharga. Orang yang jujur akan selalu mendapatkan keberuntungan.</p>
                `
            },
            {
                title: "Legenda Batu Gajah",
                content: `
                    <h2>Legenda Batu Gajah</h2>
                    <h3>Gajah yang Terperangkap</h3>
                    <p>Di Aceh, ada legenda tentang seekor gajah yang terjebak di dalam batu. Gajah itu adalah simbol dari keberanian dan kekuatan.</p>

                    <h3>Kisah Pahlawan</h3>
                    <p>Suatu hari, ada seorang pahlawan yang berjuang melawan penjajah. Ia memiliki kekuatan seperti gajah. Dalam pertempuran, ia terjebak di dalam batu.</p>

                    <h3>Warisan yang Tetap</h3>
                    <p>Batu Gajah itu masih ada hingga hari ini. Masyarakat setempat percaya bahwa batu itu memiliki kekuatan magis. Mereka sering datang untuk berdoa dan meminta perlindungan.</p>

                    <h3>Nilai yang Terkandung</h3>
                    <p>Kisah ini mengajarkan tentang:</p>
                    <ul>
                        <li>Keberanian dalam melawan ketidakadilan</li>
                        <li>Pengorbanan untuk negara</li>
                        <li>Warisan yang ditinggalkan untuk generasi mendatang</li>
                    </ul>

                    <h3>Pesan untuk Generasi Muda</h3>
                    <p>Kisah Batu Gajah mengingatkan kita untuk selalu berani melawan kebatilan dan mempertahankan kebenaran.</p>
                `
            },
            {
                title: "Asal Usul Danau Segara Anak",
                content: `
                    <h2>Asal Usul Danau Segara Anak</h2>
                    <h3>Gunung Berapi yang Aktif</h3>
                    <p>Di Banten, ada gunung berapi yang dikenal sebagai Gunung Krakatau. Gunung ini pernah meletus dengan sangat hebat dan menciptakan danau yang indah.</p>

                    <h3>Kisah Ratu yang Bijaksana</h3>
                    <p>Suatu zaman, ada ratu yang sangat bijaksana. Ia memerintah dengan adil dan selalu mendengarkan rakyatnya. Ketika gunung meletus, ratu itu memimpin evakuasi dengan tenang.</p>

                    <h3>Pembentukan Danau</h3>
                    <p>Letusan gunung menciptakan kawah yang kemudian terisi air. Danau itu kemudian dikenal sebagai Danau Segara Anak. Airnya yang biru jernih menjadi daya tarik wisata.</p>

                    <h3>Pelajaran dari Alam</h3>
                    <p>Kisah ini mengajarkan bahwa:</p>
                    <ul>
                        <li>Alam memiliki kekuatan yang luar biasa</li>
                        <li>Kepemimpinan yang baik bisa menyelamatkan banyak nyawa</li>
                        <li>Bencana bisa menciptakan keindahan baru</li>
                    </ul>

                    <h3>Warisan Alam</h3>
                    <p>Danau Segara Anak kini menjadi warisan alam yang dilindungi. Ia mengingatkan kita akan kekuatan alam dan pentingnya menjaga lingkungan.</p>
                `
            }
        ]
    }
];

// ==================== NAVIGATION ====================
let booksVisible = false;

function showDashboard() {
    document.getElementById('homeScreen').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
    currentScreen = 'dashboard';
    
    // Automatically show home section content
    const container = document.getElementById('booksGrid');
    container.style.display = 'grid';
    
    // Show bookmarked books by default
    renderBookmarkedBooks();
    
    // Set home button as active
    document.querySelectorAll('.nav-btn[data-category]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.nav-btn[data-category="home"]').classList.add('active');
}

function toggleBooks() {
    const container = document.getElementById('booksGrid');
    const toggleBtn = document.getElementById('toggleBooksBtn');
    booksVisible = !booksVisible;
    
    if (booksVisible) {
        // Show books
        container.style.display = 'grid';
        toggleBtn.innerHTML = '🙈 Sembunyikan Buku';
        // Render books based on current category
        if (currentCategory === 'home') {
            renderBookmarkedBooks();
        } else {
            renderBooks(currentCategory === 'all' ? 'all' : currentCategory);
        }
    } else {
        // Hide books
        container.style.display = 'none';
        toggleBtn.innerHTML = '📚 Tampilkan Buku';
    }
}

function showHomeInfo() {
    document.getElementById('homeScreen').classList.remove('active');
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('homeInfo').classList.add('active');
    currentScreen = 'homeInfo';
}

function showHomeScreen() {
    document.getElementById('homeInfo').classList.remove('active');
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('homeScreen').classList.add('active');
    currentScreen = 'homeScreen';
}

function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('homeScreen').classList.add('active');
        currentScreen = 'homeScreen';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside on mobile
window.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    
    if (window.innerWidth <= 768 && sidebar && hamburgerMenu && !sidebar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Category navigation
document.querySelectorAll('.nav-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.nav-btn[data-category]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        currentCategory = category;
        
        // Show books grid when category is selected
        const container = document.getElementById('booksGrid');
        container.style.display = 'grid';
        
        if (category === 'home') {
            renderBookmarkedBooks();
        } else {
            renderBooks(category);
        }
    });
});

// ==================== RENDER FUNCTIONS ====================
function renderBooks(category) {
    const container = document.getElementById('booksGrid');
    let filteredBooks = booksData;
    
    if (category !== 'all') {
        filteredBooks = booksData.filter(book => book.category === category);
    }
    
    container.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');
}

function renderBookmarkedBooks() {
    const container = document.getElementById('booksGrid');
    const welcomeSection = document.querySelector('.welcome-section');
    
    // Filter books that are bookmarked
    const bookmarked = booksData.filter(book => bookmarkedBooks.includes(book.id));
    
    // Update welcome message
    if (bookmarked.length > 0) {
        welcomeSection.innerHTML = `
            <h2>📚 Buku Tersimpan</h2>
            <p>Anda memiliki ${bookmarked.length} buku yang disimpan untuk dibaca kembali</p>
        `;
    } else {
        welcomeSection.innerHTML = `
            <h2>📚 Buku Tersimpan</h2>
            <p>Belum ada buku yang disimpan. Mulai bookmark buku favorit Anda!</p>
        `;
    }
    
    // Render bookmarked books
    if (bookmarked.length > 0) {
        container.innerHTML = bookmarked.map(book => createBookCard(book)).join('');
    } else {
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: white; animation: fadeInUp 0.8s ease-out;">
                <div style="font-size: 100px; margin-bottom: 25px; animation: float 3s ease-in-out infinite; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3));">
                    📚
                </div>
                
                <div style="background: rgba(255,255,255,0.12); backdrop-filter: blur(15px); border: 2px solid rgba(255,255,255,0.25); border-radius: 24px; padding: 35px 30px; max-width: 550px; margin: 0 auto; box-shadow: 0 15px 50px rgba(0,0,0,0.25);">
                    <h3 style="font-size: 28px; margin-bottom: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: 700; color: #fff;">
                        Belum Ada Buku Tersimpan
                    </h3>
                    
                    <div style="background: rgba(255,255,255,0.15); border-left: 4px solid #f59e0b; padding: 18px 20px; border-radius: 12px; margin-bottom: 20px; text-align: left;">
                        <p style="font-size: 15px; line-height: 1.7; opacity: 0.95; margin: 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">
                            <strong style="color: #fbbf24;">💡 Cara Menyimpan Buku:</strong>
                        </p>
                        <ol style="font-size: 14px; line-height: 1.8; opacity: 0.95; margin: 12px 0 0 0; padding-left: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">
                            <li>Pilih kategori buku di menu samping</li>
                            <li>Klik tombol <strong>"ℹ️ Detail"</strong> pada buku</li>
                            <li>Klik <strong>"🤍 Simpan"</strong> untuk menyimpan</li>
                            <li>Buku akan muncul di sini</li>
                        </ol>
                    </div>
                    
                    <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                        <div style="background: rgba(255,255,255,0.2); padding: 10px 18px; border-radius: 50px; font-size: 13px; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.3);">
                            📂 Pilih Kategori
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 10px 18px; border-radius: 50px; font-size: 13px; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.3);">
                            ℹ️ Klik Detail
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 10px 18px; border-radius: 50px; font-size: 13px; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.3);">
                            💝 Klik Simpan
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function createBookCard(book) {
    const isBookmarked = bookmarkedBooks.includes(book.id);
    
    return `
        <div class="book-card">
            <div class="book-card-header">
                <span class="book-cover">${book.cover}</span>
                <span class="book-category">${getCategoryLabel(book.category)}</span>
            </div>
            <div class="book-card-body">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-meta">
                    <span>📅 ${book.year} • 📄 ${book.pages} halaman</span>
                    <span class="book-rating">⭐ ${book.rating}</span>
                </div>
            </div>
            <div class="book-card-footer">
                <button class="btn-book btn-read" onclick="openBookReader(${book.id})">
                    📚 Baca
                </button>
                <button class="btn-book btn-detail" onclick="showBookDetail(${book.id})">
                    ℹ️ Detail
                </button>
            </div>
        </div>
    `;
}

function getCategoryLabel(category) {
    const labels = {
        'korespondensi': 'Korespondensi',
        'kearsipan': 'Kearsipan',
        'cerita': 'Cerita'
    };
    return labels[category] || category;
}

// ==================== BOOK DETAIL ====================
function showBookDetail(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    currentBook = book;
    const isBookmarked = bookmarkedBooks.includes(book.id);

    document.getElementById('bookDetailTitle').textContent = book.title;
    
    document.getElementById('bookDetailContent').innerHTML = `
        <div class="book-detail-header">
            <div class="book-detail-cover">${book.cover}</div>
            <div class="book-detail-info">
                <h2 class="book-detail-title">${book.title}</h2>
                <p class="book-detail-author">${book.author}</p>
                <div class="book-detail-meta">
                    <div class="book-detail-meta-item">
                        <strong>Kategori:</strong>
                        <span class="book-category" style="position: static; display: inline-block;">${getCategoryLabel(book.category)}</span>
                    </div>
                    <div class="book-detail-meta-item">
                        <strong>Penerbit:</strong>
                        <span>${book.publisher}</span>
                    </div>
                    <div class="book-detail-meta-item">
                        <strong>Tahun:</strong>
                        <span>${book.year}</span>
                    </div>
                    <div class="book-detail-meta-item">
                        <strong>Halaman:</strong>
                        <span>${book.pages} halaman</span>
                    </div>
                    <div class="book-detail-meta-item">
                        <strong>ISBN:</strong>
                        <span>${book.isbn}</span>
                    </div>
                    <div class="book-detail-meta-item">
                        <strong>Rating:</strong>
                        <span class="book-rating">⭐ ${book.rating} / 5.0</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="book-detail-description">
            <h4>📝 Deskripsi Buku</h4>
            <p>${book.description}</p>
        </div>

        <div class="book-detail-chapters">
            <h4>📑 Daftar Isi (${book.chapters.length} Bab)</h4>
            <ul class="chapters-list">
                ${book.chapters.map((chapter, index) => `
                    <li onclick="openBookReader(${book.id}, ${index})">
                        <span>📄</span>
                        <span>${String(index + 1).padStart(2, '0')}. ${chapter.title}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="book-detail-actions">
            <button class="btn-action btn-read-now" onclick="openBookReader(${book.id})">
                📚 Baca Sekarang
            </button>
            <button class="btn-action btn-bookmark" onclick="toggleBookmark(${book.id})">
                ${isBookmarked ? '❤️ Tersimpan' : '🤍 Simpan'}
            </button>
        </div>
    `;

    document.getElementById('bookDetailModal').classList.add('active');
}

function closeBookDetail() {
    document.getElementById('bookDetailModal').classList.remove('active');
}

// ==================== BOOK READER ====================
let readingTime = 0;
let readingInterval;

function openBookReader(bookId, chapterIndex = 0) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    currentBook = book;
    currentChapter = chapterIndex;

    document.getElementById('readerTitle').textContent = `📖 ${book.title}`;
    
    const chaptersList = document.getElementById('chaptersList');
    chaptersList.innerHTML = book.chapters.map((chapter, index) => `
        <li class="${index === chapterIndex ? 'active' : ''}" onclick="goToChapter(${index})">
            ${String(index + 1).padStart(2, '0')}. ${chapter.title}
        </li>
    `).join('');

    renderChapter(chapterIndex);
    updateNavigationButtons();
    
    // Reset and start progress tracking
    updateReadingProgress();
    
    document.getElementById('bookReaderModal').classList.add('active');
    closeBookDetail();
    
    // Add scroll listener for progress
    const readerContent = document.getElementById('readerContent');
    readerContent.addEventListener('scroll', updateReadingProgress);
    
    // Start reading time tracker
    startReadingTimer();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Add touch swipe support
    addSwipeSupport();
}

function startReadingTimer() {
    readingTime = 0;
    readingInterval = setInterval(() => {
        readingTime++;
        updateReadingTimeDisplay();
    }, 1000);
}

function updateReadingTimeDisplay() {
    const minutes = Math.floor(readingTime / 60);
    const seconds = readingTime % 60;
    const timeDisplay = document.getElementById('readingTime');
    if (timeDisplay) {
        timeDisplay.textContent = `⏱️ ${minutes}:${String(seconds).padStart(2, '0')}`;
    }
}

function handleKeyboardNavigation(e) {
    if (!currentBook) return;
    
    // Check if book reader modal is active
    const modal = document.getElementById('bookReaderModal');
    if (!modal || !modal.classList.contains('active')) return;
    
    // Left arrow or previous chapter
    if (e.key === 'ArrowLeft' && currentChapter > 0) {
        previousChapter();
    }
    // Right arrow or next chapter
    else if (e.key === 'ArrowRight' && currentChapter < currentBook.chapters.length - 1) {
        nextChapter();
    }
    // Escape to close
    else if (e.key === 'Escape') {
        closeBookReader();
    }
}

function addSwipeSupport() {
    const readerContent = document.getElementById('readerContent');
    if (!readerContent) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    readerContent.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    readerContent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentChapter < currentBook.chapters.length - 1) {
                // Swipe left - next chapter
                nextChapter();
            } else if (diff < 0 && currentChapter > 0) {
                // Swipe right - previous chapter
                previousChapter();
            }
        }
    }
}

function renderChapter(chapterIndex) {
    const chapter = currentBook.chapters[chapterIndex];
    const chapterContent = document.getElementById('chapterContent');
    
    // Add fade out effect
    chapterContent.style.opacity = '0';
    chapterContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        chapterContent.innerHTML = chapter.content;
        
        // Add fade in effect
        chapterContent.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        chapterContent.style.opacity = '1';
        chapterContent.style.transform = 'translateY(0)';
    }, 200);

    document.querySelectorAll('#chaptersList li').forEach((li, index) => {
        if (index === chapterIndex) {
            li.classList.add('active');
            li.style.background = 'var(--primary-light)';
            li.style.color = 'white';
            li.style.borderLeftColor = 'white';
        } else {
            li.classList.remove('active');
            li.style.background = '';
            li.style.color = '';
            li.style.borderLeftColor = '';
        }
    });
}

function goToChapter(chapterIndex) {
    currentChapter = chapterIndex;
    renderChapter(chapterIndex);
    updateNavigationButtons();
}

function previousChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        renderChapter(currentChapter);
        updateNavigationButtons();
    }
}

function nextChapter() {
    if (currentBook && currentChapter < currentBook.chapters.length - 1) {
        currentChapter++;
        renderChapter(currentChapter);
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevChapter');
    const nextBtn = document.getElementById('nextChapter');
    
    prevBtn.disabled = currentChapter === 0;
    nextBtn.disabled = !currentBook || currentChapter === currentBook.chapters.length - 1;
}

function closeBookReader() {
    const readerContent = document.getElementById('readerContent');
    const progressBar = document.getElementById('readingProgress');
    
    // Remove scroll listener
    if (readerContent) {
        readerContent.removeEventListener('scroll', updateReadingProgress);
    }
    
    // Reset progress
    if (progressBar) {
        progressBar.style.width = '0%';
    }
    
    // Stop reading timer
    if (readingInterval) {
        clearInterval(readingInterval);
    }
    
    // Remove keyboard navigation
    document.removeEventListener('keydown', handleKeyboardNavigation);
    
    document.getElementById('bookReaderModal').classList.remove('active');
}

function updateReadingProgress() {
    const readerContent = document.getElementById('readerContent');
    const progressBar = document.getElementById('readingProgress');
    
    if (!readerContent || !progressBar) return;
    
    const scrollTop = readerContent.scrollTop;
    const scrollHeight = readerContent.scrollHeight - readerContent.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    progressBar.style.width = progress + '%';
}

// ==================== BOOKMARK ====================
function toggleBookmark(bookId) {
    const index = bookmarkedBooks.indexOf(bookId);
    if (index > -1) {
        bookmarkedBooks.splice(index, 1);
        alert('Buku dihapus dari daftar tersimpan');
    } else {
        bookmarkedBooks.push(bookId);
        alert('Buku ditambahkan ke daftar tersimpan');
    }
    localStorage.setItem('bookmarkedBooks', JSON.stringify(bookmarkedBooks));
    
    // Refresh the bookmarked books display if we're on dashboard home
    if (currentScreen === 'dashboard') {
        const activeBtn = document.querySelector('.nav-btn.active');
        if (activeBtn && activeBtn.getAttribute('data-category') === 'home') {
            renderBookmarkedBooks();
        }
    }
    
    // Refresh book detail if it's open
    if (currentBook) {
        showBookDetail(currentBook.id);
    }
}

// ==================== MODAL EVENTS ====================
window.addEventListener('click', function(e) {
    if (e.target.id === 'bookDetailModal') {
        closeBookDetail();
    }
    if (e.target.id === 'bookReaderModal') {
        closeBookReader();
    }
});

// ==================== INITIALIZATION ====================
window.addEventListener('load', function() {
    console.log('📚 Web Literasi - Perpustakaan Digital');
    console.log('✨ Fitur: Baca buku, Detail buku, Bookmark, Navigasi chapter');
    console.log('📖 ' + booksData.length + ' buku tersedia dalam 6 kategori');
    console.log('📧 Korespondensi: Sejarah, contoh surat, cara penulisan');
    console.log('📁 Kearsipan: Sejarah, manajemen, sistem');
});