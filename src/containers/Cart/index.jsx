import { Banner, Container, Content, Title } from "./style";
import Logo from '../../assets/Logo.png'
import { CartItems, CartResume } from "../../components";

export function Cart() {

    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo-devburger" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems></CartItems>
                <CartResume></CartResume>
            </Content>
        </Container>
    )
}