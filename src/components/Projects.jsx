import { div } from "framer-motion/client";
import FlowingMenu from "./FlowingMenu";

const Projects = () => {
  const demoItems = [
    {
      link: "#",
      text: "Mojave",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="uppercase text-4xl text-[#A374FF] mb-8 px-6">
        MY PROJECTS
      </h2>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default Projects;
