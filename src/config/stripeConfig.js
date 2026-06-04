import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.STRIPE_KEY);

export default stripePromise;