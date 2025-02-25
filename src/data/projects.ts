// data/projects.ts
import gayo from '../assets/images/gayo.png';
import Slide6 from '../assets/images/Slide6.png';
import Slide7 from '../assets/images/Slide7.png';
import Slide8 from '../assets/images/Slide8.png';
import Slide10 from '../assets/images/Slide10.png';
import Slide9 from '../assets/images/Slide9.png';
import Slide12 from '../assets/images/Slide12.png';

const projects = [
  {
    id: 1,
    title: "Driling Monitoring",
    description: "Monitoring Laporan Drilling PT. Gayo Mineral Resources",
    image: gayo, // Gunakan variabel yang diimpor
  },
  {
    id: 2,
    title: "Job Management",
    description: "Monitoring Laporan Pekerjaan PT. Antam dan Logam Mulia",
    image: Slide6,
  },
  {
    id: 3,
    title: "IoT Monitoring",
    description: "Monitoring Mesin Produksi PT. Antam ubpp Logam Mulia",
    image: Slide7,
  },
  {
    id: 4,
    title: "Inventory Apotek",
    description: "Pencatatan Penjualan Obat",
    image: Slide8,
  },
  {
    id: 5,
    title: "Manasik Tracking",
    description: "Sistem Informasi Tracking Jamaah Haji PT. LSKK",
    image: Slide10,
  },
  {
    id: 6,
    title: "Monja",
    description: "Sistem Monitoring Kerusakan Jalan",
    image: Slide9,
  },
  {
    id: 7,
    title: "GeoRIMA 1.5",
    description: "Visualisasi Data Sumber Daya Alam PPSDM",
    image: Slide12,
  },
];

export default projects;