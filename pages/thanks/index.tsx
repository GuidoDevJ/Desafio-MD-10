import { Titulo } from "@/ui/texts";
import { Loading } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import style from "./style.module.css"
import { Loader } from "@/ui/loader";
const Thanks = () => {
  const router = useRouter();
  useEffect((()=>{
      setTimeout(() => {
          router.push("/")
      }, 1500);
  }),[router])
  return (
    <div className={style.container}>
     <Loader text="Thanks"/>
    </div>
  );
};

export default Thanks;
