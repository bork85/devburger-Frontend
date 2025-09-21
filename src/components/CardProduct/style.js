import styled from "styled-components";

export const CardImage = styled.img`
    position: relative;
    width: 100%;
    height: 150px;
    top: -70px;
    object-fit: contain;

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    min-width: 320px;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    gap: 20px;
    box-shadow: 0px 0px 15px 5px #575757;

    div {
        position: relative;
        bottom: 40px;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        gap: 20px;
    }

    p {
        font-style: normal;
        font-family: "Poppins", sans-serif;
        font-size: 22px;
        font-weight: 600;
        color: #FF8C05;        
        align-content: start;
    }
    strong {
        font-size: 24px;
        font-weight: bold;
        color: #363636;
        font-family: "Poppins", sans-serif;        
    }

`