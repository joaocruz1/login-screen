import styled from "styled-components";

export const CustomButton = styled.button`
    color: #FFF;
    font-size: 20px;
    border: 30px;
    background-color: #ff9036;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    transition:0.4s;

    &:hover {
        background-color: #ff9150;
        scale:1.03;
    }
`
