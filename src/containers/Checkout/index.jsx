import { useLocation } from "react-router-dom"
import CheckoutForm from "../../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../config/stripeConfig";

export function Checkout(){
    const {state} = useLocation();
    const clientSecret = state?.clientSecret;

    console.log('Checkout state:', state);
    console.log('clientSecret:', clientSecret);
    
    if (!clientSecret) return <p>Erro: sessão de pagamento inválida. Volte ao carrinho.</p>;
    
    return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm />
        </Elements>
    )
}