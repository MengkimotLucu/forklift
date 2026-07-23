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
        title: 'Sewa Forklift Bandung & Rental Forklift Terdekat - Satria Mandiri',
        description: 'Jasa sewa forklift diesel 3-15 Ton & Mobile Crane profesional di Bandung, Cimahi & sekitarnya. Unit prima, harga kompetitif, dengan operator berpengalaman.',
        h1: 'Sewa Forklift Bandung & Rental Forklift Terdekat | Harga Sewa Forklift di Bandung Murah'
    },
    {
        filename: 'armada.html',
        target: '#unit',
        canonical: 'https://satriaforklift.com/armada',
        title: 'Armada Rental Forklift & Sewa Crane 20 Ton Bandung | Satria Mandiri',
        description: 'Pilihan kapasitas unit rental forklift diesel 3-15 Ton & Mobile Crane 20-45 Ton terlengkap di Bandung Raya. Unit sehat prima siap kerja berat.',
        h1: 'Armada Rental Forklift & Sewa Crane 20 Ton Bandung'
    },
    {
        filename: 'galeri.html',
        target: '#galeri',
        canonical: 'https://satriaforklift.com/galeri',
        title: 'Rental Forklift 15 Ton Bandung & Galeri Proyek | Satria Mandiri',
        description: 'Dokumentasi asli kegiatan operasional rental forklift & mobile crane Satria Mandiri Forklift saat menangani berbagai proyek industri di Bandung.',
        h1: 'Rental Forklift 15 Ton Bandung & Galeri Operasional Unit'
    },
    {
        filename: 'wilayah.html',
        target: '#wilayah',
        canonical: 'https://satriaforklift.com/wilayah',
        title: 'Rental Forklift 7 Ton & Wilayah Layanan Bandung | Satria Mandiri',
        description: 'Layanan sewa forklift & crane cepat untuk Cimareme, Batujajar, Padalarang, Kopo, Gedebage, Rancaekek, dan area Bandung Raya lainnya.',
        h1: 'Rental Forklift 7 Ton & Wilayah Layanan Bandung'
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
        title: 'Tanya Jawab (FAQ) Sewa Forklift & Crane Bandung | Forklift Rental',
        description: 'Temukan jawaban lengkap seputar cara pemesanan forklift & crane, kapasitas unit, durasi sewa (shift/harian), biaya mob-demob, dan operator SIO.'
    }
];

// English section pages
const sectionsEn = [
    {
        filename: 'en/home.html',
        target: '#home',
        canonical: 'https://satriaforklift.com/en/home',
        title: 'Forklift Rental Bandung & Nearest Forklift Rental | Satria Mandiri',
        description: 'Professional forklift rental 3-15 Ton & Mobile Cranes in Bandung, Cimahi & outskirts. Prime fleet, competitive rates, and SIO certified operators.',
        h1: 'Forklift Rental Bandung & Nearest Forklift Hires | Satria Mandiri'
    },
    {
        filename: 'en/fleet.html',
        target: '#unit',
        canonical: 'https://satriaforklift.com/en/fleet',
        title: 'Diesel Forklift Fleet & Mobile Crane Rental 20 Ton Bandung | Satria Mandiri',
        description: 'Choose from our range of 3-15 Ton diesel forklifts and 20-45 Ton mobile cranes in Bandung. All units ready for operation.',
        h1: 'Diesel Forklift Fleet & Mobile Crane Rental 20 Ton Bandung'
    },
    {
        filename: 'en/gallery.html',
        target: '#galeri',
        canonical: 'https://satriaforklift.com/en/gallery',
        title: '15 Ton Forklift Rental Bandung & Project Gallery | Satria Mandiri',
        description: 'View authentic photo documentation of our forklift & crane rental fleet working in various factories and warehouses across Bandung.',
        h1: '15 Ton Forklift Rental Bandung & Unit Gallery'
    },
    {
        filename: 'en/areas.html',
        target: '#wilayah',
        canonical: 'https://satriaforklift.com/en/areas',
        title: 'Rental Forklift 7 Ton Bandung & Service Areas | Satria Mandiri',
        description: 'Providing fast response forklift and mobile crane hires for Cimareme Industrial Area, Batujajar, Padalarang, Kopo, Gedebage, Rancaekek, and Bandung outskirts.',
        h1: 'Rental Forklift 7 Ton Bandung & Forklift Rental Service Areas'
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
        title: 'Frequently Asked Questions (FAQ) | Forklift & Crane Rental',
        description: 'Find answers about forklift & crane booking processes, shift durations, mobilizations, payment terms, and SIO certified operators.'
    }
];

function generatePage(template, spec, altSpec) {
    let html = template;

    // 1. Inject data-scroll-target into body tag
    html = html.replace(/<body id="home">/, `<body id="home" data-scroll-target="${spec.target}">`);

    // 2. Update Title tag
    html = html.replace(/<title>.*?<\/title>/, `<title>${spec.title}</title>`);

    // 3. Update Meta Description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${spec.description}"`);

    // 4. Update Canonical Link
    const canonUrl = spec.canonical.replace('https://satriaforklift.com', 'https://www.satriaforklift.com');
    html = html.replace(/<link rel="canonical"\s+href=".*?"/, `<link rel="canonical" href="${canonUrl}"`);

    // Update Hreflang links
    const idUrl = spec.canonical.startsWith('https://satriaforklift.com/en/') ? altSpec.canonical : spec.canonical;
    const enUrl = spec.canonical.startsWith('https://satriaforklift.com/en/') ? spec.canonical : altSpec.canonical;
    const cleanIdUrl = idUrl.replace('https://satriaforklift.com', 'https://www.satriaforklift.com');
    const cleanEnUrl = enUrl.replace('https://satriaforklift.com', 'https://www.satriaforklift.com');
    
    html = html.replace(/<link rel="alternate"\s+hreflang="id"\s+href=".*?"\s*\/?>/, `<link rel="alternate" hreflang="id" href="${cleanIdUrl}" />`);
    html = html.replace(/<link rel="alternate"\s+hreflang="en"\s+href=".*?"\s*\/?>/, `<link rel="alternate" hreflang="en" href="${cleanEnUrl}" />`);

    // Update H1 and hero-subtitle if defined
    if (spec.h1) {
        html = html.replace(/<h1 class="hero-title">.*?<\/h1>/, `<h1 class="hero-title">${spec.h1}</h1>`);
    }

    // 5. Clean up SEO description placeholder
    html = html.replace(/<!-- DESKRIPSI_KHUSUS_PROYEK -->/, '');

    return html;
}

// Generate Indonesian files
sectionsId.forEach((spec, idx) => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generatePage(templateId, spec, sectionsEn[idx]);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

// Generate English files
sectionsEn.forEach((spec, idx) => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generatePage(templateEn, spec, sectionsId[idx]);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

console.log('All section files generated successfully!');
