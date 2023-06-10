import styled from "styled-components";
import img from "../../assets/imgs/homeForm.png";

export const Wrapper = styled.div`
  width: 1440px;
  height: 805px;
  background-image: url(${img});
  padding: 126px 100px;
`;

export const Card = styled.div`
  width: 505px;
  height: 552px;
  background: white;
  padding: 35px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const Title = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #000000;
`;
export const Input = styled.input`
  width: 450px;
  height: 46px;
  background: #f0f0f0;
  border: none;
  padding-left: 27px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    color: #afa3a3;
  }
`;
export const Button = styled.button`
  width: 450px;
  height: 46px;
  background: #01aee7;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  :active{
    opacity: 0.8;
    scale: 0.98;
  }
`;
export const P = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-transform: capitalize;
  color: #000000;
`;
