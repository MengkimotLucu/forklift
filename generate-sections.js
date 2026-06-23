const fs = require('fs');
const path = require('path');

// Helper to ensure target directory exists
function ensureDir(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

// Load templates
const templateId = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const templateEn = fs.readFileSync(path.join(__dirname, 'en/index.html'), 'utf8');

// Indonesian section pages
const sectionsId = [
    {
        filename: 'beranda.html',
        target: '#home',
        canonical: 'https://satriaforklift.com/beranda',
        title: 'Rental Forklift Bandung & Cimahi 3-7 Ton | Satria Forklift',
        description: 'Sewa forklift diesel 3-7 ton murah di Bandung & Cimahi. Respon cepat, unit terawat, dan operator bersertifikat SIO aktif.'
    },
    {
        filename: 'armada.html',
        target: '#unit',
        canonical: 'https://satriaforklift.com/armada',
        title: 'Armada & Kapasitas Unit Rental Forklift Bandung | Satria Forklift',
        description: 'Pilihan kapasitas unit forklift diesel terlengkap di Bandung Raya: 3 Ton, 5 Ton, dan 7 Ton. Unit sehat prima siap kerja berat.'
    },
    {
        filename: 'galeri.html',
        target: '#galeri',
        canonical: 'https://satriaforklift.com/galeri',
        title: 'Galeri Proyek Bongkar Muat & Sewa Forklift | Satria Forklift',
        description: 'Dokumentasi asli kegiatan operasional rental forklift diesel Satria Forklift saat menangani berbagai proyek industri di Bandung.'
    },
    {
        filename: 'wilayah.html',
        target: '#wilayah',
        canonical: 'https://satriaforklift.com/wilayah',
        title: 'Wilayah Layanan Sewa Forklift Bandung Raya | Satria Forklift',
        description: 'Layanan sewa forklift diesel cepat untuk Cimareme, Batujajar, Padalarang, Kopo, Gedebage, Rancaekek, dan area Bandung Raya lainnya.'
    },
    {
        filename: 'layanan.html',
        target: '#layanan',
        canonical: 'https://satriaforklift.com/layanan',
        title: 'Testimoni Pelanggan Satria Forklift Bandung | Satria Forklift',
        description: 'Ulasan asli dari para pelanggan korporat dan industri kami di wilayah Bandung Selatan, Timur, Barat, dan Cimahi.'
    },
    {
        filename: 'faq.html',
        target: '#faq',
        canonical: 'https://satriaforklift.com/faq',
        title: 'Tanya Jawab (FAQ) Sewa Forklift Bandung | Satria Forklift',
        description: 'Temukan jawaban lengkap seputar cara pemesanan, kapasitas unit, durasi sewa (shift/harian), biaya mob-demob, dan operator SIO.'
    }
];

// English section pages
const sectionsEn = [
    {
        filename: 'en/home.html',
        target: '#home',
        canonical: 'https://satriaforklift.com/en/home',
        title: 'Diesel Forklift Rental Bandung & Cimahi 3-7 Ton | Satria Forklift',
        description: 'Affordable diesel forklift rentals serving Bandung City, Cimahi, and all outskirts. Fast response, well-maintained fleet, and SIO-certified operators.'
    },
    {
        filename: 'en/fleet.html',
        target: '#unit',
        canonical: 'https://satriaforklift.com/en/fleet',
        title: 'Our Forklift Fleet & Capacities Bandung | Satria Forklift',
        description: 'Choose from our range of compact to heavy duty diesel forklifts in Bandung: 3 Ton, 5 Ton, and 7 Ton. All units ready for operation.'
    },
    {
        filename: 'en/gallery.html',
        target: '#galeri',
        canonical: 'https://satriaforklift.com/en/gallery',
        title: 'Project Gallery & Forklift Operations | Satria Forklift',
        description: 'View authentic photo documentation of our diesel forklift rental fleet working in various factories and warehouses across Bandung.'
    },
    {
        filename: 'en/areas.html',
        target: '#wilayah',
        canonical: 'https://satriaforklift.com/en/areas',
        title: 'Forklift Rental Coverage Areas Bandung | Satria Forklift',
        description: 'Providing fast response forklift hires for Cimareme Industrial Area, Batujajar, Padalarang, Kopo, Gedebage, Rancaekek, and Bandung outskirts.'
    },
    {
        filename: 'en/testimonials.html',
        target: '#layanan',
        canonical: 'https://satriaforklift.com/en/testimonials',
        title: 'Client Reviews & Testimonials | Satria Forklift Bandung',
        description: 'Read real reviews and feedback from our corporate partners and warehouse managers in Bandung and Cimahi areas.'
    },
    {
        filename: 'en/faq.html',
        target: '#faq',
        canonical: 'https://satriaforklift.com/en/faq',
        title: 'Frequently Asked Questions (FAQ) | Satria Forklift Bandung',
        description: 'Find answers about forklift booking processes, shift durations, mobilizations, payment terms, and SIO certified operators.'
    }
];

function generatePage(template, spec) {
    let html = template;

    // 1. Inject data-scroll-target into body tag
    html = html.replace(/<body id="home">/, `<body id="home" data-scroll-target="${spec.target}">`);

    // 2. Update Title tag
    html = html.replace(/<title>.*?<\/title>/, `<title>${spec.title}</title>`);

    // 3. Update Meta Description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${spec.description}"`);

    // 4. Update Canonical Link
    html = html.replace(/<link rel="canonical"\s+href=".*?"/, `<link rel="canonical" href="${spec.canonical}/"`);

    return html;
}

// Generate Indonesian files
sectionsId.forEach(spec => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generatePage(templateId, spec);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

// Generate English files
sectionsEn.forEach(spec => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generatePage(templateEn, spec);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

console.log('All section files generated successfully!');
