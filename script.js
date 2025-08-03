// =========================================================
// DATA TARIF PAJAK
// =========================================================
const pph21Data = [
    { id: '50', text: 'Tenaga Ahli: Pengacara, Akuntan, Arsitek, Dokter, Konsultan, Notaris, PPAT, Penilai, Aktuaris' },
    { id: '50', text: 'Penasihat, Pengajar, Pelatih, Penceramah, Penyuluh, dan Moderator' },
    { id: '50', text: 'Pengarang, Peneliti, Penerjemah' },
    { id: '50', text: 'Pemberi Jasa dalam Segala Bidang' },
    { id: '50', text: 'Agen Iklan' },
    { id: '50', text: 'Pengawas atau Pengelola Proyek' },
    { id: '50', text: 'Pembawa Pesanan, Pencari Langganan, Perantara' },
    { id: '50', text: 'Petugas Penjaja Barang Dagangan' },
    { id: '50', text: 'Agen Asuransi' },
    { id: '50', text: 'Distributor Pemasaran Berjenjang atau Penjualan Langsung' },
    { id: '50', text: 'Upah Pegawai Tidak Tetap > Rp2.500.000 Sehari' },
    { id: '50', text: 'Upah Pegawai Tidak Tetap > Rp2.500.000 Sehari (Fasilitas Daerah Tertentu)' },
    { id: '100', text: 'Uang Manfaat Pensiun yang diambil sebagian' },
    { id: '100', text: 'Imbalan kepada Peserta Perlombaan' },
    { id: '100', text: 'Imbalan kepada Peserta Rapat, Seminar, Lokakarya, dll' },
    { id: '100', text: 'Imbalan kepada Peserta atau Anggota Kepanitiaan' },
    { id: '100', text: 'Imbalan kepada Peserta Pendidikan, Pelatihan, dan Magang' },
    { id: '100', text: 'Imbalan kepada Peserta Kegiatan Lainnya)' },
    { id: '100', text: 'Uang Pesangon, Uang Manfaat Pensiun, THT, JHT (Tahun Ketiga dst)' },
    { id: '50', text: 'Pemain Musik, Penyanyi, Pelawak, Bintang Film, Seniman, Influencer, dll' },
    { id: '50', text: 'Imbalan yang Diterima oleh Olahragawan' }
];

