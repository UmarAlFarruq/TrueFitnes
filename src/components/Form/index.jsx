import { Wrapper, ImgDiv, H6, Input, ButtonForm, Formm } from "./style";
import { ClubText, Title } from "../OpenClub/style";
import { useTranslation } from "react-i18next";
function Form() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ImgDiv>
        <ClubText>TRUE FITNESS</ClubText>
        <Title>
        {t("form.title")}
          <span style={{ color: "#01AEE7" }}>{t("form.title2")}</span>
          {t("form.title3")}
          <span style={{ color: "#01AEE7" }}>{t("form.title4")}</span>
        </Title>
        <ClubText>{t("form.yellow_text")}</ClubText>
        <Formm>
          <Input placeholder={t("input_placeholder.input_name")} />
          <Input placeholder="+7(999)-999-99-99" />
          <Input placeholder={t("input_placeholder.input_email")} />
          <ButtonForm>{t("form.button")}</ButtonForm>
        </Formm>
        <H6>{t("form.text")}</H6>
      </ImgDiv>
    </Wrapper>
  );
}

export default Form;
