import FlowingMenu from "./FlowingMenu";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const demoItems = [
    {
      link: "https://medicon-za1z.vercel.app/",
      text: "Medicon",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Docs-File System",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Blog Application",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Chat Application",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div className="w-full bg-[#0E100F] text-white min-h-screen py-12">
      <h2 className="uppercase text-4xl text-[#A374FF] mb-8 px-6">
        MY PROJECTS
      </h2>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
        <div className="relative w-full h-[1px] bg-zinc-700"></div>
      </div>

      {/* CTA aligned to right */}
      <div className="flex justify-center mt-10 mb-8">
        <motion.button
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
          className="bg-transparent py-6 px-12 font-semibold border border-zinc-700 rounded-full text-lg cursor-pointer flex items-center gap-3"
          aria-label="About me"
        >
          <span className="relative z-10 text-xl">Load More</span>
          <ArrowRight size={32} />
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;
