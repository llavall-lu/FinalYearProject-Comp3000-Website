import { list, check, todo, home, edit, gamepad, shield, blog, chat } from "./icons";

const menu = [
  {
    id: 1,
    title: "Main",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Blog",
    icon: blog,
    link: "/important",
  },
  {
    id: 3,
    title: "VPN",
    icon: shield,
    link: "/completed",
  },
  {
    id: 4,
    title: "Game",
    icon: gamepad,
    link: "/incomplete",
  },
  {
    id: 5,
    title: "Global Chat",
    icon: chat,
    link: "/chat",
  },
];

export default menu;
