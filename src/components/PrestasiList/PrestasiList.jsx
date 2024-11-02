// import React from "react";
import "./PrestasiList.css";

const prestasiData = [
  {
    no: 1,
    namaLomba: "Gelaran Inovasi Daerah (GID)",
    prestasi: "Juara I",
    tahun: 2020,
    penyelenggara: "Bappedalitbang Kabupaten Bogor",
  },
  {
    no: 2,
    namaLomba: "Gelaran Inovasi Daerah (GID)",
    prestasi: "Juara II",
    tahun: 2020,
    penyelenggara: "Bappedalitbang Kabupaten Bogor",
  },
  {
    no: 3,
    namaLomba: "Gelaran Inovasi Daerah (GID)",
    prestasi: "Juara III",
    tahun: 2020,
    penyelenggara: "Bappedalitbang Kabupaten Bogor",
  },
  {
    no: 4,
    namaLomba: "Pemilihan Mahasiswa Berprestasi Tk. LLDIKTI Wilayah IV",
    prestasi: "13 Besar",
    tahun: 2021,
    penyelenggara: "LLDIKTI Wilayah IV Jawa Barat & Banten",
  },
  {
    no: 5,
    namaLomba: "Lomba Karya Tulis",
    prestasi: "Juara I",
    tahun: 2021,
    penyelenggara: "Agri-Informatika JIKA",
  },
  {
    no: 6,
    namaLomba: "Unjuk Gelar Porprov 2022",
    prestasi: "Medali Perunggu",
    tahun: 2022,
    penyelenggara: "Porprov XIV 2022 KONI Jawa Barat",
  },
  {
    no: 7,
    namaLomba: "Lomba Berbaris Jarak Pendek 800 Meter Mix Porprov 2022",
    prestasi: "Medali Perunggu",
    tahun: 2022,
    penyelenggara: "Porprov XIV 2022 KONI Jawa Barat",
  },
  {
    no: 8,
    namaLomba: "Lomba Berbaris Jarak Pendek 800 Meter Putra Porprov 2022",
    prestasi: "Medali Perak",
    tahun: 2022,
    penyelenggara: "Porprov XIV 2022 KONI Jawa Barat",
  },
  {
    no: 9,
    namaLomba: "Gelaran Inovasi Daerah (GID)",
    prestasi: "Juara I",
    tahun: 2022,
    penyelenggara: "Bappedalitbang Kabupaten Bogor",
  },
  {
    no: 10,
    namaLomba: "IISMA 2022",
    prestasi: "Pertukaran Pelajar ke Negara Malaysia",
    tahun: 2022,
    penyelenggara: "KEMDIKBUDRISTEKDIKTI",
  },
];

const PrestasiList = () => {
  return (
    <div className="prestasi-list">
      {/* <h2>Data Prestasi</h2> */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lomba</th>
            <th>Prestasi yang Didapat</th>
            <th>Tahun Gelaran</th>
            <th>Penyelenggara</th>
          </tr>
        </thead>
        <tbody>
          {prestasiData.map((prestasi) => (
            <tr key={prestasi.no}>
              <td>{prestasi.no}</td>
              <td>{prestasi.namaLomba}</td>
              <td>{prestasi.prestasi}</td>
              <td>{prestasi.tahun}</td>
              <td>{prestasi.penyelenggara}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrestasiList;
