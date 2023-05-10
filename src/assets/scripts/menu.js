export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `<a href="#/">Home</a> 
    <a href="#/pageone">Page one</a> 
    <a href="#/pagetwo">Page Two</a> 
    <a href="#/pagethree">Page Three</a>`;
  return $menu;
}
