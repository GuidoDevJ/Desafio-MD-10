import { Layout } from "@/components/layout";
import { ListItem } from "@/components/menu-links";
import { ProductItem } from "@/components/productItem";
import { useNavbar, useProduct } from "@/hooks/hooks";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductId = () => {
  const productData = useProduct();
  const { show, handlerShow, handlerClose } = useNavbar();

  return (
    <Layout handlerShow={handlerShow} show={show}>
      <ListItem show={show} close={handlerClose} />
      <ProductItem
        imgUlr={productData?.images[0]}
        title={productData?.title}
        price={productData?.price}
        description={productData?.descripion}
      />
    </Layout>
  );
};

export default ProductId;
