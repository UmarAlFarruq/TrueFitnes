import { Button, Container, H1, IMG, Span, Text, Wrapper } from "./style";

function AboutTrue({ img, button }) {
  return (
    <Wrapper>
      <IMG src={img} />
      <Container>
        <H1>О компании TRUE</H1>
        <Span></Span>
        <Text>
          С момента основания компании в 1972 г. и на протяжении всего времени
          существования, TRUE придерживается главных принципов: высокого
          качество продукции и обеспечение первоклассного сервиса, это позволяет
          бренду удерживать лидирующие позиции и выстраивать с покупателями
          долгосрочные и доверительные отношения.
        </Text>
        {button ? <Button>подробнее</Button> : null}
      </Container>
    </Wrapper>
  );
}

export default AboutTrue;
