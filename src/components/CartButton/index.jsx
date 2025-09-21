import Cart from "../../assets/Cart.png"               //'../../assets/Cart.png'
import { ContainerButton } from './style.js'

export function CartButton({...props}){

    return (
        <ContainerButton {...props}>
            <img src={Cart} alt='carrinho' />
        </ContainerButton>
    )
}