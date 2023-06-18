import { Img, MapVsContact, Wrapper, ContactDiv, H1, P } from "./style";
import { ClubText, Title, TitleContainer } from "../OpenClub/style";
import img from "../../assets/imgs/map.png";
import MyCarousel from "../ContacCarousel";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <MyCarousel />
      <TitleContainer height=" 290px">
        <ClubText>{t("contact.blue_fon.yellow_title")}</ClubText>
        <Title width="100%">{t("contact.blue_fon.title")}</Title>
        <Title width="100%" size="27px">
          {t("contact.blue_fon.text")}
        </Title>
      </TitleContainer>
      <MapVsContact>
        <Img src={img} />
        <ContactDiv>
          <H1>{t("contact.map_data.title")}</H1>
          <P color="black">+7 (495) 320-5063</P>
          <P>info@wellfitness.pro</P>
          <P color="black">{t("contact.map_data.text")}</P>
          <P>{t("contact.map_data.time")}</P>
          <P>{t("contact.map_data.time2")}</P>
        </ContactDiv>
      </MapVsContact>
    </Wrapper>
  );
}

export default Contact;
