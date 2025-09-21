import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerItems = styled.div`
    background: url('${props => props.$imageUrl}');
    border-radius: 20px;
    height: 350px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: end;
    padding: 10px 20px;
    p{
        font-size: 22.5px;
        font-weight: bold;
        color: #fff;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 20px;
        border-radius: 30px;

    }
`
export const CategoryButton = styled(Link)`
        font-size: 22.5px;
        font-weight: bold;
        color: #fff;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 20px;
        border-radius: 30px;
        text-decoration: none;
        border: none;
        &:hover {
            background-color: #9758A6;
            opacity: 0.75;
            color: #000;
            border: 2px solid #fff
        }
`
export const Container = styled.div`
    .carousel-item{
        padding-left: 30px;
        margin: 20px 0;
        cursor: grab;
        &:hover{
            opacity: 0.8;
        }
    }
    .react-multiple-carousel__arrow--right, 
    .react-multiple-carousel__arrow--left {
        top: 25%;
    }
`

export const Title = styled.h2`
    color: #9758A6;
    font-size: 32px;
    font-weight: bold;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 15px;   
    height: 50px; 
    position: relative;
    
    
    &::after {
        content: "";    
        position: absolute;
        bottom: 0;        
        left: calc(50% + -28px);
        width: 56px;
        height: 4px;
        background-color: #9758A6;
    }
`