import me from "../assets/me.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center  px-6 text-center relative min-h-screen ">
      <div className="name-sec flex gap-6 items-center">
        <div className="h-18 w-18 bg-[#FFFFE3] rounded-full relative overflow-hidden">
          <img className="absolute object-cover w-full " src={me} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
