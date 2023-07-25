import uuid from 'react-uuid';

const data = [
  {
    maps: [
      {
        mapId: uuid(),
        name: 'Mirage',
        image: 'src/assets/images/maps-images/Mirage.jpg',
      },
      {
        mapId: uuid(),
        name: 'Dust',
        image: 'src/assets/images/maps-images/Dust.jpg',
      },
      {
        mapId: uuid(),
        name: 'Inferno',
        image: 'src/assets/images/maps-images/Inferno.jpg',
      },
      {
        mapId: uuid(),
        name: 'Anubis',
        image: 'src/assets/images/maps-images/Anubis.jpg',
      },
      {
        mapId: uuid(),
        name: 'Overpass',
        image: 'src/assets/images/maps-images/Overpass.jpg',
      },
      {
        mapId: uuid(),
        name: 'Vertigo',
        image: 'src/assets/images/maps-images/Vertigo.jpg',
      },
      {
        mapId: uuid(),
        name: 'Nuke',
        image: 'src/assets/images/maps-images/Nuke.jpg',
      },
    ],
    smokes: [
      {
        id: uuid(),
        map: 'Mirage',
        location: 'Stairs',
        labels: ['stand', 'throw'],
        images: [
          'src/assets/images/smoke-images/mirage/stairs_smoke_1.jpg',
          'src/assets/images/smoke-images/mirage/stairs_smoke_2.jpg',
        ],
      },
      {
        id: uuid(),
        map: 'Mirage',
        location: 'Connector',
        labels: ['run', 'throw'],
        images: [
          'src/assets/images/smoke-images/mirage/stairs_smoke_1.jpg',
          'src/assets/images/smoke-images/mirage/stairs_smoke_2.jpg',
        ],
      },
    ],
  },
];

export default data;
