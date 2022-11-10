import type { SocialsObject } from "./types";

export const SITE = {
  website: "https://kemu.me/",
  author: "Hkmu",
  desc: "",
  title: "Kemu",
  ogImage: "default-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialsObject = [
  {
    name: "Github",
    href: "https://github.com/Hkmu",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@kemu.me",
    active: false,
  },
];
