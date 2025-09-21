import { Table, } from '../index';
import { useCart } from '../../hooks/CartContext'
import { TrashIcon } from '@phosphor-icons/react';
import Button from '../Button';
import { formatCurrency } from "../../utils/formatCurrency.js";
import { CartQuantity, Container, PlusProductsLink } from './style.js';

export function CartItems() {
    const {cartProducts, increaseProduct, decreaseProduct, removeProduct } = useCart()
    console.log('carrinho tem ' + cartProducts.length + ' itens!')
    return (
        <Container>
            <Table.Root>
                <Table.Header>
                    <Table.Tr>
                        <Table.Th></Table.Th>
                        <Table.Th>Item</Table.Th>
                        <Table.Th>Preço</Table.Th>
                        <Table.Th>Quantidade</Table.Th>
                        <Table.Th>Total</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Header>
                <Table.Body>
                    {/* Corrigido: usando renderização condicional simples */}
                    {cartProducts?.length > 0 ? (
                        cartProducts.map((product) => {
                            return (
                                <Table.Tr key={product.id}>
                                    <Table.Td>
                                        <img src={product.url} alt={product.name} />
                                    </Table.Td>
                                    <Table.Td>{product.name}</Table.Td>
                                    <Table.Td>{formatCurrency(product.price)}</Table.Td>
                                    <Table.Td>
                                        <CartQuantity>
                                            <button onClick={()=>(decreaseProduct(product.id))}>-</button>
                                            <p>{product.quantity}</p>
                                            <button onClick={()=>(increaseProduct(product.id))}>+</button>
                                        </CartQuantity>
                                    </Table.Td>
                                    <Table.Td><span>{product.total}</span></Table.Td>
                                    <Table.Td>
                                        <Button onClick={()=>(removeProduct(product.id))}>
                                            <TrashIcon color='#484848' size={30} />
                                        </Button>
                                    </Table.Td>
                                </Table.Tr>
                            )                        
                        })
                    ) : null}
                </Table.Body>
            </Table.Root>
            <PlusProductsLink to='/'>&lt; Adicionar mais produtos  </PlusProductsLink>
        </Container>
    )
}