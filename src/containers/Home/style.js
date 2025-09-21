import styled from "styled-components";
//import BgLogo from '../../assets/bg.png'
import bannerHome from '../../assets/banner-home.svg'
import Padrao from '../../assets/Padrao.png'

export const Banner = styled.div`
    background-image: url('${bannerHome}');
    background-size: cover;
    opacity: 0.85;
    background-position: center;
    height: 400px;
    
    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        color: #fff;
        position: absolute;
        right: 5%;
        top: 10%;
    }
    span {
        color: #9758A6;
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
    }
`
export const Container = styled.section`
    padding: 0;
    display: flex;
    flex-direction: column;
        
`
export const Content = styled.div`
    background-image: linear-gradient(rgba(255,255,255,0.65),rgba(255,255,255,0.25)),url('${Padrao}');
    background-size: auto;
    background-position: left;
    min-height: 980px;
    //height: 1000px;

`