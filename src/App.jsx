import { ReactLenis, useLenis } from "lenis/react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CardNav from "./components/CardNav";
import logo from "./assets/logo-removebg-preview.png";

const App = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  const items = [
    {
      label: "About",
      bgColor: "#191917",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#191917",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#191917",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
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
        buttonBgColor="#fff"
        buttonTextColor="#0E100F"
        ease="back.out(1.7)"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </div>
  );
};

export default App;
