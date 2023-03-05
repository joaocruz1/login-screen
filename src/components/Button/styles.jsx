import styled from "styled-components";

export const CustomButton = styled.button`
    color: #FFF;
    font-size: 20px;
    border: 30px;
    background-color: #729;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    transition:0.4s;

    
    

    &:hover {
        ${({ disabled }) => disabled && 'border:2px solid red; color:red'};
        scale:1.03;
    }
`
