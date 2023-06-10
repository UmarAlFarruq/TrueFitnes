import Carousel from "../Corausel";
import {
  BgFon,
  ContainerText,
  H1,
  Video,
  VideoContainer,
  Wrapper,
} from "./style";
import video from "../../assets/videos/Salom Tashkent.mp4";
import WeOffer from "../WeOffer";
import Catalog from "../Catalog";
import News from "../News";
import Club from "../3dClub";
import AboutTrue from "../AboutTrue";
import HomeForm from "../HomeForm";
import BestFeatures from "../BestFeatures";
import img from "../../assets/imgs/aboutTrue.png";
import OtherProject from "../OtherProject";
// import { useTranslation } from "react-i18next";


function Home() {
  // const {t} = useTranslation();
  return (
    <Wrapper>
      <VideoContainer backgroundClip={video}>
        <Video
          autoPlay
          loop
          src={video}
          muted
          playsInline
          controls={false}
        ></Video>
        <BgFon></BgFon>
        <H1 className="title">
          TRUE FITNESS - ПРЕМИУМ <br />
          ТРЕНАЖЕРЫ ИЗ США
        </H1>
      </VideoContainer>
      <ContainerText>
        <p className="title" style={{ color: "white" }}>
          TRUE - ведущий мировой производитель
        </p>
        <p className="title" style={{ color: "white" }}>
          премиального фитнес оборудования
        </p>
      </ContainerText>
      <Carousel />
      <BestFeatures />
      <WeOffer />
      <Catalog />
      <News />
      <Club />
      <AboutTrue img={img} button={true} />
      <HomeForm />
      <OtherProject />
    </Wrapper>
  );
}

export default Home;
