import { NextApiRequest, NextApiResponse } from "next";

async function MainProducts(req: NextApiRequest, res: NextApiResponse) {
  let data = await fetch(
    "https://desafio9-dwf-git-main-guidodevj.vercel.app/api/products"
  );
  let products = await data.json();
  let main = products.filter((p: any) => p["Unit cost"] <= 1000);
  res.json(main);
}

export default MainProducts;
