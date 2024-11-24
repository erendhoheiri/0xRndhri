import React from 'react';
import { SectionTitle } from '../typography/Title';
import { TeamsStyles, TeamCard, TeamGrid } from '../../styles/homePage/TeamsStyles';
import Image from "../../images/placeholder.png"
import Sari from "../../images/sari.png"
import Anis from "../../images/anis.png"
import Sere from "../../images/sere.jpg"
import Reyhan from "../../images/reyhan.jpg"
import Uly from "../../images/uly.jpg"
import Syafiq from "../../images/syafiq.jpeg"

const teamMembers =[
  {
    "id": 1,
    "name": "Sari Wijaya",
    "position": "Ketua Umum",
    "image": Sari
  },
  {
    "id": 2,
    "name": "Moh. Ma’sum Yusron",
    "position": "Sekertaris Jenderal",
    "image": Image
  },
  {
    "id": 3,
    "name": "Sere Risti Utami",
    "position": "Bendahara",
    "image": Sere
  },
  {
    "id": 4,
    "name": "Anis Nur Nadhiroh",
    "position": "Bendahara",
    "image": Anis
  },
  {
    "id": 5,
    "name": "Nadya Pelu",
    "position": "Bendahara",
    "image": Image
  },
  {
    "id": 6,
    "name": "Lukman Abdul Hakim",
    "position": "Dept. Pendidikan",
    "image": Image
  },
  {
    "id": 7,
    "name": "Abdul Gani Ghifari",
    "position": "Dept. Pendidikan",
    "image": Image
  },
  {
    "id": 8,
    "name": "Eren Dhoheiri",
    "position": "Dept. Pusdatin",
    "image": Image
  },
  {
    "id": 9,
    "name": "Reyhan Majid",
    "position": "Dept. Pusdatin",
    "image": Reyhan
  },
  {
    "id": 10,
    "name": "Farhat",
    "position": "Dept. Pusdatin",
    "image": Image
  },
  {
    "id": 11,
    "name": "Ajid Fuad Muzaki",
    "position": "Dept. Media & Publikasi",
    "image": Image
  },
  {
    "id": 12,
    "name": "Muslim Kone",
    "position": "Dept. Media & Publikasi",
    "image": Image
  },
  {
    "id": 13,
    "name": "Uly Mega Septiani",
    "position": "Dept. Media & Publikasi",
    "image": Uly
  },
  {
    "id": 14,
    "name": "Teny Prayogo Putri",
    "position": "Dept. Perempuan",
    "image": Image
  },
  {
    "id": 15,
    "name": "Salawati Taher",
    "position": "Dept. Ekonomi",
    "image": Image
  },
  {
    "id": 16,
    "name": "Syafiq Yunensa",
    "position": "Biro Mahasiswa",
    "image": Syafiq
  },
  {
    "id": 17,
    "name": "Hajria",
    "position": "Biro Mahasiswa",
    "image": Image
  },
  {
    "id": 18,
    "name": "Abdul Mukhtar",
    "position": "Biro Mahasiswa",
    "image": Image
  },
  {
    "id": 19,
    "name": "Izam Kamaruzzaman",
    "position": "Biro Mahasiswa",
    "image": Image
  },
  {
    "id": 20,
    "name": "Pajihad Khurasan",
    "position": "Biro Tani",
    "image": Image
  }
]


function Teams() {
  return (
    <TeamsStyles>
      <TeamGrid>
        {teamMembers.map((member) => (
          <TeamCard key={member.id}>
            <img src={member.image} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="description">{member.description}</p>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamsStyles>
  );
}

export default Teams;
