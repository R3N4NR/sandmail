import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Estendendo ButtonHTMLAttributes para obter acesso às propriedades padrão dos botões HTML
}

// Define StyledButton outside of the Button component
const StyledButton = styled.button`
    width: 70%;
    padding: 10px;
    border: var(--input-border);
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    &:hover {
        border: none;
        background-color: rgb(255, 255, 0);
    }
`;

export const Button = ({ type, ...rest }: ButtonProps) => {
    return <StyledButton type={type} {...rest}>Enviar</StyledButton>;
};
