import photo from "../assets/photo.png";
import { motion } from "framer-motion";
import cursor from "../assets/Cursor.svg";
import dev from "../assets/dev.svg";
import usernamer from "../assets/username.svg";

const FloatingCursors = () => {
  const cursors = [
    { id: 1, svg: cursor, start: { top: "20%", left: "8%" } },
    { id: 2, svg: dev, start: { top: "30%", left: "78%" } },
    { id: 3, svg: usernamer, start: { top: "8%", left: "48%" } },
  ];

  return (
    <>
      {cursors.map((c, i) => {
        const dur = 5 + i * 1.2;
        return (
          <motion.div
            key={c.id}
            initial={{ opacity: 1, scale: 2.5 }}
            animate={{ opacity: [1], scale: [2.5] }}
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
              {/* use the svg assigned to this cursor */}
              <motion.img
                src={c.svg}
                alt={`floating-cursor-${c.id}`}
                className="w-8 h-8"
                style={{ filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.35))" }}
                animate={{ y: [0, -4, 2, 0], rotate: [0, -8, 6, 0] }}
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

      {/* content */}
      <div className="name-sec flex gap-2 items-center">
        <h1 className="text-8xl font-medium text-[#A374FF]">DIGITAL</h1>
        <div className="flex flex-col">
          <h5>// Based in</h5>
          <h5>Kolkata, India</h5>
        </div>
      </div>

      <div className="name-sec flex gap-2 items-center">
        <h1 className="text-8xl font-medium text-[#FFD074]">EXPERIENCE</h1>
      </div>

      <div className="name-sec flex gap-4 items-center">
        <h1 className="text-8xl font-medium text-[#FFFFE3]">DESIGNER</h1>

        <motion.button
          drag
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          whileHover={{ backgroundColor: "#ffffe3", color: "#111" }}
          className="bg-transparent py-4 px-6 font-semibold border-1 border-zinc-800 rounded-4xl text-lg cursor-pointer flex items-center gap-2 relative overflow-hidden"
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="h-4 w-4 rounded-full bg-[#37C713] inline-block z-10 relative"
          />
          <span className="relative z-10">Let's Connect</span>
        </motion.button>
      </div>

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

      {/* floating cursors overlay */}
      <FloatingCursors />
    </div>
  );
};

export default Hero;
