import {
  About,
  Account,
  Blog,
  Cate,
  Checkout,
  Contact,
  Home,
  ProductDetail,
  Shop,
} from "../Pages";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    index: false,
    childrens: [],
  },
  {
    path: "/about",
    name: "about",
    component: About,
    index: false,
    childrens: [],
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
    index: false,
    childrens: [],
  },
  {
    path: "/Categories",
    name: "Categories",
    component: Cate,
    index: false,
    childrens: [],
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    index: false,
    childrens: [],
  },
  {
    path: "/contact",
    name: "contact us",
    component: Contact,
    index: false,
    childrens: [],
  },
  {
    path: "/wishlist",
    name: "wish list",
    component: Contact,
    index: false,
    childrens: [],
  },
  {
    path: "/checkout",
    component: Checkout,
    index: false,
    childrens: [],
  },
  {
    path: "/categories",
    component: Cate,
    index: false,
    childrens: [],
  },
  {
    path: "/account",
    component: Account,
    index: false,
    childrens: [],
  },
  {
    path: "/product/:id",

    component: ProductDetail,
    index: false,
    childrens: [],
  },
];
