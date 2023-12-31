import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  height: 704px;
  background: #fffdfd;
  padding: 38px 100px;
  display: flex;
  gap: 42px;
`;

export const Img = styled.img`
  width: 588px;
  height: 430px;
  margin-top: 90px;
  object-fit: cover;
`;

export const Form = styled.div`
  width: 609px;
  display: flex;
  flex-direction: column;
  gap: 31px;
`;
export const Input = styled.input`
  width: 609px;
  height: 47px;
  border: none;
  border-bottom: 1px solid black;
  ::placeholder {
    color: black;
    font-weight: 700;
    font-size: 20px;
  }
  :focus {
    outline: none;
  }
`;

export const H1 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 56px;
  text-transform: uppercase;

  color: #01aee7;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 17px 51px;
  gap: 10px;
  width: 209px;
  height: 63px;
  background: #01aee7;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  :active {
    opacity: 0.8;
    scale: 0.98;
  }
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;
`;

export const P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: lowercase;
  color: #000000;
`;
