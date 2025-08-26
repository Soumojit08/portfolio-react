import { ReactLenis, useLenis } from "lenis/react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import CardNav from "./components/CardNav";
import logo from "./assets/logo-removebg-preview.png";
import Info from "./components/Info";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  const items = [
    {
      label: "About",
      // bgColor: "#191917",
      bgColor: "#A374FF",
      textColor: "#1e1e1e",
      links: [
        { label: "Education", ariaLabel: "About Company" },
        { label: "Certificates", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#FFD074",
      textColor: "#1e1e1e",
      links: [
        { label: "Medicon", ariaLabel: "Project 1" },
        { label: "Blog App", ariaLabel: "Project 2" },
        { label: "Photo Editor", ariaLabel: "Project 3" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#17F1D1",
      textColor: "#1e1e1e",
      links: [
        { label: "Email", ariaLabel: "Email me" },
        { label: "Github", ariaLabel: "Github" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="bg-[#0E100F] min-h-screen text-white">
      <ReactLenis root />
      <CardNav
        logo={logo}
        logoAlt="Soumojit Banerjee"
        items={items}
        baseColor="#0E100F"
        menuColor="#fff"
        // buttonBgColor="#fff"
        // buttonTextColor="#0E100F"
        ease="back.out(1.7)"
      />
      <Hero />
      <Info />
      <About />
      <Projects />
    </div>
  );
};

export default App;
