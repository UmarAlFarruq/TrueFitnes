import { Card, Cards, H1, Wrapper, Title, Span } from "./style";
import img1 from "../../assets/imgs/catalog1.png";
import img2 from "../../assets/imgs/ctalog2.png";
import img3 from "../../assets/imgs/catalog3.png";
import img4 from "../../assets/imgs/catalog4.png";
import img5 from "../../assets/imgs/catalog5.png";
import img6 from "../../assets/imgs/catalog6.png";
import { useTranslation } from "react-i18next";

function Catalog() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <H1>
        <span className="color"> {t("home.catalog.title")} </span> -{" "}
        {t("home.catalog.title_span")}
      </H1>
      <Cards>
        <Card
          url={img1}
          onClick={() => (window.open("https://www.youtube.com/", "_blank").focus())}
        >
          <Title>{t("home.catalog.img1")}</Title>
          <Span></Span>
        </Card>
        <Card url={img2}>
          <Title>{t("home.catalog.img2")}</Title>
          <Span></Span>
        </Card>
        <Card url={img3}>
          <Title>{t("home.catalog.img3")}</Title>
          <Span></Span>
        </Card>
        <Card url={img4}>
          <Title>{t("home.catalog.img4")}</Title>
          <Span></Span>
        </Card>
        <Card url={img5}>
          <Title>{t("home.catalog.img5")}</Title>
          <Span></Span>
        </Card>
        <Card url={img6}>
          <Title>{t("home.catalog.img6")}</Title>
          <Span></Span>
        </Card>
      </Cards>
    </Wrapper>
  );
}

export default Catalog;
