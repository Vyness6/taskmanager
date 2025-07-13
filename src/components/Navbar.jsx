import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-blue-500 text-white"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
