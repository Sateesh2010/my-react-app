import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import { useState } from "react";
import Product from "./components/Product";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";
import ProductList from "./containers/ProductList";
import Checkout from "./containers/Checkout";
import AppRouter from "./Approuter";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Currency from "./components/Currency";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Demo /> */}
        <Menu />
        <ThemeContext.Provider value={theme}>
          <Currency />
          <ThemeSwitch
            changeTheme={(thm) => {
              console.log("Theme Changed to: ", thm); // For demonstration purposes, logs the new theme to the console.
              setTheme(thm);
            }}
          />
          {/* <Checkout /> */}
          {/* <ProductList /> */}
          <AppRouter />
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
