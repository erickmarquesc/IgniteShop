import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Image from "next/future/image";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { Spinner } from '@chakra-ui/react';

interface IProductsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
};

export default function Products({ product }: IProductsProps) {

  const { isFallback } = useRouter();

  if (isFallback) { // loading
    return (
      <ProductContainer>
        <ImageContainer>
          <Spinner size="md" width={100} height={100} />
        </ImageContainer>

        <ProductDetails>
          <Spinner size="md" width={50} height={50} />
          <button>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    );
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
};

/* O método getStaticPaths é importante para build
 * pois é ele que ajuda a identificar um primerio id para o build 
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_Mg9JRhjN2Xx4U2' } }
    ],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}