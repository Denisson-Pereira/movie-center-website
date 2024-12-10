import { Container, ContainerInfo, Icon, Icons, Info, Title } from "./styles"
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

export const Footer = () => {
    return (
        <Container>
            <ContainerInfo>
                <Title>PROFILE</Title>
                <Info>FAQ's</Info>
                <Info>Pricing plans</Info>
                <Info>Order tracking</Info>
                <Info>Returns</Info>
            </ContainerInfo>
            <ContainerInfo>
                <Title>RECENT POSTS</Title>
                <Info>Touch of uniqueness</Info>
                <Info>Offices you won't forget</Info>
                <Info>Cicilan</Info>
            </ContainerInfo>
            <ContainerInfo>
                <Title>CUSTOMER</Title>
                <Info>Help & contact us</Info>
                <Info>Return</Info>
                <Info>Online stores</Info>
                <Info>Terms $ cordition</Info>
            </ContainerInfo>
            <ContainerInfo>
                <Title>CONTACT</Title>
                <Icons>
                    <Icon>
                        <FaInstagram />
                    </Icon>
                    <Icon>
                        <FaTwitter />
                    </Icon>
                    <Icon>
                        <AiFillFacebook />
                    </Icon>
                </Icons>
            </ContainerInfo>
        </Container>
    )
}
