import { Header } from "./header";

export function App() {
  const d = document,
    $root = d.getElementById("root");
  $root.appendChild(Header());
  return $root;
}
