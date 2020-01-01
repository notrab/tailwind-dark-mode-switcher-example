import React from "react";
import useDarkMode from "use-dark-mode";

const Toggle = () => {
  const darkMode = useDarkMode(false);
  const dark = darkMode.value;

  return (
    <button
      onClick={dark ? darkMode.disable : darkMode.enable}
      className="text-black"
    >
      {dark ? "Turn on the lights" : "Turn off the lights"}
    </button>
  );
};

export default function Layout({ children }) {
  return (
    <>
      <Toggle />
      {children}
    </>
  );
}
