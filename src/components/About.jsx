import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  MonitorSmartphone,
  Palette,
  Laptop2,
} from "lucide-react";
import { MdWorkHistory } from "react-icons/md";

const About = () => {
  const cards = [
    {
      id: 1,
      color: "#00BAD5",
      Icon: Brush,
      role: "UI/UX",
      desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      id: 2,
      color: "#9D95FF",
      Icon: MonitorSmartphone,
      role: "Web/App Development",
      desc: "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      id: 3,
      color: "#FEC5FB",
      Icon: Palette,
      role: "Design & Creative",
      desc: "Crafting visually stunning design that connects deeply with your audience.",
    },
    {
      id: 4,
      color: "#FF8709",
      Icon: Laptop2,
      role: "Development",
      desc: "Bringing your vision to life with the latest technology and design trends.",
    },
  ];



  return (
    <section className="bg-[#0E100F] text-white min-h-screen py-8 sm:py-12">
      <div className="mx-auto px-3 sm:px-6 max-w-7xl">
        {/* Intro text */}
        <div className="mb-8 w-full md:w-2/5">
          <h3 className="text-lg sm:text-2xl tracking-tight leading-7 sm:leading-8">
            I specialize in engineering bespoke solutions, consistently pushing
            the limits in each project, with an unwavering dedication to
            prioritizing excellence.
          </h3>
        </div>

        {/* CTA aligned to right */}
        <div className="flex justify-end mb-8 sm:mb-12 pr-0 sm:pr-20">
          <motion.button
            drag
            dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
            whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
            className="bg-transparent py-3 px-6 sm:py-6 sm:px-12 font-semibold border border-zinc-700 rounded-full text-base sm:text-lg cursor-pointer flex items-center gap-2 sm:gap-3"
            aria-label="About me"
          >
            <span className="relative z-10 text-base sm:text-xl">About Me</span>
            <ArrowRight size={22} className="sm:size-8" />
          </motion.button>
        </div>

        {/* Section title */}
        <h2 className="uppercase text-2xl sm:text-4xl text-[#A374FF] mb-8 text-center sm:text-left">
          what i do
        </h2>

        {/* Cards grid: responsive */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.Icon;
            return (
              <motion.article
                key={card.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-[#191917] rounded-xl border h-72 sm:h-96 border-zinc-700 p-4 sm:p-6 flex flex-col justify-end items-start gap-y-2 sm:gap-y-4"
                aria-label={card.role}
              >
                <Icon size={36} className="sm:size-12" color={card.color} />
                <div style={{ color: card.color }}>
                  <h3 className="text-base sm:text-xl font-semibold">
                    {card.role}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 sm:mt-2">{card.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="relative w-full h-[1px] bg-zinc-700 mt-12 sm:mt-20">
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-amber-50 absolute z-10 left-1/2 sm:left-[90%] -top-7 sm:-top-10 flex items-center justify-center cursor-pointer -translate-x-1/2 sm:translate-x-0">
          <MdWorkHistory size={36} className="sm:size-14" color="#111" />
        </div>
      </div>
    </section>
  );
};

export default About;
