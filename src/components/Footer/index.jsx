import {
  Button,
  Facebook,
  FooterDiv,
  Icons,
  Input,
  Instogram,
  P,
  Send,
  SentEmail,
  Texts,
  Wrapper,
  Youtube,
} from "./style";

function Footer() {
  return (
    <Wrapper>
      <FooterDiv>
        <p className="titleText">КАТАЛОГ ТОВАРОВ</p>
        <Texts>
          <P>Кардио тренажеры</P>
          <P>Composite Strength</P>
          <P>True Stretch</P>
          <P>Сайклинг</P>
          <P>Групповые тренировки</P>
          <P>Силовые тренажеры</P>
          <P>Консоли</P>
          <h6>© TRUE FITNESS</h6>
        </Texts>
      </FooterDiv>
      <FooterDiv>
        <p className="titleText">ИНФОРМАЦИЯ</p>
        <Texts>
          <P>О Бренде </P>
          <P>Преимущества </P>
          <P>Новости </P>
          <P>Получить каталог</P>
          <P>Открыть клуб с True </P>
          <P>Заказать 3D Проект </P>
          <P>Эффективный клуб</P>
          <P> Лизинг</P>
        </Texts>
      </FooterDiv>
      <FooterDiv>
        <p className="titleText">КОНТАКТЫ</p>
        <Texts>
          <P>Политика конфиденциальности </P>
          <P>Контакты </P>
        </Texts>
      </FooterDiv>
      <FooterDiv>
        <p className="titleText">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</p>
        <SentEmail>
          <Input placeholder="E - MAIL" />
          <Button>
            <Send type="submit" />
          </Button>
        </SentEmail>
        <Icons>
          <a href="https://www.youtube.com/" target="_blank" >
            <Facebook />
          </a>
          <a href="https://www.youtube.com/" target="_blank" >
            <Instogram />
          </a>
          <a href="https://www.youtube.com/" target="_blank" >
            <Youtube />
          </a>
        </Icons>
      </FooterDiv>
    </Wrapper>
  );
}

export default Footer;
