import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  MonitorSmartphone,
  Palette,
  Laptop2,
} from "lucide-react";

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
    <section className="bg-[#0E100F] text-white min-h-screen px-6 py-12">
      <div className="mx-auto">
        {/* Intro text */}
        <div className="mb-8 w-full md:w-2/5">
          <h3 className="text-2xl tracking-tight leading-8">
            I specialize in engineering bespoke solutions, consistently pushing
            the limits in each project, with an unwavering dedication to
            prioritizing excellence.
          </h3>
        </div>

        {/* CTA aligned to right */}
        <div className="flex justify-end mb-12 pr-20">
          <motion.button
            drag
            dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
            whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
            className="bg-transparent py-6 px-12 font-semibold border border-zinc-700 rounded-full text-lg cursor-pointer flex items-center gap-3"
            aria-label="About me"
          >
            <span className="relative z-10 text-xl">About Me</span>
            <ArrowRight size={32} />
          </motion.button>
        </div>

        {/* Section title */}
        <h2 className="uppercase text-4xl text-[#A374FF] text-center mb-8">
          what i do
        </h2>

        {/* Cards grid: responsive */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.Icon;
            return (
              <motion.article
                key={card.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-[#191917] rounded-xl border h-96 border-zinc-700 p-6 flex flex-col gap-4 justify-end"
                aria-label={card.role}
              >
                <Icon size={48} />
                <h3 className="text-lg font-semibold ">{card.role}</h3>
                <p className="text-sm text-zinc-300 flex-1">{card.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
