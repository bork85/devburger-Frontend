import { useContext, createContext, useEffect, useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProduct = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        let newProducts = [...cartProducts]; // Cria uma cópia do array de estado

        if(cartIndex >= 0){
            newProducts[cartIndex].quantity += 1; // Incrementa a quantidade
            newProducts[cartIndex].total = formatCurrency(newProducts[cartIndex].price * (newProducts[cartIndex].quantity));
        } else {
            const newProduct = { ...product, quantity: 1, total: formatCurrency(product.price) }; // Cria um novo objeto com a quantidade
            newProducts.push(newProduct); // Adiciona o novo produto ao array
        }
        setCartProducts(newProducts);
        updateLocalStorage(newProducts);
    };

    const removeProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        updateLocalStorage(newCart);        
    };

    const clearCart = () => {         
        setCartProducts([]);
        localStorage.removeItem('devburger:cartInfo');
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id == productId
                ? { ...prd, quantity: prd.quantity + 1, total: formatCurrency(prd.price * (prd.quantity + 1)) }
                : prd; 
        });
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id == productId
                    ? { ...prd, quantity: prd.quantity - 1, total: formatCurrency(prd.price * (prd.quantity - 1)) }
                    : prd;
            });
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            removeProduct(productId)
        }
    };

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
    }
    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData))
        }
    }, [])

    return (
        <CartContext.Provider 
            value={{ cartProducts, putProduct, removeProduct, clearCart, increaseProduct, decreaseProduct }}>
            {children}
        </CartContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be a valid context!')
    }
    return context;
}