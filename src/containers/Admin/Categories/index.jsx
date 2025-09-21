import { useEffect, useState } from "react";
import { Container, ImageProduct, EditButton, Title } from "./style";
import { api } from "../../../services/api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PencilIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function Categories() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, []);

        function EditCategory(category) {
        navigate('/admin/alterar-categoria', { state: { category } })
    }

    return (
        <div id="ContainerTop">
            <Title>
                <h1>Categorias Cadastradas</h1>
            </Title>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow id="headTable">
                                <TableCell>Nome Categoria</TableCell>                                
                                <TableCell align="center">Imagem Produto</TableCell>
                                <TableCell align="center">Editar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories.map((category) => (
                                <TableRow
                                    key={category.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {category.name}
                                    </TableCell>
                                    <TableCell align="center"><ImageProduct src={category.url} /></TableCell>
                                    <TableCell align="center">
                                        <EditButton
                                            onClick={() => EditCategory(category)}>
                                            <PencilIcon size='28' />
                                        </EditButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}