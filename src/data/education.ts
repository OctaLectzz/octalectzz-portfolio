import type { EducationItem } from '@/types'

export interface ExtendedEducationItem extends EducationItem {
  status: 'Completed' | 'In Progress'
  skills: string[]
}

export const education: ExtendedEducationItem[] = [
  {
    school: 'Universitas Sahid Surakarta',
    degree: 'Teknik Informatika',
    period: '26 October 2024 - Present',
    status: 'In Progress',
    skills: ['Web Development', 'Algorithms', 'Databases', 'Computer Networks'],
    description: {
      en: 'I am currently a student at Universitas Sahid Surakarta, enrolled in the Informatics Engineering program under the Faculty of Science, Technology, and Health. I began my studies on October 26, 2024, and am dedicated to expanding my knowledge and skills in the field of technology and innovation.',
      id: 'Saat ini saya merupakan mahasiswa di Universitas Sahid Surakarta, terdaftar dalam program studi Teknik Informatika di bawah Fakultas Sains, Teknologi, dan Kesehatan. Saya memulai studi saya pada 26 Oktober 2024, dan berdedikasi untuk memperluas pengetahuan serta keterampilan saya di bidang teknologi dan inovasi.'
    }
  },
  {
    school: 'SMK Muhammadiyah 01 Sukoharjo',
    degree: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
    period: '01 July 2021 - 08 May 2024',
    status: 'Completed',
    skills: ['Desktop Apps', 'OOP', 'Web Programming', 'Game Development'],
    description: {
      en: 'Since July 2021, I have been engaged with SMK Muhammadiyah 01 Sukoharjo, dedicating efforts to the development of software and games (PPLG). Within this environment, I actively participate in crafting innovative software solutions and designing engaging and educational games. Through collaborative teamwork, I have contributed to the creation of quality products that enrich learning experiences and add value to students and the education community at large.',
      id: 'Sejak Juli 2021, saya telah aktif di SMK Muhammadiyah 01 Sukoharjo, mendedikasikan upaya untuk pengembangan perangkat lunak dan gim (PPLG). Dalam lingkungan ini, saya berpartisipasi aktif dalam membuat solusi perangkat lunak inovatif dan merancang gim yang menarik dan edukatif. Melalui kerja sama tim yang kolaboratif, saya berkontribusi pada pembuatan produk-produk berkualitas yang memperkaya pengalaman belajar dan memberikan nilai tambah bagi siswa dan komunitas pendidikan secara luas.'
    }
  }
]
