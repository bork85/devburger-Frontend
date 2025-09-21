import styled from "styled-components";
import BannerCategory from "../../assets/BannerCategory.png"
import Padrao from '../../assets/Padrao.png'

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('${BannerCategory}');
    background-size: cover;
    background-color: #0f0f0f;
    //opacity: 0.85;
    background-position: center;
    height: 400px;
    width: 100%;
    position: relative;
    
    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        color: #fff;
        position: absolute;
        right: 25%;
        top: 15%;
        line-height: 66px;
    }
    span {
        color: #fff;
        //font-family: "Road Rage", sans-serif;
        font-size: 20px;
        line-height: 20px;
        position: absolute;
        top: 200px;
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 91.5vh;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    align-content: center;
    background-image: linear-gradient(rgba(255,255,255,0.65),rgba(255,255,255,0.25)),url('${Padrao}');
    background-size: auto;
    background-position: left;

`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    padding: 40px;
    gap: 50px;
    margin-top: 50px;    
    max-width: 1500px;

    @media screen and (max-width: 1400px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1040px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 680px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 0px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CategoryMenu = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;

    @media screen and (max-width: 900px){
        gap: 15px;
    }
    
`

export const CategoryButton = styled.button`
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: #696969;
    background: none;
    border-radius: 0;
    cursor: pointer;

    ${(props) => props.$isActive && `
        color: #9758A6;
        font-size: 28px;
        border-bottom: 3px solid #9758A6;
    `
    }

    &:hover {
        color: #6f357c;
        font-size: 28px;
    }

    @media screen and (max-width: 900px){
        font-size: 18px;
        ${(props) => props.$isActive && `
            font-size: 20px;
            border-bottom: 3px solid #9758A6;
        `}
        &:hover {
            color: #6f357c;
            font-size: 20px;
        }
    }
`