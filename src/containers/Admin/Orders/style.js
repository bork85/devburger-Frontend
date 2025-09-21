import Select from "react-select";
import styled from "styled-components";

export const ProductImage = styled.img`
    width: 80px;
`
export const SelectStatus = styled(Select)`
    width: 240px; 
`
export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px;
    gap: 50px;
`

export const FilterOptions = styled.button`
    cursor: pointer;
    background: none;
    color: ${(props)=> props.$isActiveFilter ? '#9758A6' : '#1f1f1f' };
    border-bottom: ${(props)=> props.$isActiveFilter ? '2px solid #9758A6' : 'none' };
    font-size: 18px;
    line-height: 20px;
    padding-bottom: 5px;
`