import type { Project } from '@/types'

const projCover = (label: string, from: string, to: string) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='${from}'/>
          <stop offset='1' stop-color='${to}'/>
        </linearGradient>
      </defs>
      <rect width='800' height='500' fill='#020617'/>
      <circle cx='600' cy='120' r='200' fill='url(#g)' opacity='0.55'/>
      <circle cx='180' cy='420' r='220' fill='url(#g)' opacity='0.4'/>
      <text x='50%' y='52%' text-anchor='middle' fill='white' font-family='Inter,sans-serif' font-size='44' font-weight='800'>${label}</text>
    </svg>`
  )

export const projects: Project[] = [
  {
    id: 'nexspace',
    title: 'Nexspace Studio',
    description: {
      en: 'Marketing site for a futuristic creative agency with rich scroll animations.',
      id: 'Situs marketing untuk agensi kreatif futuristik dengan animasi scroll yang kaya.'
    },
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    categoryId: 'web',
    featured: true,
    cover: projCover('Nexspace', '#22d3ee', '#a855f7'),
    live: 'https://example.com',
    repo: 'https://github.com',
    client: 'Nexspace Agency Co.',
    completedAt: 'May 2026',
    features: {
      en: [
        'Smooth 60FPS scroll-triggered layout transitions',
        'Immersive custom shader webGL background animations',
        'Multi-language localization out of the box',
        'Interactive dynamic component layouts'
      ],
      id: [
        'Transisi tata letak yang dipicu scroll 60FPS mulus',
        'Animasi latar belakang WebGL shader kustom yang mendalam',
        'Lokalisasi multi-bahasa langsung siap pakai',
        'Tata letak komponen dinamis interaktif'
      ]
    },
    advantages: {
      en: [
        'Ultra-fast performance scoring 100/100 on Lighthouse tests',
        'Clean structure supporting swift modular scaling',
        'Aesthetic neon color palettes tailored for high visual engagement'
      ],
      id: [
        'Performa ultra cepat mencetak skor 100/100 pada tes Lighthouse',
        'Struktur rapi yang mendukung skalabilitas modular yang cepat',
        'Palet warna neon estetis yang dirancang untuk keterlibatan visual tinggi'
      ]
    },
    problem: {
      en: 'The client needed a digital presence that stood out in a competitive field, loaded instantly, and communicated complex tech services without overwhelming visitors.',
      id: 'Klien membutuhkan kehadiran digital yang menonjol di bidang yang kompetitif, memuat secara instan, dan menyampaikan layanan teknologi yang kompleks tanpa membebani pengunjung.'
    },
    solution: {
      en: 'We designed a WebGL-enhanced homepage featuring smooth text reveals, structured cards showcasing specialized services, and an interactive workspace mockup.',
      id: 'Kami merancang halaman beranda yang disempurnakan dengan WebGL yang menampilkan teks reveal yang halus, kartu terstruktur yang memamerkan layanan khusus, dan mockup ruang kerja interaktif.'
    },
    impact: {
      en: 'Boosted user retention by 45% and generated over 150 project leads within the first week of deployment.',
      id: 'Meningkatkan retensi pengguna sebesar 45% dan menghasilkan lebih dari 150 prospek proyek dalam minggu pertama peluncuran.'
    },
    gallery: [projCover('Nexspace Detail 1', '#22d3ee', '#8b5cf6'), projCover('Nexspace Detail 2', '#a855f7', '#ec4899')]
  },
  {
    id: 'auralink',
    title: 'Auralink Dashboard',
    description: {
      en: 'Real-time analytics dashboard for IoT devices with live charts and theming.',
      id: 'Dasbor analitik real-time untuk perangkat IoT dengan grafik langsung dan theming.'
    },
    tags: ['React', 'TanStack Query', 'Recharts'],
    categoryId: 'web',
    featured: true,
    cover: projCover('Auralink', '#10b981', '#06b6d4'),
    live: 'https://example.com',
    client: 'Auralink Networks Inc.',
    completedAt: 'March 2026',
    features: {
      en: [
        'Dynamic live chart visualization utilizing WebSocket endpoints',
        'Custom light/dark/system theme triggers',
        'Smart data caching and instant revalidation keys'
      ],
      id: [
        'Visualisasi grafik langsung dinamis menggunakan endpoint WebSocket',
        'Pemicu tema kustom light/dark/system',
        'Caching data cerdas dan kunci revalidasi instan'
      ]
    },
    advantages: {
      en: ['Highly responsive structure handling millions of data points', 'Clean state machine flow decoupling UI from data layers'],
      id: ['Struktur yang sangat responsif menangani jutaan titik data', 'Aliran state machine yang rapi memisahkan UI dari lapisan data']
    },
    problem: {
      en: 'Displaying complex real-time telemetry from thousands of smart sensors without degrading browser performance.',
      id: 'Menampilkan telemetri real-time yang kompleks dari ribuan sensor pintar tanpa menurunkan performa browser.'
    },
    solution: {
      en: 'Implemented virtualized grid rows and optimized render paths using canvas-based charts instead of standard SVG rendering.',
      id: 'Mengimplementasikan baris grid virtual dan mengoptimalkan jalur render menggunakan bagan berbasis kanvas sebagai pengganti rendering SVG standar.'
    },
    impact: {
      en: 'Render latency reduced by 80%, allowing continuous data streaming on lower-end mobile devices.',
      id: 'Latensi render berkurang sebesar 80%, memungkinkan streaming data terus-menerus pada perangkat seluler berspesifikasi rendah.'
    },
    gallery: [projCover('Auralink Analytics', '#10b981', '#3b82f6'), projCover('Auralink Config', '#06b6d4', '#8b5cf6')]
  },
  {
    id: 'lumen-shop',
    title: 'Lumen Commerce',
    description: {
      en: 'Headless e-commerce storefront with cinematic product pages.',
      id: 'Storefront e-commerce headless dengan halaman produk sinematik.'
    },
    tags: ['Next.js', 'Stripe', 'Sanity'],
    categoryId: 'web',
    cover: projCover('Lumen', '#f59e0b', '#ef4444'),
    live: 'https://example.com',
    client: 'Lumen Studios',
    completedAt: 'January 2026',
    features: {
      en: ['Cinematic immersive product zoom gallery', 'Secure multi-currency Stripe checkouts', 'Flexible Sanity CMS studio configuration'],
      id: [
        'Galeri zoom produk sinematik yang mendalam',
        'Pembayaran Stripe multi-mata uang yang aman',
        'Konfigurasi studio CMS Sanity yang fleksibel'
      ]
    },
    advantages: {
      en: [
        'Incremental Static Regeneration ensuring real-time stock updates',
        'SEO-optimized meta configuration matching global marketplace layouts'
      ],
      id: [
        'Regenerasi Statis Inkremental memastikan pembaruan stok real-time',
        'Konfigurasi meta yang dioptimalkan untuk SEO yang cocok dengan tata letak pasar global'
      ]
    },
    problem: {
      en: 'The design agency needed a boutique shop displaying luxury prints with extreme detail while keeping page load speeds under 1 second.',
      id: 'Agensi desain membutuhkan toko butik yang menampilkan cetakan mewah dengan detail ekstrem sambil menjaga kecepatan muat halaman di bawah 1 detik.'
    },
    solution: {
      en: 'Built a decoupled storefront leveraging edge CDN servers and optimized multi-layered responsive image assets.',
      id: 'Membangun storefront terpisah memanfaatkan server edge CDN dan mengoptimalkan aset gambar responsif berlapis-lapis.'
    },
    impact: {
      en: 'Achieved an average of 920ms First Contentful Paint times globally, leading to a 30% increase in checkout conversions.',
      id: 'Mencapai waktu First Contentful Paint rata-rata 920ms secara global, memicu peningkatan 30% dalam konversi checkout.'
    },
    gallery: [projCover('Lumen Catalog', '#f59e0b', '#ec4899')]
  },
  {
    id: 'pulse-ui',
    title: 'Pulse UI Kit',
    description: {
      en: 'Open-source motion-first UI kit with 60+ components.',
      id: 'UI kit open-source berbasis motion dengan 60+ komponen.'
    },
    tags: ['React', 'Motion', 'Storybook'],
    categoryId: 'open-source',
    featured: true,
    cover: projCover('Pulse UI', '#a855f7', '#ec4899'),
    repo: 'https://github.com',
    client: 'Community Open Source',
    completedAt: 'February 2026',
    features: {
      en: [
        'Over 60 pre-configured micro-animated primitives',
        'Fully accessible structure matching WAI-ARIA standards',
        'Tailwind custom plugin configuration integration'
      ],
      id: [
        'Lebih dari 60 primitif animasi mikro yang dikonfigurasi sebelumnya',
        'Struktur ramah aksesibilitas yang cocok dengan standar WAI-ARIA',
        'Integrasi konfigurasi plugin kustom Tailwind'
      ]
    },
    advantages: {
      en: ['Extremely lightweight package bundle sized under 8kB gzipped', 'Developer-friendly developer environment inside Storybook setups'],
      id: ['Ukuran bundel paket yang sangat ringan di bawah 8kB gzipped', 'Lingkungan pengembangan yang ramah pengembang di dalam setup Storybook']
    },
    problem: {
      en: 'Web developers faced a tradeoff between installing heavy motion frameworks and manually writing repetitive CSS keyframes.',
      id: 'Pengembang web menghadapi dilema antara memasang framework motion yang berat dan menulis CSS keyframe berulang secara manual.'
    },
    solution: {
      en: 'Packaged common UI micro-interactions into highly modular Tailwind-compatible React primitives utilizing Framer Motion.',
      id: 'Mengemas mikro-interaksi UI umum ke dalam primitif React modular kompatibel Tailwind memanfaatkan Framer Motion.'
    },
    impact: {
      en: 'Gained over 1,200 GitHub stars and simplified the codebase workflows for thousands of open-source projects.',
      id: 'Meraih lebih dari 1.200 bintang GitHub dan menyederhanakan alur kerja kode untuk ribuan proyek open-source.'
    },
    gallery: [projCover('Pulse Components', '#a855f7', '#6366f1')]
  },
  {
    id: 'mindmap-ai',
    title: 'MindMap AI',
    description: {
      en: 'AI-powered mindmap canvas with collaborative editing.',
      id: 'Kanvas mindmap bertenaga AI dengan editing kolaboratif.'
    },
    tags: ['React', 'Canvas', 'OpenAI'],
    categoryId: 'web',
    cover: projCover('MindMap AI', '#0ea5e9', '#1e40af'),
    client: 'MindLabs Corp',
    completedAt: 'April 2026',
    features: {
      en: [
        'Infinite canvas system leveraging HTML5 context structures',
        'Automatic node clustering using localized AI analysis layout maps',
        'Simultaneous collaborative workspace workspaces'
      ],
      id: [
        'Sistem kanvas tanpa batas memanfaatkan struktur konteks HTML5',
        'Klasterisasi node otomatis menggunakan peta tata letak analisis AI lokal',
        'Ruang kerja kolaboratif simultan'
      ]
    },
    advantages: {
      en: ['Instant load architecture processing over 500 connected maps concurrently', 'Intuitive interface minimizing workflow frictions'],
      id: [
        'Arsitektur pemuatan instan memproses lebih dari 500 peta terhubung secara bersamaan',
        'Antarmuka intuitif meminimalkan hambatan alur kerja'
      ]
    },
    problem: {
      en: 'Traditional mind-mapping systems required tedious manual alignment, slowing down fast brainstorming sessions.',
      id: 'Sistem pemetaan pikiran tradisional membutuhkan penyelarasan manual yang membosankan, memperlambat sesi brainstorming yang cepat.'
    },
    solution: {
      en: 'Integrated OpenAI layout prompt formats with auto-spring layout canvas logic for real-time diagram rearrangement.',
      id: 'Mengintegrasikan format prompt tata letak OpenAI dengan logika kanvas tata letak auto-spring untuk penataan ulang diagram secara real-time.'
    },
    impact: {
      en: 'Corporate teams reported a 50% decrease in brain-dump-to-strategy documentation preparation times.',
      id: 'Tim korporasi melaporkan penurunan 50% dalam waktu persiapan dokumentasi strategi dari hasil brainstorming.'
    },
    gallery: [projCover('MindMap Board', '#0ea5e9', '#3b82f6')]
  },
  {
    id: 'trekly',
    title: 'Trekly Mobile',
    description: {
      en: 'Travel companion app with offline maps and trip journaling.',
      id: 'Aplikasi pendamping perjalanan dengan peta offline dan jurnal trip.'
    },
    tags: ['React Native', 'Expo', 'MapBox'],
    categoryId: 'mobile',
    cover: projCover('Trekly', '#16a34a', '#0ea5e9'),
    client: 'Trekly LLC',
    completedAt: 'December 2025',
    features: {
      en: [
        'Offline MapBox vector map rendering caches',
        'GPS geolocated automatic journal tags',
        'Cross-platform iOS and Android synchronization support'
      ],
      id: [
        'Rendering peta vektor offline MapBox terenkripsi',
        'Tag jurnal otomatis bergeolocated GPS',
        'Dukungan sinkronisasi lintas platform iOS dan Android'
      ]
    },
    advantages: {
      en: ['Battery-optimized background tracking using low-power hardware calls', 'Polished native swipe navigation systems'],
      id: ['Pelacakan latar belakang hemat baterai menggunakan panggilan perangkat keras berdaya rendah', 'Sistem navigasi geser native yang dipoles']
    },
    problem: {
      en: 'Hikers and remote travelers lose internet connectivity, rendering typical travel routing applications useless.',
      id: 'Pendaki dan pelancong terpencil kehilangan konektivitas internet, membuat aplikasi perutean perjalanan biasa tidak berguna.'
    },
    solution: {
      en: 'Created an offline-first mobile container utilizing SQLite indexing of vector tile routes, keeping data fully local.',
      id: 'Membuat kontainer seluler offline-first memanfaatkan pengindeksan SQLite dari rute ubin vektor, menjaga data sepenuhnya lokal.'
    },
    impact: {
      en: 'Safely guided over 12,000 active wilderness hikers without requiring single internet handshake connections.',
      id: 'Membimbing dengan aman lebih dari 12.000 pendaki alam liar aktif tanpa memerlukan koneksi internet sekali pun.'
    },
    gallery: [projCover('Trekly Offline Maps', '#16a34a', '#10b981')]
  },
  {
    id: 'studio-os',
    title: 'Studio OS',
    description: {
      en: 'Internal tool replacing 5 SaaS subscriptions for a design agency.',
      id: 'Tool internal yang menggantikan 5 langganan SaaS untuk agensi desain.'
    },
    tags: ['Next.js', 'Prisma', 'tRPC'],
    categoryId: 'web',
    cover: projCover('Studio OS', '#64748b', '#0f172a'),
    client: 'Vertex Design Group',
    completedAt: 'November 2025',
    features: {
      en: [
        'Consolidated dashboard tracking invoices, assets, task updates, and chats',
        'Automated document drafts based on client form templates',
        'End-to-end tRPC type-safe API communication layers'
      ],
      id: [
        'Dasbor terpadu melacak faktur, aset, pembaruan tugas, dan obrolan',
        'Draf dokumen otomatis berdasarkan templat formulir klien',
        'Lapisan komunikasi API aman tipe tRPC ujung ke ujung'
      ]
    },
    advantages: {
      en: [
        'Unified system saving significant operational subscription overheads',
        'Flexible project scheduling boards dynamically adjusting timeline steps'
      ],
      id: [
        'Sistem terpadu menghemat pengeluaran langganan operasional yang signifikan',
        'Papan penjadwalan proyek fleksibel yang menyesuaikan langkah lini masa secara dinamis'
      ]
    },
    problem: {
      en: 'A growing design group spent hours syncing data across Slack, Trello, Typeform, and QuickBooks, leading to client delivery delays.',
      id: 'Kelompok desain yang berkembang menghabiskan waktu berjam-jam menyelaraskan data di Slack, Trello, Typeform, dan QuickBooks, menyebabkan keterlambatan pengiriman ke klien.'
    },
    solution: {
      en: 'Built an unified internal dashboard incorporating clients, work items, and automated invoices in a central system.',
      id: 'Membangun dasbor internal terpadu yang menggabungkan klien, item pekerjaan, dan faktur otomatis dalam sistem pusat.'
    },
    impact: {
      en: 'Saved $1,200 monthly in software licensing fees and cut project administrative planning loops by 60%.',
      id: 'Menghemat $1.200 per bulan dalam biaya lisensi perangkat lunak dan memangkas lingkaran perencanaan administratif proyek sebesar 60%.'
    },
    gallery: [projCover('Studio OS Dashboard', '#64748b', '#475569')]
  },
  {
    id: 'fluxe',
    title: 'Fluxe Branding',
    description: {
      en: 'Brand identity & design system for a fintech startup.',
      id: 'Identitas brand & design system untuk startup fintech.'
    },
    tags: ['Figma', 'Design System'],
    categoryId: 'ui-ux',
    cover: projCover('Fluxe', '#ec4899', '#8b5cf6'),
    client: 'Fluxe Financial Inc',
    completedAt: 'October 2025',
    features: {
      en: [
        'Complete brand logo mark, iconographies, and visual system frameworks',
        'Robust UI components with extensive variant definitions inside Figma',
        'Accessible color combination maps matching WCAG 2.1 criteria'
      ],
      id: [
        'Tanda logo merek lengkap, ikonografi, dan kerangka kerja sistem visual',
        'Komponen UI yang andal dengan definisi varian yang luas di dalam Figma',
        'Peta kombinasi warna ramah aksesibilitas yang cocok dengan kriteria WCAG 2.1'
      ]
    },
    advantages: {
      en: ['Clean designer-to-developer transition guidelines', 'Futuristic fluid neon system aligning brand with cutting-edge tech services'],
      id: [
        'Panduan transisi desainer-ke-pengembang yang rapi',
        'Sistem neon cair futuristik yang menyelaraskan merek dengan layanan teknologi mutakhir'
      ]
    },
    problem: {
      en: 'A fintech startup needed an authoritative yet highly progressive and tech-forward brand identity to pitch to venture capital boards.',
      id: 'Sebuah startup fintech membutuhkan identitas merek yang otoritatif namun sangat progresif dan maju secara teknologi untuk dipresentasikan ke dewan modal ventura.'
    },
    solution: {
      en: 'Crafted a dark-mode first design system based on electric pink and cosmic purple tints, representing fluidity and high-yield financial technology.',
      id: 'Merancang sistem desain khusus mode gelap berbasis warna merah muda elektrik dan ungu kosmik, mewakili fluiditas dan teknologi keuangan hasil tinggi.'
    },
    impact: {
      en: 'Helped secure $3.2M in Seed round funding, with investors citing design aesthetics as a primary confidence driver.',
      id: 'Membantu mengamankan pendanaan putaran Seed sebesar $3,2 juta, dengan investor menyebut estetika desain sebagai pendorong kepercayaan utama.'
    },
    gallery: [projCover('Fluxe Typography', '#ec4899', '#db2777'), projCover('Fluxe Style Guide', '#8b5cf6', '#7c3aed')]
  }
]
