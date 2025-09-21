import { Banner, CategoryButton, CategoryMenu, Container, ProductsContainer } from "./style.js"
import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import { CardProduct } from "../../components/CardProduct/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const navigate = useNavigate();
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search);
    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');
        if(categoryId){
            return categoryId
        }else {
            return 0;
        }
    });
    useEffect(() => {
        try {
            async function loadCategories() {
            const { data } = await api.get('/categories');
            const newCategory = [{ id: 0, name: 'Todos Produtos' }, ...data]
            setCategories(newCategory);
        }
        loadCategories();
        } catch (error) {
            console.log(error);
            console.log("erro nas categorias")
}
        try {
            async function loadProducts() {
            const { data } = await api.get('/products');
            const products = data; 
            setProducts(products);
        }
        loadProducts();
        } catch (error) {
            console.log(error);
            console.log("erro nos produtos");
        }
    }, []);
    useEffect(() => {
        try {
            if(activeCategory === 0){
                setFilteredProducts(products);
            } else {
                const newFilteredProducts = products.filter((product) => product.category_id === activeCategory,);
                setFilteredProducts(newFilteredProducts);
            }
            
        } catch (error) {
            console.log(error);
            console.log("erro no filtro de produtos X categoria")
        }
    }, [products, activeCategory]);

    return (
        <Container>
            <Banner>
                <h1>O MELHOR <br />
                    HAMBURGUER <br />
                    ESTÁ AQUI! <br />
                    <span>Esse cardápio é irresistível!</span>
                </h1>
            </Banner>
            <CategoryMenu>
                {categories.map( (category) => (
                    <CategoryButton 
                        key={category.id}
                        onClick={() => {
                            try {
                                navigate({
                                pathname: '/cardapio',
                                search: `?categoria=${category.id}`
                            },
                            {
                                replace: true
                            });
                            setActiveCategory(category.id);
                            } catch (error) {
                                console.log(error)
                            }
                        }}
                        $isActive={activeCategory === category.id}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct
                        product={product}
                        key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    );
}