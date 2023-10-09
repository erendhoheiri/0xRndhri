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
