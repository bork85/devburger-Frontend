import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from '../../../services/api'
import { useEffect, useState } from 'react';
import {Filter, FilterOptions} from './style'
import { orderStatusOption } from './orderStatus';

export function Orders() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [rows, setRows] = useState([]);
    const [activeStatus, setActiveStatus] = useState(99);

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders');
            setOrders(data);
            setFilteredOrders(data);
        }
        loadOrders();
    }, []);

    function createData(orders) {
        return {
            name: orders.user.name,
            orderId: orders._id,
            date: orders.createdAt,
            status: orders.status,
            products: orders.products,
        };
    }

    function handleStatus(status){
        if(status.id === 99){
            setFilteredOrders(orders);
        } else {
            const newOrders = orders.filter((order)=> order.status === status.value);
            setFilteredOrders(newOrders);
        }
        setActiveStatus(status.id)
    }

    useEffect(() => {
        const newRows = filteredOrders.map((order) => createData(order));
        setRows(newRows);
    }, [filteredOrders]);

    useEffect(()=> {
        if (activeStatus === 99){
            setFilteredOrders(orders);
        } else {
            const statusIndex = orderStatusOption.findIndex((item)=> item.id === activeStatus);
            console.log(statusIndex);
            const newFilteredOrders = orders.filter((order)=> order.status === orderStatusOption[statusIndex].value);
            console.log(newFilteredOrders)
            setFilteredOrders(newFilteredOrders);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orders])

    return (
        <>
        <Filter>
            {orderStatusOption.map((status)=>(
                <FilterOptions 
                    key={status.id}
                    onClick={()=>handleStatus(status)}
                    $isActiveFilter={activeStatus === status.id}>{status.label}</FilterOptions>
            ))
}
        </Filter>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Pedido</TableCell>
                        <TableCell>Cliente</TableCell> 
                        <TableCell>Data</TableCell> 
                        <TableCell>Status</TableCell>                         
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map ((row) => (
                        <Row 
                        key={row.orderId} 
                        row={row}
                        orders={orders}
                        setOrders={setOrders} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}