import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import {
  URL_BACK,
  authEmail,
  authEmailAndCode,
  changeData,
  fetchApiGet,
  fetcher,
} from "../lib/api";
import { singInValue } from "@/atoms";
import { useEffect, useState } from "react";
import {
  deleteToken,
  getWindowDimensions,
  saveTokenLocalStorage,
} from "@/helpers";
import { useRouter } from "next/router";
import { checkToken } from "helpers/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { Burger } from "@/ui/logo_car";
import { EmailText } from "@/ui/email";
import { ButtonLink } from "@/ui/link";
import { FormProducts } from "@/components/Forms/searchProducts";
import { successAlert, warningAlert } from "@/ui/alerts";

const useMe = () => {
  const { data } = useSWR("/me", fetchApiGet);
  return data?.data;
};

const useSingOut = () => {
  const router = useRouter();
  const [singInVal, setSingInVal] = useRecoilState(singInValue);
  function singOut() {
    setSingInVal(false);
    deleteToken();
    router.push("/");
  }
  return {
    singOut,
  };
};
const useProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWRImmutable(
    `${URL_BACK}/products/${id}`,
    fetcher
  );

  return data;
};

const useSingIn = () => {
  const router = useRouter();
  const [singInState, setSingState] = useRecoilState(singInValue);
  const [email, setEmail] = useState("");
  const regEx = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
  async function sendEmail(e: Event) {
    e.preventDefault();
    const target = e.target as any;
    const email = target.Email.value;
    if (email === "") {
      warningAlert("Esta ocurriendo un error","Por favor introduzca algun correo");
      return;
    }
    if (regEx.test(email) !== true) {
      warningAlert("Esta ocurriendo un error","Por favor introduzca algun correo valido");
      return;
    }
    await authEmail(email);
    setEmail(email);
    target.reset();
  }

  async function singIn(e: Event) {
    e.preventDefault();
    const target = e.target as any;
    const code = target.Code.value;
    if (code === "") {
      alert("Pone algo chamigo");
      return;
    }
    let res = await authEmailAndCode({
      email,
      code: parseInt(code),
    });
    if (res !== "") {
      saveTokenLocalStorage(res);
      setSingState(true);
    }
    router.push("/");
  }
  return {
    sendEmail,
    singIn,
    email,
  };
};

const useSearchProduct = () => {
  const [count, setCounter] = useState(0);
  const router = useRouter();
  const { q, limit } = router.query;
  const { data, isLoading } = useSWR(
    `${URL_BACK}/search?q=${q}&offset=0&limit=${limit}`,
    fetcher
  );

  useEffect(() => {
    setCounter(parseInt(data?.results.length ?? 0));
  }, [data]);
  const handlerShowMoreProducts = (e: Event) => {
    const target: any = e.target;
    target.disabled = false;
    count + 2;
    const totalResults = data?.pagination.total ?? 0;
    if (count === totalResults) {
      return;
    }
    router.push(
      `/search?q=${q}&offset=0&limit=${parseInt(data?.pagination.limit) + 2}`
    );
  };
  return { data, isLoading, router, count, q, handlerShowMoreProducts };
};

const useFeaturedProducts = () => {
  const { data } = useSWR("/api/productos-destacados", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data };
};

function useWindowDimensions() {
  const defaultDim = { width: null, height: null };
  const [windowDimensions, setWindowDimensions] = useState(defaultDim);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions() as any); // Necessary to make sure dimensions are set upon initial load

    function handleResize() {
      setWindowDimensions(getWindowDimensions() as any);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const usePayProduct = () => {
  const singInVal = useRecoilValue(singInValue);
  const router = useRouter();
  const authLocalStorage = checkToken();
  const { id } = router.query;
  async function handlerPayment() {
    if (authLocalStorage === null) return router.push("/ingresar");
    const res = await fetch(`${URL_BACK}/order?productId=${id}`, {
      method: "post",
      headers: {
        Authorization: `bearer ${authLocalStorage}`,
      },
    });
    let data = await res.json();
    const { url, orderId } = data;
    router.push(url);
  }
  return {
    handlerPayment,
  };
};

const useNavbar = () => {
  const [show, setShow] = useState(false);
  const handlerShow = () => {
    setShow(true);
  };
  const handlerClose = () => {
    setShow(false);
  };

  return {
    show,
    handlerClose,
    handlerShow,
  };
};

const useNavbarFunctions = ({ handler, email }: any) => {
  const token = checkToken();
  const router = useRouter();
  const path = router.pathname;
  function handlerSingIn() {
    router.push("/ingresar");
  }

  function showButtons(width: number) {
    if (width <= 768) {
      return <Burger width={154} height={34} onClick={handler} />;
    }
    if (token !== null) {
      return <EmailText email={email} />;
    }
    return (
      <ButtonLink text="Ingresar" handler={handlerSingIn} path="/ingresar" />
    );
  }

  function showSearchForm() {
    if (path !== "/") {
      return <FormProducts />;
    }
  }
  return {
    showButtons,
    showSearchForm,
  };
};

const useChangeDataUser = () => {
  const router = useRouter();

  async function updateData(e: Event) {
    e.preventDefault();
    const target: any = e.target;
    const nombre = target.Nombre.value;
    const ciudad = target.Direccion.value;
    const telefono = parseInt(target.Telefono.value);
    const datos = {
      nombre,
      ciudad,
      telefono,
    };
    const data = await changeData(datos);
    if (data === "success") {
      successAlert("Actualizacion de datos","Excelente cambiaste tus datos");
      router.push("/");
    }
  }

  return {
    updateData,
  };
};

export {
  useMe,
  useProduct,
  useFeaturedProducts,
  useWindowDimensions,
  useSearchProduct,
  usePayProduct,
  useNavbar,
  useSingIn,
  useSingOut,
  useChangeDataUser,
  useNavbarFunctions,
};
