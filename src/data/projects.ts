import type { Project } from '@/types'

const generateProjectCover = (label: string, gradientFrom: string, gradientTo: string) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='${gradientFrom}'/>
          <stop offset='1' stop-color='${gradientTo}'/>
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
    id: 'wheelsrent',
    title: 'Wheelsrent',
    description: {
      en: 'A premium car rental web application with an interactive catalog, booking system, and secure payment integration.',
      id: 'Aplikasi web rental mobil premium dengan katalog interaktif, sistem pemesanan, dan integrasi pembayaran yang aman.'
    },
    tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'Midtrans'],
    category_id: 'web',
    featured: true,
    cover: '/assets/projects/wheelsrent/index.png',
    live: 'https://wheelsrent.octalectzz.my.id',
    repo: 'https://github.com/octalectzz/wheelsrent',
    client: 'Wheelsrent Indonesia',
    completed_at: new Date('2024-03-01'),
    features: {
      en: [
        'Interactive vehicle catalog featuring multi-tiered search and filtering options',
        'End-to-end booking flow including duration and pricing calculation algorithms',
        'Seamless integration with Midtrans payment gateway for reliable transaction handling',
        'Admin dashboard for fleet monitoring, transaction reports, and booking status controls',
        'Dynamic notification and verification alert updates'
      ],
      id: [
        'Katalog kendaraan interaktif dengan opsi pencarian dan pemfilteran bertingkat',
        'Alur pemesanan ujung ke ujung termasuk algoritma perhitungan durasi dan harga',
        'Integrasi tanpa hambatan dengan payment gateway Midtrans untuk penanganan transaksi yang andal',
        'Dasbor admin untuk pemantauan armada, laporan transaksi, dan kontrol status pemesanan',
        'Pembaruan notifikasi dinamis dan peringatan verifikasi'
      ]
    },
    advantages: {
      en: [
        'Responsive layout designed specifically for optimal mobile and desktop experiences',
        'Optimized Next.js image components minimizing catalog load times and layout shifts',
        'Relational database architecture guaranteeing data consistency across booking states'
      ],
      id: [
        'Tata letak responsif yang dirancang khusus untuk pengalaman seluler dan desktop yang optimal',
        'Komponen gambar Next.js yang dioptimalkan meminimalkan waktu muat katalog dan pergeseran tata letak',
        'Arsitektur database relasional menjamin konsistensi data di seluruh status pemesanan'
      ]
    },
    problem: {
      en: 'The client needed to shift from manual WhatsApp-based booking records to an automated, scalable web platform that showcases their vehicle fleet professionally and minimizes booking conflicts.',
      id: 'Klien perlu beralih dari catatan pemesanan manual berbasis WhatsApp ke platform web otomatis berskala tinggi yang menampilkan armada kendaraan mereka secara profesional dan meminimalkan konflik pemesanan.'
    },
    solution: {
      en: 'We built a high-performance Laravel application integrated with a MySQL database, featuring an automated booking engine and administrative panel for fleet tracking.',
      id: 'Kami membangun aplikasi Laravel berkinerja tinggi yang terintegrasi dengan database MySQL, menampilkan mesin pemesanan otomatis dan panel administratif untuk pelacakan armada.'
    },
    impact: {
      en: 'Eliminated overlapping reservations, reduced staff administration overhead by 70%, and grew booking conversions by 40% in the first quarter post-launch.',
      id: 'Mengeliminasi pemesanan tumpang tindih, mengurangi beban administrasi staf sebesar 70%, dan meningkatkan konversi pemesanan sebesar 40% di kuartal pertama setelah peluncuran.'
    },
    gallery: [
      '/assets/projects/wheelsrent/1.png',
      '/assets/projects/wheelsrent/2.png',
      '/assets/projects/wheelsrent/3.png',
      '/assets/projects/wheelsrent/4.png',
      '/assets/projects/wheelsrent/5.png',
      '/assets/projects/wheelsrent/6.png',
      '/assets/projects/wheelsrent/7.png',
      '/assets/projects/wheelsrent/8.png'
    ]
  },
  {
    id: 'pplg-2-class',
    title: 'PPLG 2 Class Website',
    description: {
      en: 'A class community portal for XII PPLG 2 at SMK Muhammadiyah 01 Sukoharjo, featuring schedules, structure, a photo gallery, and an anonymous messaging system.',
      id: 'Portal komunitas kelas untuk XII PPLG 2 di SMK Muhammadiyah 01 Sukoharjo, menampilkan jadwal, struktur kelas, galeri foto, dan sistem pesan anonim.'
    },
    tags: ['React', 'Material-UI', 'Tailwind CSS', 'Firebase', 'AOS'],
    category_id: 'web',
    featured: true,
    cover: '/assets/projects/pplg-2-class/index.png',
    live: 'https://pepeelgedua.vercel.app/',
    repo: 'https://github.com/OctaLectzz/pplg2-class',
    client: 'XII PPLG 2 Class',
    completed_at: new Date('2023-10-01'),
    features: {
      en: [
        'Interactive organizational class structure display mapping students roles',
        'School subject schedules and classroom cleaning duty (piket) calendars',
        'Slick JS powered media gallery showcasing class documentation and activities',
        'Real-time anonymous messaging (text anonim) system utilizing Firebase Firestore',
        'Smooth scroll entrance animations configured with AOS'
      ],
      id: [
        'Tampilan struktur organisasi kelas interaktif yang memetakan peran siswa',
        'Jadwal mata pelajaran sekolah dan kalender piket kebersihan kelas',
        'Galeri media bertenaga Slick JS yang menampilkan dokumentasi dan aktivitas kelas',
        'Sistem pesan anonim (teks anonim) waktu nyata menggunakan Firebase Firestore',
        'Animasi masuk gulir halus yang dikonfigurasi dengan AOS'
      ]
    },
    advantages: {
      en: [
        'Unified class communication hub fostering interactive digital engagement',
        'Mobile-first responsive design matching the school community needs',
        'Secure backend configuration on Firebase for message retrieval and storage'
      ],
      id: [
        'Pusat komunikasi kelas terpadu yang memupuk keterlibatan digital interaktif',
        'Desain responsif ramah seluler yang cocok dengan kebutuhan komunitas sekolah',
        'Konfigurasi backend Firebase yang aman untuk penyimpanan dan pengambilan pesan'
      ]
    },
    problem: {
      en: 'The students of XII PPLG 2 at SMK Muhammadiyah 01 Sukoharjo needed a centralized portal to easily view school schedules, understand structural responsibilities, document class highlights, and exchange anonymous class feedback.',
      id: 'Siswa XII PPLG 2 di SMK Muhammadiyah 01 Sukoharjo membutuhkan portal terpusat untuk dengan mudah melihat jadwal sekolah, memahami tanggung jawab struktural, mendokumentasikan momen kelas, dan bertukar umpan balik kelas secara anonim.'
    },
    solution: {
      en: 'We designed and developed a community class web portal using React, utilizing Firestore for direct anonymous messages, and Tailwind CSS / Material-UI for a modern class dashboard.',
      id: 'Kami merancang dan mengembangkan portal web kelas komunitas menggunakan React, memanfaatkan Firestore untuk pesan anonim langsung, serta Tailwind CSS / Material-UI untuk dasbor kelas modern.'
    },
    impact: {
      en: 'Created a collaborative digital space for 30+ students, streamlined access to class events and duties, and facilitated over 500 anonymous communication entries.',
      id: 'Menciptakan ruang digital kolaboratif untuk 30+ siswa, menyederhanakan akses ke acara dan tugas kelas, serta memfasilitasi lebih dari 500 entri komunikasi anonim.'
    },
    gallery: [
      '/assets/projects/pplg-2-class/1.png',
      '/assets/projects/pplg-2-class/2.png',
      '/assets/projects/pplg-2-class/3.png',
      '/assets/projects/pplg-2-class/4.png'
    ]
  },
  {
    id: 'absenku',
    title: 'Absenku',
    description: {
      en: 'A comprehensive corporate employee attendance and payroll management system with real-time biometric fingerprint integration.',
      id: 'Sistem manajemen kehadiran karyawan dan penggajian perusahaan yang komprehensif dengan integrasi sidik jari biometrik waktu nyata.'
    },
    tags: ['Laravel', 'Quasar Framework', 'Vue 3', 'MySQL', 'ApexCharts'],
    category_id: 'web',
    featured: true,
    cover: '/assets/projects/absenku/index.png',
    client: 'Corporate Internal',
    completed_at: new Date('2024-05-01'),
    features: {
      en: [
        'Automated check-in and check-out logs tracking daily employee presence',
        'Overtime and leave management tracking early departures and extra hours',
        'Automated monthly salary calculation engine based on presence and role-based grades',
        'Biometric fingerprint device synchronization handling machine connectivity',
        'Interactive dashboard telemetry visualization utilizing ApexCharts'
      ],
      id: [
        'Log masuk dan keluar otomatis yang melacak kehadiran harian karyawan',
        'Manajemen lembur dan cuti yang melacak kepulangan awal dan jam ekstra',
        'Mesin kalkulasi gaji bulanan otomatis berdasarkan kehadiran dan tingkatan jabatan',
        'Sinkronisasi perangkat sidik jari biometrik yang menangani konektivitas mesin',
        'Visualisasi telemetri dasbor interaktif menggunakan ApexCharts'
      ]
    },
    advantages: {
      en: [
        'Unified enterprise dashboard consolidating staff distribution, schedules, and payroll metrics',
        'High-performance backend handling bulk attendance records from multiple biometric terminals',
        'User-friendly UI crafted with Quasar and Vue 3 supporting light and dark themes'
      ],
      id: [
        'Dasbor perusahaan terpadu yang menggabungkan distribusi staf, jadwal, dan metrik penggajian',
        'Backend berkinerja tinggi yang menangani catatan kehadiran massal dari beberapa terminal biometrik',
        'UI ramah pengguna yang dibuat dengan Quasar dan Vue 3 yang mendukung tema terang dan gelap'
      ]
    },
    problem: {
      en: 'The company required a reliable system to sync attendance logs directly from office fingerprint machines, manage employee shifts, track overtime accurately, and automate the monthly payroll generation process to reduce human administration errors.',
      id: 'Perusahaan membutuhkan sistem yang andal untuk menyinkronkan log kehadiran langsung dari mesin sidik jari kantor, mengelola shift karyawan, melacak lembur secara akurat, dan mengotomatiskan proses pembuatan payroll bulanan untuk mengurangi kesalahan administrasi manusia.'
    },
    solution: {
      en: 'We designed a robust system composed of a Laravel REST API coupled with a Quasar-based SPA dashboard, providing seamless biometric device synchronization, attendance trend analytics, and automatic payroll calculation.',
      id: 'Kami merancang sistem andal yang terdiri dari Laravel REST API dipadukan dengan dasbor SPA berbasis Quasar, menyediakan sinkronisasi perangkat biometrik tanpa hambatan, analitik tren kehadiran, dan perhitungan gaji otomatis.'
    },
    impact: {
      en: 'Reduced manual payroll processing time from days to minutes, synchronized real-time biometric logs for over 100 employees, and minimized human error in overtime salary calculations.',
      id: 'Mengurangi waktu pemrosesan gaji manual dari beberapa hari menjadi hitungan menit, menyinkronkan log biometrik waktu nyata untuk lebih dari 100 karyawan, dan meminimalkan kesalahan manusia dalam perhitungan gaji lembur.'
    },
    gallery: [
      '/assets/projects/absenku/1.png',
      '/assets/projects/absenku/2.png',
      '/assets/projects/absenku/3.png',
      '/assets/projects/absenku/4.png',
      '/assets/projects/absenku/5.png',
      '/assets/projects/absenku/6.png',
      '/assets/projects/absenku/7.png',
      '/assets/projects/absenku/8.png',
      '/assets/projects/absenku/9.png',
      '/assets/projects/absenku/10.png'
    ]
  },
  {
    id: 'edukarya',
    title: 'Edukarya',
    description: {
      en: 'An educational web platform containing localized events, structured teaching materials, and digital certificate verification.',
      id: 'Platform web edukasi yang berisi informasi kegiatan/event, bahan ajar terstruktur, dan verifikasi sertifikat digital.'
    },
    tags: ['Laravel', 'Quasar Framework', 'Vue 3', 'MySQL'],
    category_id: 'web',
    featured: true,
    cover: '/assets/projects/edukarya/index.png',
    client: 'Muhammadiyah Kota Semarang',
    completed_at: new Date('2024-02-01'),
    features: {
      en: [
        'Interactive event catalog showcasing educational training, workshops, and webinars',
        'Downloadable structured teaching materials (bahan ajar) organized by category',
        'Online digital certificate search and validation module for participants',
        'Admin dashboard for managing events, uploading study resources, and issuing certificates',
        'Unified authentication system for users and administrators'
      ],
      id: [
        'Katalog kegiatan interaktif yang menampilkan pelatihan, lokakarya, dan webinar pendidikan',
        'Unduhan bahan ajar terstruktur yang dikelompokkan berdasarkan kategori',
        'Modul pencarian dan validasi sertifikat digital online untuk peserta',
        'Dasbor admin untuk mengelola event, mengunggah materi pembelajaran, dan menerbitkan sertifikat',
        'Sistem autentikasi terpadu untuk pengguna dan administrator'
      ]
    },
    advantages: {
      en: [
        'Centralized training event and resource database for teachers and students',
        'Modern Single Page Application user interface built using Quasar Framework and Vue 3',
        'Scalable and robust REST API architecture powered by Laravel'
      ],
      id: [
        'Database kegiatan pelatihan dan sumber daya terpusat untuk guru dan peserta',
        'Antarmuka Single Page Application modern yang dibangun dengan Quasar Framework dan Vue 3',
        'Arsitektur REST API yang tangguh dan mudah dikembangkan bertenaga Laravel'
      ]
    },
    problem: {
      en: 'The Muhammadiyah educational institution in Semarang required a structured platform to coordinate training events, share educational PDF materials, and provide a secure verification portal for training certificates.',
      id: 'Instansi pendidikan Muhammadiyah di Semarang membutuhkan platform terstruktur untuk mengoordinasikan kegiatan pelatihan, membagikan dokumen bahan ajar PDF, dan menyediakan portal verifikasi sertifikat pelatihan yang aman.'
    },
    solution: {
      en: 'We built Edukarya, a responsive SPA using Quasar and Vue 3, integrated with a Laravel backend API, enabling simple event registration, download centers, and a search directory for generated certificates.',
      id: 'Kami membangun Edukarya, SPA responsif menggunakan Quasar dan Vue 3, terintegrasi dengan Laravel backend API, memungkinkan registrasi event mudah, pusat unduhan, dan direktori pencarian sertifikat yang diterbitkan.'
    },
    impact: {
      en: 'Successfully digitized certification workflows for hundreds of workshop attendees, streamlined material distribution, and centralized event administration for the school board.',
      id: 'Berhasil mendigitalisasi alur kerja sertifikasi untuk ratusan peserta lokakarya, menyederhanakan distribusi bahan ajar, dan memusatkan administrasi kegiatan bagi pengurus instansi.'
    },
    gallery: ['/assets/projects/edukarya/1.png', '/assets/projects/edukarya/2.png', '/assets/projects/edukarya/3.png']
  }
]
