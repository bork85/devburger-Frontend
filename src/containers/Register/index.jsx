import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import Button from '../../components/Button/index.jsx'
import { Container, LeftContainer, RightContainer, Title, InputContainer, LinkR, Form } from '../Login/style.js'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'

export function Register() {
    const navigate = useNavigate();
    const schema = yup.object({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().email('Email inválido').required('Email é obrigatório'),
        password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem').required('Confirmação de senha é obrigatória'),
    }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {            
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
                //confirmPassword: data.confirmPassword,
            },
                {
                    validateStatus: () => true,
                });
               // console.log(status);
            if (status === 201 || status === 200) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Cadastro realizado com sucesso! Você já pode fazer login.');
            } else if (status === 400) {
                toast.error('Email já cadastrado. Tente outro email.');
            }else {
                throw new Error();
            }
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Ops, algo deu errado, tente novamente!');
        }

    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo Devburger" />
            </LeftContainer>
            <RightContainer>
                <Title><span>Criar Conta</span></Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register('name')} id="name" name="name" placeholder="Digite seu nome" autoComplete= "off" required />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} id="email" name="email" placeholder="Digite seu email" autoComplete= "off" required />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} id="password" name="password" placeholder="Digite sua senha" autoComplete= "off" required />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirme sua Senha</label>
                        <input type="password" {...register('confirmPassword')} id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" autoComplete= "off"required />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>
                </Form>
                <p>Já possui conta? <LinkR to="/login"><span>Clique aqui!</span></LinkR></p>
            </RightContainer>
        </Container>
    )
}
