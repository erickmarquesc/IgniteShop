import { Container, Header } from "../styles/pages/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'} prefetch={false}>
          <Image src={logoImg} alt='' />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
};

