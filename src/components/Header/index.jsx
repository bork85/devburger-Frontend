import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content } from "./style";
import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser} from '../../hooks/UserContext'

export function Header() {
    const navigate = useNavigate();
    const {logout, userInfo} = useUser();
    const pathName = useResolvedPath().pathname;
    
     function logoutUser(){
        logout();   
        navigate('/login');   
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive= {pathName === '/'}>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink to="/cardapio"  $isActive= {pathName === '/cardapio'}>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircleIcon color="#fff" size={30} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p> 
                            <Logout 
                                onClick={logoutUser}>Sair</Logout>
                        </div>
                        
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartIcon color="#fff" size={30} />
                        <HeaderLink to="/carrinho">Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}