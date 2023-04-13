function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const checkToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return localStorage.getItem("auth_user");
  }
};
const deleteToken = () => {
  localStorage.clear();
};
const saveTokenLocalStorage = (token: string) => {
  localStorage.setItem("auth_user", token);
};

export { checkToken, getWindowDimensions, saveTokenLocalStorage, deleteToken };
