import React from "react";
import { GlobalStyles } from "../../styles/GlobalApp";
import { Container, Footer } from "./styles";
import { HeaderAmyi, FormRanking, ModalRanking } from "../../components";

import Amyi1 from "../../assets/amyi1.png";
import Amyi2 from "../../assets/amyi2.png";
import Amyi3 from "../../assets/amyi3.png";

export default function MiniRanking() {
  const [data, setData] = React.useState([]);
  const [note, setNote] = React.useState("0");
  const [radio, setRadio] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const result = [
    {
      id: 0,
      title: "1º",
      name: "Amyi I",
      desc: "Grapefruit, greenal, white, ambar",
      img: Amyi1,
      note: note[0],
    },
    {
      id: 1,
      title: "2º",
      name: "Amyi II",
      img: Amyi2,
      desc: "Pink peppercorn angelica lactone, patchouli",
      note: note[1],
    },
    {
      id: 2,
      title: "3º",
      name: "Amyi III",
      img: Amyi3,
      desc: "Grapefruit, greenal, white, ambar",
      note: note[2],
    },
  ];

  const handleConclude = () => {
    if (!radio) {
      alert("Selecione um dos perfumes acima");
    } else {
      setModal(true);
    }
  };

  const onClinkModal = () => {
    setModal(false);
  };

  const handleAfter = () => {};

  const handleConvert = (e) => {
    return JSON.parse(e);
  };

  const handleDataSort = (data) => {
    let sort = data.sort();
    let dataOrder = sort.reverse();
    setNote(dataOrder);
  };

  React.useEffect(() => {
    let storageI = localStorage.getItem("amyiI@webSlider");
    let storageII = localStorage.getItem("amyiII@webSlider");
    let storageIII = localStorage.getItem("amyiIII@webSlider");

    if (storageI != null || storageII != null || storageIII != null) {
      handleConvert(storageI);
      if (storageI != data) {
        data.push(storageI);
      }

      handleConvert(storageII);
      if (storageII != data) {
        data.push(storageII);
      }

      handleConvert(storageIII);
      if (storageIII != data) {
        data.push(storageIII);
      }
    }

    handleDataSort(data);
    result.sort();
    result.reverse();
  }, []);

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
        {result.map((item) => {
          return (
            <FormRanking
              key={item.id}
              title={item.title}
              image={item.img}
              alt="Amyi I"
              name={item.name}
              description={item.desc}
              note={item.note}
              setImage={item.id == 2 ? true : false}
              onChangeRadio={(t) => setRadio(t.target.value)}
              valueRadio={radio}
            />
          );
        })}
        {modal && <ModalRanking onClinkModal={onClinkModal} />}
        <div id="btn-bottom">
          <button onClick={handleConclude}>CONFIRMAR PERFUME ESCOLHIDO</button>
          <button onClick={handleAfter}>ESCOLHER DEPOIS</button>
        </div>
        <Footer />
      </Container>
    </>
  );
}
