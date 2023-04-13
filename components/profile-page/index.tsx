import { Layout } from "@/components/layout";
import { Button } from "@/ui/button";
import { TextField } from "@/ui/textField";
import { SubTitle } from "@/ui/texts";
import style from "./style.module.css";
import { ListItem } from "@/components/menu-links";
import { useChangeDataUser, useNavbar } from "@/hooks/hooks";

const Me = () => {
  const { show, handlerShow, handlerClose } = useNavbar();
  const { updateData } = useChangeDataUser();

  return (
    <>
      <Layout handlerShow={handlerShow} show={show}>
        <ListItem show={show} close={handlerClose} />
        <div className={style.container}>
          <SubTitle color="#000">Perfil</SubTitle>
          <form className={style.form} onSubmit={(e: any) => updateData(e)}>
            <TextField label="Nombre" />
            <TextField label="Direccion" />
            <TextField label="Telefono" />
            <Button
              width=""
              height=""
              cursor=""
              color="#000"
              background="#FFC700"
            >
              Guardar
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export { Me };
