import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyled } from "./styles/globalstyle";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  );
}
