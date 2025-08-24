import photo from "../assets/photo.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center top-30  px-6 text-center relative min-h-screen ">
      {/* avtar */}
      <div className="name-sec flex gap-4 items-center">
        <div className="h-20 w-20 bg-[#FFFFE3] rounded-full relative overflow-hidden">
          <img className="absolute object-cover w-full " src={photo} />
        </div>
        <div className="py-4 px-6 rounded-4xl border-1 border-zinc-800">
          <h2 className="text-xl">Hello, I'm Soumojit</h2>
        </div>
      </div>

      {/* loc */}
      <div className="name-sec flex gap-2 items-center">
        <h1 className="text-8xl font-medium text-[#A374FF]">DIGITAL</h1>
        <div className="flex flex-col">
          <h5>// Based in</h5>
          <h5>Kolkata, India</h5>
        </div>
      </div>

      {/* exp  */}
      <div className="name-sec flex gap-2 items-center">
        <h1 className="text-8xl font-medium text-[#FFD074]">EXPERIENCE</h1>
      </div>

      {/* designer  */}
      <div className="name-sec flex gap-4 items-center">
        <h1 className="text-8xl font-medium text-[#FFFFE3]">DESIGNER</h1>

        <motion.button
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          className="bg-transparent py-4 px-6 font-semibold border-1 border-zinc-800 rounded-4xl cursor-pointer"
        >
          Let's Connect
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
