import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, Form, InputGroup, Input, Label, LabelUpload, Select, SubmitButton, Title, ErrorMessage, CheckBoxOffer } from './style'
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required('Informe um nome válido!'),
        price: yup.number('valor deve ser um numero!').positive('O valor deve maior que zero!').required('Informe um valor!'),
        category: yup.object().required('Informe uma das categorias!'),
        offer: yup.bool(),
        file: yup.mixed()
            .test('required', 'Informe um aquivo de imagem!', (value) => {
                return value && value.length > 0;
            })
            .test('fileSize', 'São permitidos arquivos até 5MB!', (value) => {
                return value && value.length > 0 && value[0].size <= 5000000; 
             }).test('type', 'Somente arquivos PNG ou JPEG são permitidos!', (value) => {
                return value && value.length > 0 && (value[0].type === 'image/png' || value[0].type === 'image/jpeg'); 
            }),
    })
    .required()

export function NewProduct() {
    const [filename, setFilename] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, []);


    const { register, handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onSubmit = async (data) => {
        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);
        console.log(productFormData);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando produto, aguarde...',
            success: 'Produto adicionado com sucesso!',
            error: 'Falha ao adicionar produto, tente novamente!'
        });
        setTimeout(() => {
            navigate('/admin/produtos')
        }, 2000);
    };


    return (
        <div id="ContainerTop">
            <Title>
                <h1>Cadastro de Item</h1>
            </Title>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input {...register("name")} placeholder='Informe nome do produto...' />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <Label>Preço</Label>
                        <Input {...register("price")} placeholder='Informe preço do produto...' />
                        <ErrorMessage>{errors.price?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <LabelUpload>
                            <ImageIcon />
                            <input
                                type='file'
                                {...register('file')}
                                accept="image/png, image/jpeg"
                                onChange={(value) => {
                                    setFilename(value.target?.files[0]?.name);
                                    register('file').onChange(value);
                                }} />
                            {filename || 'Upload imagem produto'}
                        </LabelUpload>
                    </InputGroup>
                    <InputGroup>
                        <Label>Categoria</Label>
                        <Controller
                            name='category'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={categories}
                                    getOptionLabel={(category) => category.name}
                                    getOptionValue={(category) => category.id}
                                    placeholder='Selecione a categoria...'
                                    menuPortalTarget={document.body}
                                />
                            )} />
                    </InputGroup>
                    <InputGroup>
                        <CheckBoxOffer>
                            <input type="checkbox" 
                            {...register("offer")} />
                            <Label>Produto em oferta?</Label>
                        </CheckBoxOffer>
                    </InputGroup>
                    <SubmitButton onClick={()=>console.log('tetste')}>Adicionar Produto</SubmitButton>
                </Form>
            </Container>
        </div>
    )
}   