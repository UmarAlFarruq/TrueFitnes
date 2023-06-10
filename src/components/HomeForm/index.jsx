import { Button, Card, Input, P, Title, Wrapper } from "./style";

function HomeForm() {
  return (
    <Wrapper>
      <Card>
        <Title>
          Получите эксклюзивное предложение на тренажеры TRUE FITNESS
        </Title>
        <P>
          Мы будем рады проконсультировать Вас и помочь с подбором <br /> оборудования
        </P>
        <Input placeholder="имя" />
        <Input placeholder="EMail" />
        <Input placeholder="+7(999)999-99-99" />
        <Button>ОТПРАВИТЬ</Button>
        <P>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности{" "}
        </P>
      </Card>
    </Wrapper>
  );
}

export default HomeForm;
