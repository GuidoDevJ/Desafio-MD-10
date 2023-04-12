import LogoCart from "icons/LogoCart.svg"
import Burguer from "icons/Burguer.svg"

import styled from "styled-components"
import Link from 'next/link';

interface LogoData{
    width:number,
    height:number,
    url:string
}

const Logo = styled(LogoCart)`
    width: ${props=>props.width || 40}px;
    height: ${props=>props.height || 40}px;
`
const Burger = styled(Burguer)`
  width: ${props=>props.width || 40}px;
    height: ${props=>props.height || 40}px;
    cursor:pointer;
`

const CarLogo = ({width,height,url}:LogoData) => {
  return (
    <Link href={url}>
        <Logo width ={width} height = {height}/>
    </Link>
    
  )
}


export {
    CarLogo,Burger
}