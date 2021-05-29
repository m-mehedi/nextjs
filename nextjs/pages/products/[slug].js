import Head from 'next/head'
// import products from '../../products.json'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'

// const product = products[0]

const Product = ({ product }) => {
    return (
        <div>
            <Head>
                {product.meta_title &&
                <title>{product.meta_title}</title>}
                {product.meta_description &&
                <meta name="description" content={product.meta_description} />
                }
            </Head>
            <h2>{product.name}</h2>
            <img src={fromImageToUrl(product.image)} />
            <h3>{product.name}</h3>
            <p>${twoDecimals(product.price)}</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export async function getStaticProps({params: {slug}}){
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props:{
            product: found[0] // API response is Array
        }
    }
}

export async function getStaticPaths(){
    // Retrieve all paths
    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()

    //Return them to NextJS context
    return {
        paths: products.map(product => ({
            params: {slug: String(product.slug)}
        })),
        fallback: false // 404 in case params is not matched
    }


}

export default Product