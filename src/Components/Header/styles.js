import styled from "styled-components";

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    .logo {
        width: 20%;
        text-align: left;
        img {
            width: 50px;
        }
    }

    .titulo {
        width: 80%;
        text-align: center;

        span {
            color: #fff;
            font-size: 24px;
        }
    }
`;
