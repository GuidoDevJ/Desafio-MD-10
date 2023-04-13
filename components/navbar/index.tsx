import { CarLogo } from "@/ui/logo_car";
import style from "./style.module.css";
import { useMe, useNavbarFunctions, useWindowDimensions } from "@/hooks/hooks";
const Navbar = ({ handler, show }: any) => {
  const data = useMe();
  const { email } = data ?? "";
  const { width, height } = useWindowDimensions();
  const { showButtons, showSearchForm } = useNavbarFunctions({
    handler,
    email,
  });

  return (
    <div className={!show ? style.navbar : style.hidden}>
      <CarLogo width={154} height={34} url={"/"} />
      {showSearchForm()}
      {showButtons(width as any)}
    </div>
  );
};

export { Navbar };
