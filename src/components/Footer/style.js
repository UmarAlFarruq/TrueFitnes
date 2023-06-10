import styled from "styled-components";
import { ReactComponent as send } from "../../assets/icons/send.svg";
import { ReactComponent as ins } from "../../assets/icons/instagram.svg";
import { ReactComponent as youtube } from "../../assets/icons/bi_youtube.svg";
import { ReactComponent as facebook } from "../../assets/icons/ri_facebook-fill.svg";

export const Wrapper = styled.div`
  display: flex;
  background-color: #01aee7;
  padding: 44px 100px;
  height: 383px;
  color: #ffffff;
  justify-content: space-between;
  width: 1440px;
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 23%;
`;
export const Texts = styled.div``;


export const P = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  :hover {
    transition: 500ms;
    cursor: pointer;
    border-bottom: 0.5px solid white;
  }
`;
export const SentEmail = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 17px 10px 15px;
  gap: 10px;
  width: 175px;
  border: none;
  height: 44px;
  background: #ffffff;
  ::placeholder {
    color: black;
    font-weight: 700;
  }
  :focus {
    outline: none;
  }
`;
export const Button = styled.div`
  width: 59px;
  height: 44px;
  background: #fff500;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    scale: 0.98;
    opacity: 0.8;
  }
`;

export const Send = styled(send)`
  width: 26px;
  height: 26px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  align-items: end;
`;

export const Instogram = styled(ins)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
export const Facebook = styled(facebook)`
  width: 24px;
  height: 26px;
  cursor: pointer;
`;
export const Youtube = styled(youtube)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;


