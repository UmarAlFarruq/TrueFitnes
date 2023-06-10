import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px 0;
`;

export const Img = styled.img``;

export const UserName = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  color: #01aee7;
`;

export const WrapperCarousel = styled.div`
  width: 1440px;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* justify-content: space-between; */
  position: absolute;
  padding: 15px 300px;
  top: 0;
`;

export const P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ color }) => color || "#01aee7"};
`;
export const IMG = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;

`;
