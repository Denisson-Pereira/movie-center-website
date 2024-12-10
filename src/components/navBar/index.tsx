import { Container, Icon, Image } from "./styles"
import logo from '../../assets/images/logo.png'
import { MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BotaoTrocarTema } from "../botaoTrocarTema";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image>
        <img src={logo} alt="" />
      </Image>
      <Icon>
        <BotaoTrocarTema />
        <MdPerson onClick={() => navigate('perfil')} />
      </Icon>
    </Container>
  )
}
