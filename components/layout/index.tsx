import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import style from "./style.module.css";
const Layout = ({ children, handlerShow, show }: any) => {
  return (
    <div className={style.container}>
      <Navbar handler={handlerShow} show={show} />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
