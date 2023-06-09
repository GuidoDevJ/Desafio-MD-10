import { ListItem } from "@/components/menu-links";
import { FormProducts } from "../Forms/searchProducts";
import { FeaturedProducts } from "../featured-products";
import { Titulo } from "@/ui/texts";
import { Layout } from "../layout";
import { useNavbar } from "@/hooks/hooks";
function HomePage() {
  const { show, handlerShow, handlerClose } = useNavbar();
  return (
    <Layout handlerShow={handlerShow} show={show}>
      <ListItem show={show} close={handlerClose} />
      <Titulo>El mejor e-commerce</Titulo>
      <FormProducts />
      <FeaturedProducts />
    </Layout>
  );
}

export { HomePage };
