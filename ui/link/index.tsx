import Link from "next/link";
import { Body } from "../texts";
import style from "./style.module.css";
import { Button } from "../button";
interface Linker {
  text: string;
  path: string;
}

const Linker = ({ text, path }: Linker) => {
  return (
    <li className={style.list}>
      <Link href={`${path}`}>
        <Body>{text}</Body>
      </Link>
    </li>
  );
};

const ButtonLink = ({ text, handler, path }: any) => {
  return (
    <Link href={`${path}`} className={style.linkButton}>
      <Button width="" height="" cursor="" onClick={handler} background="">
        {text}
      </Button>
    </Link>
  );
};

export { Linker, ButtonLink };
