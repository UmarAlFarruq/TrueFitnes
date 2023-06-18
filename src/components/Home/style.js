import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  margin-top: 30px;
`;
export const VideoContainer = styled.div`
  width: 1440px;
  height: 672px;
  position: relative;
`;
export const Video = styled.video`
  width: 1440px;
  height: 672px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BgFon = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`;

export const H1 = styled.div`
  color: White;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: 700;
  line-height: 61px;
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContainerText = styled.div`
  width: 1440px;
  height: 266px;
  background: #01aee7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  text-align: center;
  line-height: 180px;
  p{
    line-height: 60px;
  }
`;

