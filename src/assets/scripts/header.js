import { Menu } from "./menu";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Menu());
  return $header;
}
