import styled from "styled-components";
import styles from './styles.module.scss';
import { ChangeEvent } from "react";

interface TextAreaProps {
    handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

// Define styled components outside of the TextField component
const TextFieldStyled = styled.textarea`
    height: 40vh;
    width: 70%;
    border-radius: 20px;
    border: var(--input-border);
    resize: none;
    padding-left: 40px;
    padding-top: 40px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;

const LabelStyled = styled.label`
    width: 70%;
    border-radius: 20px;
`;

export const TextField = ({ handleChange, value }: TextAreaProps) => {
    return (
        <div className={styles.inputBox}>
            <LabelStyled>Enviar</LabelStyled>
            <TextFieldStyled value={value} onChange={handleChange} />
        </div>
    );
}
