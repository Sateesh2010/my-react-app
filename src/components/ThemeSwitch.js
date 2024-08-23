import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme.js";

function ThemeSwitch(props) {
  // const [theme, setTheme] = useState("light");

  const { bgColor, altTheme } = useTheme();

  useEffect(() => {
    // document.body.style.backgroundColor = theme === "dark" ? "#333" : "#eee";
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  // if (theme === "light") {
  //   return (
  //     <button
  //       onClick={() => {
  //         setTheme("dark");
  //         props.changeTheme("dark");
  //       }}
  //     >
  //       Dark
  //     </button>
  //   );
  // } else {
  //   return (
  //     <button
  //       onClick={() => {
  //         setTheme("light");
  //         props.changeTheme("light");
  //       }}
  //     >
  //       Light
  //     </button>
  //   );
  // }

  return (
    <>
      <button onClick={() => props.changeTheme(altTheme)}>{altTheme}</button>
    </>
  );
}

export default ThemeSwitch;
