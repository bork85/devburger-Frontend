import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, Form, InputGroup, Input, Label, LabelUpload, SubmitButton, Title, ErrorMessage } from './style'
import { useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required('Informe um nome válido!'),
    })
    .required()

export function UpdateCategory() {
    const [filename, setFilename] = useState(null);
    const { state: { category } } = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onSubmit = async (data) => {
        const categoryFormData = new FormData();

        categoryFormData.append('name', data.name);
        categoryFormData.append('file', data.file[0]);

        await toast.promise(api.put(`/categories/${category.id}`, categoryFormData), {
            pending: 'Editando categoria, aguarde...',
            success: 'Categoria editada com sucesso!',
            error: 'Falha ao editar categoria, tente novamente!'
        });
        setTimeout(() => {
            navigate('/admin/categorias')
        }, 2000);
    };

    return (
        <div id="ContainerTop">
            <Title>
                <h1>Atualização de Categoria</h1>
            </Title>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input
                            {...register("name")}
                            placeholder='Informe nome do produto...'
                            defaultValue={category.name} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
                    <SubmitButton>Editar Produto</SubmitButton>
                </Form>
            </Container>
        </div>
    )
}