import type { NextPage } from 'next'
import { PageTitle, ProductGallery } from '../styles/index.style'
import { getAllProduct } from '../fake-data'
import ProductCard from '../components/ProductCard'


const Home: NextPage = () => {
  const products = getAllProduct()
  console.log("from index.tsx: ", products)
  return (
    <div>
      <PageTitle>商品列表</PageTitle>
      <p>jdkfl</p>
      <ProductGallery>
        {products.map((product) => {
          <ProductCard key={product.id} product={product}/>
        })}
      </ProductGallery>
    </div>
  )
}

export default Home
