import styled from "styled-components";
import img from "../../assets/imgs/formbg.png";



export const Wrapper = styled.div``;

export const ImgDiv = styled.div`
  width: 1440px;
  height: 717px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 93px 100px;
  text-align: center;
  align-items: center;
  background-image: url(${img});
`;

export const H6 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Formm = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 15px;
  gap: 10px;
  width: 295px;
  height: 60px;
  background: #d9d9d9;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-transform: uppercase;
    color: #000000;
  }
`;
export const ButtonForm = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 122px;
  gap: 10px;
  width: 295px;
  height: 60px;
  background: #01aee7;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
`;
