import styled from "styled-components"
import styles from './styles.module.scss'
interface InputProps{
    type: string;
    label?: string;
    value?: string;
    handleChange?: (e:Event) => void 
}
export const Input = ({label,type,handleChange,value}:InputProps) => {

    const Input = styled.input`
    height:30px;
    width: 70%;
    border-radius: 20px;
    border: var(--input-border);
    padding-left: 40px;
    `;
    const Label = styled.label`
    width: 70%;
    border-radius: 20px;
    `;
    return (
        <div className={styles.inputBox}>
        <Label>{label}</Label>
        <Input type={type}/>
        </div>
    )
}