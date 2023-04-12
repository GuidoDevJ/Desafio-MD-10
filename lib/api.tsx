import { checkToken } from "helpers/index";

const URL_BACK = "https://desafio9-dwf-git-main-guidodevj.vercel.app/api";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const fetchApiGet = async (path: string) => {
  let authLocalStorage = checkToken();
  if (authLocalStorage) {
    const res = await fetch(`${URL_BACK + path}`, {
      method: "get",
      headers: {
        "Authorization": `bearer ${authLocalStorage}`,
      },
    });
    if (res.status >= 200 && res.status < 300) {
      console.log(res);
      let result = await res.json();
      return result;
    }
    if (res.status >= 400) {
      throw "Error la peticion sufrio un error";
    }
  } else {
    console.log("No existe token");
  }
};
const fetchApiPatch = async (path: string,body:{}) => {
  let authLocalStorage = checkToken();
  if (authLocalStorage) {
    const res = await fetch(`${URL_BACK + path}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json",
        "Authorization": `bearer ${authLocalStorage}`,
      },
      body:JSON.stringify(body)
    });
    if (res.status >= 200 && res.status < 300) {
      let result = await res.json();
      return result;
    }
    if (res.status >= 400) {
      throw "Error la peticion sufrio un error";
    }
  } else {
    console.log("No existe token");
  }
};

async function authEmail(email: string) {
  const res = await fetch(`${URL_BACK}/auth`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return res.status;
}

async function authEmailAndCode(obj: {}) {
  console.log(obj);
  const res = await fetch(`${URL_BACK}/auth/token`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  console.log(res);
  let dataRes = await res.json();
  return dataRes.token;
}

const changeData=async (obj:any)=>{
  let authLocalStorage = checkToken();
  
  if (authLocalStorage) {
    const res = await fetchApiPatch(`/me`,obj)
    return res.msg
  }
}

export { fetchApiGet, authEmail, authEmailAndCode, fetcher, URL_BACK,changeData };
