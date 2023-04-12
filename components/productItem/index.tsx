import { Button } from "@/ui/button";
import { Body, SubTitle, Titulo } from "@/ui/texts";
import style from "./style.module.css";
import { usePayProduct } from "@/hooks/hooks";
import Image from "next/image";

interface ProdItem {
  imgUlr: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem = ({ imgUlr, title, price, description }: ProdItem) => {
  const { handlerPayment } = usePayProduct();

  return (
    <div className={style.container}>
      <div className={style.imagen}>
        <Image src={imgUlr} alt={title} width={100} height={100} />
      </div>

      <div className={style.text}>
        <SubTitle color="#000">{title}</SubTitle>
        <Titulo>${price}</Titulo>
        <Button
          cursor={"pointer"}
          width="90%"
          height="100px"
          color="#000"
          background="#91E5F6"
          onClick={handlerPayment}
        >
          <SubTitle color="#000">Comprar</SubTitle>
        </Button>
        <Body color="#000">{description}</Body>
      </div>
    </div>
  );
};

export { ProductItem };
