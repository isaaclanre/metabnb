import styled from "styled-components";

export const StyledFooter = styled.div`
    min-height: 300px;
    padding:50px 0  0;
    color: #F1F3F9;
    background: #1D1D1E;
    display: grid;
    grid-template-columns: 38% 19% 19% 24%;

    h3 {
        margin-bottom: 7%;
        color: #FFFFFF;
    }

    p {
        margin-block: 1%;
        font-size: 14px;
        line-height: 35px;
    }

    .footer-div-one {
        margin-left: 16%;
        height: 90%;
        flex-direction: column;
    }

    .social-div {
        margin-top: 18%;
        margin-left: 1.5%;
        width: 20%;
        display: flex;
        justify-content: space-between;
    }

    .certified {
        margin-top: 20%;
        margin-left: 1.5%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin-left: 2%;
        }
    }

    .certified-mobile {
            display: none;
    }

    @media only screen and (max-width: 770px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding:30px 0  0;

        .certified {
         display: none;
        }

        .certified-mobile {
            display: flex;
            margin: auto;
            margin-top: 10%;
            width: 50%;
            justify-content: center;
            align-items: center;

            p {
                margin-left: 2%;
            }
        }

        .footer-div-one {
            margin-left: 0;
        }

        .social-div {
            margin: 10% auto;
            width: 30%;
        }

        h3 {
        margin-block: 7%;
    }
    }
`