import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#0E100F] text-white min-h-screen">
      <div className="text px-6 py-10 w-[40%]">
        <h3 className="text-2xl tracking-tight leading-8">
          I specialize in engineering bespoke solutions, consistently pushing
          the limits in each project, with an unwavering dedication to
          prioritizing excellence.
        </h3>
      </div>

      <div className="flex items-center justify-end w-full px-20">
        <motion.button
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
          className="bg-transparent py-6 px-12 font-semibold border-2 border-zinc-800 rounded-full text-lg cursor-pointer flex items-center gap-2 relative overflow-hidden"
        >
          <span className="relative z-10 text-xl">About Me</span>
          <ArrowRight size={32}/>
        </motion.button>
      </div>
    </section>
  );
};

export default About;
