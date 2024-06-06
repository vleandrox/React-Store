import styles from './Home.module.css'
import Header from './Header'
import Hero from './Hero'
import ProductCard from './ProductCard'
import Footer from './Footer'
import products from '../assets/products.js'
import { OnSaleSlide } from './OnSale.js'
import { useState } from 'react'

function Home() {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);

    const totalPages = Math.ceil(products.length / 9);// calcular total de paginas
    console.log(totalPages)

    const handlePageClick = (pageNumber) => {
        const newFrom = (pageNumber - 1) * 9;
        const newTo = newFrom + 9;
        setFrom(newFrom);
        setTo(newTo);
    }
    const visibleProducts = products.slice(from, to);
    return (
        <>
            <Header></Header>
            <Hero first={"Tecnologia"} second={"Renovada"}></Hero>
            <main>
                <div>
                    <div className={styles["product-container"]} id="products">
                        {visibleProducts.map((each) => (
                            <ProductCard
                                key={each.id}
                                id={each.id}
                                title={each.title}
                                price={each.price}
                                color={each.colors[0]}
                                image={each.images[0]}
                            />
                        ))}
                    </div>
                    <div className={styles["slider-controls"]}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={styles["page-button"]}
                                onClick={() => handlePageClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>


            </main>
            <div className={styles["on-sale"]}>
                <OnSaleSlide></OnSaleSlide>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home