import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";
import discord from "../assets/icons/discord.svg";

const Footer = () => {
  return (
    <div className="bg-[#0E100F] p-8 h-screen">
      <div className="h-11/12 flex  justify-between border-1 rounded-3xl border-zinc-700">
        {/* text  */}
        <div className="py-12 px-12 text-3xl font-semibold leading-8">
          <h1>
            Where <span className="text-[#A374FF]">aesthetic</span> &
          </h1>
          <h1>
            <span className="text-[#17F1D1]">funcionality</span> meet
          </h1>
        </div>

        {/* navigation  */}
        <div className="py-12 px-12 text-xl leading-8">
          <h4 className="text-[#FF8709] mb-6 font-semibold text-2xl">
            Explore
          </h4>
          <ul className="flex flex-col gap-4 font-medium">
            <li className="cursor-pointer hover:text-[#178BDA]">Home</li>
            <li className="cursor-pointer hover:text-[#178BDA]">About Me</li>
            <li className="cursor-pointer hover:text-[#178BDA]">Doctor</li>
          </ul>
        </div>

        {/* links  */}
        <div className="py-12 px-12 text-xl leading-8">
          <h4 className="text-[#17F1D1] mb-6 font-semibold text-2xl">
            Follow Me
          </h4>

          <div className="flex font-normal gap-8">
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                <img src={linkedin} className="h-8 w-8" />
                LinkedIn
              </li>
              <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                <img src={twitter} className="h-8 w-8" />
                Twitter
              </li>
              <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                <img src={github} className="h-8 w-8" />
                Github
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                <img src={facebook} className="h-8 w-8" />
                Facebook
              </li>
              <li className="cursor-pointer hover:text-[#178BDA] flex items-center gap-1">
                <img src={discord} className="h-8 w-8" />
                Discord
              </li>
            </ul>
          </div>
        </div>

        {/* cta btns  */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
