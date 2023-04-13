import { TinyText, Text, SubTitle } from "@/ui/texts";
import style from "./style.module.css";
import { Linker } from "@/ui/link";
import { useMe, useSingOut } from "@/hooks/hooks";
const ListItem = ({ show, close }: any) => {
  const data = useMe();
  const { singOut } = useSingOut();
  return (
    <div className={show ? style.list : style.hidden}>
      <div className={style.close}>
        <a href="#" onClick={close}>
          <SubTitle>X</SubTitle>
        </a>
      </div>
      <ul className={style.ul}>
        <Linker text="Ingresar" path="/ingresar" />
        <Linker text="Mi perfil" path="/profile" />
        <Linker text="Buscar" path="/search" />
      </ul>
      <footer>
        <TinyText>{data?.email}</TinyText>
        <Text color="#E75A7C" onClick={singOut}>
          Cerrar Session
        </Text>
      </footer>
    </div>
  );
};

export { ListItem };
