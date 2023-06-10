import { Button, Form, H1, Img, Input, Wrapper } from "./style";
import img from '../../assets/imgs/club.png'

function Club() {
  return (
    <Wrapper>
      <Img  src={img} />
      <Form>
        <H1>Получите бесплатный 3D проект вашего клуба</H1>
        <Input placeholder="имя" />
        <Input placeholder="email" />
        <Input placeholder="+ 7 (999) 999-99-99" />
        <Button>заказать</Button>
      </Form>
    </Wrapper>
  );
}

export default Club;
