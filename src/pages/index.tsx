import { HomeContainer, Product } from "../styles/pages/home";
import { IHomeProps } from "./interfaces/IHome.d";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Stripe from "stripe";

export default function Home({ products }: IHomeProps) {

  return (
    <>
      <Head>
        <title>Home | IgniteShop</title>
      </Head>
      <HomeContainer >

        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product >

                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>

              </Product>
            </Link>
          )
        })}

      </HomeContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 Horas
  };
};