import Button from "../Button";
import { AllContainer, Container } from "./style";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { api } from '../../services/api'
import { formatCurrency } from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

export function CartResume(){
    const navigate = useNavigate();
    const [finalPrice, setFinalPrice] = useState(0);
    const [taxDelivery] = useState(500);
    const { cartProducts } = useCart();

    useEffect(()=>{
        const summAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(summAllItems);
    }, [cartProducts]);

    const submittOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price};
        });
        try {
            //console.log(products)
            //console.log(cartProducts)
            const {data} = await api.post('/create-payment-intent', { products })
            //console.log(response)
            navigate('/checkout', {state: data})
        } catch (error) {
            toast.error('Erro: tente novamente!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error)
        }
    };

    return (
        <AllContainer>
            <Container>
                <div className="Container-top">
                    <h2 className="Title">Resumo Pedido</h2>
                    <p className="Total-items">Total itens</p>
                    <p className="Total-items-price">{formatCurrency(finalPrice)}</p>
                    <p className="Tax-delivery">Taxa de entrega</p>
                    <p className="Tax-delivery-prica">{formatCurrency(taxDelivery)}</p>
                </div>
                <div className="Container-bottom">
                    <p className="Total">Valor total</p>
                    <p className="Total-value">{formatCurrency(finalPrice + taxDelivery)}</p>
                </div>
            </Container>
            <Button onClick={submittOrder}>Finalizar Pedido</Button>
        </AllContainer>
    )
}