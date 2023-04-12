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
    console.log(regEx.test(email));
    if (email === "") {
      alert("Pone algo chamigo");
      return;
    }
    if (regEx.test(email) !== true) {
      alert("Fijate algo esta mal en tu email");
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
  const { q, offset, limit } = router.query;
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
    console.log("click");
    console.log(totalResults, count);
    if (count === totalResults) {
      console.log("llegamos no hay mas");
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
    console.log("local,", authLocalStorage);
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
    // console.log(datos)
    const data = await changeData(datos);
    if (data === "success") {
      alert("Excelente cambiaste tus datos");
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
};
