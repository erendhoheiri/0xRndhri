import React, { useState } from 'react';
import {
  RolesStyles,
  RoleCard,
  RoleTitle,
  RoleDescription,
  ToggleButton,
} from '../../styles/homePage/RolesStyles';

const roles = [
  {
    id: 1,
    title: 'Ketua Umum',
    responsibilities: [
      'Mempertanggung jawabkan realisasi program kerja internal dan eksternal',
      'Mengawal kerja internal dan eksternal',
      'Menjaga jejaring komunikasi eksternal organisasi',
      'Mengikuti kerja aliansi strategis dan taktis gerakan sektor',
      'Memimpin rapat umum kader dan evaluasi organisasi',
      'Mengawal kerja perluasan dan penguatan organisasi tingkat kota Pimpinan Kota',
      'Membangun dan menjaga komunikasi dengan kader post-struktur',
    ],
  },
  {
    id: 2,
    title: 'Sekretaris Jenderal',
    responsibilities: [
      'Membantu ketua umum dalam melaksanakan kerja internal maupun eksternal organisasi',
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Meminta rencana anggaran belanja departemen-departemen untuk dijadikan rencana anggaran belanja organisasi',
      'Memimpin rapat-rapat biro organisasi yang diikuti oleh koordinator dan anggota departemen organisasi',
      'Membantu kerja-kerja advokasi sektoral yang sedang dikerjakan organisasi',
      'Menyiapkan format surat-surat yang akan dikeluarkan organisasi',
      'Mengelola surat masuk dan keluar organisasi dalam buku induk surat',
    ],
  },
  {
    id: 3,
    title: 'Bendahara',
    responsibilities: [
      'Mengelola sumber dana dan alokasi anggaran untuk kebutuhan kerja-kerja organisasi',
      'Menemukan metode penarikan iuran dan melaksanakannya secara optimal',
      'Mengembangkan kekayaan organisasi untuk kemajuan organisasi',
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Mengatur keluar masuk keuangan organisasi',
      'Meminta laporan pembiayaan kegiatan departemen maupun organisasi tingkat kota',
      'Melakukan audit keuangan dan kekayaan organisasi secara periodik',
      'Berkoordinasi dengan Departemen Ekonomi terkait crowd-fundraising',
    ],
  },
  {
    id: 4,
    title: 'Departemen Pendidikan',
    responsibilities: [
      'Menyusun kurikulum pendidikan tiap jenjang bersama dengan seluruh kader yang diundang',
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Membuat Rencana Anggaran Belanja Departemen untuk satu tahun',
      'Membuat jadwal kegiatan pendidikan dan pelatihan organisasi',
      'Memimpin dan mengawal jalannya kegiatan pendidikan dan pelatihan yang dilaksanakan organisasi',
      'Mengelola hasil kajian strategis untuk dijadikan produk organisasi',
    ],
  },
  {
    id: 5,
    title: 'Departemen Media dan Publikasi',
    responsibilities: [
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Membuat Rencana Anggaran Belanja Departemen untuk satu tahun',
      'Mengelola, memassifkan, dan memonitoring media propaganda organisasi',
      'Membuat konten dan strategi komunikasi media sosial organisasi',
      'Mengelola isu-isu strategis untuk komunikasi politik organisasi',
      'Memonitoring perkembangan dan membantu kerja propaganda organisasi tingkat kota',
    ],
  },
  {
    id: 6,
    title: 'Departemen Pusat Data dan Informasi',
    responsibilities: [
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Membuat Rencana Anggaran Belanja Departemen untuk satu tahun',
      'Menyiapkan format pendataan kader dan pengurus organisasi tingkat kota',
      'Melakukan pemetaan sebaran kader guna pengembangan sumber daya organisasi',
      'Mengolah riset untuk bahan kajian strategis organisasi',
      'Membuat sistem pengarsipan terhadap data dan informasi organisasi',
      'Mempersiapkan bahan publikasi/edaran organisasi berkaitan dengan data dan informasi yang diperoleh',
    ],
  },
  {
    id: 7,
    title: 'Departemen Perempuan',
    responsibilities: [
      'Membuat Standar Operasi Prosedural Organisasi yang responsif gender',
      'Menindaklanjuti program baik di nasional, kota maupun basis dengan wacana pengarusutamaan gender',
      'Menciptakan ruang aman bagi kader perempuan',
      'Membantu Departemen Pendidikan dalam mengelola kurikulum dengan wacana studi gender',
      'Membuat sistem rujukan untuk kasus kekerasan dan pelecehan seksual',
    ],
  },
  {
    id: 8,
    title: 'Departemen Ekonomi',
    responsibilities: [
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Membuat Rencana Anggaran Belanja Departemen untuk satu tahun',
      'Mengembangkan pemberdayaan UMKM dan ekonomi berdikari',
      'Menduplikasi sistem credit union (Koperasi Rakyat) sebagai model usaha kolektif organisasi',
    ],
  },
  {
    id: 9,
    title: 'Biro Mahasiswa',
    responsibilities: [
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Membuat Rencana Anggaran Belanja Biro untuk satu tahun',
      'Menindaklanjuti program kegiatan pendidikan, pelatihan, dan workshop',
      'Membangun dan menjaga komunikasi gerakan sektor mahasiswa',
      'Bertanggung jawab terhadap aksi-aksi bersama gerakan mahasiswa skala nasional',
    ],
  },
  {
    id: 10,
    title: 'Biro Tani',
    responsibilities: [
      'Membuat matrikulasi kerja selama satu tahun yang terbagi penjelasannya tiap semester',
      'Membuat Rencana Anggaran Belanja Biro untuk satu tahun',
      'Menindaklanjuti program kegiatan pendidikan, pelatihan, dan workshop',
      'Membangun dan menjaga komunikasi gerakan sektor tani',
      'Bertanggung jawab terhadap aksi-aksi bersama gerakan tani skala nasional',
    ],
  },
];


function Roles() {
  const [expandedRole, setExpandedRole] = useState(null);

  const toggleRole = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <RolesStyles>
      <h2>Pembagian Tugas Pokok Dan Fungsi Kerja Organsasi</h2>
      {roles.map((role) => (
        <RoleCard key={role.id} onClick={() => toggleRole(role.id)}>
          <RoleTitle>
            {role.title}
            <ToggleButton>
              {expandedRole === role.id ? '-' : '+'}
            </ToggleButton>
          </RoleTitle>
          {expandedRole === role.id && (
            <RoleDescription>
              <ul>
                {role.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </RoleDescription>
          )}
        </RoleCard>
      ))}
    </RolesStyles>
  );
}

export default Roles;
