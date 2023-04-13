import { TinyText, Text, SubTitle } from "@/ui/texts";
import style from "./style.module.css";
import { Linker } from "@/ui/link";
const ListItem = ({ user, show, close }: any) => {
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
        <TinyText>{user}</TinyText>
        <Text color="#E75A7C">Cerrar Session</Text>
      </footer>
    </div>
  );
};

export { ListItem };
