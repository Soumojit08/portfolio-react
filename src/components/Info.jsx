import { Mail } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

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
            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <FaXTwitter size={28} />
            </span>

            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <FaFacebookF size={28} />
            </span>

            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <LuGithub size={28} />
            </span>

            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <FaLinkedinIn size={28} />
            </span>

            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <FaInstagram size={28} />
            </span>

            <span className="w-10 h-10 rounded-full bg-[#FFFFE3] flex items-center justify-center text-[#0E100F]">
              <FaDribbble size={28} />
            </span>
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
    </section>
  );
};

export default Info;
