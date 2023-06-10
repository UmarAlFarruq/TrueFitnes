import {
  IMG,
  Img,
  UserName,
  Wrapper,
  WrapperCarousel,
  WrapperIMG,
} from "./style";
import img from "../../assets/imgs/carousel.png";
import brend1 from "../../assets/imgs/hamkorlar/1.png";
import brend2 from "../../assets/imgs/hamkorlar/2.png";
import brend3 from "../../assets/imgs/hamkorlar/3.png";
import brend4 from "../../assets/imgs/hamkorlar/4.png";
import brend5 from "../../assets/imgs/hamkorlar/5.png";
import brend6 from "../../assets/imgs/hamkorlar/6.png";
import brend7 from "../../assets/imgs/hamkorlar/7.jpg";
import brend8 from "../../assets/imgs/hamkorlar/8.png";
import brend9 from "../../assets/imgs/hamkorlar/9.png";
function OtherProject() {
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
              <WrapperIMG>
                <IMG width={"400px"} src={brend1} />
                <IMG src={brend2} />
                <IMG src={brend3} />
              </WrapperIMG>
            </WrapperCarousel>
          </div>
          <div className="carousel-item">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <UserName>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</UserName>
              <WrapperIMG>
                <IMG src={brend4} />
                <IMG src={brend5} />
                <IMG width={"350px"} src={brend6} />
              </WrapperIMG>
            </WrapperCarousel>
          </div>
          <div className="carousel-item">
            <Img src={img} className="d-block w-100" alt="..." />
            <WrapperCarousel>
              <UserName>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</UserName>
              <WrapperIMG>
                <IMG src={brend7} />
                <IMG src={brend8} />
                <IMG src={brend9} />
              </WrapperIMG>
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

export default OtherProject;