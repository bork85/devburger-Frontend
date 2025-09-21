import styled from "styled-components";

export const Container = styled.div`
    #headTable {
        font-weight: bold;
        color: #1f1f1f
    }
`

export const ImageProduct = styled.img`
    height: 80px;
    border-radius: 16px;
    padding: 12px;
`

export const EditButton = styled.button`
    border: none;
    background-color: #cfcfcf;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #9758A6;

        svg {
            fill: #fff;
        }
    }
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #9758A6;    
    padding-bottom: 15px; 
    height: 50px; 
    position: relative; 
    margin-bottom: 40px;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

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
