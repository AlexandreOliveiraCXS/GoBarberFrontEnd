import React from 'react';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';


import {Container, Content, Background} from './styles';


const SignIn: React.FC = () =>{ 

    return (
        <Container>
            <Content>
                <img src={logoImg} alt='GoBarber'/>
                <Form onSubmit={alert}>
                    <h1>Faça seu logon</h1>
                    <Input name='email' placeholder='E-mail' icon={FiMail} />

                    <Input  name='password' type='password' placeholder='Senha' icon={FiLock}/>

                    <Button type='submit'>Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>
                <a href="forgot">
                    <FiLogIn/>
                        Criar Conta
                </a>
            </Content>
            <Background/>
        </Container>
    )
};
   

export default SignIn; 