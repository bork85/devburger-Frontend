import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/formatDate';
import { ProductImage, SelectStatus } from './style'
import { orderStatusOption } from './orderStatus';
import { api } from '../../../services/api';

export function Row(props) {
    const {row, orders, setOrders} = props;
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function updateStatus(id, status) {
        try {
            setLoading(true);
            await api.put(`/orders/${id}`, { status });
            const updatedOrder = orders.map((order) => order._id === id ? { ...order, status } : order);

            setOrders(updatedOrder);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.orderId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{formatDate(row.date)}</TableCell>
                <TableCell>
                    <SelectStatus
                        options={orderStatusOption.filter((status) => status.id < 99)}
                        placeholder='Status'
                        defaultValue={orderStatusOption.find(status => status.value === row.status || null)}
                        onChange={(status) => updateStatus(row.orderId, status.value)}
                        isLoading={loading}
                        menuPortalTarget={document.body} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Itens
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align='center'>Quantidade</TableCell>
                                        <TableCell>Produto</TableCell>
                                        <TableCell>Categoria</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>
                                                <ProductImage src={product.url} alt={product.name} />
                                            </TableCell>
                                            <TableCell align='center'>
                                                {product.quantity}
                                            </TableCell>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.category}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

Row.propTypes = {
    orders: PropTypes.array.isRequired,
    setOrders: PropTypes.func.isRequired,
    row: PropTypes.shape({
        orderId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                category: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};