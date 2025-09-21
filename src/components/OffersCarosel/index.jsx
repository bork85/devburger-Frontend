import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
//import Carousel from 'react-multi-carousel';
import { Title, Container } from '../OffersCarosel/style.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { CardProduct } from '../CardProduct/index.jsx';


export function OffersCarosel() {


    const [offers, setOffers] = useState([]);
    useEffect(() => {
        async function loadProducts() {

            const { data } = await api.get('/products');
            const onlyOffers = data.filter((product) => product.offer);
            console.log()

            setOffers(onlyOffers);
        }
        loadProducts();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2200 },
            items: 7,
        },
        LargeDesktop: {
            breakpoint: { max: 2200, min: 1700 },
            items: 5,
        },
        Desktop: {
            breakpoint: { max: 1700, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        Mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    }


    return (
        <Container>
            <Title>Ofertas do dia</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item" >
                {offers.map((product) => (
                    <CardProduct
                        key={product.id}
                        product={product} />
                ))}
            </Carousel>
        </Container>
    )

}