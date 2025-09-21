import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, Form, InputGroup, Input, Label, LabelUpload, Select, SubmitButton, Title, ErrorMessage, CheckBoxOffer } from './style'
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required('Informe um nome válido!'),
        price: yup.number('valor deve ser um numero!').positive('O valor deve maior que zero!').required('Informe um valor!'),
        category: yup.object().required('Informe uma das categorias!'),
        offer: yup.bool(),
    })
    .required()

export function UpdateProduct() {
    const [filename, setFilename] = useState(null);
    const [categories, setCategories] = useState([]);
    const { state: { product } } = useLocation();
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

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando produto, aguarde...',
            success: 'Produto editado com sucesso!',
            error: 'Falha ao editar produto, tente novamente!'
        });
        setTimeout(() => {
            navigate('/admin/produtos')
        }, 2000);
    };


    return (
        <div id="ContainerTop">
            <Title>
                <h1>Atualização do Item</h1>
            </Title>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input
                            {...register("name")}
                            placeholder='Informe nome do produto...'
                            defaultValue={product.name} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <Label>Preço</Label>
                        <Input
                            {...register("price")}
                            placeholder='Informe preço do produto...'
                            defaultValue={product.price / 100} />
                        <p>{errors.price?.message}</p>
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
                            defaultValue={product.category}
                            render={({ field }) => (
                                <Select
                                    defaultValue={product.category}
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
                                defaultChecked={product.offer}
                                {...register("offer")} />
                            <Label>Produto em oferta?</Label>
                        </CheckBoxOffer>

                    </InputGroup>
                    <SubmitButton>Editar Produto</SubmitButton>
                </Form>
            </Container>
        </div>
    )
}