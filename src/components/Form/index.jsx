import { Wrapper,ImgDiv,H6, Input, ButtonForm,Formm } from "./style";
import {ClubText, Title,} from '../OpenClub/style'
function Form() {
  return (
    <Wrapper>
      <ImgDiv>
        <H6>TRUE FITNESS</H6>
        <Title>
          Получите эксклюзивное предложение на тренажеры TRUE FITNESS
        </Title>
        <ClubText>
          Мы будем рады проконсультировать Вас и помочь с подбором оборудования
        </ClubText>
        <Formm>
          <Input placeholder="имя" />
          <Input placeholder="+7(999)-999-99-99" />
          <Input placeholder="e-mail" />
          <ButtonForm>отправить</ButtonForm>
        </Formm>
        <H6>
          «Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и <br />
          соглашаетесь c политикой конфиденциальности»
        </H6>
      </ImgDiv>
    </Wrapper>
  );
}

export default Form;
