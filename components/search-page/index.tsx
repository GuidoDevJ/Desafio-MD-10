import { Layout } from "@/components/layout";
import { useNavbar, useSearchProduct } from "@/hooks/hooks";
import { ListItem } from "@/components/menu-links";
import { Card, CardContainer } from "@/components/card";
import style from "./style.module.css";
import { OutlineButton } from "@/ui/button";
const SearchPage = () => {
  const { show, handlerShow, handlerClose } = useNavbar();
  const { data, isLoading, count, handlerShowMoreProducts } =
    useSearchProduct() as any;

  return (
    <Layout handlerShow={handlerShow} show={show}>
      <ListItem show={show} close={handlerClose} />
      <div className={style.resultsContainer}>
        <h2>
          {count} resultados de {data?.pagination.total}
        </h2>

        <CardContainer>
          {data?.results.map((el: any) => (
            <Card
              key={el.objectID}
              id={el.objectID}
              url={el.images[0]}
              price={el.price}
              title={el.title}
            />
          )) ?? null}
        </CardContainer>

        <OutlineButton onClick={(e: any) => handlerShowMoreProducts(e)}>
          Ver mas{" "}
        </OutlineButton>
      </div>
    </Layout>
  );
};

export default SearchPage;
