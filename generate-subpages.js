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
        activeTab: '3t'
    },
    {
        filename: 'sewa-forklift-5-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-5-ton-bandung',
        title: 'Sewa Forklift 5 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift 5 Ton & rental mobile crane profesional di Bandung & Cimahi. Unit prima terawat, harga kompetitif, respon cepat 24 jam.',
        h1: 'Jasa Sewa Forklift Diesel 5 Ton di Bandung & Cimahi',
        subtitle: 'UNIT MEDIUM DUTY, HANDAL DI SEGALA MEDAN',
        desc: 'Rental forklift 5 ton medium duty untuk pabrik, pemindahan mesin, dan logistik berat di Bandung Raya. Hubungi kami untuk penawaran harga terbaik hari ini.',
        activeTab: '5t'
    },
    {
        filename: 'sewa-forklift-7-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-7-ton-bandung',
        title: 'Sewa Forklift 7 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift heavy duty 7 Ton & rental crane murah di Bandung & Cimahi. Sangat handal untuk pemindahan mesin pabrik & alat berat.',
        h1: 'Jasa Sewa Forklift Diesel 7 Ton di Bandung & Cimahi',
        subtitle: 'UNIT HEAVY DUTY UNTUK PROYEK BESAR & ALAT BERAT',
        desc: 'Sewa forklift heavy duty kapasitas 7 ton untuk proyek konstruksi, pemindahan alat berat, dan mesin besar di seluruh wilayah Bandung Raya.',
        activeTab: '7t'
    },
    {
        filename: 'sewa-forklift-15-ton-bandung.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-15-ton-bandung',
        title: 'Sewa Forklift 15 Ton Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Jasa sewa forklift diesel 15 ton heavy duty super di Bandung & Cimahi. Sangat tangguh untuk beban ekstra besar & mesin industri. Unit prima + operator ber-SIO.',
        h1: 'Jasa Sewa Forklift Diesel 15 Ton di Bandung & Cimahi',
        subtitle: 'UNIT HEAVY DUTY EKSTRA, TANGGUH UNTUK BEBAN SUPER BESAR',
        desc: 'Butuh rental forklift 15 ton untuk relokasi mesin pabrik raksasa atau bongkar muat beban super berat? Kami menyediakan forklift 15 Ton prima dengan operator berpengalaman sertifikat SIO.',
        activeTab: '15t'
    },
    {
        filename: 'rental-forklift-cimareme-batujajar.html',
        canonical: 'https://satriaforklift.com/rental-forklift-cimareme-batujajar',
        title: 'Sewa Forklift & Crane Cimareme & Batujajar | Satria Mandiri Forklift',
        description: 'Rental forklift diesel 3-15 Ton & Mobile Crane di Kawasan Industri Cimareme, Batujajar, Padalarang, & Bandung Barat. Operator SIO, unit prima.',
        h1: 'Jasa Sewa Forklift & Crane di Cimareme & Batujajar',
        subtitle: 'RESPON CEPAT UNTUK KAWASAN INDUSTRI BANDUNG BARAT',
        desc: 'Spesialis rental forklift diesel 3-15 Ton & Mobile Crane untuk Kawasan Industri Cimareme, Batujajar, Padalarang, dan wilayah Bandung Barat lainnya. Respon cepat, operator bersertifikat SIO.',
        activeTab: 'all'
    },
    {
        filename: 'sewa-forklift-rancaekek.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-rancaekek',
        title: 'Sewa Forklift & Crane Rancaekek & Cileunyi | Satria Mandiri Forklift',
        description: 'Layanan rental forklift diesel 3-15 Ton & Mobile Crane cepat untuk Kawasan Industri Rancaekek, Jatinangor, Cileunyi, Bandung Timur. Siap kerja 24 jam.',
        h1: 'Jasa Sewa Forklift & Crane di Rancaekek & Cileunyi',
        subtitle: 'SIAP KIRIM CEPAT KE KAWASAN INDUSTRI RANCAEKEK',
        desc: 'Layanan rental forklift diesel & crane cepat untuk Kawasan Industri Rancaekek, Jatinangor, Cileunyi, dan sekitarnya. Unit terawat siap kerja shift atau lembur.',
        activeTab: 'all'
    },
    {
        filename: 'sewa-forklift-gedebage.html',
        canonical: 'https://satriaforklift.com/sewa-forklift-gedebage',
        title: 'Sewa Forklift & Crane Gedebage & Bandung Timur | Satria Mandiri Forklift',
        description: 'Sewa forklift 3-15 Ton & Mobile Crane di area pergudangan Gedebage, Soekarno-Hatta, dan Bandung Timur. Respon cepat, harga kompetitif, operator berpengalaman.',
        h1: 'Jasa Sewa Forklift & Crane di Gedebage & Bandung Timur',
        subtitle: 'SPESIALIS RENTAL FORKLIFT & CRANE GUDANG GEDEBAGE & BYPASS',
        desc: 'Sewa forklift 3-15 Ton & Mobile Crane di area pergudangan Gedebage, Soekarno-Hatta, dan Bandung Timur. Respon cepat, harga transparan, operator berpengalaman.',
        activeTab: 'all'
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
        activeTab: '3t'
    },
    {
        filename: 'en/rent-forklift-5-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-5-ton-bandung',
        title: 'Rent 5 Ton Forklift Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent 5-ton medium-duty forklift & mobile cranes in Bandung & Cimahi. Safe operations, prime machinery, and experienced operators.',
        h1: 'Diesel Forklift Rental 5 Ton in Bandung & Cimahi',
        subtitle: 'MEDIUM-DUTY DIESEL FORKLIFT, VERSATILE & RELIABLE',
        desc: 'Rent a 5-ton medium-duty diesel forklift for factories, machinery moving, and heavy logistics in Bandung Raya. Contact us for the best rates today.',
        activeTab: '5t'
    },
    {
        filename: 'en/rent-forklift-7-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-7-ton-bandung',
        title: 'Rent 7 Ton Forklift Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent heavy-duty 7-ton forklift & mobile cranes in Bandung & Cimahi. Ideal for factory relocation and heavy industrial machinery handling.',
        h1: 'Diesel Forklift Rental 7 Ton in Bandung & Cimahi',
        subtitle: 'HEAVY-DUTY DIESEL FORKLIFT FOR BIG PROJECTS & EQUIPMENT',
        desc: 'Rent heavy-duty 7-ton forklifts for construction projects, heavy equipment handling, and large machinery across the entire Bandung Raya region.',
        activeTab: '7t'
    },
    {
        filename: 'en/rent-forklift-15-ton-bandung.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-15-ton-bandung',
        title: 'Rent 15 Ton Forklift Bandung & Cimahi | Satria Mandiri Forklift & Crane',
        description: 'Rent heavy duty 15 ton diesel forklifts in Bandung & Cimahi. Perfect for massive industrial machinery & extra heavy loading. Prime fleet + SIO licensed operators.',
        h1: 'Diesel Forklift Rental 15 Ton in Bandung & Cimahi',
        subtitle: 'SUPER HEAVY-DUTY UNIT, CAPABLE OF HANDLING MASSIVE LOADS',
        desc: 'Need a powerful 15-ton forklift for factory relocations or extra-heavy lifting? Satria Mandiri Forklift provides well-maintained 15T units with professional SIO certified operators.',
        activeTab: '15t'
    },
    {
        filename: 'en/rental-forklift-cimareme-batujajar.html',
        canonical: 'https://satriaforklift.com/en/rental-forklift-cimareme-batujajar',
        title: 'Forklift & Crane Rental Cimareme & Batujajar | Satria Mandiri Forklift',
        description: 'Fast diesel forklift rentals 3-15 Ton & Mobile Cranes for Cimareme Industrial Zone, Batujajar, Padalarang, and West Bandung. SIO operators, prime fleet.',
        h1: 'Diesel Forklift & Crane Rental in Cimareme & Batujajar',
        subtitle: 'QUICK RESPONSE FOR WEST BANDUNG INDUSTRIAL AREAS',
        desc: 'Specialized 3-15 ton diesel forklift & Mobile Crane rentals for Cimareme Industrial Zone, Batujajar, Padalarang, and other West Bandung locations. Fast response, SIO certified crew.',
        activeTab: 'all'
    },
    {
        filename: 'en/rent-forklift-rancaekek.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-rancaekek',
        title: 'Forklift & Crane Rental Rancaekek & Cileunyi | Satria Mandiri Forklift',
        description: 'Fast diesel forklift & crane rental services 3-15 Ton & Mobile Cranes for Rancaekek Industrial Area, Jatinangor, Cileunyi, East Bandung. 24/7 support.',
        h1: 'Diesel Forklift & Crane Rental in Rancaekek & Cileunyi',
        subtitle: 'PROMPT DELIVERY TO RANCAEKEK INDUSTRIAL ZONE',
        desc: 'Fast diesel forklift & crane rental services for Rancaekek Industrial Area, Jatinangor, Cileunyi, and surrounding zones. Well-maintained units ready for shifts or overtime.',
        activeTab: 'all'
    },
    {
        filename: 'en/rent-forklift-gedebage.html',
        canonical: 'https://satriaforklift.com/en/rent-forklift-gedebage',
        title: 'Forklift & Crane Rental Gedebage & East Bandung | Satria Mandiri Forklift',
        description: 'Rent 3-15 Ton diesel forklifts & Mobile Cranes in Gedebage warehousing, Soekarno-Hatta, and East Bandung. Fast response, transparent rates, skilled operators.',
        h1: 'Diesel Forklift & Crane Rental in Gedebage & East Bandung',
        subtitle: 'WAREHOUSE FORKLIFT & CRANE SPECIALIST IN GEDEBAGE & BYPASS',
        desc: 'Rent 3-15 ton forklifts & mobile cranes in the warehousing hub of Gedebage, Soekarno-Hatta, and East Bandung. Quick delivery, transparent pricing, and experienced crew.',
        activeTab: 'all'
    }
];

// Helper to replace text in templates
function generateHTML(template, spec, isEn) {
    let html = template;

    // 1. Update Title tag
    html = html.replace(/<title>.*?<\/title>/, `<title>${spec.title}</title>`);

    // 2. Update Meta Description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${spec.description}"`);

    // 3. Update Canonical Link
    html = html.replace(/<link rel="canonical"\s+href=".*?"/, `<link rel="canonical" href="${spec.canonical}/"`);

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
    }

    return html;
}

// Generate ID Subpages
subpagesId.forEach(spec => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generateHTML(templateId, spec, false);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

// Generate EN Subpages
subpagesEn.forEach(spec => {
    const destPath = path.join(__dirname, spec.filename);
    ensureDir(destPath);
    const content = generateHTML(templateEn, spec, true);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Generated: ${spec.filename}`);
});

console.log('All 14 landing pages generated successfully!');