const pph23Data = [
    { id: '15% (Dividen)', text: '15% - Dividen' },
    { id: '15% (Bunga Selain yang Dikenakan PPh Pasal 4 ayat (2))', text: '15% - Bunga Selain yang Dikenakan PPh Pasal 4 ayat (2)' },
    { id: '15% (Royalti)', text: '15% - Royalti' },
    { id: '15% (Hadiah, Penghargaan, Bonus dan Lainnya Selain yang Telah Dipotong PPh Pasal 21 Ayat (1) Huruf E UU PPh)', text: '15% - Hadiah, Penghargaan, Bonus dan Lainnya Selain yang Telah Dipotong PPh Pasal 21 Ayat (1) Huruf E UU PPh' },
    { id: '2% (Sewa dan Penghasilan Lain Sehubungan Dengan Penggunaan Harta Kecuali Sewa Tanah dan/atau Bangunan yang Telah Dikenai PPh Pasal 4 Ayat (2) UU PPh.)', text: '2% - Sewa dan Penghasilan Lain Sehubungan Dengan Penggunaan Harta Kecuali Sewa Tanah dan/atau Bangunan yang Telah Dikenai PPh Pasal 4 Ayat (2) UU PPh.' },
    { id: '2% (Jasa Teknik)', text: '2% - Jasa Teknik' },
    { id: '2% (Jasa Manajemen)', text: '2% - Jasa Manajemen' },
    { id: '2% (Jasa Konsultan)', text: '2% - Jasa Konsultan' },
    { id: '2% (Jasa Penilai (Appraisal))', text: '2% - Jasa Penilai (Appraisal)' },
    { id: '2% (Jasa Aktuaris)', text: '2% - Jasa Aktuaris' },
    { id: '2% (Jasa Akuntansi, Pembukuan, dan Atestasi Laporan Keuangan)', text: '2% - Jasa Akuntansi, Pembukuan, dan Atestasi Laporan Keuangan' },
    { id: '2% (Jasa Hukum)', text: '2% - Jasa Hukum' },
    { id: '2% (Jasa Arsitektur)', text: '2% - Jasa Arsitektur' },
    { id: '2% (Jasa Perencanaan Kota dan Arsitektur Landscape;)', text: '2% - Jasa Perencanaan Kota dan Arsitektur Landscape;' },
    { id: '2% (Jasa Perancang (Design))', text: '2% - Jasa Perancang (Design)' },
    { id: '2% (Jasa Pengeboran (Drilling) di Bidang Penambangan Minyak dan Gas Bumi (Migas) Kecuali yang Dilakukan oleh Badan Usaha Tetap (BUT))', text: '2% - Jasa Pengeboran (Drilling) di Bidang Penambangan Minyak dan Gas Bumi (Migas) Kecuali yang Dilakukan oleh Badan Usaha Tetap (BUT)' },
    { id: '2% (Jasa Penunjang di Bidang Usaha Panas Bumi dan Penambangan Minyak dan Gas Bumi (Migas))', text: '2% - Jasa Penunjang di Bidang Usaha Panas Bumi dan Penambangan Minyak dan Gas Bumi (Migas)' },
    { id: '2% (Jasa Penambangan dan Jasa Penunjang di Bidang Usaha Panas Bumi dan Penambangan Minyak dan Gas Bumi (Migas))', text: '2% - Jasa Penambangan dan Jasa Penunjang di Bidang Usaha Panas Bumi dan Penambangan Minyak dan Gas Bumi (Migas)' },
    { id: '2% (Jasa Penunjang di Bidang Penerbangan dan Bandar Udara)', text: '2% - Jasa Penunjang di Bidang Penerbangan dan Bandar Udara' },
    { id: '2% (Jasa Penebangan Hutan)', text: '2% - Jasa Penebangan Hutan' },
    { id: '2% (Jasa Pengolahan Limbah)', text: '2% - Jasa Pengolahan Limbah' },
    { id: '2% (Jasa Penyedia Tenaga Kerja dan/atau Tenaga Ahli (Outsourcing Services))', text: '2% - Jasa Penyedia Tenaga Kerja dan/atau Tenaga Ahli (Outsourcing Services)' },
    { id: '2% (Jasa Perantara dan/atau Keagenan)', text: '2% - Jasa Perantara dan/atau Keagenan' },
    { id: '2% (Jasa Bidang Perdagangan Surat-Surat Berharga, Kecuali yang Dilakukan Bursa Efek, Kustodian Sentral Efek Indonesia (KSEI) dan Kliring Penjaminan Efek Indonesia (KPEI))', text: '2% - Jasa Bidang Perdagangan Surat-Surat Berharga, Kecuali yang Dilakukan Bursa Efek, Kustodian Sentral Efek Indonesia (KSEI) dan Kliring Penjaminan Efek Indonesia (KPEI)' },
    { id: '2% (Jasa Kustodian/Penyimpanan/Penitipan, Kecuali yang Dilakukan Oleh KSEI)', text: '2% - Jasa Kustodian/Penyimpanan/Penitipan, Kecuali yang Dilakukan Oleh KSEI' },
    { id: '2% (Jasa Pengisian Suara (Dubbing) dan/atau Sulih Suara)', text: '2% - Jasa Pengisian Suara (Dubbing) dan/atau Sulih Suara' },
    { id: '2% (Jasa Mixing Film)', text: '2% - Jasa Mixing Film' },
    { id: '2% (Jasa Pembuatan Sarana Promosi Film, Iklan, Poster, Foto, Slide, Klise, Banner, Pamphlet, Baliho dan Folder)', text: '2% - Jasa Pembuatan Sarana Promosi Film, Iklan, Poster, Foto, Slide, Klise, Banner, Pamphlet, Baliho dan Folder' },
    { id: '2% (Jasa Sehubungan Dengan Software Atau Hardware Atau Sistem Komputer, Termasuk Perawatan, Pemeliharaan dan Perbaikan.)', text: '2% - Jasa Sehubungan Dengan Software Atau Hardware Atau Sistem Komputer, Termasuk Perawatan, Pemeliharaan dan Perbaikan.' },
    { id: '2% (Jasa Pembuatan dan/atau Pengelolaan Website)', text: '2% - Jasa Pembuatan dan/atau Pengelolaan Website' },
    { id: '2% (Jasa Internet Termasuk Sambungannya)', text: '2% - Jasa Internet Termasuk Sambungannya' },
    { id: '2% (Jasa Penyimpanan, Pengolahan dan/atau Penyaluran Data, Informasi, dan/atau Program)', text: '2% - Jasa Penyimpanan, Pengolahan dan/atau Penyaluran Data, Informasi, dan/atau Program' },
    { id: '2% (Jasa Instalasi/Pemasangan Mesin, Peralatan, Listrik, Telepon, Air, Gas, Ac dan/atau Tv Kabel, Selain Yang Dilakukan Oleh Wajib Pajak Yang Ruang Lingkupnya Di Bidang Konstruksi dan Mempunyai Izin dan/atau Sertifikasi Sebagai Pengusaha Konstruksi;)', text: '2% - Jasa Instalasi/Pemasangan Mesin, Peralatan, Listrik, Telepon, Air, Gas, Ac dan/atau Tv Kabel, Selain Yang Dilakukan Oleh Wajib Pajak Yang Ruang Lingkupnya Di Bidang Konstruksi dan Mempunyai Izin dan/atau Sertifikasi Sebagai Pengusaha Konstruksi;' },
    { id: '2% (Jasa Perawatan/Perbaikan/Pemeliharaan Mesin, Peralatan, Listrik, Telepon, Air, Gas, Ac dan/atau Tv Kabel, Selain Yang Dilakukan Oleh Wajib Pajak Yang Ruang Lingkupnya di Bidang Konstruksi dan Mempunyai Izin dan/atau Sertifikasi Sebagai Pengusaha Konstruksi)', text: '2% - Jasa Perawatan/Perbaikan/Pemeliharaan Mesin, Peralatan, Listrik, Telepon, Air, Gas, Ac dan/atau Tv Kabel, Selain Yang Dilakukan Oleh Wajib Pajak Yang Ruang Lingkupnya di Bidang Konstruksi dan Mempunyai Izin dan/atau Sertifikasi Sebagai Pengusaha Konstruksi' },
    { id: '2% (Jasa Perawatan Kendaraan dan/atau Alat Transportasi Darat, Laut dan Udara)', text: '2% - Jasa Perawatan Kendaraan dan/atau Alat Transportasi Darat, Laut dan Udara' },
    { id: '2% (Jasa Maklon)', text: '2% - Jasa Maklon' },
    { id: '2% (Jasa Penyelidikan dan Keamanan)', text: '2% - Jasa Penyelidikan dan Keamanan' },
    { id: '2% (Jasa Penyelenggara Kegiatan Atau Event Organizer)', text: '2% - Jasa Penyelenggara Kegiatan Atau Event Organizer' },
    { id: '2% (Jasa Penyediaan Tempat dan/atau Waktu Dalam Media Massa, Media Luar Ruang Atau Media Lain Untuk Penyampaian Informasi, dan/atau Jasa Periklanan)', text: '2% - Jasa Penyediaan Tempat dan/atau Waktu Dalam Media Massa, Media Luar Ruang Atau Media Lain Untuk Penyampaian Informasi, dan/atau Jasa Periklanan' },
    { id: '2% (Jasa Pembasmian Hama)', text: '2% - Jasa Pembasmian Hama' },
    { id: '2% (Jasa Kebersihan Atau Cleaning Service)', text: '2% - Jasa Kebersihan Atau Cleaning Service' },
    { id: '2% (Jasa Sedot Septic Tank)', text: '2% - Jasa Sedot Septic Tank' },
    { id: '2% (Jasa Pemeliharaan Kolam)', text: '2% - Jasa Pemeliharaan Kolam' },
    { id: '2% (Jasa Katering Atau Tata Boga)', text: '2% - Jasa Katering Atau Tata Boga' },
    { id: '2% (Jasa Freight Forwarding)', text: '2% - Jasa Freight Forwarding' },
    { id: '2% (Jasa Logistik)', text: '2% - Jasa Logistik' },
    { id: '2% (Jasa Pengurusan Dokumen)', text: '2% - Jasa Pengurusan Dokumen' },
    { id: '2% (Jasa Pengepakan)', text: '2% - Jasa Pengepakan' },
    { id: '2% (Jasa Loading dan Unloading)', text: '2% - Jasa Loading dan Unloading' },
    { id: '2% (Jasa Laboratorium dan/atau Pengujian Kecuali yang Dilakukan oleh Lembaga atau Institusi Pendidikan Dalam Rangka Penelitian Akademis)', text: '2% - Jasa Laboratorium dan/atau Pengujian Kecuali yang Dilakukan oleh Lembaga atau Institusi Pendidikan Dalam Rangka Penelitian Akademis' },
    { id: '2% (Jasa Pengelolaan Parkir)', text: '2% - Jasa Pengelolaan Parkir' },
    { id: '2% (Jasa Penyondiran Tanah)', text: '2% - Jasa Penyondiran Tanah' },
    { id: '2% (Jasa Penyiapan dan/atau Pengolahan Lahan)', text: '2% - Jasa Penyiapan dan/atau Pengolahan Lahan' },
    { id: '2% (Jasa Pembibitan dan/atau Penanaman Bibit)', text: '2% - Jasa Pembibitan dan/atau Penanaman Bibit' },
    { id: '2% (Jasa Pemeliharaan Tanaman)', text: '2% - Jasa Pemeliharaan Tanaman' },
    { id: '2% (Jasa Pemanenan)', text: '2% - Jasa Pemanenan' },
    { id: '2% (Jasa Pengolahan Hasil Pertanian, Perkebunan, Perikanan, Peternakan dan/atau Perhutanan)', text: '2% - Jasa Pengolahan Hasil Pertanian, Perkebunan, Perikanan, Peternakan dan/atau Perhutanan' },
    { id: '2% (Jasa Dekorasi)', text: '2% - Jasa Dekorasi' },
    { id: '2% (Jasa Pencetakan/Penerbitan)', text: '2% - Jasa Pencetakan/Penerbitan' },
    { id: '2% (Jasa Penerjemahan)', text: '2% - Jasa Penerjemahan' },
    { id: '2% (Jasa Pengangkutan/Ekspedisi Kecuali Yang Telah Diatur Dalam Pasal 15 Undang-Undang Pajak Penghasilan)', text: '2% - Jasa Pengangkutan/Ekspedisi Kecuali Yang Telah Diatur Dalam Pasal 15 Undang-Undang Pajak Penghasilan' },
    { id: '2% (Jasa Pelayanan Pelabuhan)', text: '2% - Jasa Pelayanan Pelabuhan' },
    { id: '2% (Jasa Pengangkutan Melalui Jalur Pipa)', text: '2% - Jasa Pengangkutan Melalui Jalur Pipa' },
    { id: '2% (Jasa Pengelolaan Penitipan Anak)', text: '2% - Jasa Pengelolaan Penitipan Anak' },
    { id: '2% (Jasa Pelatihan dan/atau Kursus)', text: '2% - Jasa Pelatihan dan/atau Kursus' },
    { id: '2% (Jasa Pengiriman dan Pengisian Uang Ke Atm)', text: '2% - Jasa Pengiriman dan Pengisian Uang Ke Atm' },
    { id: '2% (Jasa Sertifikasi)', text: '2% - Jasa Sertifikasi' },
    { id: '2% (Jasa Survey)', text: '2% - Jasa Survey' },
    { id: '2% (Jasa Tester)', text: '2% - Jasa Tester' },
    { id: '2% (Jasa Selain Jasa-Jasa Tersebut di Atas yang Pembayarannya Dibebankan pada APBN (Anggaran Pendapatan dan Belanja Negara) Atau APBD (Anggaran Pendapatan dan Belanja Daerah).)', text: '2% - Jasa Selain Jasa-Jasa Tersebut di Atas yang Pembayarannya Dibebankan pada APBN (Anggaran Pendapatan dan Belanja Negara) Atau APBD (Anggaran Pendapatan dan Belanja Daerah).' },
    { id: '2% (Jasa Penyelenggaraan Layanan Transaksi Pembayaran Terkait dengan Distribusi Token Oleh Penyelenggara Distribusi)', text: '2% - Jasa Penyelenggaraan Layanan Transaksi Pembayaran Terkait dengan Distribusi Token Oleh Penyelenggara Distribusi' },
    { id: '2% (Jasa Pemasaran dengan Media Voucer Oleh Penyelenggara Voucer)', text: '2% - Jasa Pemasaran dengan Media Voucer Oleh Penyelenggara Voucer' },
    { id: '2% (Jasa Penyelenggaraan Layanan Transaksi Pembayaran Terkait dengan Distribusi Voucer Oleh Penyelenggara Voucer dan Penyelenggara Distribusi)', text: '2% - Jasa Penyelenggaraan Layanan Transaksi Pembayaran Terkait dengan Distribusi Voucer Oleh Penyelenggara Voucer dan Penyelenggara Distribusi' },
    { id: '2% (Jasa Penyelenggaraan Program Loyalitas dan Penghargaan Pelanggan (Consumer Loyalty/Reward Program) Oleh Penyelenggara Voucer)', text: '2% - Jasa Penyelenggaraan Program Loyalitas dan Penghargaan Pelanggan (Consumer Loyalty/Reward Program) Oleh Penyelenggara Voucer' },
    { id: '0.00% (Bunga Pinjaman yang Diterima Wajib Pajak Dalam Negeri dan Bentuk Usaha Tetap Melalui Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi)', text: '0.00% (Bunga Pinjaman yang Diterima Wajib Pajak Dalam Negeri dan Bentuk Usaha Tetap Melalui Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi' }
];

