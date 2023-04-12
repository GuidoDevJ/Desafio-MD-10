import { useSingOut } from "@/hooks/hooks";
import { BodyBold, LargeText } from "../texts";
import style from "./style.module.css";
const EmailText = ({ email }: any) => {
  const { singOut } = useSingOut();
  return (
    <div className={style.container}>
      <LargeText>{email}</LargeText>
      <BodyBold color="#E75A7C" onClick={singOut}>
        Cerrar Sesion
      </BodyBold>
    </div>
  );
};

export { EmailText };
