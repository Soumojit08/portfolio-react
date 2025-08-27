import { Mail } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";
import { PiArrowBendLeftDownLight } from "react-icons/pi";

const Info = () => {
  return (
    <section className="bg-[#0E100F] text-white">
      <div className="mx-auto px-3 sm:px-6 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full ">
        {/* left column: fixed width, left aligned */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="text-left">
            <h5 className="text-base sm:text-lg font-medium">
              // Design & Code{" "}
            </h5>
            <h5 className="text-base sm:text-lg font-medium">Engage</h5>
          </div>
        </div>

        {/* center column: grows and keeps icons perfectly centered */}
        <div className="w-full md:flex-1 flex justify-center md:w-1/3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 cursor-pointer px-2 sm:px-6 py-3 rounded-full border border-zinc-700 bg-transparent justify-center">
            <motion.span
              className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F] relative"
              whileHover={{
                bottom: 10,
                scale: 1.2,
                boxShadow: "0px 2px 2px 1px #FFD074",
              }}
            >
              <FaXTwitter size={28} />
            </motion.span>

            <motion.span
              className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F] relative"
              whileHover={{
                bottom: 10,
                scale: 1.2,
                boxShadow: "0px 2px 2px 1px #FFD074",
              }}
            >
              <FaFacebookF size={28} />
            </motion.span>

            <motion.span
              className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F] relative"
              whileHover={{
                bottom: 10,
                scale: 1.2,
                boxShadow: "0px 2px 2px 1px #FFD074",
              }}
            >
              <LuGithub size={28} />
            </motion.span>

            <motion.span
              className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F] relative"
              whileHover={{
                bottom: 10,
                scale: 1.2,
                boxShadow: "0px 2px 2px 1px #FFD074",
              }}
            >
              <FaLinkedinIn size={28} />
            </motion.span>

            <motion.span
              className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F] relative"
              whileHover={{
                bottom: 10,
                scale: 1.2,
                boxShadow: "0px 2px 2px 1px #FFD074",
              }}
            >
              <FaInstagram size={28} />
            </motion.span>

            <motion.span
              className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F] relative"
              whileHover={{
                bottom: 10,
                scale: 1.2,
                boxShadow: "0px 2px 2px 1px #FFD074",
              }}
            >
              <FaDribbble size={28} />
            </motion.span>
          </div>
        </div>

        {/* right column: fixed width, right aligned */}
        <div className="w-full md:w-1/3 flex justify-end">
          <button className="flex items-center gap-1.5 px-2 sm:px-4 py-3 rounded-full border border-zinc-700 bg-transparent text-xs sm:text-base">
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <Mail size={22} className="sm:size-7" />
            </span>
            <span className="truncate max-w-[120px] sm:max-w-none">
              soumojitbanerjee08@gmail.com
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-3 sm:px-6 py-6 items-start md:items-center justify-between gap-6 md:gap-0">
        <div className="w-full md:w-[60%]">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-normal capitalize tracking-wider">
            Empowering success in the digital landscape.
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-normal capitalize tracking-wider">
            Together, we shape a visionary future,
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-normal capitalize tracking-wider">
            delivering on promises and continuously pioneering innovation.
          </h1>

          <div className="py-6 sm:py-10 text-2xl sm:text-4xl md:text-5xl leading-9.5 text-[#0AE448] font-semibold">
            <h1>Coding the Future</h1>
            <h1>Architecting Innovation</h1>
          </div>
        </div>
        <div className="w-full md:w-[20%] pb-8 md:pb-44">
          <h5 className="text-sm sm:text-base">
            My blend of design, coding, and interaction expertise distinguishes
            me within the tech industry.
          </h5>
        </div>
      </div>

      <div className="relative w-full h-[1px] bg-zinc-700">
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-amber-50 absolute z-10 left-1/2 sm:left-[90%] -top-7 sm:-top-10 flex items-center justify-center cursor-pointer -translate-x-1/2 sm:translate-x-0">
          <PiArrowBendLeftDownLight
            size={36}
            className="sm:size-14"
            color="#111"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
