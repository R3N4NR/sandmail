import React, { FormEventHandler, useState } from "react";
import styled from 'styled-components';
// import Logo from '../../assets/mailLogo.png'
import styles from './styles.module.scss'
import { TextField } from "../TextField/TextFields";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Bounce, ToastContainer, toast } from "react-toastify";
import emailJS from '@emailjs/browser' 
import 'react-toastify/dist/ReactToastify.css';

// Define the styled component outside of the function component
const ContentBodyStyled = styled.div`
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

export const ContentBody = () => {
    const [remetente, setRemetente] = useState('');
    const [nome, setNome] = useState('')
    const [conteudo, setConteudo] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const isAnyFieldEmpty = !nome || !remetente || !conteudo;

        if(isAnyFieldEmpty){
            console.log(isAnyFieldEmpty)
            toast('Preencha todos os campos!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        const emailContent = {
            from_name: nome,
            message: conteudo,
            from_email: remetente
        };
        emailJS.send("service_bcya36s", "template_69nrr6p", emailContent, "qz83M8WKrio0CEqUP")
        .then((response) => 
        {
            toast('Email enviado com sucesso');
            console.log(response.status);
            setNome('');
            setConteudo('');
            setRemetente('');
        })
        .catch((err: Error) => {
            toast('Houve um erro no envio do e-mail');
            console.log(err);
        });
    }

    return(
        <ContentBodyStyled>
            {/* <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div> */}
            <form className="form" onSubmit={handleSubmit} >
                <ToastContainer />
                <div>
                    <Input label="Nome" type="text" value={nome} handleChange={(e) => setNome(e.target.value)}/>
                    <Input label="Remetente" type="text" value={remetente} handleChange={(e) => setRemetente(e.target.value)}/>
                </div>
                <div className={styles.textArea}>
                    <TextField value={conteudo} handleChange={(e) => setConteudo(e.target.value)}/>
                </div>

                <div className={styles.submitButton}>
                    <Button type="submit"/>
                </div>
            </form>
        </ContentBodyStyled>
    )
}
