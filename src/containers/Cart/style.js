import styled from "styled-components";
import bgTitle from "../../assets/Texture.png"
import bgContainer from "../../assets/Padrao.png"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 1024px;
    background-image: linear-gradient(rgba(255,255,255,0.65),rgba(255,255,255,0.25)),url('${bgContainer}');
    background-size: auto;
    background-position: left;
`
export const Banner = styled.div`
    background-image: url('${bgTitle}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    width: 100vw;

    img {
        height: 180px;
        padding-top: 20px;
    }
`
export const Title = styled.div`
    color: #61A120;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 12px;
    height: 50px;
    position: relative;

    &::after {
        content: "";    
        position: absolute;
        bottom: 0;        
        left: calc(50% + -28px);
        width: 56px;
        height: 4px;
        background-color: #61A120;
        
        //margin-bottom: 50px;        
    }
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 28%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    gap: 20px;
    margin: 0 auto;
    height: 100%;
`