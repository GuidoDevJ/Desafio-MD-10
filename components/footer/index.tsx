import style from "./style.module.css"
import { Body, LargeText } from '@/ui/texts';
import { Face, Tweet } from "@/ui/socialIcon";
import { Linker } from "@/ui/link";
import { IconLink } from "@/ui/iconLink";
const Footer = () => {
  return (
    <footer className={style.footer}>
        <div>
            <ul className={style.list}>
                <Linker text="Ingresar" path="/ingresar"/>
                <Linker text="Mi perfil" path="/profile"/>
                <Linker text="Buscar" path="/search"/>
                <Linker text="Logout" path="/logout"/>
            </ul>
        </div>
        <div>
            <LargeText>Redes</LargeText>
            <ul >
                <IconLink path="https://twitter.com"><Tweet/></IconLink>
                <IconLink path="https://es-la.facebook.com"><Face/></IconLink>
            </ul>
        </div>
        <Body>&#169; 2023 APX</Body>
    </footer>
  )
}

export {
    Footer
}