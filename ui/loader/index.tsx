import { Loading } from "@nextui-org/react"
import { Titulo } from "../texts"

interface Loader{
    text:string
}


const Loader =({text}:Loader)=>{
    return( <>
        <Titulo>{text}</Titulo>
    <Loading loadingCss={{ $$loadingSize: "150px", $$loadingBorder: "10px" }} color="success"/>
    </>

    )
}

export {Loader}