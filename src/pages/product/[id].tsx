import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProductsProps } from "./interface.d";
import { Spinner } from '@chakra-ui/react';
import { stripe } from "../../lib/stripe";
import { useRouter } from "next/router";
import Image from "next/future/image";
import Stripe from "stripe";
import axios from "axios";
import { useState } from "react";

export default function Products({ product }: IProductsProps) {
  const [isCreatingCheckotSession, setIsCreatingCheckotSession] = useState(false);
  async function handleBuyProduct() {
    try {
      setIsCreatingCheckotSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferrementa de observabilidade (Datadog / Sentry)
      setIsCreatingCheckotSession(false)
      alert('Falha ao redirecionar ao checkout');
    };
  };

  const { isFallback } = useRouter();

  if (isFallback) { // loading
    return (
      <ProductContainer>
        <ImageContainer>
          <Spinner size="md" width={100} height={100} />
        </ImageContainer>

        <ProductDetails>
          <Spinner size="md" width={50} height={50} />
          <button onClick={handleBuyProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    );
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button disabled={isCreatingCheckotSession} onClick={handleBuyProduct}>
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
  };
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
        defaultPriceId: price.id,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora
  };
};