import styled from "styled-components";
import { ReactComponent as naushnik } from "../../assets/icons/naushniks.svg";
import { ReactComponent as youtube } from "../../assets/icons/videovou.svg";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as document } from "../../assets/icons/docmentation.svg";
import { ReactComponent as tanga } from "../../assets/icons/tanga.svg";
import { ReactComponent as home } from "../../assets/icons/home.svg";
import { ReactComponent as burchak } from "../../assets/icons/6burchak.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as settings } from "../../assets/icons/Settings.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
export const Wrapper = styled.div`
  width: 1440px;
  height: 1460px;
  background: #eeeeee;
  margin: auto;
  padding: 112px 0 0 100px;
  display: flex;
  gap: 73px;
`;

export const TextCotainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 767px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 89px;
  gap: 30px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 347px;
  height: 195px;
  justify-content: end;
  gap: 20px;
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
`;
// <--------- Icons  -------------->
Icon.Naushnik = styled(naushnik)``;
Icon.Doc = styled(document)``;
Icon.You = styled(youtube)``;
Icon.Location = styled(location)``;
Icon.Tanga = styled(tanga)``;
Icon.Burchak = styled(burchak)``;
Icon.Car = styled(car)``;
Icon.Setting = styled(settings)``;
Icon.User = styled(user)``;
Icon.Home = styled(home)``;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #000000;
`;
export const P = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: #000000;
`;

export const Img = styled.img`
  height: 1348px;
`;
