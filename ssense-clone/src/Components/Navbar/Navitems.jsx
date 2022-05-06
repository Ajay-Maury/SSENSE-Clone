export const NavItemsLeft = [
    {
        id: 1,
        title: "MENSWEAR",
        path :"/"
    },
    {
        id: 2,
        title: "WOMENSWEAR",
        path :"/"
    },
    {
        id: 3,
        title: "EVERYTHING ELSE",
        path :"/"
    },
    {
        id: 4,
        title: "SEARCH",
        path :"/"
    },
]

let login = false
let CartItem = 0

export const NavItemsRight = [
  {
    id: 1,
    title: "ENGLISH",
    path: "/",
  },
  {
    id: 2,
    title: `${login?"ACCOUNT":"LOGIN"}`,
    path: "/",
  },
  {
    id: 3,
    title: "WISHLIST",
    path: "/",
  },
  {
    id: 4,
    title: `SHOPPING CART (${CartItem})`,
    path: "/",
  },
];

export const LangMenu = [
  {
    id: 1,
    title: "Français",
    path: "/",
  },
  {
    id: 2,
    title: "日本語",
    path: "/",
  },
  {
    id: 3,
    title: "中文",
    path: "/",
  },
  {
    id: 4,
    title: "한국어",
    path: "/",
  },
];
export const AccountMenu = [
  {
    id: 1,
    title: "ACCOUNT DETAILS",
    path: "/",
  },
  {
    id: 2,
    title: "EMAIL PREFERENCES",
    path: "/",
  },
  {
    id: 3,
    title: "ORDER HISTORY",
    path: "/",
  },
  {
    id: 4,
    title: "APPOINTMENTS",
    path: "/",
  },
  {
    id: 5,
    title: "ADDRESSES",
    path: "/",
  },
  {
    id: 6,
    title: "LOGOUT",
    path: "/",
  },
];