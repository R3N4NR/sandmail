import styled from "styled-components"
import styles from './styles.module.scss'
import { ChangeEvent } from "react";

interface InputProps {
    type: string;
    label?: string;
    value?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Define styled components outside of the Input component
const InputStyled = styled.input`
    height: 30px;
    width: 70%;
    border-radius: 20px;
    border: var(--input-border);
    padding-left: 40px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;

const LabelStyled = styled.label`
    width: 70%;
    border-radius: 20px;
`;

export const Input = ({ label, type, handleChange, value }: InputProps) => {
    return (
        <div className={styles.inputBox}>
            <LabelStyled>{label}</LabelStyled>
            <InputStyled onChange={handleChange} type={type} value={value} />
        </div>
    )
}
