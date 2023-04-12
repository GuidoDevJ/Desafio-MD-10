import { Layout } from "@/components/layout";
import { Button } from "@/ui/button";
import { TextField } from "@/ui/textField";
import style from "./style.module.css";
import { Body, SubTitle } from "@/ui/texts";
import { useState } from "react";
import { ListItem } from "@/components/menu-links";
import { useNavbar, useSingIn } from "@/hooks/hooks";
const SingInPage = () => {
  const { show, handlerShow, handlerClose } = useNavbar();
  const { sendEmail, singIn, email } = useSingIn();

  function showForms() {
    if (!email)
      return (
        <>
          <SubTitle color="#000">Ingresar</SubTitle>
          <form className={style.form} onSubmit={(e: any) => sendEmail(e)}>
            <TextField label="Email" />
            <Button
              width=""
              height=""
              cursor=""
              color="#fff"
              background="#FFC700"
            >
              Continuar
            </Button>
          </form>
        </>
      );
    if (email)
      return (
        <>
          <SubTitle color="#000">Codigo</SubTitle>
          <form className={style.form} onSubmit={(e: any) => singIn(e)}>
            <TextField label="Code" />
            <Body>Te envíamos un código a tu mail</Body>
            <Button
              width=""
              cursor=""
              height=""
              color="#000"
              background="#FFC700"
            >
              Ingresar
            </Button>
          </form>
        </>
      );
  }

  return (
    <Layout handlerShow={handlerShow} show={show}>
      <ListItem show={show} close={handlerClose} />
      <div className={style.container}>{showForms()}</div>
    </Layout>
  );
};
export default SingInPage;
