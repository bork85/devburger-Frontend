import styled from "styled-components";

export const AllContainer =styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    //padding: 0 20px;
    gap: 20px;
    color: #484848;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: space-between;
    height: calc(100% + -52px);

    .Container-top {
        color: #828282;
        display: grid;
        grid-gap: 20px 20%;
        grid-template-areas:
        'Title Title'
        'Total-items Total-items-price'
        'Tax-delivery Tax-delivery-price';
    }
    .Title {
        grid-area: Title;
        background-color: #484848;
        color: #fff;
        margin-bottom: 20px;
        font-size: 20px;
        text-align: center;
        padding: 13px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
    .Total-items {
        grid-area: Total-items;
        padding-left: 20px;
    }
    .Total-items-price {
        grid-area: Total-items-price;
        padding-right: 20px;
    }
    .Tax-delivery {
        grid-area: Tax-delivery;
        padding-left: 20px;
    }
    .Tax-delivery-price {
        grid-area: Tax-delivery-price;
        padding-right: 20px;
    }
    .Container-bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        
        * {
            font-weight: bold;
        }
    }
`
