const fs = require('fs');
const path = require('path');

// Helper to ensure target directory exists
function ensureDir(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

// Load source templates
const templateId = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const templateEn = fs.readFileSync(path.join(__dirname, 'en/index.html'), 'utf8');

// Subpages specification
const subpagesId = [
    {
        filename: 'sewa-forklift-3-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-3-ton-bandung',
        title: 'Sewa Forklift 3 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift 3 Ton & rental mobile crane di Bandung & Cimahi. Unit prima siap kerja, operator berpengalaman & bersertifikat SIO aktif.',
        h1: 'Sewa Forklift Diesel 3 Ton di Bandung & Cimahi',
        subtitle: 'UNIT COMPACT, SANGAT COCOK UNTUK GUDANG SEMPIT',
        desc: 'Butuh rental forklift 3 ton yang lincah dan hemat tempat untuk gudang atau pabrik Anda? Satria Mandiri Forklift menyediakan unit 3 ton prima, operator SIO, dan respon cepat 24 jam.',
        activeTab: '3t',
        deskripsiKhusus: `
            <p>Forklift diesel kapasitas 3 Ton kami memiliki bodi yang compact dengan radius putar yang kecil. Karakteristik ini menjadikannya pilihan utama bagi pemilik gudang logistik, depo ekspedisi, dan pabrik manufaktur di Bandung yang memiliki koridor penyimpanan yang sempit (narrow aisle).</p>
            <p>Meskipun ukurannya ringkas, unit 3 Ton kami dibekali mesin diesel tangguh yang sanggup mengangkat beban maksimal hingga tinggi mast 4 meter. Sangat ideal untuk aktivitas penataan barang di rak tinggi, bongkar muat palet dari dalam kontainer, serta pemindahan inventaris harian dengan konsumsi bahan bakar yang sangat efisien.</p>
        `
    },
    {
        filename: 'sewa-forklift-5-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-5-ton-bandung',
        title: 'Sewa Forklift 5 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift 5 Ton & rental mobile crane profesional di Bandung & Cimahi. Unit prima terawat, harga kompetitif, respon cepat 24 jam.',
        h1: 'Jasa Sewa Forklift Diesel 5 Ton di Bandung & Cimahi',
        subtitle: 'UNIT MEDIUM DUTY, HANDAL DI SEGALA MEDAN',
        desc: 'Rental forklift 5 ton medium duty untuk pabrik, pemindahan mesin, dan logistik berat di Bandung Raya. Hubungi kami untuk penawaran harga terbaik hari ini.',
        activeTab: '5t',
        deskripsiKhusus: `
            <p>Unit forklift 5 Ton medium duty kami dirancang tangguh untuk penggunaan outdoor maupun indoor pabrik. Sangat andal untuk pemindahan mesin industri kapasitas menengah, pembongkaran muatan berat, dan operasional pabrik manufaktur di wilayah Bandung dan Cimahi.</p>
            <p>Dengan ground clearance yang ideal dan mesin diesel bertenaga optimal, unit ini stabil digunakan pada permukaan semen halus maupun jalan berkerikil. Kapasitas 5 Ton ini menjadi solusi seimbang antara kelincahan manuver dan kekuatan angkut beban industri Anda.</p>
        `
    },
    {
        filename: 'sewa-forklift-7-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-7-ton-bandung',
        title: 'Sewa Forklift 7 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift heavy duty 7 Ton & rental crane murah di Bandung & Cimahi. Sangat handal untuk pemindahan mesin pabrik & alat berat.',
        h1: 'Jasa Sewa Forklift Diesel 7 Ton di Bandung & Cimahi',
        subtitle: 'UNIT HEAVY DUTY UNTUK PROYEK BESAR & ALAT BERAT',
        desc: 'Sewa forklift heavy duty kapasitas 7 ton untuk proyek konstruksi, pemindahan alat berat, dan mesin besar di seluruh wilayah Bandung Raya.',
        activeTab: '7t',
        deskripsiKhusus: `
            <p>Untuk kebutuhan heavy duty, <strong>layanan sewa forklift</strong> 7 Ton kami menawarkan tenaga ekstra untuk mengangkat material konstruksi berat dan relokasi mesin pabrik raksasa. Selain unit <strong>7 ton</strong>, kami juga menyediakan kapasitas <strong>5 ton</strong> hingga armada heavy duty pendukung <strong>rental forklift 25 ton bandung</strong>. Setiap <strong>unit forklift</strong> kami selalu dirawat berkala agar operasional bongkar muat berjalan <strong>aman dan efisien</strong> di medan menantang.</p>
            <p>Kami berkomitmen menjadi <strong>solusi terbaik</strong> dengan menawarkan <strong>harga sewa</strong> yang bersaing dan transparan, menjadikannya pilihan <strong>terbaik untuk</strong> efisiensi anggaran proyek Anda. Seluruh armada kami didukung oleh operator berpengalaman bersertifikasi SIO Kemenaker aktif, sehingga Satria Mandiri selalu <strong>menjadi pilihan</strong> utama mitra industri di Bandung Raya.</p>
        `
    },
    {
        filename: 'sewa-forklift-15-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-15-ton-bandung',
        title: 'Sewa Forklift 15 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift diesel 15 ton heavy duty super di Bandung & Cimahi. Sangat tangguh untuk beban ekstra besar & mesin industri. Unit prima + operator ber-SIO.',
        h1: 'Jasa Sewa Forklift Diesel 15 Ton di Bandung & Cimahi',
        subtitle: 'UNIT HEAVY DUTY EKSTRA, TANGGUH UNTUK BEBAN SUPER BESAR',
        desc: 'Butuh rental forklift 15 ton untuk relokasi mesin pabrik raksasa atau bongkar muat beban super berat? Kami menyediakan forklift 15 Ton prima dengan operator berpengalaman sertifikat SIO.',
        activeTab: '15t',
        deskripsiKhusus: `
            <p>Layanan <strong>sewa forklift 15 ton bandung</strong> kami adalah solusi mutakhir untuk penanganan <strong>alat berat</strong>, pemindahan kargo pelabuhan, beton pracetak, dan mesin industri raksasa. Kami menjamin <strong>unit forklift</strong> berkapasitas <strong>15 ton</strong> ini selalu berada dalam <strong>kondisi prima</strong> untuk memastikan keselamatan kerja tinggi di lapangan.</p>
            <p>Sebagai penyedia jasa <strong>sewa forklift</strong> dan <strong>rental forklift</strong> terpercaya, kami menawarkan paket sewa fleksibel baik harian maupun kontrak <strong>jangka panjang</strong> untuk wilayah Bandung Raya. Pengiriman unit dilakukan menggunakan lowbed trailer khusus langsung ke lokasi Anda.</p>
        `
    },
    {
        filename: 'rental-forklift-cimareme-batujajar.html',
        canonical: 'https://satriaforklift.com/rental-forklift-cimareme-batujajar',
        title: 'Harga Sewa Forklift Batujajar Murah - Satria Mandiri',
        description: 'Rental forklift diesel 3-15 Ton & Mobile Crane di Kawasan Industri Cimareme, Batujajar, Padalarang, & Bandung Barat. Operator SIO, unit prima.',
        h1: 'Jasa Sewa & Rental Forklift Batujajar Cimareme',
        subtitle: 'RESPON CEPAT UNTUK KAWASAN INDUSTRI BANDUNG BARAT',
        desc: 'Spesialis rental forklift diesel 3-15 Ton & Mobile Crane untuk Kawasan Industri Cimareme, Batujajar, Padalarang, dan wilayah Bandung Barat lainnya. Respon cepat, operator bersertifikat SIO.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Kami fokus melayani area industri strategis di Bandung Barat dengan menyediakan layanan <strong>sewa forklift</strong> prima di Kawasan Industri Cimareme, Batujajar, hingga Padalarang. Jika Anda membutuhkan rincian tarif, kami menawarkan <strong>harga sewa forklift batujajar</strong> yang sangat kompetitif dan transparan. Unit kami siap diandalkan untuk <strong>mengangkut beban</strong> berat di area pabrik, pergudangan, maupun konstruksi Anda dengan cepat demi menghemat waktu operasional.</p>
            <p>Kami sangat memahami regulasi keselamatan kerja di kawasan industri Bandung Barat. Oleh karena itu, seluruh armada forklift diesel dan mobile crane kami memiliki sertifikat kelayakan (sertifikat Riksa Uji) dan dijalankan oleh operator dengan SIO aktif demi menjamin keselamatan kerja maksimal di lapangan.</p>
        `
    },
    {
        filename: 'sewa-forklift-rancaekek.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-rancaekek',
        title: 'Sewa Forklift & Crane Rancaekek & Cileunyi | Satria Mandiri Forklift',
        description: 'Layanan rental forklift diesel 3-15 Ton & Mobile Crane cepat untuk Kawasan Industri Rancaekek, Jatinangor, Cileunyi, Bandung Timur. Siap kerja 24 jam.',
        h1: 'Jasa Sewa Forklift & Crane di Rancaekek & Cileunyi',
        subtitle: 'SIAP KIRIM CEPAT KE KAWASAN INDUSTRI RANCAEKEK',
        desc: 'Layanan rental forklift diesel & crane cepat untuk Kawasan Industri Rancaekek, Jatinangor, Cileunyi, dan sekitarnya. Unit terawat siap kerja shift atau lembur.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Satria Mandiri Forklift kini <strong>membuka layanan</strong> respon cepat untuk kebutuhan <strong>rental forklift rancaekek</strong> di Bandung Timur. Layanan <strong>sewa forklift rancaekek</strong> dan <strong>sewa forklift cileunyi</strong> kami hadir untuk mendukung mobilitas tinggi dalam bongkar muat bahan baku maupun hasil produksi pabrik tekstil skala besar, industri garmen, serta kompleks pergudangan logistik di kawasan ini dengan penawaran <strong>harga sewa forklift rancaekek</strong> terbaik.</p>
            <p>Dengan pool armada <strong>forklift rancaekek</strong> yang strategis, pengiriman <strong>unit forklift</strong> diesel 3-15 Ton maupun <strong>sewa crane rancaekek</strong> ke area Rancaekek (seperti area sekitar Kahatex, Linggar, atau Dwipapuri) dapat dilakukan dengan cepat melalui akses Tol Cileunyi. Tim mekanik dan operator kami siap siaga 24 jam untuk melayani sistem kerja shift maupun lembur pabrik Anda.</p>
        `
    },
    {
        filename: 'sewa-forklift-gedebage.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-gedebage',
        title: 'Sewa & Rental Forklift Gedebage Bandung - Satria Mandiri',
        description: 'Sewa forklift 3-15 Ton & Mobile Crane di area pergudangan Gedebage, Soekarno-Hatta, dan Bandung Timur. Respon cepat, harga kompetitif, operator berpengalaman.',
        h1: 'Sewa & Rental Forklift Gedebage Bandung',
        subtitle: 'SPESIALIS RENTAL FORKLIFT & CRANE GUDANG GEDEBAGE & BYPASS',
        desc: 'Sewa forklift 3-15 Ton & Mobile Crane di area pergudangan Gedebage, Soekarno-Hatta, dan Bandung Timur. Respon cepat, harga transparan, operator berpengalaman.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Mitra andalan untuk kebutuhan logistik dan bongkar muat kontainer di <strong>wilayah gedebage</strong> serta sepanjang jalur jalan Soekarno-Hatta (Bypass). Jika Anda membutuhkan layanan <strong>rental forklift gedebage</strong> atau <strong>rental forklift bandung raya</strong> terpercaya, Satria Mandiri Forklift siap <strong>memberikan solusi</strong> terbaik dengan armada <strong>forklift mulai</strong> dari kapasitas 3 Ton, <strong>7 ton</strong>, hingga <strong>15 ton</strong>. Kami juga melayani <strong>sewa crane</strong> dengan kapasitas 20 ton, <strong>25 ton</strong>, <strong>30 ton</strong>, hingga <strong>sewa crane 35 ton bandung</strong>.</p>
            <p>Semua unit kami berada dalam <strong>kondisi prima</strong> dan selalu siap pakai untuk mendukung operasional proyek Anda. Hubungi kami untuk mendapatkan <strong>layanan sewa forklift</strong> yang aman, efisien, dan tentunya <strong>terbaik untuk kebutuhan</strong> industri, konstruksi, maupun pergudangan di Bandung Timur.</p>
        `
    },
    {
        filename: 'sewa-crane-20-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-crane-20-ton-bandung',
        title: 'Sewa Crane 20 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa mobile crane 20 Ton murah di Bandung & Cimahi. Unit prima siap kerja, operator bersertifikat SIO aktif, respon cepat 24 jam.',
        h1: 'Jasa Sewa Mobile Crane 20 Ton di Bandung & Cimahi',
        subtitle: 'UNIT MOBILE, SANGAT COCOK UNTUK PROYEK & INSTALASI MESIN SEDANG',
        desc: 'Butuh rental mobile crane 20 ton yang gesit dan tangguh untuk proyek konstruksi atau pemindahan mesin sedang? Kami menyediakan unit crane 20 ton prima dengan operator berpengalaman.',
        activeTab: 'crane-20t',
        deskripsiKhusus: `
            <p>Mobile Crane kapasitas 20 Ton kami sangat fleksibel untuk pekerjaan erection balok beton, pemasangan tiang pancang ringan, maupun instalasi mesin pabrik berukuran sedang. Dengan setup unit di lapangan yang tergolong cepat, proyek konstruksi Anda dapat berjalan lebih efisien.</p>
            <p>Unit crane 20 Ton kami tergolong lincah di jalanan Bandung Raya dan mampu menjangkau proyek perkotaan dengan boom teleskopik yang andal. Operator kami telah dibekali sertifikat SIO kelas crane mobil aktif dari Kemenaker untuk memastikan aspek K3 terpenuhi.</p>
        `
    },
    {
        filename: 'sewa-crane-25-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-crane-25-ton-bandung',
        title: 'Sewa Crane 25 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa mobile crane 25 Ton murah di Bandung & Cimahi. Unit prima terawat, operator bersertifikat SIO aktif, siap melayani 24 jam.',
        h1: 'Jasa Sewa Mobile Crane 25 Ton di Bandung & Cimahi',
        subtitle: 'KAPASITAS MEDIUM, UTAMA UNTUK ERECTION BAJA & JEMBATAN',
        desc: 'Penyedia rental truck crane/mobile crane 25 ton prima untuk pemasangan baja, konstruksi jembatan, dan bongkar muat kontainer di Bandung Raya.',
        activeTab: 'crane-25t',
        deskripsiKhusus: `
            <p>Unit Truck Crane 25 Ton kami dilengkapi dengan panjang boom optimal untuk kebutuhan pemasangan rangka baja ruko, konstruksi jembatan sekunder, dan pemindahan beban berat outdoor yang membutuhkan jangkauan tinggi. Kestabilan outrigger pada unit ini menjamin keamanan pengangkatan ekstrim.</p>
            <p>Kami menyewakan unit crane 25 Ton ini lengkap dengan aksesoris rigging penunjang (seperti shackle, webbing sling, wire rope) yang teruji kekuatannya. Sangat cocok untuk proyek infrastruktur di area Bandung, Cimahi, dan sekitarnya dengan opsi sewa harian atau bulanan.</p>
        `
    },
    {
        filename: 'sewa-crane-35-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-crane-35-ton-bandung',
        title: 'Sewa Crane 35 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa rough terrain crane 35 Ton di Bandung & Cimahi. Unit tangguh off-road, operator ber-SIO aktif, respon cepat.',
        h1: 'Jasa Sewa Rough Terrain Crane 35 Ton di Bandung & Cimahi',
        subtitle: 'UNIT ROUGH TERRAIN, TANGGUH DI MEDAN BERLUMPUR & OFF-ROAD',
        desc: 'Butuh sewa rough terrain crane 35 ton untuk medan kasar atau area berlumpur? Satria Mandiri Forklift menyediakan crane 35 Ton prima dengan ban off-road besar.',
        activeTab: 'crane-35t',
        deskripsiKhusus: `
            <p>Rough Terrain Crane 35 Ton kami dibekali roda penggerak off-road khusus dan ban besar bermotif pacul. Karakteristik ini menjadikannya pilihan terbaik untuk proyek infrastruktur jalan, jembatan, atau area proyek baru yang medannya masih tanah basah, bergelombang, atau berlumpur.</p>
            <p>Meskipun handal di medan kasar, unit ini juga presisi dalam pengangkatan material berkat sistem kendali hidrolik modern. Sangat direkomendasikan untuk proyek pembukaan lahan industri baru di daerah Bandung Barat maupun Bandung Regency.</p>
        `
    },
    {
        filename: 'sewa-crane-45-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-crane-45-ton-bandung',
        title: 'Sewa Crane 45 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa mobile crane 45 Ton heavy duty di Bandung & Cimahi. Unit prima + operator ber-SIO aktif. Hubungi kami untuk penawaran terbaik.',
        h1: 'Jasa Sewa Mobile Crane 45 Ton di Bandung & Cimahi',
        subtitle: 'UNIT HEAVY DUTY UNTUK KONSTRUKSI BESAR & MESIN RAKSASA',
        desc: 'Layanan sewa truck crane 45 ton heavy duty dengan stabilizer kokoh dan boom panjang hingga 42 meter untuk proyek konstruksi skala besar di Bandung.',
        activeTab: 'crane-45t',
        deskripsiKhusus: `
            <p>Dengan kapasitas beban maksimal 45 Ton dan jangkauan teleskopik boom hingga 42 meter, unit ini adalah andalan utama proyek gedung bertingkat, pemasangan komponen girder beton, serta evakuasi alat berat di area Bandung dan Cimahi. Kaki outrigger hidrolik kokoh memastikan distribusi berat yang aman.</p>
            <p>Karena merupakan armada super heavy duty, penyewaan unit ini selalu didampingi oleh survei lokasi terlebih dahulu dari tim ahli kami untuk memastikan daya dukung tanah dan ruang manuver aman. Hubungi kami untuk penawaran harga sewa crane 45 Ton terbaik.</p>
        `
    },
    {
        filename: 'sewa-forklift-terdekat.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-terdekat',
        title: 'Jasa Sewa & Rental Forklift Terdekat di Bandung Raya - Satria Mandiri',
        description: 'Mencari sewa forklift terdekat di Bandung Raya? Satria Mandiri Forklift siap melayani jasa sewa forklift terdekat harian mingguan dengan harga murah bersahabat.',
        h1: 'Jasa Sewa & Rental Forklift Terdekat di Bandung Raya',
        subtitle: 'SOLUSI RENTAL FORKLIFT TERDEKAT CEPAT DAN BERPENGALAMAN',
        desc: 'Kami menawarkan jasa sewa forklift terdekat untuk segala kebutuhan pemindahan mesin pabrik, konstruksi, dan logistik pergudangan di Bandung Raya.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Jika Anda memerlukan layanan <strong>sewa forklift terdekat</strong> yang responsif dan siap siaga 24 jam, Satria Mandiri Forklift adalah mitra terpercaya yang tepat. Kami melayani <strong>jasa sewa forklift</strong> untuk berbagai sektor industri dan konstruksi di wilayah Bandung, Cimahi, dan sekitarnya dengan proses pengiriman armada yang cepat langsung dari pool terdekat ke lokasi kerja Anda.</p>
            <p>Semua unit kami terawat baik untuk memastikan kenyamanan dan kelancaran pekerjaan Anda. Dapatkan penawaran harga <strong>rental forklift terdekat</strong> terbaik untuk sewa harian, mingguan, maupun jangka panjang dengan operator berpengalaman bersertifikat SIO aktif.</p>
        `
    },
    {
        filename: 'sio-operator-forklift.html',
        canonical: 'https://satriaforklift.com/sio-operator-forklift',
        title: 'Syarat & Cara Mengurus SIO Operator Forklift Resmi | Satria Mandiri',
        description: 'Panduan lengkap cara mengurus SIO forklift resmi. Pelajari syarat menjadi operator forklift bersertifikat SIO Kemnaker untuk jaminan keselamatan kerja.',
        h1: 'Syarat & Cara Mengurus SIO Operator Forklift Resmi',
        subtitle: 'EDUKASI & KESELAMATAN KERJA ALAT BERAT',
        desc: 'Pelajari apa itu sertifikat SIO forklift, syarat dokumen, tahapan sertifikasi operator forklift Kemnaker, dan pentingnya lisensi resmi bagi operator.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Seorang <strong>operator forklift adalah</strong> profesional yang bertanggung jawab penuh atas pengoperasian unit forklift secara aman. Untuk meminimalkan risiko kecelakaan kerja di pergudangan atau pabrik, Kemnaker mewajibkan setiap pengemudi memiliki <strong>sertifikat forklift</strong> resmi berupa Surat Izin Operasional (SIO).</p>
            <p>Untuk mengurus <strong>sio forklift</strong>, calon operator harus mengikuti pelatihan pembinaan K3 khusus dari PJK3 yang ditunjuk secara resmi. Syarat utamanya meliputi usia minimal 18 tahun, memiliki ijazah pendidikan, surat keterangan sehat, pas foto, serta lulus ujian teori dan praktik pengoperasian unit forklift.</p>
        `
    }
];

const subpagesEn = [
    {
        filename: 'en/rent-forklift-3-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-3-ton-bandung',
        title: 'Rent 3 Ton Forklift Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent compact 3-ton diesel forklift & mobile cranes in Bandung & Cimahi. Well-maintained units, competitive rates, and SIO certified crew.',
        h1: 'Diesel Forklift Rental 3 Ton in Bandung & Cimahi',
        subtitle: 'COMPACT UNIT, BEST SUITED FOR NARROW WAREHOUSES',
        desc: 'Need an agile and space-saving 3-ton forklift for your warehouse or factory? Satria Mandiri Forklift provides well-maintained 3-ton units, SIO operators, and 24/7 fast support.',
        activeTab: '3t',
        deskripsiKhusus: `
            <p>Our 3 Ton diesel forklift has a compact body and a tight turning radius. This configuration makes it the top choice for warehouse owners, logistics companies, and manufacturing sites in Bandung looking to maximize vertical storage space within narrow aisles.</p>
            <p>Despite its small footprint, our 3T forklift features a highly efficient diesel engine capable of hoisting loads up to a mast height of 4 meters. It is ideal for loading and unloading standard shipping containers, moving palletized stock, and handling daily inventory with zero hassle.</p>
        `
    },
    {
        filename: 'en/rent-forklift-5-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-5-ton-bandung',
        title: 'Rental Forklift 5 Ton Bandung - Satria Mandiri Forklift',
        description: 'Rent 5-ton medium-duty forklift & mobile cranes in Bandung & Cimahi. Safe operations, prime machinery, and experienced operators.',
        h1: 'Rental Forklift 5 Ton Bandung | Medium-Duty Diesel Forklift',
        subtitle: 'MEDIUM-DUTY DIESEL FORKLIFT, VERSATILE & RELIABLE',
        desc: 'Rent a 5-ton medium-duty diesel forklift for factories, machinery moving, and heavy logistics in Bandung Raya. Contact us for the best rates today.',
        activeTab: '5t',
        deskripsiKhusus: `
            <p>Our 5 Ton medium-duty diesel forklift is built tough for both outdoor and indoor factory environments. It is highly reliable for relocating mid-sized industrial machinery, unloading heavy raw materials, and supporting daily operations in Bandung and Cimahi's manufacturing sectors.</p>
            <p>With an ideal ground clearance and optimal engine power, this unit maintains great stability on concrete warehouse floors as well as gravel roads. It offers the perfect balance between lift capacity and site maneuverability.</p>
        `
    },
    {
        filename: 'en/rent-forklift-7-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-7-ton-bandung',
        title: 'Rent 7 Ton Forklift Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent heavy-duty 7-ton forklift & mobile cranes in Bandung & Cimahi. Ideal for factory relocation and heavy industrial machinery handling.',
        h1: 'Diesel Forklift Rental 7 Ton in Bandung & Cimahi',
        subtitle: 'HEAVY-DUTY DIESEL FORKLIFT FOR BIG PROJECTS & EQUIPMENT',
        desc: 'Rent heavy-duty 7-ton forklifts for construction projects, heavy equipment handling, and large machinery across the entire Bandung Raya region.',
        activeTab: '7t',
        deskripsiKhusus: `
            <p>For heavy-duty industrial needs, our 7 Ton forklift delivers extra lifting power to handle structural steel, concrete pipes, and large factory machinery. The thick reinforced chassis guarantees safe operation under heavy loads in demanding site conditions.</p>
            <p>All our 7 Ton rental units are operated by highly experienced crew holding active Kemenaker SIO licenses. We offer flexible rental options, including daily, shift-based, or long-term monthly contracts to fit your project budget in Bandung Raya.</p>
        `
    },
    {
        filename: 'en/rent-forklift-15-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-15-ton-bandung',
        title: 'Rent 15 Ton Forklift Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent heavy duty 15 ton diesel forklifts in Bandung & Cimahi. Perfect for massive industrial machinery & extra heavy loading. Prime fleet + SIO licensed operators.',
        h1: 'Diesel Forklift Rental 15 Ton in Bandung & Cimahi',
        subtitle: 'SUPER HEAVY-DUTY UNIT, CAPABLE OF HANDLING MASSIVE LOADS',
        desc: 'Need a powerful 15-ton forklift for factory relocations or extra-heavy lifting? Satria Mandiri Forklift provides well-maintained 15T units with professional SIO certified operators.',
        activeTab: '15t',
        deskripsiKhusus: `
            <p>Our super heavy-duty 15 Ton diesel forklift is the ultimate solution for port cargo handling, precast concrete structures, and relocating heavy industrial machinery. This unit features dual hydraulic systems for maximum load stabilization during critical lifts.</p>
            <p>Due to its substantial dimensions, the 15 Ton unit is transported directly to your site using dedicated lowbed/self-loader trailers. We ensure our machines are in peak operational health to serve long-term or short-term industrial operations across Bandung Raya.</p>
        `
    },
    {
        filename: 'en/rental-forklift-cimareme-batujajar.html',
        canonical: 'https://satriaforklift.com/en/rental-forklift-cimareme-batujajar',
        title: 'Forklift & Crane Rental Cimareme & Batujajar | Satria Mandiri Forklift',
        description: 'Fast diesel forklift rentals 3-15 Ton & Mobile Cranes for Cimareme Industrial Zone, Batujajar, Padalarang, and West Bandung. SIO operators, prime fleet.',
        h1: 'Diesel Forklift & Crane Rental in Cimareme & Batujajar',
        subtitle: 'QUICK RESPONSE FOR WEST BANDUNG INDUSTRIAL AREAS',
        desc: 'Specialized 3-15 ton diesel forklift & Mobile Crane rentals for Cimareme Industrial Zone, Batujajar, Padalarang, and other West Bandung locations. Fast response, SIO certified crew.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>We focus on serving strategic industrial hubs in West Bandung, spanning Cimareme Industrial Zone, Batujajar, and Padalarang. Having local fleets nearby ensures rapid mobilization and delivery to your site or warehouse, minimizing operational downtime.</p>
            <p>We are fully aligned with safety standards in West Bandung's industrial zones. Thus, all our diesel forklifts and mobile cranes hold active safety certificates (Riksa Uji) and are manned by certified SIO crew to guarantee a zero-accident project site.</p>
        `
    },
    {
        filename: 'en/rent-forklift-rancaekek.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-rancaekek',
        title: 'Sewa Forklift Rancaekek & Rental Forklift Cileunyi - Satria Mandiri',
        description: 'Fast diesel forklift & crane rental services 3-15 Ton & Mobile Cranes for Rancaekek Industrial Area, Jatinangor, Cileunyi, East Bandung. 24/7 support.',
        h1: 'Sewa Forklift Rancaekek & Rental Forklift Cileunyi | Forklift Hires',
        subtitle: 'PROMPT DELIVERY TO RANCAEKEK INDUSTRIAL ZONE',
        desc: 'Fast diesel forklift & crane rental services for Rancaekek Industrial Area, Jatinangor, Cileunyi, and surrounding zones. Well-maintained units ready for shifts or overtime.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Layanan <strong>sewa forklift rancaekek</strong> dan <strong>rental forklift cileunyi</strong> kami dirancang untuk mendukung aktivitas <strong>bongkar muat</strong> kargo di sektor manufaktur Bandung Timur. Keberadaan unit <strong>forklift menjadi</strong> solusi utama <strong>untuk kebutuhan</strong> logistik harian pabrik tekstil, industri garmen, serta pergudangan Anda.</p>
            <p>Thanks to our strategic local pool, dispatching 3-15 Ton diesel forklifts or Mobile Cranes to Rancaekek (such as Kahatex, Linggar, or Dwipapuri areas) is highly efficient via the Cileunyi toll road. Our maintenance team and operators are available 24/7 to support shift schedules or factory overtime work.</p>
        `
    },
    {
        filename: 'en/rent-forklift-gedebage.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-gedebage',
        title: 'Forklift & Crane Rental Gedebage & East Bandung | Satria Mandiri Forklift',
        description: 'Rent 3-15 Ton diesel forklifts & Mobile Cranes in Gedebage warehousing, Soekarno-Hatta, and East Bandung. Fast response, transparent rates, skilled operators.',
        h1: 'Diesel Forklift & Crane Rental in Gedebage & East Bandung',
        subtitle: 'WAREHOUSE FORKLIFT & CRANE SPECIALIST IN GEDEBAGE & BYPASS',
        desc: 'Rent 3-15 ton forklifts & mobile cranes in the warehousing hub of Gedebage, Soekarno-Hatta, and East Bandung. Quick delivery, transparent pricing, and experienced crew.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>Your reliable partner for logistics and container handling in the Gedebage warehousing hub and along the Soekarno-Hatta bypass. Gedebage stands as the main warehousing center in Bandung, demanding highly agile forklifts and heavy-duty cranes to move import-export cargo.</p>
            <p>We offer highly competitive rental rates with simple paperwork. Whether you need daily container unloading, e-commerce logistics support, or infrastructure project handling in East Bandung, our fleet is ready for immediate dispatch from the nearest yard.</p>
        `
    },
    {
        filename: 'en/rent-crane-20-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-crane-20-ton-bandung',
        title: 'Rent 20 Ton Crane Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent compact 20-ton mobile crane in Bandung & Cimahi. Well-maintained units, competitive rates, and SIO certified crew.',
        h1: 'Mobile Crane Rental 20 Ton in Bandung & Cimahi',
        subtitle: 'COMPACT MOBILE CRANE, BEST SUITED FOR MEDIUM PROJECTS & MACHINERY',
        desc: 'Need a mobile and efficient 20-ton crane for construction projects or machinery installation? Satria Mandiri Forklift provides prime 20T crane units with professional operators.',
        activeTab: 'crane-20t',
        deskripsiKhusus: `
            <p>Our 20 Ton Mobile Crane is highly flexible for steel beam erection, light piling, and medium machinery installations. Quick setup on site ensures high efficiency for your construction schedule.</p>
            <p>This 20T mobile crane is highly maneuverable on Bandung's main roads and can easily access urban job sites. Our crew holds active mobile crane SIO licenses from Kemenaker to meet all workplace safety requirements.</p>
        `
    },
    {
        filename: 'en/rent-crane-25-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-crane-25-ton-bandung',
        title: 'Rent 25 Ton Crane Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent 25-ton mobile crane in Bandung & Cimahi. Safe operations, steel erection, and experienced operators.',
        h1: 'Mobile Crane Rental 25 Ton in Bandung & Cimahi',
        subtitle: 'MEDIUM CAPACITY, IDEAL FOR STEEL ERECTION & BRIDGE CONSTRUCTION',
        desc: 'Rent a 25-ton truck crane/mobile crane for steel installation, bridge work, and container handling in Bandung. Contact us for rates today.',
        activeTab: 'crane-25t',
        deskripsiKhusus: `
            <p>Our 25 Ton Truck Crane features an optimal boom length for steel frame erections, bridge construction, and heavy outdoor loading that requires high vertical reach. Outrigger stability guarantees safe operations during extreme lifts.</p>
            <p>We rent out the 25T crane fully equipped with certified rigging accessories (such as shackles, webbing slings, and wire ropes). It is perfectly suited for infrastructure projects across Bandung and Cimahi with daily or monthly options.</p>
        `
    },
    {
        filename: 'en/rent-crane-35-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-crane-35-ton-bandung',
        title: 'Rent 35 Ton Crane Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent rough terrain 35-ton crane in Bandung & Cimahi. Perfect for muddy off-road sites. SIO licensed crew.',
        h1: 'Rough Terrain Crane Rental 35 Ton in Bandung & Cimahi',
        subtitle: 'ROUGH terrain CRANE, CAPABLE OF MEDLEY MEDIAN & OFF-ROAD SITES',
        desc: 'Need a durable 35-ton crane for rough terrains or off-road infrastructure? Satria Mandiri Forklift provides well-maintained rough terrain cranes with experienced operators.',
        activeTab: 'crane-35t',
        deskripsiKhusus: `
            <p>Equipped with specialized off-road tyres and 4WD, our 35 Ton Rough Terrain Crane is the best option for road construction, bridges, or new project sites with muddy, uneven, or wet terrain.</p>
            <p>While extremely capable on rough grounds, this unit maintains absolute precision during lifts thanks to modern hydraulic controls. It is highly recommended for site clearing and development projects in West Bandung or Bandung Regency.</p>
        `
    },
    {
        filename: 'en/rent-crane-45-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-crane-45-ton-bandung',
        title: 'Rent 45 Ton Crane Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent heavy duty 45 ton mobile crane in Bandung & Cimahi. Great reach, powerful stabilizers, SIO licensed crew.',
        h1: 'Mobile Crane Rental 45 Ton in Bandung & Cimahi',
        subtitle: 'HEAVY-DUTY MOBILE CRANE FOR LARGE SCALE CONSTRUCTION',
        desc: 'Specialized 45-ton truck crane rental with boom length up to 42 meters and robust stabilizers for heavy machinery moving and massive infrastructure.',
        activeTab: 'crane-45t',
        deskripsiKhusus: `
            <p>Featuring a maximum load capacity of 45 Tons and a telescopic boom reaching up to 42 meters, this heavy-duty mobile crane is the main choice for high-rise buildings, girder installations, and heavy equipment recovery in Bandung. Heavy hydraulic stabilizers ensure secure weight distribution.</p>
            <p>As a super heavy-duty machine, renting our 45T crane always includes a preliminary site survey by our technical team to verify ground bearing capacity and clearance. Contact us today to receive our best 45 Ton crane rental rates.</p>
        `
    },
    {
        filename: 'en/rent-forklift-nearest.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-nearest',
        title: 'Nearest Forklift Rental Services in Bandung Raya - Satria Mandiri',
        description: 'Looking for the nearest forklift rental in Bandung? Satria Mandiri offers professional forklift hires at competitive prices. Contact us for daily or weekly rentals.',
        h1: 'Nearest Forklift Rental & Hires in Bandung Raya',
        subtitle: 'FAST RESPONSIVE FORKLIFT RENTAL SERVICES NEARBY',
        desc: 'We provide professional nearby forklift rental services for all factory machine moving, logistics, and heavy duty projects in Bandung.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>When searching for a <strong>nearest forklift rental</strong> in Bandung and Cimahi, look no further than Satria Mandiri. We provide fast response times and SIO-certified operators to ensure your heavy lifting tasks are executed with maximum safety and efficiency.</p>
            <p>Our fleet comprises 3-15 Ton diesel forklifts ready to be dispatched from our nearest local pools. Contact us today to secure the best rates for short-term or long-term hires.</p>
        `
    },
    {
        filename: 'en/rent-forklift-sio-operator.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-sio-operator',
        title: 'Official SIO Forklift Operator License Guide | Satria Mandiri',
        description: 'Learn about the requirements and certification process to obtain an official SIO forklift operator license in Indonesia.',
        h1: 'How to Obtain an Official SIO Forklift Operator License',
        subtitle: 'SAFETY EDUCATION & HEAVY MACHINERY LICENSE GUIDE',
        desc: 'Understand the certification pathway, required documents, and role of certified forklift operators under Kemnaker regulations.',
        activeTab: 'all',
        deskripsiKhusus: `
            <p>An official <strong>sio forklift</strong> license is a mandatory requirement under Kemnaker regulation to operate any industrial forklift. A certified <strong>operator forklift adalah</strong> key to minimizing occupational hazards and maintaining warehouse safety standards.</p>
            <p>Obtaining a <strong>sertifikat forklift</strong> requires completing a certified training course, passing theoretical tests, and passing practical evaluations of machinery control.</p>
        `
    }
];

// Helper to replace text in templates
function generateHTML(template, spec, altSpec, isEn) {
    let html = template;

    // 1. Update Title tag
    html = html.replace(/<title>.*?<\/title>/, `<title>${spec.title}</title>`);

    // 2. Update Meta Description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${spec.description}"`);

    // 3. Update Canonical Link
    const canonUrl = spec.canonical.replace('https://satriaforklift.com', 'https://www.satriaforklift.com');
    html = html.replace(/<link rel="canonical"\s+href=".*?"/, `<link rel="canonical" href="${canonUrl}"`);

    // Update Hreflang links
    const idUrl = isEn ? altSpec.canonical : spec.canonical;
    const enUrl = isEn ? spec.canonical : altSpec.canonical;
    const cleanIdUrl = idUrl.replace('https://satriaforklift.com', 'https://www.satriaforklift.com');
    const cleanEnUrl = enUrl.replace('https://satriaforklift.com', 'https://www.satriaforklift.com');
    
    html = html.replace(/<link rel="alternate"\s+hreflang="id"\s+href=".*?"\s*\/?>/, `<link rel="alternate" hreflang="id" href="${cleanIdUrl}" />`);
    html = html.replace(/<link rel="alternate"\s+hreflang="en"\s+href=".*?"\s*\/?>/, `<link rel="alternate" hreflang="en" href="${cleanEnUrl}" />`);

    // 4. Update Hero content
    html = html.replace(/<span class="hero-subtitle">.*?<\/span>/, `<span class="hero-subtitle">${spec.subtitle}</span>`);
    html = html.replace(/<h1 class="hero-title">.*?<\/h1>/, `<h1 class="hero-title">${spec.h1}</h1>`);
    html = html.replace(/<p class="hero-desc">.*?<\/p>/, `<p class="hero-desc">${spec.desc}</p>`);

    // 5. Active Tab adjustment in HTML
    if (spec.activeTab === '5t') {
        html = html.replace(/class="tab-btn active"\s+data-target="unit-3t"/, 'class="tab-btn" data-target="unit-3t"');
        html = html.replace(/class="tab-btn"\s+data-target="unit-5t"/, 'class="tab-btn active" data-target="unit-5t"');
        html = html.replace(/class="unit-tab-content active"\s+id="unit-3t"/, 'class="unit-tab-content" id="unit-3t"');
        html = html.replace(/class="unit-tab-content"\s+id="unit-5t"/, 'class="unit-tab-content active" id="unit-5t"');
    } else if (spec.activeTab === '7t') {
        html = html.replace(/class="tab-btn active"\s+data-target="unit-3t"/, 'class="tab-btn" data-target="unit-3t"');
        html = html.replace(/class="tab-btn"\s+data-target="unit-7t"/, 'class="tab-btn active" data-target="unit-7t"');
        html = html.replace(/class="unit-tab-content active"\s+id="unit-3t"/, 'class="unit-tab-content" id="unit-3t"');
        html = html.replace(/class="unit-tab-content"\s+id="unit-7t"/, 'class="unit-tab-content active" id="unit-7t"');
    } else if (spec.activeTab === '15t') {
        html = html.replace(/class="tab-btn active"\s+data-target="unit-3t"/, 'class="tab-btn" data-target="unit-3t"');
        html = html.replace(/class="tab-btn"\s+data-target="unit-15t"/, 'class="tab-btn active" data-target="unit-15t"');
        html = html.replace(/class="unit-tab-content active"\s+id="unit-3t"/, 'class="unit-tab-content" id="unit-3t"');
        html = html.replace(/class="unit-tab-content"\s+id="unit-15t"/, 'class="unit-tab-content active" id="unit-15t"');
    } else if (spec.activeTab === 'crane-25t') {
        html = html.replace(/class="tab-btn active"\s+data-target="crane-20t"/, 'class="tab-btn" data-target="crane-20t"');
        html = html.replace(/class="tab-btn"\s+data-target="crane-25t"/, 'class="tab-btn active" data-target="crane-25t"');
        html = html.replace(/class="unit-tab-content active"\s+id="crane-20t"/, 'class="unit-tab-content" id="crane-20t"');
        html = html.replace(/class="unit-tab-content"\s+id="crane-25t"/, 'class="unit-tab-content active" id="crane-25t"');
    } else if (spec.activeTab === 'crane-35t') {
        html = html.replace(/class="tab-btn active"\s+data-target="crane-20t"/, 'class="tab-btn" data-target="crane-20t"');
        html = html.replace(/class="tab-btn"\s+data-target="crane-35t"/, 'class="tab-btn active" data-target="crane-35t"');
        html = html.replace(/class="unit-tab-content active"\s+id="crane-20t"/, 'class="unit-tab-content" id="crane-20t"');
        html = html.replace(/class="unit-tab-content"\s+id="crane-35t"/, 'class="unit-tab-content active" id="crane-35t"');
    } else if (spec.activeTab === 'crane-45t') {
        html = html.replace(/class="tab-btn active"\s+data-target="crane-20t"/, 'class="tab-btn" data-target="crane-20t"');
        html = html.replace(/class="tab-btn"\s+data-target="crane-45t"/, 'class="tab-btn active" data-target="crane-45t"');
        html = html.replace(/class="unit-tab-content active"\s+id="crane-20t"/, 'class="unit-tab-content" id="crane-20t"');
        html = html.replace(/class="unit-tab-content"\s+id="crane-45t"/, 'class="unit-tab-content active" id="crane-45t"');
    }

    // 6. Set scroll target based on page type / activeTab
    if (spec.activeTab) {
        if (spec.activeTab.startsWith('crane-')) {
            html = html.replace(/<body id="home">/, '<body id="home" data-scroll-target="#crane">');
        } else if (spec.activeTab === 'all') {
            html = html.replace(/<body id="home">/, '<body id="home" data-scroll-target="#wilayah">');
        } else {
            // For forklift capacity tabs ('3t', '5t', '7t', '15t')
            html = html.replace(/<body id="home">/, '<body id="home" data-scroll-target="#unit">');
        }
    }

    // 7. Inject Unique SEO Description
    if (spec.deskripsiKhusus) {
        const boxTitle = isEn ? 'Special Service Focus' : 'Fokus Layanan Khusus';
        const boxIcon = spec.activeTab === 'all' ? 'fa-map-marker-alt' : 'fa-info-circle';
        const seoBox = `
                        <div class="seo-feature-box">
                            <div class="seo-feature-icon"><i class="fas ${boxIcon}"></i></div>
                            <div class="seo-feature-text">
                                <h4>${boxTitle}</h4>
                                ${spec.deskripsiKhusus}
                            </div>
                        </div>`;
        html = html.replace(/<!-- DESKRIPSI_KHUSUS_PROYEK -->/, seoBox);
    } else {
        html = html.replace(/<!-- DESKRIPSI_KHUSUS_PROYEK -->/, '');
    }

    return html;
}

// Generate ID Subpages
subpagesId.forEach((spec, idx) => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generateHTML(templateId, spec, subpagesEn[idx], false);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

// Generate EN Subpages
subpagesEn.forEach((spec, idx) => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generateHTML(templateEn, spec, subpagesId[idx], true);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

console.log('All 14 landing pages generated successfully!');
