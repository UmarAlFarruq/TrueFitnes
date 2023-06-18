import { IMG, Img, P, Span, Title, UserName, Video, Wrapper, WrapperCarousel } from "./style";
import img from "../../assets/imgs/carousel.png";
import client from "../../assets/imgs/client.png";
import "./style.css"
import { useTranslation } from "react-i18next";

function BrendCarousel() {

  const {t} = useTranslation()

  return (
    <Wrapper>
      <Title> {t("brend.carousel.title")} </Title>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark brend-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active brend-caraousel-button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="brend-caraousel-button"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="brend-caraousel-button"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  brend-carousel-item active">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <IMG src={client} />
              <P color="black">{t("brend.carousel.text1")} </P>
              <UserName>{t("brend.carousel.userName1")}</UserName>
              <Span></Span>
              <UserName size="15px" >{t("brend.carousel.job1")}</UserName>
              <Video></Video>
            </WrapperCarousel>
          </div>
          <div className="carousel-item brend-carousel-item ">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <IMG src={client} />
              <P color="black">
                Мы были действительно впечатлены сотрудничеством с TRUE Fitness!
                Это была прекрасная возможность поработать с компанией, полной
                энергии и амбиции. Мы действительно довольны результатом. Нам
                нужен был бренд, который бы имел репутацию и способность
                поддерживать очень высокий уровень сервиса. И мы это нашли с
                TRUE Fitness.
              </P>
              <UserName>Пэтси Райан</UserName>
              <Span></Span>
              <UserName size="15px" >
                Mardyke Arena / Университетский колледж Корк, главный
                управляющий
              </UserName>
              <Video></Video>
              
            </WrapperCarousel>
          </div>
          <div className="carousel-item brend-carousel-item ">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <IMG src={client} />
              <P color="black">
                Мы были действительно впечатлены сотрудничеством с TRUE Fitness!
                Это была прекрасная возможность поработать с компанией, полной
                энергии и амбиции. Мы действительно довольны результатом. Нам
                нужен был бренд, который бы имел репутацию и способность
                поддерживать очень высокий уровень сервиса. И мы это нашли с
                TRUE Fitness.
              </P>
              <UserName>Пэтси Райан</UserName>
              <Span></Span>
              <UserName size="15px" >
                Mardyke Arena / Университетский колледж Корк, главный
                управляющий
              </UserName>
              <Video></Video>
              
            </WrapperCarousel>
          </div>
        
        </div>
        <button
          className="carousel-control-prev other-button-left"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="other-button-left-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next other-button-left"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="other-button-right-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default BrendCarousel;
