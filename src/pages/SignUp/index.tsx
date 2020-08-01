import React, { useCallback, useRef } from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from './../../utils/getValidationErrors';
 
import {Container, Content, Background} from './styles';


const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit= useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});// inicia os erros como vazio para sempre revalidar

            const schema = Yup.object().shape({
                name:Yup.string().required('Nome Obrigatório'),
                email:Yup.string().required('Email Obrigatório').email('Digite um E-mail válido'),
                password:Yup.string().min(6, 'Mínimo de 6 dígitos')
            });

            await schema.validate(data,{
                abortEarly: false,
            });
        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    },[]);

    return(
        <Container>
        <Background/>
        <Content>
            <img src={logoImg} alt='GoBarber'/>
            <Form ref ={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu Cadastro</h1>
                <Input name='name' placeholder='Nome' icon={FiUser} />

                <Input name='email' placeholder='E-mail' icon={FiMail} />

                <Input  name='password' type='password' placeholder='Senha' icon={FiLock}/>

                <Button type='submit'>Cadastrar</Button>
            </Form>
            <a href="forgot">
                <FiArrowLeft/>
                Voltar para Logon
            </a>
        </Content>
    </Container>
    );
};
   

export default SignUp; 