const pph42Data = [
    { id: '20', text: '20% - Bunga Tabungan dan Bunga Deposito yang Ditempatkan di Dalam Negeri yang Dananya Bersumber Selain dari Devisa Hasil Ekspor (DHE)' },
    { id: '8', text: '8% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang IDR bersumber dari DHE tenor 1 bulan)' },
    { id: '5', text: '5% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang IDR bersumber dari DHE tenor 3 bulan)' },
    { id: '0', text: '0% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang IDR bersumber dari DHE tenor 6 bulan atau lebih)' },
    { id: '10', text: '10% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang USD bersumber dari DHE tenor 1 bulan)' },
    { id: '8', text: '8% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang USD bersumber dari DHE tenor 3 bulan)' },
    { id: '3', text: '3% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang USD bersumber dari DHE tenor 6 bulan)' },
    { id: '0', text: '0% - Bunga Deposito yang Ditempatkan di Dalam Negeri (mata uang USD bersumber dari DHE tenor lebih 6 bulan)' },
    { id: '20', text: '20% - Bunga Deposito/Tabungan yang Ditempatkan di Luar Negeri Melalui Bank yang Didirikan atau Bertempat Kedudukan di Indonesia atau Cabang Bank Luar Negeri di Indonesia' },
    { id: '20', text: '20% - Diskonto Sertifikat Bank Indonesia' },
    { id: '20', text: '20% - Jasa Giro' },
    { id: '15', text: '15% - Bunga Obligasi, Surat Utang Negara, atau Obligasi Daerah yang Diterima Wajib Pajak Dalam Negeri dan Bentuk Usaha Tetap.' },
    { id: '10', text: '10% - Bunga Obligasi yang Diterima Wajib Pajak Dalam Negeri dan Bentuk Usaha Tetap' },
    { id: '10', text: '10% - Bunga Obligasi yang Diterima Wajib Pajak Dalam Negeri dan Bentuk Usaha Tetap yang diadministrasikan oleh BI' },
    { id: '20', text: '20% - Diskonto Surat Perbendaharaan Negara yang Diterima Wajib Pajak Dalam Negeri dan Bentuk Usaha Tetap' },
    { id: '20', text: '20% - Diskonto Surat Perbendaharaan Negara yang Diterima Wajib Pajak Penduduk/Berkedudukan di Luar Negeri' },
    { id: '1', text: '1% - Transaksi Penjualan Saham di Bursa Efek (Saham Pendiri)' },
    { id: '0', text: '0% - Transaksi Penjualan Saham di Bursa Efek (Bukan Saham Pendiri)' },
    { id: '0', text: '0% - Transaksi Penjualan Saham Milik Perusahaan Modal Ventura Tidak di Bursa Efek' },
    { id: '10', text: '10% - Persewaan Tanah dan/atau Bangunan' },
    { id: '25', text: '25% - Hadiah Undian' },
    { id: '2', text: '2% - Pekerjaan Konstruksi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Badan Usaha Kualifikasi Kecil atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan' },
    { id: '4', text: '4% - Pekerjaan Konstruksi yang Dilakukan oleh Penyedia Jasa yang Tidak Memiliki Sertifikat Badan Usaha Atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan' },
    { id: '3', text: '3% - Pekerjaan Konstruksi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Selain Sertifikat Badan Usaha Kualifikasi Kecil atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan' },
    { id: '3', text: '3% - Pekerjaan Konstruksi Terintegrasi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Badan Usaha' },
    { id: '4', text: '4% - Pekerjaan Konstruksi Terintegrasi yang Dilakukan oleh Penyedia Jasa yang Tidak Memiliki Sertifikat Badan Usaha' },
    { id: '4', text: '4% - Jasa Konsultansi Konstruksi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Badan Usaha atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan' },
    { id: '6', text: '6% - Jasa Konsultansi Konstruksi yang Dilakukan oleh Penyedia Jasa yang Tidak Memiliki Sertifikat Badan Usaha atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan' },
    { id: '4', text: '4% - Jasa Konstruksi Berupa Jasa Perencanaan Konstruksi (Dengan Kualifikasi Usaha)' },
    { id: '6', text: '6% - Jasa Konstruksi Berupa Jasa Perencanaan Konstruksi (Tanpa Kualifikasi Usaha)' },
    { id: '2', text: '2% - Jasa Konstruksi Berupa Jasa Pelaksanaan Konstruksi (Kualifikasi Usaha Kecil)' },
    { id: '3', text: '3% - Jasa Konstruksi Berupa Jasa Pelaksanaan Konstruksi (Kualifikasi Usaha Menengah dan Besar)' },
    { id: '4', text: '4% - Jasa Konstruksi Berupa Jasa Pelaksanaan Konstruksi (Tanpa Kualifikasi Usaha)' },
    { id: '4', text: '4% - Jasa Konstruksi Berupa Jasa Pengawasan Konstruksi (Dengan Kualifikasi Usaha)' },
    { id: '6', text: '6% - Jasa Konstruksi Berupa Jasa Pengawasan Konstruksi (Tanpa Kualifikasi Usaha)' },
    { id: '0', text: '0% - Bunga Simpanan yang Dibayarkan oleh Koperasi kepada Anggota Wajib Pajak Orang Pribadi (bunga sampai dengan Rp240.000,00)' },
    { id: '10', text: '10% - Bunga Simpanan yang Dibayarkan oleh Koperasi kepada Anggota Wajib Pajak Orang Pribadi (bunga di atas Rp240.000,00)' },
    { id: '10', text: '10% - Dividen yang Diterima/Diperoleh Wajib Pajak Orang Pribadi Dalam Negeri' },
    { id: '1', text: '1% - Pemotongan atau pemungutan PPh atas penjualan barang atau penyerahan jasa yang dilakukan oleh Wajib Pajak dengan peredaran bruto tertentu sesuai dengan Peraturan Pemerintah Nomor 23 Tahun 2018 atau Peraturan Pemerintah Nomor 55 Tahun 2022.' },
    { id: '0', text: '0% - Pemotongan atau pemungutan PPh atas transaksi pembelian yang dilakukan oleh Wajib Pajak dengan peredaran bruto tertentu sesuai dengan Peraturan Pemerintah Nomor 55 Tahun 2022.' },
    { id: '1', text: '1% - Imbalan yang Dibayarkan/Terutang kepada Perusahaan Pelayaran Dalam Negeri' },
    { id: '3', text: '3% - Imbalan Charter Kapal Laut dan/atau Pesawat Udara yang Dibayarkan/ Terutang kepada Perusahaan Pelayaran dan/atau Penerbangan Luar Negeri melalui BUT di Indonesia' },
    { id: '20', text: '20% - Uplift Hulu Migas' },
    { id: '5', text: '5% - Participating Interest Eksplorasi Hulu Migas' },
    { id: '7', text: '7% - Participating Interest Eksploitasi Hulu Migas' },
    { id: '8', text: '8% - Penghasilan yang Diterima atau Diperoleh Sehubungan dengan Kerja Sama dengan Lembaga Pengelola Investasi (LPI)' },
    { id: '3', text: '3% - Pengalihan Hak atas Tanah dan/atau Bangunan' },
    { id: '1', text: '1% - Pengalihan Rumah Sederhana dan Rumah Susun Sederhana yang Dilakukan oleh WP yang Usaha Pokoknya Mengalihkan Hak atas Tanah dan/atau Bangunan' },
    { id: '0', text: '0% - Pengalihan Hak atas Tanah dan/atau Bangunan kepada Pemerintah, BUMN yang Mendapat Penugasan Khusus dari Pemerintah, atau BUMD yang Mendapat Penugasan Khusus dari Kepala Daerah, sesuai UU mengenai Pengadaan Tanah bagi Pembangunan untuk Kepentingan Umum' },
    { id: '1', text: '1% - Imbalan yang Diterima/Diperoleh Sehubungan dengan Pengangkutan Orang dan/atau Barang Termasuk Penyewaan Kapal Laut Oleh Perusahaan Pelayaran Dalam Negeri' },
    { id: '3', text: '3% - Imbalan yang Dibayarkan/Terutang kepada Perusahaan Pelayaran dan/atau Penerbangan Luar Negeri Sehubungan dengan Pengangkutan Orang dan/atau Barang (Selain Berdasarkan Perjanjian Charter)' },
    { id: '0', text: '0% - Penghasilan Wajib Pajak Luar Negeri yang Mempunyai Kantor Perwakilan Dagang di Indonesia' },
    { id: '2', text: '2% - Penghasilan Wajib Pajak yang Melakukan Kegiatan Usaha Jasa Maklon (Contract Manufacturing) Internasional di Bidang Produksi Mainan Anak-Anak' },
    { id: '1', text: '1% - Pemotongan atau Pemungutan PPh atas transaksi penjualan barang atau penyerahan jasa yang dilakukan oleh Wajib Pajak orang pribadi yang memiliki peredaran bruto tertentu sesuai dengan PP 55 Tahun 2022 dengan peredaran usaha s.d Rp500.000.000,00.' },
    { id: '0', text: '0% - Pemotongan atau Pemungutan PPh atas transaksi penjualan barang atau penyerahan jasa yang dilakukan oleh Wajib Pajak yang memenuhi persyaratan tertentu untuk dikenai PPh yang bersifat final dengan tarif 0% di IKN (PPh UMKM di IKN).' },
    { id: '0', text: '0% - Pemotongan atau pemungutan PPh atas transaksi pembelian yang dilakukan oleh Wajib Pajak yang memanfaatkan fasilitas PPh final dengan tarif 0% di IKN (PPh UMKM di IKN).' }
];

