import style from "./card.module.css";
import Image from "next/image";
import { Text } from "@/ui/texts";
import Link from "next/link";
import React from "react";
interface Card {
  url: string;
  price: string;
  title: string;
  id: string;
}

const Card = React.memo(function Card({ url, price, title, id }: Card) {
  return (
    <Link href={`./products/${id}`} className={style.link}>
      <div className={style.container}>
        <div className={style.containerImg}>
          <Image
            src={url}
            alt={title}
            width={100}
            height={100}
            priority={true}
          />
        </div>
        <div className={style.containerText}>
          <Text>{title}</Text>
          <p className={style.price}>{"$" + price}</p>
        </div>
      </div>
    </Link>
  );
});

const CardContainer = ({ children }: any) => {
  return <div className={style.cards}>{children}</div>;
};

export { Card, CardContainer };
