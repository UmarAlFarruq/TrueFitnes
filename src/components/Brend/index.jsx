import {
  About,
  AboutContainer,
  Card,
  CardText,
  Cards,
  H1,
  History,
  Img,
  ImgDiv,
  Innovations,
  InnovationsCard,
  InnovationsImg,
  InnovationsTitle,
  P,
  Text,
  TrueSports,
  Wrapper,
  Years,
} from "./style";
import { ClubText, Title, TitleContainer } from "../OpenClub/style";
import AboutTrue from "../AboutTrue";
import about from "../../assets/imgs/brandAbout.png";
import img from "../../assets/imgs/brend-about-footer.png";
import imgCard1 from "../../assets/imgs/innovationsCard1.png";
import imgCard2 from "../../assets/imgs/innovationsCard2.png";
import imgCard3 from "../../assets/imgs/innovationsCard3.png";
import imgCard4 from "../../assets/imgs/innovationsCard4.png";
import imgCard5 from "../../assets/imgs/innovationsCard5.png";
import imgCard6 from "../../assets/imgs/innovationsCard6.png";
import Form from "../Form";
import BrendCarousel from "../BrendCarousel";

function Brand() {
  return (
    <Wrapper>
      <TitleContainer height="225px">
        <ClubText>О НАШЕМ БРЕНДЕ</ClubText>
        <Title>TRUE - СОВЕРШЕННОE</Title>
        <Title> ФИТНЕС-ОБОРУДОВАНИЕ</Title>
      </TitleContainer>
      <About>
        <Card>
          <Text>
            Это совершенство обеспечивается высококачественными, долговечными
            материалами и технологиями, которые мы используем для производстве
            наших машин. Но оно также создается и благодаря нашей преданности
            клиентам и их потребностям.
          </Text>
          <Text color="black">
            Наша опытная команда предлагает комплексное обслуживание, начиная от
            планирования объекта до технического обслуживания и оснащения ваших
            залов новейшими технологиями. Являясь вашим надежным партнером, мы
            делаем все возможное, чтобы ваше предприятие продолжало эффективно
            работать годы и годы.
          </Text>
          <Text color="black">
            Вы можете рассчитывать на нас в предоставлении одних из лучших услуг
            в отрасли. Мы ориентированы на оптимизацию срока службы вашего
            фитнес-оборудования. Мы всегда ищем способы расширить сферу
            взаимодействия с нашими клиентами, будь то предоставление учебных
            материалов для ваших сотрудников и инструкторов, или разработка
            технологических решений, отвечающих потребностям современных
            пользователей.
          </Text>
          <Text>
            Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь
            вашей компании добиться успеха.
          </Text>
        </Card>
      </About>
      <AboutContainer>
        <AboutTrue img={about} button={false} />
        <History>
          <H1>Этапы развития компании True Fitness</H1>
          <H1>История развития, история внедрения инноваций</H1>
          <P>
            С момента своего основания в 1972 году компания TRUE основывалась на
            двух основных руководящих принципах: создавать продукты высочайшего
            качества и поддерживать их превосходным обслуживанием. С годами
            фитнес-индустрия изменилась, появились новые рынки и изменились
            потребности наших клиентов, но эти принципы остаются неизменными, и
            мы неустанно продолжаем следить за актуальностью наших технологий.
          </P>
          <P>
            В соответствии с нашими ценностями TRUE всегда стремилась
            оборудовать наши тренажеры новейшими технологиями и функциями
            безопасности. Мы с самого начала предоставляли нашим клиентам самые
            лучшие возможности для тренировок, обеспечивая при этом им
            уверенность в безопасности. Вот некоторые из революционных
            достижений, которых мы добились в отрасли за нашу более чем
            45-летнюю историю.
          </P>
        </History>
        <Years>
          <b>1973</b>
          <b>1983</b>
          <b>1993</b>
          <b>1999</b>
          <b>2000</b>
          <b>2000</b>
          <b>2007</b>
          <b>2008</b>
          <b>2009</b>
          <b>2015</b>
          <b>2017</b>
          <b>2020</b>
          <b>2023</b>
        </Years>
        <ImgDiv>
          <Img src={img} />
          <TrueSports>
            <H1>TRUE Sports разрабатывает свою первую беговую дорожку</H1>
            <P>
              Компания True Sports основанная Frank Trulaske в 1972 году,
              разрабатывает свою первую беговую дорожку, являясь одним из
              пионеров в создании беговых дорожек в мире. Примененные технологии
              повлияли на развитии фитнес индустрии.
            </P>
          </TrueSports>
        </ImgDiv>
      </AboutContainer>
      <Innovations>
        <InnovationsTitle>Наши инновации</InnovationsTitle>
        <Cards>
          <InnovationsCard>
            <InnovationsImg src={imgCard1} />
            <CardText>тренажёр лестница Palisade</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard2} />
            <CardText>тренажёр лестница Palisade</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard3} />
            <CardText>тренажёр лестница Palisade</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard4} />
            <CardText>тренажёр лестница Palisade</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard5} />
            <CardText>тренажёр лестница Palisade</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard6} />
            <CardText>тренажёр лестница Palisade</CardText>
          </InnovationsCard>
        </Cards>
      </Innovations>
      <BrendCarousel />
      <Form />
    </Wrapper>
  );
}

export default Brand;
