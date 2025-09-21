import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;   
    border: none;

    button {
        background-color: #9758A6;
        color: #fff;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        border: none;

        &:hover {
            background-color: #6f357c;
        }
    }

    p {
        transition: all 500ms;
        width: 30%;
        text-align: center;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    justify-content: space-between;
    background-color: #fff;
    
    border-radius: 20px;
    min-height: 350px;
`
export const PlusProductsLink = styled(Link)`
    color: #9758A6;
    text-decoration: none;
    font-weight: 500;
    transition: all 500ms;
    align-items: end;

    &:hover {
        color: #6f357c;
    }
`