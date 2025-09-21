import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;    
    border-radius: 20px;    
`
export const Body = styled.tbody`
`
export const Header = styled.thead`
border-radius: 20px;
`
export const Tr = styled.tr`
    border-bottom: 1px dotted #cdcdcd;

    &:last-child {        
        border-bottom: none;
    }
`
export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: #fff;
    background-color: #484848;
    border-bottom: 1px solid #484848;
    
    &:last-child {
        border-top-right-radius: 20px;
    }

    &:first-child {
        border-top-left-radius: 20px;
    }
`
export const Td = styled.td`
    padding: 16px;
    color: #484848;
    font-weight: 500;
    line-height: 115%;

    img {
        max-height: 100px;
    }
    button {
        background-color: transparent;

        &:hover {
            background-color: transparent;
        }
    }
    span {
        font-weight: bold;
    }
`
