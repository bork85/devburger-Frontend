import { Container, NavFooter, NavLinkContainer, NavLinks } from "./style";
import Logo from '../../assets/Logo.png'
import { navLinks } from "./navLinks";
import { SignOutIcon } from "@phosphor-icons/react";
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
    const {logout} = useUser();
    const {pathname} = useResolvedPath();
    return (
        <Container>
            <img src={Logo} alt="Logo-Devburger" />
            <NavLinkContainer>
                {navLinks.map((menuLinks) => (   
                    <NavLinks 
                        key={menuLinks.id} 
                        to={menuLinks.path}
                        $isActive={pathname === menuLinks.path}>
                        {menuLinks.icon}
                        <span>{menuLinks.label}</span>
                    </NavLinks>
                ))}
            </NavLinkContainer>
            <NavFooter>
                <NavLinks to='/login' onClick={logout}>
                    <SignOutIcon />
                    <span>Sair</span>
                </NavLinks>
            </NavFooter>
        </Container>
    )
}