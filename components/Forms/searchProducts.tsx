import { Button } from "@/ui/button";
import { Titulo } from "@/ui/texts";
import { useRouter } from "next/router";

import style from "./style.module.css";
const FormProducts = () => {
  const router = useRouter();
  const path = router.pathname;
  const submitSearch = (e: Event) => {
    e.preventDefault();
    const target = e.target as any;
    console.log(target.search.value);
    router.push(`/search?q=${target.search.value}&offset=0&limit=2`);
  };
  return (
    <div className={path !== "/" ? style.searchpage : style.container}>
      <form className={style.form} onSubmit={(e: any) => submitSearch(e)}>
        <input type="text" placeholder="Busque su producto" name="search" />
        <Button cursor="" width="" height="" background="">
          Buscar
        </Button>
      </form>
    </div>
  );
};
export { FormProducts };
