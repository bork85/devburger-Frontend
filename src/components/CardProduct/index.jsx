import { formatCurrency } from "../../utils/formatCurrency.js";
import { CartButton } from "../CartButton/index.jsx";
import { CardImage, Container } from "./style.js";
import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext.jsx"

export function CardProduct({product}){
    const { putProduct } = useCart();
    return (
        <Container>
            <CardImage src= {product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{formatCurrency(product.price)}</strong>
            </div>
            <CartButton onClick={() => putProduct(product)}> </CartButton>
        </Container>
    )
}
    CardProduct.PropTypes= {
    product: PropTypes.object,
    }
