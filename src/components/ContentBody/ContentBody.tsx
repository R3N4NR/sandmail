import React from "react";
import styled from 'styled-components';
import Logo from '../../assets/mailLogo.png'
import styles from './styles.module.scss'
import { TextField } from "../TextField/TextFields";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";


export const ContentBody = () => {

    const ContentBody = styled.div`
     background-color: #fff;
     color: #000;
     height:100%;
     width: 90vw;
     border: none;
     border-radius: 20px;
     justify-content: center;
     display: flex;
     flex-direction: column;
   `;

    return(
        <ContentBody>
            <form>
            <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <div>
                <Input label="Remetente" type="text"/>
                <Input label="Destinatário" type="email"/>
            </div>
            <div className={styles.textArea}>
                <TextField/>
            </div>

            <div className={styles.submitButton}>
                <Button/>
            </div>
            </form>
        </ContentBody>
    )

}