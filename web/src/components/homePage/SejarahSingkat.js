import React from 'react';
import { SectionTitle } from '../typography/Title';
import {
  SejarahSingkatStyles,
  SejarahSingkatContent
} from '../../styles/homePage/SejarahSingkatStyles';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';
import { buttonTypes } from '../../constants/buttonTypes';

function SejarahSingkat() {
  return (
    <SejarahSingkatStyles>
      <SectionTitle>Tentang Kami</SectionTitle>
      <SejarahSingkatContent>
        Front Perjuangan Pemuda Indonesia disingkat FPPI merupakan organisasi
        pergerakan pemuda yang lahir sebagai respon terhadap kuatnya hegemoni,
        korporatisme negara, ketidakadilan global, dan menampik penetrasi yang
        memandulkan daya kritis dan radikalisme kaum muda. FPPI digagas di akhir
        November 1998 dalam pertemuan di Muntilan, Magelang, Jawa Tengah setelah
        diskusi panjang "Menghitung Kekuatan Elemen Pergerakan Pasca Semanggi"
        antar elemen lintas jaringan Jawa-Bali.
        <br/>
        <br/>
        Penyebaran gagasan <i>Nasional Demokrasi Kerakyatan</i> yang berpijak kepada sikap independen adalah tradisi yang terus menerus diperkuat oleh FPPI lewat kerja-kerja ditingkatan kota.
        Bagi Front Perjuangan Pemuda Indonesia, yang terpenting adalah gagasan membangun Indonesia Raya menuju demokrasi sejati yang sanggup mengakomodir kepentingan semua pihak dan golongan dan juga keberpihakan kepada masyarakat yang dilemahkan oleh sistem negara.
        </SejarahSingkatContent>
      <div className='button-wrapper'>
        <ButtonStyles
          className='button-see'
          to='/about-us'
          variant={buttonTypes.primary}
        >
          Selengkapnya -{'>'}
        </ButtonStyles>
      </div>
    </SejarahSingkatStyles>
  );
}

export default SejarahSingkat;
