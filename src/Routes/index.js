import {
  About,
  Account,
  Blog,
  BlogDetail,
  BlogList,
  Cate,
  Checkout,
  Contact,
  Home,
  ProductDetail,
  Shop,
  CateDetail,
  Cart
} from "../Pages";

export default [
  {
    path: "/home",
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
    childrens: [
      {
        path: "/blog",
        name: "blog",
        component: BlogList,
        index: false,
      }, 
      {
        path: ":slug",
        name: "blog",
        component: BlogDetail,
        index: false,
        childrens: [],
      },
    ],
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
  {
    path: "/categories/:slug",
    name: "categories",
    component: CateDetail,
    index: false,
    childrens: [],
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    index: false,
    childrens: [],
  },
];
