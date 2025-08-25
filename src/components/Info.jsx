import { Mail } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <section className="bg-[#0E100F] text-white">
      <div className=" mx-auto px-6 py-4 flex items-center gap-6">
        {/* left column: fixed width, left aligned */}
        <div className="w-1/3">
          <div className="text-left">
            <h5 className="text-lg font-medium">// Design & Code </h5>
            <h5 className=" text-lg font-medium">Engage</h5>
          </div>
        </div>

        {/* center column: grows and keeps icons perfectly centered */}
        <div className="flex-1 flex justify-center w-1/3">
          <div className="flex items-center gap-2 cursor-pointer px-6 py-3 rounded-full border border-zinc-700 bg-transparent">
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
        <div className="w-1/3 flex justify-end">
          <button className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-zinc-700 bg-transparent">
            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <Mail size={28} />
            </span>
            <span className="text-base">soumojitbanerjee08@gmail.com</span>
          </button>
        </div>
      </div>

      <div className="flex px-6 py-6 items-center justify-between">
        <div className="w-[60%]">
          <h1 className="text-4xl font-normal capitalize tracking-wider">
            Empowering success in the digital landscape.
          </h1>
          <h1 className="text-4xl font-normal capitalize tracking-wider">
            Together, we shape a visionary future,
          </h1>
          <h1 className="text-4xl font-normal capitalize tracking-wider">
            delivering on promises and continuously pioneering innovation.
          </h1>

          <div className="py-10 text-5xl leading-9.5 text-[#0AE448] font-semibold">
            <h1>Coding the Future</h1>
            <h1>Architecting Innovation</h1>
          </div>
        </div>
        <div className="w-[20%] pb-44">
          <h5>
            My blend of design, coding, and interaction expertise distinguishes
            me within the tech industry.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Info;
