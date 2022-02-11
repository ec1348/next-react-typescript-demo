import Image from "next/image";
import Link from "next/link";

import { Product as ProductType } from "../fake-data";
import {
  Product,
  ImageWrapper,
  ProductDetail,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "../styles/ProductCard.style";

interface ProductCardProps {
  product: ProductType;
  all?: boolean;
}

const ProductCard = ({ product, all }: ProductCardProps) => {
  const { id, image, title, description, price } = product;
  console.log("from product card.tsx: ", product)
  return (
    <Product key={id}>
      <p>test message</p>
      <ImageWrapper>
        <Image src={image} alt="product" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <ProductDetail>
        <Link href={`/product/${id}`} passHref>
          <p>123</p>
          <ProductTitle>{title}</ProductTitle>
        </Link>
        <ProductDescription $all={all}>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetail>
    </Product>
  );
};

export default ProductCard