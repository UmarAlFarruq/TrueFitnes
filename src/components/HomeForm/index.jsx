import { useTranslation } from "react-i18next";
import { Button, Card, Input, P, Title, Wrapper } from "./style";

function HomeForm() {

  const {t} = useTranslation()

  return (
    <Wrapper>
      <Card>
        <Title> {t("home.home_form.title")} </Title>
        <P> {t("home.home_form.text_1")} </P>
        <Input placeholder={t("input_placeholder.input_name")} />
        <Input placeholder={t("input_placeholder.input_email")} />
        <Input placeholder="+7(999)999-99-99" />
        <Button> {t("home.home_form.button")}</Button>
        <P> {t("home.home_form.text")} </P>
      </Card>
    </Wrapper>
  );
}

export default HomeForm;
