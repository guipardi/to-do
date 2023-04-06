import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from "../../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent src={logoImg} />
    </HeaderContainer>
  )
}