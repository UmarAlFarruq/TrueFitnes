import {
  Card,
  Cards,
  Icon,
  Img,
  P,
  TextCotainer,
  Title,
  Wrapper,
} from "./style";
import img from '../../assets/imgs/weOffer.png'

function WeOffer() {
  return (
    <Wrapper>
      <TextCotainer>
        <h1 className="title" style={{ color: "#01AEE7" }}>
          Мы предлагаем <br /> полный комплекс услуг
        </h1>
        <Cards>
          <Card>
            <Icon.Location></Icon.Location>
            <Title>ТРЕНАЖЕРЫ СО СКЛАДЕ В МОСКВЕ</Title>
            <P>
              Мы предлагаем оборудование как со склада в Москве, так и со сроком
              поставки до 60 дней.
            </P>
          </Card>
          <Card>
            <Icon.Naushnik></Icon.Naushnik>
            <Title>КОНСАЛТИНГ</Title>
            <P>
              Помогаем в разработке концепции клуба, зонировании, оснащении и
              расчете финансовых показателей.
            </P>
          </Card>
          <Card>
            <Icon.Doc></Icon.Doc>
            <Title>ЛИЗИНГ ТРЕНАЖЕРОВ</Title>
            <P>
              Мы сотрудничаем с основными лизинговыми компаниями и предлагаем
              лизинг до 36 месяцев.
            </P>
          </Card>
          <Card>
            <Icon.You></Icon.You>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
          <Card>
            <Icon.Tanga></Icon.Tanga>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
          <Card>
            <Icon.Home></Icon.Home>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
          <Card>
            <Icon.Burchak></Icon.Burchak>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
          <Card>
            <Icon.Car></Icon.Car>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
          <Card>
            <Icon.Setting></Icon.Setting>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
          <Card>
            <Icon.User></Icon.User>
            <Title>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</Title>
            <P>
              Полный цикл пуско-наладочных работ, а также сервисного
              обслуживания тренажеров.
            </P>
          </Card>
        </Cards>
      </TextCotainer>
      <Img src={img} alert="weOffer" />
    </Wrapper>
  );
}

export default WeOffer;
