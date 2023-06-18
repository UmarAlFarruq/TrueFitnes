import { Button, Form, H1, Img, Input, P, Wrapper } from "./style";
import img from '../../assets/imgs/club.png'
import { useTranslation } from "react-i18next";

function Club() {
 
  const {t} = useTranslation()

  return (
    <Wrapper>
      <Img  src={img} />
      <Form>
        <H1> {t("home.club.title")}  </H1>
        <Input placeholder="имя" />
        <Input placeholder="email" />
        <Input placeholder="+ 7 (999) 999-99-99" />
        <Button> {t("home.club.button")}</Button>
        <P> {t("home.club.text")} </P>
      </Form>
    </Wrapper>
  );
}

export default Club;