// =========================================================
// FUNGSI UTILITAS
// =========================================================
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

function cleanInput(value) {
    return parseFloat(value.replace(/[^0-9]/g, '')) || 0;
}

function getPercentageFromValue(value) {
    if (value.includes('x 200%')) {
        return parseFloat(value.replace(/% x 200%$/, '')) * 2;
    }
    return parseFloat(value.replace(/%$/, '')) || 0;
}

// =========================================================
// FUNGSI PENGHITUNGAN TARIF PROGRESIF PPH 21 (PS17)
// =========================================================
function calculatePS17Tax(dpp) {
    if (dpp <= 0) {
        return 0;
    } else if (dpp <= 60000000) {
        return dpp * 0.05;
    } else if (dpp <= 250000000) {
        return (dpp * 0.15) - 6000000;
    } else if (dpp <= 500000000) {
        return (dpp * 0.25) - 31000000;
    } else if (dpp <= 5000000000) {
        return (dpp * 0.30) - 56000000;
    } else {
        return (dpp * 0.35) - 306000000;
    }
}


// =========================================================
// FUNGSI UNTUK MENAMPILKAN/MENYEMBUNYIKAN DETAIL PAJAK
// =========================================================
function toggleDetails(checkboxId) {
    const isChecked = document.getElementById(checkboxId).checked;
    const detailsContainer = document.getElementById(checkboxId.replace('Terapkan', '-details-container'));
    const resultsContainer = document.getElementById(checkboxId.replace('Terapkan', '-results-container'));

    if (detailsContainer) detailsContainer.style.display = isChecked ? 'block' : 'none';
    if (resultsContainer) resultsContainer.style.display = isChecked ? 'flex' : 'none';
}


