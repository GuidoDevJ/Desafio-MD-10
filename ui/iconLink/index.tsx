import Link from "next/link"
import style from "./style.module.css"
const IconLink = ({children,path}:any) => {
  return (
    <li className={style.list}><Link href={`${path}`} rel="noopener noreferrer" target="_blank">{children}</Link></li>   
  )
}
export {
    IconLink
}