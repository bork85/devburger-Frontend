import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: calc(100vh + -50px);
        background-color: #cdcdcd;
        overflow-y: auto;
    }
    section {
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
        padding: 40px 20px;;
    }


`
    