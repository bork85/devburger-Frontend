import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1f1f1f;

    img {
        width: 60%;
        margin: 40px 0;
    }
`

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: #fff;
    transition: all 500ms;
    background-color: ${ props => props.$isActive ? '#9758A6' : 'transparent'};
    
    &:hover {
        background-color: #9758A6;
    }

    span {
        font-size: 18px;
    }
`

export const NavFooter = styled.footer`
    margin-top: auto;
    width: 100%;
`
