import photo from "../assets/avtar.png";
import { motion } from "framer-motion";
import cursor from "../assets/Cursor.svg";
import dev from "../assets/dev.svg";
import usernamer from "../assets/username.svg";

const FloatingCursors = () => {
  // Responsive positions for each cursor: first value is for mobile, second for desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const cursors = [
    {
      id: 1,
      svg: cursor,
      start: {
        top: isMobile ? "8%" : "38%", // mobile : desktop
        left: isMobile ? "10%" : "25%", // mobile : desktop
      },
    },
    {
      id: 2,
      svg: dev,
      start: {
        top: isMobile ? "8%" : "25%", // mobile : desktop
        left: isMobile ? "70%" : "73%", // mobile : desktop
      },
    },
    {
      id: 3,
      svg: usernamer,
      start: {
        top: isMobile ? "2%" : "6%", // mobile : desktop
        left: isMobile ? "40%" : "48%", // mobile : desktop
      },
    },
  ];

  return (
    <>
      {cursors.map((c, i) => {
        const dur = 5 + i * 1.2;
        return (
          <motion.div
            key={c.id}
            initial={{ opacity: 1, scale: 2.5 }}
            transition={{
              repeat: Infinity,
              duration: dur,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
            style={{
              position: "absolute",
              top: c.start.top,
              left: c.start.left,
              pointerEvents: "none",
              zIndex: 60,
            }}
            className="select-none"
          >
            <motion.div
              animate={{ x: [0, 12, -8, 0], y: [0, -6, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: dur,
                ease: "easeInOut",
                repeatType: "loop",
                delay: i * 0.08,
              }}
            >
              <motion.img
                src={c.svg}
                alt={`floating-cursor-${c.id}`}
                className="w-8 h-8"
                style={{ filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.35))" }}
                animate={{ y: [0, -4, 3, 0], rotate: [2, -8, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: dur / 2,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-3 sm:px-6 text-center relative min-h-screen border-b border-zinc-700 z-10 overflow-hidden overflow-x-hidden mt-10 md:mt-20">
      {/* avtar */}
      <div className="name-sec flex flex-col sm:flex-row gap-2 sm:gap-4 items-center mb-4">
        <motion.div
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          className="h-16 w-16 sm:h-20 sm:w-20 bg-[#FFFFE3] rounded-full relative overflow-hidden cursor-pointer"
        >
          <img className="absolute object-cover w-full " src={photo} />
        </motion.div>
        <div className="py-2 px-4 sm:py-4 sm:px-6 rounded-4xl border border-zinc-800">
          <h2 className="text-lg sm:text-xl">Hello, I'm Soumojit</h2>
        </div>
      </div>

      {/* content */}
      <div className="name-sec flex flex-col md:flex-row gap-1 md:gap-2 items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium text-[#A374FF]">
          DIGITAL
        </h1>
        <div className="flex flex-col text-base sm:text-lg md:text-xl">
          <h5>// Based in</h5>
          <h5>Kolkata, India</h5>
        </div>
      </div>

      <div className="name-sec flex gap-1 md:gap-2 items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium text-[#FFD074]">
          EXPERIENCE
        </h1>
      </div>

      <div className="name-sec flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium text-[#FFFFE3]">
          DESIGNER
        </h1>
        <motion.button
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
          className="bg-transparent py-2 px-4 sm:py-4 sm:px-6 font-semibold border-2 border-zinc-800 rounded-4xl text-base sm:text-lg cursor-pointer flex items-center gap-2 relative overflow-hidden mt-2 sm:mt-0"
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#37C713] inline-block z-10 relative"
          />
          <span className="relative z-10">Let's Connect</span>
        </motion.button>
      </div>

      <div className="name-sec flex flex-col-reverse md:flex-row-reverse gap-1 md:gap-2 items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium text-[#17F1D1]">
          <span className="text-[#FFFFE3]">&</span> DEVELOPER
          <span className="h-3 w-3 sm:h-4 sm:w-4 inline-block bg-[#17F1D1] ml-1"></span>
        </h1>
        <div className="flex flex-col text-base sm:text-lg md:text-xl">
          <h5>// UI-UX Designer</h5>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>

      {/* floating cursors overlay: hide on mobile for clarity */}
      <div className="hidden sm:block">
        <FloatingCursors />
      </div>

      <div className="mt-4 px-2 sm:px-0">
        <h2 className="text-lg sm:text-2xl md:text-3xl">
          I create a digital experience that borders on
        </h2>
        <h2 className="text-lg sm:text-2xl md:text-3xl">
          <span className="text-[#A374FF]">efficiency</span>,{" "}
          <span className="text-[#FFD074]">aesthetics</span> and{" "}
          <span className="text-[#17F1D1]">functionality</span>.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