// =========================================================
// Logika Perhitungan untuk Kalkulator Net (Satu Kolom)
// =========================================================
function calculateNet() {
    const inputAmount = cleanInput(document.getElementById('uangMasukRekening').value);

    const ppnTerapkan = document.getElementById('ppnTerapkan').checked;
    const tarifPPN_raw = ppnTerapkan ? parseFloat(document.getElementById('tarifPPN').value) : 0;
    const tarifPPN_decimal = tarifPPN_raw / 100;

    const pph21Terapkan = document.getElementById('pph21Terapkan').checked;
    const pph21_dpp_percentage = pph21Terapkan ? parseFloat(document.getElementById('tarifPPh21').value) : 0;

    const pph23Terapkan = document.getElementById('pph23Terapkan').checked;
    const tarifPPh23_input = pph23Terapkan ? document.getElementById('tarifPPh23').value : "0%";
    const tarifPPh23_raw = getPercentageFromValue(tarifPPh23_input);
    const tarifPPh23_decimal = tarifPPh23_raw / 100;

    const pph42Terapkan = document.getElementById('pph42Terapkan').checked;
    const tarifPPh42_raw = pph42Terapkan ? parseFloat(document.getElementById('tarifPPh42').value) : 0;
    const tarifPPh42_decimal = tarifPPh42_raw / 100;

    let hargaJualSebelumPPN = 0;
    let besarPPN = 0;
    let totalPPhDipotong = 0;
    let dppPPh21 = 0;
    let besarPPh21 = 0;
    let dppPPh23 = 0;
    let besarPPh23 = 0;
    let dppPPh42 = 0;
    let besarPPh42 = 0;
    let uangDiterimaFinal = 0;

    if (inputAmount <= 0) {
        document.getElementById('hargaJualSebelumPPN_net').textContent = formatRupiah(0);
        document.getElementById('besarPPN_net').textContent = formatRupiah(0);
        document.getElementById('dppPPh21_net').textContent = formatRupiah(0);
        document.getElementById('besarPPh21_net').textContent = formatRupiah(0);
        document.getElementById('dppPPh23_net').textContent = formatRupiah(0);
        document.getElementById('besarPPh23_net').textContent = formatRupiah(0);
        document.getElementById('dppPPh42_net').textContent = formatRupiah(0);
        document.getElementById('besarPPh42_net').textContent = formatRupiah(0);
        document.getElementById('summaryHargaJual_net').textContent = formatRupiah(0);
        document.getElementById('summaryBesarPPN_net').textContent = formatRupiah(0);
        document.getElementById('totalPPhDipotong_net').textContent = formatRupiah(0);
        document.getElementById('uangDiterima_net').textContent = formatRupiah(0);
        return;
    }

    let guessHargaJual = inputAmount * 1.05;
    const maxIterations = 100;
    const tolerance = 0.5;

    for (let i = 0; i < maxIterations; i++) {
        hargaJualSebelumPPN = guessHargaJual;
        besarPPN = hargaJualSebelumPPN * tarifPPN_decimal;

        besarPPh21 = 0;
        dppPPh21 = 0;
        if (pph21Terapkan) {
            dppPPh21 = hargaJualSebelumPPN * (pph21_dpp_percentage / 100);
            besarPPh21 = calculatePS17Tax(dppPPh21);
        }

        besarPPh23 = 0;
        dppPPh23 = 0;
        if (pph23Terapkan) {
            dppPPh23 = hargaJualSebelumPPN;
            besarPPh23 = dppPPh23 * tarifPPh23_decimal;
        }

        besarPPh42 = 0;
        dppPPh42 = 0;
        if (pph42Terapkan) {
            dppPPh42 = hargaJualSebelumPPN;
            besarPPh42 = dppPPh42 * tarifPPh42_decimal;
        }

        totalPPhDipotong = besarPPh21 + besarPPh23 + besarPPh42;
        uangDiterimaFinal = hargaJualSebelumPPN + besarPPN - totalPPhDipotong;

        const diff = inputAmount - uangDiterimaFinal;
        if (Math.abs(diff) <= tolerance) {
            break;
        }
        guessHargaJual += diff;
    }

    hargaJualSebelumPPN = Math.round(hargaJualSebelumPPN);
    besarPPN = Math.round(hargaJualSebelumPPN * tarifPPN_decimal);

    besarPPh21 = 0;
    dppPPh21 = 0;
    if (pph21Terapkan) {
        dppPPh21 = Math.round(hargaJualSebelumPPN * (pph21_dpp_percentage / 100));
        besarPPh21 = Math.round(calculatePS17Tax(dppPPh21));
    }

    besarPPh23 = 0;
    dppPPh23 = 0;
    if (pph23Terapkan) {
        dppPPh23 = hargaJualSebelumPPN;
        besarPPh23 = Math.round(dppPPh23 * tarifPPh23_decimal);
    }

    besarPPh42 = 0;
    dppPPh42 = 0;
    if (pph42Terapkan) {
        dppPPh42 = hargaJualSebelumPPN;
        besarPPh42 = Math.round(dppPPh42 * tarifPPh42_decimal);
    }

    totalPPhDipotong = Math.round(besarPPh21 + besarPPh23 + besarPPh42);
    uangDiterimaFinal = Math.round(hargaJualSebelumPPN + besarPPN - totalPPhDipotong);

    document.getElementById('hargaJualSebelumPPN_net').textContent = formatRupiah(hargaJualSebelumPPN);
    document.getElementById('besarPPN_net').textContent = formatRupiah(besarPPN);
    document.getElementById('dppPPh21_net').textContent = formatRupiah(dppPPh21);
    document.getElementById('besarPPh21_net').textContent = formatRupiah(besarPPh21);
    document.getElementById('dppPPh23_net').textContent = formatRupiah(dppPPh23);
    document.getElementById('besarPPh23_net').textContent = formatRupiah(besarPPh23);
    document.getElementById('dppPPh42_net').textContent = formatRupiah(dppPPh42);
    document.getElementById('besarPPh42_net').textContent = formatRupiah(besarPPh42);

    document.getElementById('summaryHargaJual_net').textContent = formatRupiah(hargaJualSebelumPPN);
    document.getElementById('summaryBesarPPN_net').textContent = formatRupiah(besarPPN);
    document.getElementById('totalPPhDipotong_net').textContent = formatRupiah(totalPPhDipotong);
    document.getElementById('uangDiterima_net').textContent = formatRupiah(uangDiterimaFinal);
}


