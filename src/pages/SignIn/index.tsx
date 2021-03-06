import React, { useCallback, useRef, useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import * as Yup from 'yup';


import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


import { AuthContext } from '../../context/AuthContext';
import {Container, Content, Background} from './styles';
import getValidationErrors from './../../utils/getValidationErrors';
import { sign } from 'crypto';

interface SignInFormData{
    email: string,
    password: string,
}

const SignIn: React.FC = () =>{ 
    const formRef = useRef<FormHandles>(null);

    const { user, singIn } = useContext(AuthContext);

    console.log(user)
    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});// inicia os erros como vazio para sempre revalidar

            const schema = Yup.object().shape({
                email:Yup.string().required('Email Obrigatório').email('Digite um E-mail válido'),
                password:Yup.string().required('Senha Obrigatória')
            });

            await schema.validate(data,{
                abortEarly: false,
            });

            singIn({
                email: data.email, 
                password: data.password,
            });
        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    },[singIn]);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt='GoBarber'/>
                <Form ref={formRef} onSubmit={handleSubmit}>
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
    );
};
   

export default SignIn; 