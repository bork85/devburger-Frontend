import styled from "styled-components";
import BgLogo from '../../assets/bg.png'
import Padrao from '../../assets/Padrao.png'
import { Link as LinkReact } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const LeftContainer = styled.div`
    background-image: url('${BgLogo}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    height: 100vh;
    width: 100vw;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;        
    }
`
export const RightContainer = styled.div`
    background-image: url('${Padrao}');
    background-size: cover;
    background-position: center;
    background-color: #1e1e1e;
    opacity: 0.8;

    height: 100vh;
    width: 100vw;
    max-width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {        
        font-size: 14px;
        color: #fff;
        margin-top: 10px;
    }
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column; 

    label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    }
    p {
    font-size: 14px !important;
    color: #da25f1ff;
    font-weight: bold;
    height: 10px;
    line-height: 80%;
    text-decoration: solid underline #da25f1ff 2px;
    //text-rendering: optimizeLegibility;
    //text-decoration-color: blue;
    }
`

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;

    span{
        color: #9758A6;
        font-family: "Road Rage", sans-serif;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 16px;
    width: 100%;
    max-width: 400px;

    input {
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 5px;
        padding: 0 16px;
        
    
    }
    label {
        font-size: 18px;
        font-weight: bold;
    }
    `

export const Link = styled.a`
    font-size: 14px;
    color: #fff;
    text-align: right;
    margin-top: 5px;
    text-decoration: none;

    span{
        text-decoration: underline;
    }
`

export const LinkR = styled(LinkReact)`
    color: #fff;
    text-decoration: none;
`