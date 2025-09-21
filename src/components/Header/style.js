import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: #1f1f1f;
    width: 100%;
    height: 72px;
    padding: 0 56px;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width:  100%;
    max-width: 1280px;
    margin: 0 auto;

`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div{        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        hr {
            height: 24px;
            border: 1px solid #625e5e;
        }
    }
`
export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
    //text-decoration: ${(props) => (props.$isActive ? 'underline' : 'none')};
    text-decoration: none;
    font-size: 16px;
    transition: color 500ms;
    transition: font-size 500ms;
    font-weight: bold;
    border-bottom: ${(props) => (props.$isActive ? '2px solid #9758a6' : 'none')};

    &:hover {
        color: #9758a6;
        font-size: 20px;
    }
`
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;

    p{
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span {
            line-height: 90%;
            color: #9758a6;
            font-weight: bold;
        }
    }

`
export const Logout = styled.button`
    color: red;
    text-decoration: none;
    font-weight: bold;
    line-height: 90%;
    background-color: transparent;
    border: none;
    transition: background-color 200ms;
    font-size: 12px;
    transition: font-size 500ms;
    padding: 2px 15px;
    border-radius: 15px;

    &:hover{
        background: rgba(100,100,100,0.5);
        font-size: 17px;
    }
`
export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-size: 16px;
`

