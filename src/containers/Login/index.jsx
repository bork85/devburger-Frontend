import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import Button from '../../components/Button/index.jsx'
import { Container, LeftContainer, RightContainer, Title, InputContainer, LinkR, Form } from '../Login/style.js'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext.jsx'

//import {putUserData} from 'useUsers()';


export function Login() {
    const navigate = useNavigate();
    const {putUserData} = useUser();
    const schema = yup.object({
        email: yup.string().email('Email inválido').required('Email é obrigatório'),
        password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {            
            const response = await api.post('/sessions', {
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true,
                }
            )           
            const newData = response.data;
            
            const status = response.status;
        
            if (status === 200 || status === 201) {
                console.log(response.data.admin);
                setTimeout(() => {
                    if (!response?.data?.admin) {
                         navigate('/');
                    } else{
                        navigate('/admin/pedidos')
                    }
                }, 5000);
                putUserData(newData);
                toast.success('Login realizado com sucesso!');
            } else if (status === 400 || status === 401) {
                toast.error('Email ou senha inválidos. Tente novamente...');
            } else {                
                throw new Error();
            }
             
        } catch (error) {
            console.log('Erro:', error)
            toast.error('Falha ao tentar realizar login, tente novamente mais tarde!');
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo Devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
                    Acesse com seu <span>Login e senha.</span></Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} id="email" name="email" placeholder="Digite seu email" autoComplete= "off" required />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} id="password" name="password" placeholder="Digite sua senha" autoComplete= "off" required />
                        <LinkR to="#">Esqueci minha senha</LinkR>
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <LinkR to="/cadastro"><span>Clique aqui!</span></LinkR></p>
            </RightContainer>
        </Container>
    )
}
