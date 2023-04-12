import { atom } from "recoil";

const singInValue = atom<Boolean>({
  key: "singIn",
  default: false,
});

export { singInValue };
