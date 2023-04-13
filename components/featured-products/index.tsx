import { Titulo } from "@/ui/texts";
import styles from "./styles.module.css";
import { Card, CardContainer } from "../card";
import { useFeaturedProducts } from "@/hooks/hooks";
import { useCallback } from "react";

const FeaturedProducts = () => {
  const { data } = useFeaturedProducts();
  const ShowCards = useCallback(() => {
    return data?.map((p: any) => (
      <Card
        key={p.objectID}
        id={p.objectID}
        url={p.Images[0].url}
        title={p.Name}
        price={p["Unit cost"]}
      />
    ));
  }, [data]);

  return (
    <div className={styles.container}>
      <Titulo color="#fff">Productos Destacados</Titulo>
      <CardContainer>{ShowCards()}</CardContainer>
    </div>
  );
};

export { FeaturedProducts };
