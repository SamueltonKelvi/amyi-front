import React from 'react';
import {GlobalStyles} from '../../styles/GlobalApp';
import {Container,Footer} from './styles';
import {HeaderAmyi,FormRanking} from '../../components';

import Amyi1 from '../../assets/amyi1.png';
import Amyi2 from '../../assets/amyi2.png';
import Amyi3 from '../../assets/amyi3.png';

export default function MiniRanking() {
  const [note, setNome ] = React.useState(0);

  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderAmyi />
        <div id="header-top">
          <h1>Juntos, vivemos uma experiência inspiradora, autêntica. Verdadeira.</h1>
          <span>Confira quais foram os perfumes que conquistaram o pódio do seu coração:</span>
        </div>
        <FormRanking 
          title="1º" 
          image={Amyi1} 
          alt="Amyi I"
          name="Amyi I"
          description="Grapefruit, greenal, white, ambar"
          note={note}/>
        <FormRanking 
          title="2º" 
          image={Amyi2} 
          alt="Amyi II"
          name="Amyi II"
          description="Pink peppercorn angelica lactone, patchouli"
          note={note}/>
        <FormRanking 
          title="3º" 
          image={Amyi3} 
          alt="Amyi III"
          name="Amyi III"
          description="Grapefruit, greenal, white, ambar"
          note={note}/>
        {/* <Footer/> */}
      </Container>
    </>
  );
}