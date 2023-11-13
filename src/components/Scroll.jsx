import React, { useEffect } from "react";

// Scroll Active Pages
export const ScrollActive = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionsClass = document.querySelector(
            ".nav__menu a[href*=" + sectionId + "]"
          );

        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionsClass.classList.add("active-link");
        } else {
          sectionsClass.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return null; // This component doesn't render anything
};

// Scroll Up
export const ScrollUp = () => {
  useEffect(() => {
    const scrollUpElement = document.getElementById("scroll-up");

    const handleScroll = () => {
      // When the scroll is higher than 150 viewport height, add the show-scroll class to the a tag with the scrollup class
      window.scrollY >= 150
        ? scrollUpElement.classList.add("show-scroll")
        : scrollUpElement.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-s-line"></i>
    </a>
  );
};
