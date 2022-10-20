import { HomeContainer, Product } from "../styles/pages/home";
import c1 from "../assets/camisetas-1.png";
import c2 from "../assets/camisetas-2.png";
import c3 from "../assets/camisetas-3.png";
import Image from "next/image";

export default function Home() {

  const camiseta = [{
    img: c1,
    name: "Camiseta X",
    prace: "R$ 79,90",
  },
  {
    img: c2,
    name: "Camiseta Y",
    prace: "R$ 79,90",
  },
  {
    img: c3,
    name: "Camiseta Z",
    prace: "R$ 79,90",
  }];

  return (
    <HomeContainer >

      {camiseta.map((camisa) => {
        return (
          <Product key={camisa.name}>

            <Image src={camisa.img} width={520} height={480} alt="" />

            <footer>
              <strong>{camisa.name}</strong>
              <span>{camisa.prace}</span>
            </footer>

          </Product>
        )
      })}
    </HomeContainer>
  );
};