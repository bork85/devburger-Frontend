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
import { formatCurrency } from "../../../utils/formatCurrency";
import { CheckFatIcon, PencilIcon, XCircleIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            setProducts(data);
        }
        loadProducts();
    }, []);

    function isOffer(offer) {
        if (offer) {
            return <CheckFatIcon size="32" fill="green" weight="fill" />
        } else {
            return <XCircleIcon size="32" fill="red" weight="fill" />
        }
    }

    function editProduct(product) {
        navigate('/admin/alterar-produto', { state: { product } })
    }

    return (
        <div id="ContainerTop">
            <Title>
                <h1>Itens Cadastrados</h1>
            </Title>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow id="headTable">
                                <TableCell>Nome Produto</TableCell>
                                <TableCell align="center">Preço</TableCell>
                                <TableCell align="center">Oferta</TableCell>
                                <TableCell align="center">Imagem Produto</TableCell>
                                <TableCell align="center">Editar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell align="center">{formatCurrency(product.price)}</TableCell>
                                    <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                    <TableCell align="center"><ImageProduct src={product.url} /></TableCell>
                                    <TableCell align="center">
                                        <EditButton
                                            onClick={() => editProduct(product)}>
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