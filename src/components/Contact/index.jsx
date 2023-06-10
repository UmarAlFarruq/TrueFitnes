import { Img, MapVsContact, Wrapper,ContactDiv, H1, P } from "./style";
import {  ClubText,  Title, TitleContainer } from "../OpenClub/style";
import img from "../../assets/imgs/map.png"
function Contact() {
  return (
    <Wrapper>
      <TitleContainer height=" 270px">
        <ClubText>КОНТАКТЫ</ClubText>
        <Title>ШОУ РУМ TRUE в Москве</Title>
        <Title>
          Посетите наш выставочный зал в ТРК ВЕГАС Крокус-Сити, Мякинино
        </Title>
      </TitleContainer>
      <MapVsContact>
        <Img src={img} />
        <ContactDiv>
            <H1>Дистрибьютор в России -WELLFITNESS</H1>
            <P color="black" >+7 (495) 320-5063</P>
            <P>info@wellfitness.pro</P>
            <P color="black" >ТРК Вегас Мякинино,ул. <br /> Международная 12, 66 км МКАД</P>
            <P>Пн-Чт, Вс с 10:00 до 23:00</P>
            <P>Пт-Сб с 10:00 до 24:00</P>
        </ContactDiv>
      </MapVsContact>
    </Wrapper>
  );
}

export default Contact;
