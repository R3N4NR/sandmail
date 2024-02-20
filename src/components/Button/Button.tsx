import styled from "styled-components"


export const Button = () => {

    const Button = styled.button`
    width: 70%;
    padding: 10px;
    border: var(--input-border);
    border-radius: 20px;
    cursor: pointer;
    `;
    return (
        <Button>Enviar</Button>
    )
}