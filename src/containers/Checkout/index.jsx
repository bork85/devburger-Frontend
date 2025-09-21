import { useLocation } from "react-router-dom"
import CheckoutForm from "../../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../config/stripeConfig";

export function Checkout(){
    const {state: {clientSecret}} = useLocation();
    
    return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm />
        </Elements>
    )
}