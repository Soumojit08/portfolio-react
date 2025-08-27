import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";
import discord from "../assets/icons/discord.svg";
import { motion } from "framer-motion";
import { ArrowRight, Copyright } from "lucide-react";
import { useState } from "react";
import s from "../assets/name-svg/s.svg";
import o from "../assets/name-svg/o.svg";
import u from "../assets/name-svg/u.svg";
import m from "../assets/name-svg/m.svg";
import zero from "../assets/name-svg/0.svg";
import eight from "../assets/name-svg/8.svg";

const Footer = () => {
  const [hovContact, setHovContact] = useState(false);
  const [hovProjects, setHovProjects] = useState(false);

  return (
    <div className="bg-[#0E100F] p-8 h-screen">
      <div className="h-11/12 flex flex-col justify-between gap-30 overflow-hidden border-1 rounded-3xl border-zinc-700">
        <div className="flex justify-between">
          {/* text  */}
          <div className="py-12 px-12 text-3xl font-semibold leading-8">
            <h1>
              Where <span className="text-[#A374FF]">aesthetic</span> &
            </h1>
            <h1>
              <span className="text-[#17F1D1]">funcionality</span> meet
            </h1>
          </div>

          {/* navigation  */}
          <div className="py-12 px-12 text-xl leading-8">
            <h4 className="text-[#FF8709] mb-6 font-semibold text-2xl">
              Explore
            </h4>
            <ul className="flex flex-col gap-4 font-medium">
              <li className="cursor-pointer hover:text-[#178BDA]">Home</li>
              <li className="cursor-pointer hover:text-[#178BDA]">About Me</li>
              <li className="cursor-pointer hover:text-[#178BDA]">Doctor</li>
            </ul>
          </div>

          {/* links  */}
          <div className="py-12 px-12 text-xl leading-8">
            <h4 className="text-[#17F1D1] mb-6 font-semibold text-2xl">
              Follow Me
            </h4>

            <div className="flex font-normal gap-8">
              <ul className="flex flex-col gap-4">
                <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                  <img src={linkedin} className="h-8 w-8" />
                  LinkedIn
                </li>
                <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                  <img src={twitter} className="h-8 w-8" />
                  Twitter
                </li>
                <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                  <img src={github} className="h-8 w-8" />
                  Github
                </li>
              </ul>

              <ul className="flex flex-col gap-4">
                <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                  <img src={facebook} className="h-8 w-8" />
                  Facebook
                </li>
                <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                  <img src={discord} className="h-8 w-8" />
                  Discord
                </li>
              </ul>
            </div>
          </div>

          {/* cta btns  */}
          <div className="py-14 px-12 text-xl leading-7">
            <motion.button
              className="flex items-center gap-3 border-b-1 border-zinc-700 py-4 cursor-pointer"
              onMouseEnter={() => setHovContact(true)}
              onMouseLeave={() => setHovContact(false)}
              whileHover={{ color: "#178BDA" }}
            >
              <span className="justify-start flex flex-col text-left">
                <h1 className="text-2xl font-medium">Contact me</h1>
                <h5 className="text-base text-zinc-300 font-medium">
                  say hello!
                </h5>
              </span>
              <div className="w-10 h-10 border-1 border-zinc-700 rounded-full flex items-center justify-center">
                <ArrowRight
                  color="#0AE448"
                  style={{
                    transition: "transform 0.3s",
                    transform: hovContact ? "rotate(-45deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </motion.button>

            <motion.button
              onMouseEnter={() => setHovProjects(true)}
              onMouseLeave={() => setHovProjects(false)}
              className="flex items-center gap-3 py-4 cursor-pointer"
              whileHover={{ color: "#178BDA" }}
            >
              <span className="justify-start flex flex-col text-left">
                <h1 className="text-2xl font-medium">My Projects</h1>
                <h5 className="text-base text-zinc-300 font-medium">
                  Explore Projects
                </h5>
              </span>
              <div className="w-10 h-10 border-1 border-zinc-700 rounded-full flex items-center justify-center">
                <ArrowRight
                  color="#0AE448"
                  style={{
                    transition: "transform 0.3s",
                    transform: hovProjects ? "rotate(-45deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* svgs  */}
        <div className="w-full flex ">
          <img src={s} className="h-[220px]" />
          <img src={o} className="h-[220px]" />
          <img src={u} className="h-[220px]" />
          <img src={m} className="h-[220px]" />
          <img src={o} className="h-[220px]" />
          <img src={zero} className="h-[220px] " alt="zero" />
          <img src={eight} className="h-[220px]" alt="eight" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="flex items-center text-2xl font-semibold gap-1">
          soumojitbanerjee08
          <span>
            <Copyright />
          </span>
          2025 - Privacy Policy
        </h2>

        <h2 className="text-2xl font-semibold">Kolkata, India</h2>
      </div>
    </div>
  );
};

export default Footer;
