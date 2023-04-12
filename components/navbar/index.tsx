import { Burger, CarLogo } from "@/ui/logo_car";
import style from "./style.module.css";
import { useMe, useWindowDimensions } from "@/hooks/hooks";
import { useRouter } from "next/router";
import { FormProducts } from "../Forms/searchProducts";
import { ButtonLink } from "@/ui/link";
import { checkToken } from "@/helpers";
import { EmailText } from "@/ui/email";
const Navbar = ({ handler, show }: any) => {
  const data = useMe();
  const { email } = data ?? "";
  const { width, height } = useWindowDimensions();
  const token = checkToken();
  const router = useRouter();
  const path = router.pathname;
  function handlerSingIn() {
    router.push("/ingresar");
  }

  function showButtons(width: number) {
    console.log("navbar token =>", token !== "");
    if (width <= 768) {
      return <Burger width={154} height={34} onClick={handler} />;
    }
    if (token !== null) {
      return <EmailText email={email} />;
    }
    return (
      <ButtonLink text="Ingresar" handler={handlerSingIn} path="/ingresar" />
    );
  }

  function showSearchForm() {
    if (path !== "/") {
      return <FormProducts />;
    }
  }

  return (
    <div className={!show ? style.navbar : style.hidden}>
      <CarLogo width={154} height={34} url={"/"} />
      {showSearchForm()}
      {showButtons(width as any)}
    </div>
  );
};

export { Navbar };
