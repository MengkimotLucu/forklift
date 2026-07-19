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
        title: 'Satria Mandiri Forklift: Rental Forklift & Crane Bandung Raya',
        description: 'Jasa sewa forklift diesel 3-15 Ton & Mobile Crane profesional di Bandung, Cimahi & sekitarnya. Unit prima, harga kompetitif, dengan operator berpengalaman.'
    },
    {
        filename: 'armada.html',
        target: '#unit',
        canonical: 'https://satriaforklift.com/armada',
        title: 'Armada & Kapasitas Rental Forklift & Crane Bandung | Satria Mandiri Forklift',
        description: 'Pilihan kapasitas unit rental forklift diesel 3-15 Ton & Mobile Crane 20-45 Ton terlengkap di Bandung Raya. Unit sehat prima siap kerja berat.'
    },
    {
        filename: 'galeri.html',
        target: '#galeri',
        canonical: 'https://satriaforklift.com/galeri',
        title: 'Galeri Proyek Sewa Forklift & Crane | Satria Mandiri Forklift',
        description: 'Dokumentasi asli kegiatan operasional rental forklift & mobile crane Satria Mandiri Forklift saat menangani berbagai proyek industri di Bandung.'
    },
    {
        filename: 'wilayah.html',
        target: '#wilayah',
        canonical: 'https://satriaforklift.com/wilayah',
        title: 'Wilayah Layanan Sewa Forklift & Crane Bandung | Satria Mandiri Forklift',
        description: 'Layanan sewa forklift & crane cepat untuk Cimareme, Batujajar, Padalarang, Kopo, Gedebage, Rancaekek, dan area Bandung Raya lainnya.'
    },
    {
        filename: 'layanan.html',
        target: '#layanan',
        canonical: 'https://satriaforklift.com/layanan',
        title: 'Testimoni Pelanggan Satria Mandiri Forklift & Crane | Satria Mandiri Forklift',
        description: 'Ulasan asli dari para pelanggan korporat dan industri sewa forklift & crane kami di wilayah Bandung Selatan, Timur, Barat, dan Cimahi.'
    },
    {
        filename: 'faq.html',
        target: '#faq',
        canonical: 'https://satriaforklift.com/faq',
        title: 'Tanya Jawab (FAQ) Sewa Forklift & Crane Bandung | Satria Mandiri Forklift',
        description: 'Temukan jawaban lengkap seputar cara pemesanan forklift & crane, kapasitas unit, durasi sewa (shift/harian), biaya mob-demob, dan operator SIO.'
    }
];

// English section pages
const sectionsEn = [
    {
        filename: 'en/home.html',
        target: '#home',
        canonical: 'https://satriaforklift.com/en/home',
        title: 'Diesel Forklift & Crane Rental Bandung & Cimahi | Satria Mandiri Forklift',
        description: 'Professional forklift rental 3-15 Ton & Mobile Cranes in Bandung, Cimahi & outskirts. Prime fleet, competitive rates, and SIO certified operators.'
    },
    {
        filename: 'en/fleet.html',
        target: '#unit',
        canonical: 'https://satriaforklift.com/en/fleet',
        title: 'Forklift & Crane Fleet & Capacities Bandung | Satria Mandiri Forklift',
        description: 'Choose from our range of 3-15 Ton diesel forklifts and 20-45 Ton mobile cranes in Bandung. All units ready for operation.'
    },
    {
        filename: 'en/gallery.html',
        target: '#galeri',
        canonical: 'https://satriaforklift.com/en/gallery',
        title: 'Project Gallery & Forklift/Crane Operations | Satria Mandiri Forklift',
        description: 'View authentic photo documentation of our forklift & crane rental fleet working in various factories and warehouses across Bandung.'
    },
    {
        filename: 'en/areas.html',
        target: '#wilayah',
        canonical: 'https://satriaforklift.com/en/areas',
        title: 'Forklift & Crane Rental Coverage Areas Bandung | Satria Mandiri Forklift',
        description: 'Providing fast response forklift and mobile crane hires for Cimareme Industrial Area, Batujajar, Padalarang, Kopo, Gedebage, Rancaekek, and Bandung outskirts.'
    },
    {
        filename: 'en/testimonials.html',
        target: '#layanan',
        canonical: 'https://satriaforklift.com/en/testimonials',
        title: 'Client Reviews & Testimonials | Satria Mandiri Forklift & Crane',
        description: 'Read real reviews and feedback from our forklift & crane rental partners and warehouse managers in Bandung and Cimahi areas.'
    },
    {
        filename: 'en/faq.html',
        target: '#faq',
        canonical: 'https://satriaforklift.com/en/faq',
        title: 'Frequently Asked Questions (FAQ) | Satria Mandiri Forklift & Crane',
        description: 'Find answers about forklift & crane booking processes, shift durations, mobilizations, payment terms, and SIO certified operators.'
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
    html = html.replace(/<link rel="canonical"\s+href=".*?"/, `<link rel="canonical" href="${spec.canonical}"`);

    // 5. Clean up SEO description placeholder
    html = html.replace(/<!-- DESKRIPSI_KHUSUS_PROYEK -->/, '');

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
