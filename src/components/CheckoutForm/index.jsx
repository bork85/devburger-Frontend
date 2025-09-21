import { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom"
import './style.css'
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { PlusProductsLink } from "../CartItems/style";
//import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const { state: { dpmCheckerLink } } = useLocation();
    console.log(dpmCheckerLink)
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { cartProducts, clearCart } = useCart();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error('Stripe ou Elements com erro. Tente novamente!')
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            try {
                const products = cartProducts.map((product) => {
                    return { id: product.id, quantity: product.quantity, price: product.price };
                });
                const { status } = await api.post('/orders', { products },
                    {
                        validateStatus: () => true,
                    });

                if (status === 201 || status === 200) {
                    setTimeout(() => {
                        navigate(`/compra_finalizada?payment_intent_client_secret=${paymentIntent.client_secret}`);
                    }, 2000);
                    clearCart();
                    toast.success('Pedido realizado com sucesso!');
                } else if (status === 400) {
                    toast.error('Erro ao gerar pedido. Tente novamente');
                } else {
                    throw new Error();
                }

            } catch (error) {
                console.error(error.message)
                toast.error('Ops, algo deu errado, tente novamente!');
            }

        } else {
            setTimeout(() => {
                navigate(`/compra_finalizada?payment_intent_client_secret=${paymentIntent.client_secret}`);
            }, 2000);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div id="container">
            <h1 id='Title'>Pagamento</h1>
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}