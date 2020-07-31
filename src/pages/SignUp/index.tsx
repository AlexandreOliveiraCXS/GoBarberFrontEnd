import React from 'react';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';

import {Container, Content, Background} from './styles';


const SignUp: React.FC = () => (
    <Container>
        <Background/>
        <Content>
            <img src={logoImg} alt='GoBarber'/>
            <form>
                <h1>Faça seu Cadastro</h1>
                <Input name='name' placeholder='Nome' icon={FiUser} />

                <Input name='email' placeholder='E-mail' icon={FiMail} />

                <Input  name='password' type='password' placeholder='Senha' icon={FiLock}/>

                <Button type='submit'>Cadastrar</Button>
            </form>
            <a href="forgot">
                <FiArrowLeft/>
                Voltar para Logon
            </a>
        </Content>
    </Container>
);
   

export default SignUp; 