// =========================================================
// Logika Perhitungan untuk Kalkulator Gross (Satu Kolom)
// =========================================================
function calculateGross() {
    const inputHargaJual = cleanInput(document.getElementById('hargaJual').value);

    const ppnTerapkan = document.getElementById('ppnTerapkan').checked;
    const tarifPPN_raw = ppnTerapkan ? parseFloat(document.getElementById('tarifPPN').value) : 0;
    const tarifPPN_decimal = tarifPPN_raw / 100;

    const pph21Terapkan = document.getElementById('pph21Terapkan').checked;
    const pph21_dpp_percentage = pph21Terapkan ? parseFloat(document.getElementById('tarifPPh21').value) : 0;

    const pph23Terapkan = document.getElementById('pph23Terapkan').checked;
    const tarifPPh23_input = pph23Terapkan ? document.getElementById('tarifPPh23').value : "0%";
    const tarifPPh23_raw = getPercentageFromValue(tarifPPh23_input);
    const tarifPPh23_decimal = tarifPPh23_raw / 100;

    const pph42Terapkan = document.getElementById('pph42Terapkan').checked;
    const tarifPPh42_raw = pph42Terapkan ? parseFloat(document.getElementById('tarifPPh42').value) : 0;
    const tarifPPh42_decimal = tarifPPh42_raw / 100;

    let hargaJual = inputHargaJual;
    let besarPPN = 0;
    let totalPPhDipotong = 0;
    let dppPPh21 = 0;
    let besarPPh21 = 0;
    let dppPPh23 = 0;
    let besarPPh23 = 0;
    let dppPPh42 = 0;
    let besarPPh42 = 0;
    let uangDiterimaFinal = 0;

    if (hargaJual <= 0) {
        document.getElementById('hargaJualSebelumPPN_gross').textContent = formatRupiah(0);
        document.getElementById('besarPPN_gross').textContent = formatRupiah(0);
        document.getElementById('dppPPh21_gross').textContent = formatRupiah(0);
        document.getElementById('besarPPh21_gross').textContent = formatRupiah(0);
        document.getElementById('dppPPh23_gross').textContent = formatRupiah(0);
        document.getElementById('besarPPh23_gross').textContent = formatRupiah(0);
        document.getElementById('dppPPh42_gross').textContent = formatRupiah(0);
        document.getElementById('besarPPh42_gross').textContent = formatRupiah(0);
        document.getElementById('summaryHargaJual_gross').textContent = formatRupiah(0);
        document.getElementById('summaryBesarPPN_gross').textContent = formatRupiah(0);
        document.getElementById('totalPPhDipotong_gross').textContent = formatRupiah(0);
        document.getElementById('uangDiterima_gross').textContent = formatRupiah(0);
        return;
    }

    if (ppnTerapkan) {
        besarPPN = hargaJual * tarifPPN_decimal;
    }

    if (pph21Terapkan) {
        dppPPh21 = hargaJual * (pph21_dpp_percentage / 100);
        besarPPh21 = calculatePS17Tax(dppPPh21);
    }

    if (pph23Terapkan) {
        dppPPh23 = hargaJual;
        besarPPh23 = dppPPh23 * tarifPPh23_decimal;
    }

    if (pph42Terapkan) {
        dppPPh42 = hargaJual;
        besarPPh42 = dppPPh42 * tarifPPh42_decimal;
    }

    totalPPhDipotong = besarPPh21 + besarPPh23 + besarPPh42;
    uangDiterimaFinal = hargaJual + besarPPN - totalPPhDipotong;

    document.getElementById('hargaJualSebelumPPN_gross').textContent = formatRupiah(hargaJual);
    document.getElementById('besarPPN_gross').textContent = formatRupiah(Math.round(besarPPN));
    document.getElementById('dppPPh21_gross').textContent = formatRupiah(Math.round(dppPPh21));
    document.getElementById('besarPPh21_gross').textContent = formatRupiah(Math.round(besarPPh21));
    document.getElementById('dppPPh23_gross').textContent = formatRupiah(Math.round(dppPPh23));
    document.getElementById('besarPPh23_gross').textContent = formatRupiah(Math.round(besarPPh23));
    document.getElementById('dppPPh42_gross').textContent = formatRupiah(Math.round(dppPPh42));
    document.getElementById('besarPPh42_gross').textContent = formatRupiah(Math.round(besarPPh42));

    document.getElementById('summaryHargaJual_gross').textContent = formatRupiah(hargaJual);
    document.getElementById('summaryBesarPPN_gross').textContent = formatRupiah(Math.round(besarPPN));
    document.getElementById('totalPPhDipotong_gross').textContent = formatRupiah(Math.round(totalPPhDipotong));
    document.getElementById('uangDiterima_gross').textContent = formatRupiah(Math.round(uangDiterimaFinal));
}


