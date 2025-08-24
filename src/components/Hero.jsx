import photo from "../assets/photo.png";
import { motion } from "framer-motion";

const FloatingCursors = () => {
  const cursors = [
    { id: 1, color: "#4EA8FF", pill: "Dev", start: { top: "70%", left: "8%" } },
    {
      id: 2,
      color: "#A374FF",
      pill: "thegr8binil",
      start: { top: "45%", left: "78%" },
    },
    {
      id: 3,
      color: "#FFD074",
      pill: "Product",
      start: { top: "8%", left: "48%" },
    },
  ];

  return (
    <>
      {cursors.map((c, i) => {
        // small, desynced motion patterns
        const dur = 6 + i * 1.5;
        const xSeq = [0, -40 + i * 10, 60 - i * 20, 0];
        const ySeq = [0, -30 + i * 5, 50 - i * 15, 0];

        return (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0.6, 1, 0.7, 0.9], scale: [0.9, 1, 0.95, 1] }}
            transition={{
              repeat: Infinity,
              duration: dur,
              ease: "easeInOut",
              delay: i * 0.3,
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
              animate={{ x: xSeq, y: ySeq }}
              transition={{
                repeat: Infinity,
                duration: dur,
                ease: "easeInOut",
                repeatType: "loop",
                delay: i * 0.2,
              }}
              className="flex items-center gap-2"
            >
              {/* custom cursor (triangle) */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "6px solid transparent",
                  borderBottom: `16px solid ${c.color}`,
                  transform: "rotate(-30deg)",
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
                }}
              />
              {/* pill label */}
              <div
                style={{
                  background: c.color,
                  color: "#08101A",
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  transform: "translateY(-6px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                }}
              >
                {c.pill}
              </div>
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
          className="bg-transparent py-4 px-6 font-semibold border-1 border-zinc-800 rounded-4xl text-lg cursor-pointer flex items-center gap-2 relative overflow-hidden"
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="h-4 w-4 rounded-full bg-[#37C713] inline-block z-10 relative"
          ></motion.span>
          <span className="relative z-10">Let's Connect</span>
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

      {/* floating cursors overlay */}
      <FloatingCursors />
    </div>
  );
};

export default Hero;
