import { Card, Cards, H1, Wrapper, Title, Span } from "./style";
import img1 from "../../assets/imgs/ctalog1.png";
import img2 from "../../assets/imgs/ctalog2.png";
import img3 from "../../assets/imgs/ctalog3.png";
import img4 from "../../assets/imgs/ctalog4.png";
import img5 from "../../assets/imgs/ctalog5.png";
import img6 from "../../assets/imgs/ctalog6.png";

function Catalog() {
  return (
    <Wrapper>
      <H1>
        <span className="color">True тренажеры</span> - каталог продукции
      </H1>
      <Cards>
        <Card url={img1}>
          <Title>Кардио тренажеры</Title>
          <Span></Span>
        </Card>
        <Card url={img2}>
          <Title>Кардио тренажеры</Title>
          <Span></Span>
        </Card>
        <Card url={img3}>
          <Title>Кардио тренажеры</Title>
          <Span></Span>
        </Card>
        <Card url={img4}>
          <Title>Кардио тренажеры</Title>
          <Span></Span>
        </Card>
        <Card url={img5}>
          <Title>Кардио тренажеры</Title>
          <Span></Span>
        </Card>
        <Card url={img6}>
          <Title>Кардио тренажеры</Title>
          <Span></Span>
        </Card>
      </Cards>
    </Wrapper>
  );
}

export default Catalog;
