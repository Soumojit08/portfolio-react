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
    <div className="bg-[#0E100F] p-4 sm:p-8 min-h-[60vh]">
      <div className="flex flex-col gap-10 sm:gap-20 overflow-hidden border rounded-3xl border-zinc-700 h-full">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-0">
          {/* text  */}
          <div className="py-6 sm:py-12 px-4 sm:px-12 text-2xl sm:text-3xl font-semibold leading-8">
            <h1>
              Where <span className="text-[#A374FF]">aesthetic</span> &
            </h1>
            <h1>
              <span className="text-[#17F1D1]">funcionality</span> meet
            </h1>
          </div>

          {/* navigation  */}
          <div className="py-6 sm:py-12 px-4 sm:px-12 text-lg sm:text-xl leading-8">
            <h4 className="text-[#FF8709] mb-4 sm:mb-6 font-semibold text-xl sm:text-2xl">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-4 font-medium">
              <li className="cursor-pointer hover:text-[#178BDA]">Home</li>
              <li className="cursor-pointer hover:text-[#178BDA]">About Me</li>
              <li className="cursor-pointer hover:text-[#178BDA]">Doctor</li>
            </ul>
          </div>

          {/* links  */}
          <div className="py-6 sm:py-12 px-4 sm:px-12 text-lg sm:text-xl leading-8">
            <h4 className="text-[#17F1D1] mb-4 sm:mb-6 font-semibold text-xl sm:text-2xl">
              Follow Me
            </h4>

            <div className="flex font-normal gap-4 sm:gap-8">
              <ul className="flex flex-col gap-2 sm:gap-4">
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

              <ul className="flex flex-col gap-2 sm:gap-4">
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
          <div className="py-8 sm:py-14 px-4 sm:px-12 text-lg sm:text-xl leading-7 flex flex-col gap-2">
            <motion.button
              className="flex items-center gap-2 sm:gap-3 border-b border-zinc-700 py-3 sm:py-4 cursor-pointer"
              onMouseEnter={() => setHovContact(true)}
              onMouseLeave={() => setHovContact(false)}
              whileHover={{ color: "#178BDA" }}
            >
              <span className="justify-start flex flex-col text-left">
                <h1 className="text-lg sm:text-2xl font-medium">Contact me</h1>
                <h5 className="text-xs sm:text-base text-zinc-300 font-medium">
                  say hello!
                </h5>
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 border border-zinc-700 rounded-full flex items-center justify-center">
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
              className="flex items-center gap-2 sm:gap-3 py-3 sm:py-4 cursor-pointer"
              whileHover={{ color: "#178BDA" }}
            >
              <span className="justify-start flex flex-col text-left">
                <h1 className="text-lg sm:text-2xl font-medium">My Projects</h1>
                <h5 className="text-xs sm:text-base text-zinc-300 font-medium">
                  Explore Projects
                </h5>
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 border border-zinc-700 rounded-full flex items-center justify-center">
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
        <div className="w-full flex items-end justify-center gap-x-0 sm:gap-x-4">
          <img src={s} className="h-[48px] md:h-[130px] lg:h-[210px]" alt="s" />
          <img src={o} className="h-[48px] md:h-[130px] lg:h-[210px]" alt="o" />
          <img src={u} className="h-[48px] md:h-[130px] lg:h-[210px]" alt="u" />
          <img src={m} className="h-[48px] md:h-[130px] lg:h-[210px]" alt="m" />
          <img
            src={o}
            className="h-[48px] md:h-[130px] lg:h-[210px]"
            alt="o2"
          />
          <img
            src={zero}
            className="h-[48px] md:h-[130px] lg:h-[210px]"
            alt="zero"
          />
          <img
            src={eight}
            className="h-[48px] md:h-[130px] lg:h-[210px]"
            alt="eight"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mt-4">
        <h2 className="flex items-center text-base sm:text-2xl font-semibold gap-1 text-center">
          soumojitbanerjee08
          <span>
            <Copyright />
          </span>
          2025 - Privacy Policy
        </h2>
        <h2 className="text-base sm:text-2xl font-semibold text-center">
          Kolkata, India
        </h2>
      </div>
    </div>
  );
};

export default Footer;
