import { useContext } from "react";
import { ThemeContext } from "../context";

function useTheme() {
  const theme = useContext(ThemeContext);
  const bgColor = theme === "light" ? "#eee" : "#333";
  const txtColor = theme === "light" ? "#333" : "#eee";
  const altTheme = theme === "light" ? "dark" : "light";
  return { theme, altTheme, txtColor, bgColor };
}
export default useTheme;