// =========================================================
// EVENT LISTENERS DAN INISIALISASI
// =========================================================
window.onload = function() {
    function updateCalculations() {
        calculateNet();
        calculateGross();
    }

    function handlePphCheckboxChange(currentCheckbox) {
        const pphCheckboxes = [
            document.getElementById('pph21Terapkan'),
            document.getElementById('pph23Terapkan'),
            document.getElementById('pph42Terapkan')
        ];
        pphCheckboxes.forEach(cb => {
            if (cb !== currentCheckbox) {
                cb.checked = false;
            }
            toggleDetails(cb.id);
        });
        updateCalculations();
    }

    $('#tarifPPh21').select2({ data: pph21Data });
    $('#tarifPPh23').select2({ data: pph23Data });
    $('#tarifPPh42').select2({ data: pph42Data });

    $('#tarifPPh21').val(pph21Data[0].id).trigger('change');
    $('#tarifPPh23').val(pph23Data[0].id).trigger('change');
    $('#tarifPPh42').val(pph42Data[0].id).trigger('change');

    document.getElementById('uangMasukRekening').addEventListener('input', () => {
        const uangMasukRekeningValue = document.getElementById('uangMasukRekening').value;
        document.getElementById('hargaJual').value = uangMasukRekeningValue;
        updateCalculations();
    });

    document.getElementById('hargaJual').addEventListener('input', () => {
        const hargaJualValue = document.getElementById('hargaJual').value;
        document.getElementById('uangMasukRekening').value = hargaJualValue;
        updateCalculations();
    });

    document.getElementById('ppnTerapkan').addEventListener('change', function() {
        toggleDetails('ppnTerapkan');
        updateCalculations();
    });

    const pphCheckboxes = [
        document.getElementById('pph21Terapkan'),
        document.getElementById('pph23Terapkan'),
        document.getElementById('pph42Terapkan')
    ];
    pphCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            handlePphCheckboxChange(this);
        });
    });

    document.getElementById('tarifPPN').addEventListener('change', updateCalculations);
    $('#tarifPPh21').on('change', updateCalculations);
    $('#tarifPPh23').on('change', updateCalculations);
    $('#tarifPPh42').on('change', updateCalculations);

    updateCalculations();
    toggleDetails('ppnTerapkan');
    handlePphCheckboxChange(null);
}