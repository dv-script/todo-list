import * as S from "./styles";
import Logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <S.Container>
      <S.Logo src={Logo} />
    </S.Container>
  );
}
