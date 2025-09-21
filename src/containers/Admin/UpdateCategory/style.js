import styled from "styled-components";
import ReactSelect from 'react-select'
import Button from "../../../components/Button";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(90vh + -54px);
`

export const Form = styled.form`
    border-radius: 20px;
    background-color: #1f1f1f;
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    border: none;
    padding: 0 12px;
`

export const Label = styled.label`
    color: #fff;
    font-size: 14px;

`

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dotted #fff;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    color: #fff;
    margin: 20px 0;

    > svg {
        height: 25px;
        width: 25px;
        fill: #fff;
        margin-right: 14px;
    }

    > input {
        display: none;
    }
`
export const SubmitButton = styled(Button)`
    margin-top: 40px;
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
export const ErrorMessage = styled.span`
    color: darkred;
    font-size: 14px;
    line-height: 80px;
    font-weight: 600;
`