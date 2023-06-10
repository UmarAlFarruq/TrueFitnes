import { IMG, Img, P, UserName, Wrapper, WrapperCarousel } from "./style";
import img from "../../assets/imgs/carousel.png";
import client from "../../assets/imgs/Client.png";
function BrendCarousel() {
  return (
    <Wrapper>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <UserName>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</UserName>
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
              <P>
                Mardyke Arena / Университетский колледж Корк, главный
                управляющий
              </P>
            </WrapperCarousel>
          </div>
          <div className="carousel-item">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <UserName>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</UserName>
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
              <P>
                Mardyke Arena / Университетский колледж Корк, главный
                управляющий
              </P>
            </WrapperCarousel>
          </div>
          <div className="carousel-item">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <UserName>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</UserName>
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
              <P>
                Mardyke Arena / Университетский колледж Корк, главный
                управляющий
              </P>
            </WrapperCarousel>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default BrendCarousel;
