import styled from "styled-components"
import styles from './styles.module.scss'
export const TextField = () =>{

    const TextField = styled.textarea`
    height: 40vh;
    width: 70%;
    border-radius: 20px;
    border: var(--input-border);
    resize:none;
    padding-left: 40px;
    padding-top: 40px;
    `
    const Label = styled.label`
    width: 70%;
    border-radius: 20px;
    `;
    return(
        <div className={styles.inputBox}>
        <Label>Enviar</Label>
        <TextField/>
        </div>
    )
}