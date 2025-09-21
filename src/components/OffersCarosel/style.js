import styled from "styled-components";

export const ContainerItems = styled.div`
    background: url('${props => props.imageurl}');
    border-radius: 20px;
    height: 250px;
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

export const Container = styled.div`
    overflow: hidden;
    cursor: grab;

    .carousel-item{
        font-family: "Poppins", sans-serif;
        padding-left: 30px;
        margin: 20px 0;
        &:hover{
            opacity: 0.8;
        }
    }
    .react-multi-carousel-list {
        overflow: visible;
        overflow-y: visible;
        padding-top: 25px;
    }
    .react-multiple-carousel__arrow--right, 
    .react-multiple-carousel__arrow--left {
        top: 25%;
    }
`

export const Title = styled.h2`
    color: #61A120;
    font-size: 32px;
    font-weight: bold;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
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
        background-color: #61A120;
    }
`