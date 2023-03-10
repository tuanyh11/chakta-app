import { useContext, useEffect, useState } from "react";
import { BlogContext, ProductDetailContext, ShopContext } from "../Contexts";

export const useDebounce = (value, time) => {
  // console.log(value)
  const [data, setData] = useState(value);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setData(value);
    }, time);

    return () => clearTimeout(timeId);
  }, [value, data]);

  return data;
};

export const useDate = () => {
  function getDate(
    date = new Date(),
    locales = "en-Us",
    options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ) {
    return new Date(date).toLocaleDateString(locales, options);
  }
  return getDate;
};

export const useBlogContext = () => {

  const Context = useContext(BlogContext)
  return {
    state: Context,
    ...BlogContext,
  }
}

export const useShopContext = () => {


  const Context = useContext(ShopContext)
  return {
    state: Context,
    ...ShopContext,
  }
}

export const useProductDetailContext = () => {
  const Context = useContext(ProductDetailContext)
  return {
    state: Context,
    ...ProductDetailContext,
  }
}
 
