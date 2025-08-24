import photo from "../assets/photo.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center top-25  px-6 text-center relative min-h-screen ">
      {/* avtar */}
      <div className="name-sec flex gap-4 items-center">
        <motion.div
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          className="h-20 w-20 bg-[#FFFFE3] rounded-full relative overflow-hidden cursor-pointer"
        >
          <img className="absolute object-cover w-full " src={photo} />
        </motion.div>
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
          whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
          className="bg-transparent py-4 px-6 font-semibold border-1 border-zinc-800 rounded-4xl text-lg cursor-pointer flex items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="h-4 w-4 rounded-full bg-[#37C713] inline-block"
          ></motion.span>
          <span>Let's Connect</span>
        </motion.button>
      </div>

      {/* role */}
      <div className="name-sec flex flex-row-reverse gap-2 items-center">
        <h1 className="text-8xl font-medium text-[#17F1D1]">
          <span className="text-[#FFFFE3]">&</span> DEVELOPER 
          <span className="h-4 w-4 inline-block bg-[#17F1D1] ml-1"></span>
        </h1>
        <div className="flex flex-col">
          <h5>// UI-UX Designer</h5>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
