import styled from 'styled-components'

export const StyledHeader = styled.div`
    margin: 0 auto;
    padding: 1%;
    padding-top: 2.5%;
    display: grid;
    grid-template-columns: 20% 65% 15%;
    width: 80%;
    position: relative;

    nav {
        width: 70%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    a {
        text-decoration: none;
        margin: 2px;
        color: #434343;
    }

    a:hover {
        font-weight:bold;
    }

    button {
        font-family: "Red Rose", "sans-serif";
        background:linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
        border-radius: 10px;
        border: none;
        outline: none;
        padding: 1% 2%;
        color: #fff;
        cursor: pointer;
        position: absolute;
        bottom: 9%;
        right: 1%;
    }

    .hamburger {
        display: none;
    }

    @media only screen and (max-width: 770px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 97%;
        margin-bottom: 7%;

        nav, .button {
            display: none;
        }

        .hamburger {
            display: block;
            height: 50px;
            width: 50px;
            margin-right: 3%;
        }

        .ham-menu {
            position: absolute;
            right: 3%;
            top: 80%;
            z-index: 99;
            margin: 10px 0;
            padding: 0;
            border: 1px solid grey;
            background: #fff;
            width: 150px;
            animation : 2s fadeIn;
        }

        button {
            position: relative;
            color: #fff;
        }

        .ham-menu ul {
            list-style-type: none;
        }

        .ham-menu li {
            padding: 7%;
        }

        .button-mobile {
            background: #A02279;
        }
    }

`