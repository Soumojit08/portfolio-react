import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TechStack = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPostgresql />,
      title: "Postgresql",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiExpress />,
      title: "Express",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiNodedotjs />,
      title: "Node.js",
      href: "https://tailwindcss.com",
    },

    {
      node: <FaJava />,
      title: "Java",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPython />,
      title: "Python",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiNumpy />,
      title: "Numpy",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPandas />,
      title: "Pandas",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiFigma />,
      title: "Figma",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiDocker />,
      title: "Docker",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiGit />,
      title: "Git",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiGithub />,
      title: "Github",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <div className="w-full bg-[#0E100F] text-white">
      <h2 className="uppercase text-4xl text-[#A374FF] mb-6 px-6">
        MY Tech-stack
      </h2>

      <div className="w-full px-48">
        <h2 className="text-center text-3xl">
          My expertise spans a diverse range of
          <span className="text-[#FFD074]"> technologies</span>, enabling me to
          deliver comprehensive and
          <span className="text-[#17F1D1]"> cutting-edge solutions</span> across
          various platforms.
        </h2>
      </div>

      <div className="mx-auto mt-15">
        <div
          style={{
            height: "180px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={64}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0E100F"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
