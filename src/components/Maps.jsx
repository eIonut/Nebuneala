import React from 'react'
import data from '../../data'
import Header from './Header';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const MapsContainer = styled.section`
height: 100vh - 15rem;
max-width: 100vw;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
grid-template-rows: repeat(auto, 1fr);
padding: 4rem 4rem;
grid-gap: 2rem;

@media only screen and (max-width: 1200px) {
 grid-template-columns: repeat(1, 1fr);
}

@media only screen and (max-width: 700px) {
 grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
grid-gap: 1rem;
padding: 2rem;
}

@media only screen and (max-width: 400px) {
 padding: 2rem 0;
}
`
const MapBox = styled.div`
position: relative;
width: 560px;
height: 20.4rem;
border-radius: 0.5rem;
margin: auto;
text-align: center;
&:hover{
  cursor: pointer;
}

@media only screen and (max-width: 1816px) {
 width: 100%;
 height: 30rem;
}


@media only screen and (max-width: 1237px) {
 width: 100%;
 height: 30rem;
}

@media only screen and (max-width: 800px) {
 width: 100%;
 height: 20rem;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 0.5rem;
filter: brightness(60%);
`
const MapName = styled.span`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 color: white;
 font-size: 3.2rem;
 font-weight: medium;

 @media only screen and (max-width: 800px) {
 font-size: 2.4rem;
}

 @media only screen and (max-width: 400px) {
 font-size: 2rem;
}
`

const Maps = () => {
  const maps = data[0].maps;

  return (
    <>
    <Header></Header>
      <MapsContainer>
      {maps.map(map =>
      <MapBox key={map.mapId}>
        <Link to={`maps/${map.mapId}`}>
          <Image src={`/src/assets/images/maps-images/${map.name}.jpg`} />
          <MapName>{map.name}</MapName>
        </Link>
      </MapBox>

      )}

    </MapsContainer>
    </>
  )
}

export default Maps
