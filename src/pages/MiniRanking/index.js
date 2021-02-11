import React from "react";
import { GlobalStyles } from "../../styles/GlobalApp";
import { Container, Footer } from "./styles";
import { HeaderAmyi, FormRanking } from "../../components";

import Amyi1 from "../../assets/amyi1.png";
import Amyi2 from "../../assets/amyi2.png";
import Amyi3 from "../../assets/amyi3.png";

export default function MiniRanking() {
  const [dataI, setDataI] = React.useState(null);
  const [dataII, setDataII] = React.useState(null);
  const [dataIII, setDataIII] = React.useState(null);

  

  React.useEffect(() => {
    let storageI = localStorage.getItem('amyiI@webSlider');
    let storageII = localStorage.getItem('amyiII@webSlider');
    let storageIII = localStorage.getItem('amyiIII@webSlider');

    if(storageI != null || storageII != null || storageIII != null){
      storageI = JSON.parse(storageI);
      setDataI(storageI);

      storageII = JSON.parse(storageII);
      setDataII(storageII);

      storageIII = JSON.parse(storageIII);
      setDataIII(storageIII);
    }else {
      setDataI(dataI);
      setDataII(dataII);
      setDataII(dataIII);
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderAmyi />
        <div id="header-top">
          <h1>
            Juntos, vivemos uma experiência inspiradora, autêntica. Verdadeira.
          </h1>
          <span>
            Confira quais foram os perfumes que conquistaram o pódio do seu
            coração:
          </span>
        </div>
        <FormRanking
          title="1º"
          image={Amyi1}
          alt="Amyi I"
          name="Amyi I"
          description="Grapefruit, greenal, white, ambar"
          note={dataI}
        />
        <FormRanking
          title="2º"
          image={Amyi2}
          alt="Amyi II"
          name="Amyi II"
          description="Pink peppercorn angelica lactone, patchouli"
          note={dataII}
        />
        <FormRanking
          title="3º"
          setImage={true}
          image={Amyi3}
          alt="Amyi III"
          name="Amyi III"
          description="Grapefruit, greenal, white, ambar"
          note={dataIII}
        />
        <div id="btn-bottom">
          <button>CONFIRMAR PERFUME ESCOLHIDO</button>
          <button>ESCOLHER DEPOIS</button>
        </div>
        <Footer />
      </Container>
    </>
  );
}
