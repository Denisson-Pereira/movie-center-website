import { Container, Icon, Image } from "./styles"
import logo from '../../assets/images/logo.png'
import { MdPerson } from "react-icons/md";

export const NavBar = () => {
  return (
    <Container>
      <Image>
        <img src={logo} alt="" />
      </Image>
      <Icon>
        <MdPerson />
      </Icon>
    </Container>
  )
}
