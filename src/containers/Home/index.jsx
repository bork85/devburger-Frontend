import { CategoriesCarousel, OffersCarosel } from "../../components/";
import { Banner, Container, Content } from "./style.js"
//import { useUser } from '../../hooks/UserContext.jsx'

export function Home() {
    //console.log(useUser());
    return (
        <main>
            <Container>
                <Banner>
                    <h1>Bem vindo ao <span>DevBurger!</span></h1>
                </Banner>
                <Content>
                    <CategoriesCarousel />
                    <OffersCarosel />
                </Content>
            </Container>
        </main>
    );
}