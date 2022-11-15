import styled from "styled-components";

export const StyledCard = styled.div`
    width: 242px;
    height: 322px;
    padding: 10px;
    background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
    border: 1px solid #D7D7D7;
    margin: 1% auto;
    display: grid;
    border-radius: 15px;
    grid-template-rows: 82% 6% 6% 6%;

    div {
        display: flex;
        justify-content: space-between;
    }

    .heart {
        position: absolute;
        top : 4%;
        right: 4%;
    }

    p {
        font-size: 11px;
        line-height: 13px;
        color: #434343;
    }

    .house-avi {
        display: block;
        position: relative;
    }

    #house-img {
        width: 100%;
    }

    #stars {
        width: 50%;
    }
`