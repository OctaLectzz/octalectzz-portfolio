import React, { useState, useEffect } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  const updateTheme = (newTheme) => {
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    localStorage.setItem("selected-theme", newTheme);
    const iconTheme = newTheme === "dark" ? "ri-moon-line" : "ri-sun-line";
    localStorage.setItem("selected-icon", iconTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("selected-theme");
    if (storedTheme) {
      setTheme(storedTheme);
      updateTheme(storedTheme);
    }
  }, []);

  return (
    <div id="theme-button" className="change-theme" onClick={toggleTheme}>
      <i className={`ri ${theme === "dark" ? "ri-moon-line" : "ri-sun-line"}`}></i>
    </div>
  );
};
