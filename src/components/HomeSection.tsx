import Image from "next/image";
import React from "react";
import MyImage from "@/assets/Images/my_photo_cropped.jpg";
import paintBrushLine from "@/assets/svg/lineUnderTitle.svg";
import paintBrush from "@/assets/Images/paint-brush 1.png";
import angleBr from "@/assets/Images/codeAnglesB.png";
import bagIcon from "@/assets/Images/bagIcone.png";
import LeftIllus from "@/assets/Images/astronoat illus.png";
import RightSideIllus from "@/assets/Images/Happy Pilot  3D Illustration.png";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div className="min-h-[418px] w-full bg-[--theme_purple] px-[15px] md:px-[25px] lg:px-[25px] xl:px-[85px] 2xl:px-[135px] py-[30px] md:py-[25px] pb-[110px] md:pb-[30px] rounded-[--section_br_radius] flex flex-col md:flex-row justify-between items-center relative">
      {/* Profile Image */}
      <div className="w-full lg:w-[360px] flex justify-center">
        <Image
          src={MyImage}
          alt="My Image"
          className="w-[139px] sm:w-[180px] lg:w-[258px] rounded-xl"
        />
      </div>
      {/* Text section */}
      <div className="h-[340px] md:h-[435px] sm:w-[500px] md:w-[500px] lg:w-[520px] flex flex-col justify-center items-center md:items-start ">
        <p className="font-spaceGrotesk font-500 text-[15px] md:text-[22px] text-[#FFFFFF] px-[100px]">
          Hi, I am
        </p>
        <div className="flex flex-col">
          <h1 className="text-[29.5px] lg:text-[56px] font-[700] font-spaceGrotesk text-[#FFFFFF] mt-[-8px] leading-[71.46px] tracking-tighter">
            Shrikant Jawla !
          </h1>
          <div className="flex mt-[-20px] self-end justify-end w-[230px] lg:w-[410px]">
            <Image src={paintBrushLine} alt="paint brush line" className="" />
            <Image
              src={paintBrush}
              alt="Paint brush"
              className="relative top-[-15px]"
            />
          </div>
        </div>
        <div className="flex mt-2 gap-2 w-full md:w-[400px] lg:w-[520px] xl:w-full text-center md:text-left">
          <h2 className="font-400 text-[12px] lg:text-[15px] leading-[15px] lg:leading-[20px] text-white">
            <span className="inline-flex lg:h-[9px] justify-center items-center mr-1 relative top-[-5px]">
              <p className="w-[35px] h-[0.8px] bg-white"></p>
            </span>
            Aspiring Full-Stack Web Developer with over 3+ years of experience
            in building scalable, user-centric applications. Proficient inmodern
            frontend and backend stacks like React, Next.js, Node.js, and
            FastAPI. Skilled in DevOps, CI/CD pipelines, andcloud deployment
            with tools like Docker, Jenkins, GitHub Actions, and AWS. Adept at
            designing robust APIs, secureadmin dashboards, and automating
            workflows to streamline product development.
          </h2>
        </div>
        <div className="w-full md:w-[400px] lg:w-[604px] mt-[25px]">
          <p className="font-[700] text-[14px] lg:text-[18px] text-white">
            QUICK INTRO
          </p>
          <div className="flex justify-start items-start gap-2 lg:mt-4">
            <Image
              src={angleBr}
              alt="Angle br"
              className="mt-1 md:mt-0 w-[17px] md:w-[24px]"
            />
            <p className="font-400 text-[12px] lg:text-[16px] leading-[21px] text-white">
              Full Stack Web Developer for {new Date().getFullYear() - 2022}+
              yrs
            </p>
          </div>
          <div className="flex justify-start items-start gap-2 lg:mt-1 ml-1 relative left-[-3.5px]">
            <Image
              src={bagIcon}
              alt="Angle br"
              className="mt-1 md:mt-0 w-[14px] md:w-[24px]"
            />
            <p className="font-400 text-[12px] lg:text-[16px] leading-[21px] text-white">
              Currently working on{" "}
              <a
                href="https://lounges.cardinsider.com"
                target="_blank"
                className="underline"
              >
                Card Insider
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Left side Illus */}
      <div>
        <Image
          src={LeftIllus}
          alt="Astronus illus"
          className="absolute left-0 bottom-0 animate-bounce w-[70px] md:w-auto"
        />
      </div>
      {/* Right side Illus */}
      <div>
        <Image
          src={RightSideIllus}
          alt="Astronus illus"
          className="absolute right-0 bottom-8 md:bottom-12 animate-bounce w-[70px] md:w-auto"
        />
      </div>
    </div>
  );
};

export default HomeSection;
