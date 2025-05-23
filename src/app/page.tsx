import ContactUsSection from "@/components/ContactUsSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import SocialLinks from "@/components/SocialLinks";
import StillHereTextSection from "@/components/StillHereTextSection";
// import GithubStats from "@/components/GithubStats";
// import dynamic from "next/dynamic";
// const GithubCalender = dynamic(() => import("@/components/GithubCalender"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="w-[99vw] min-h-[100vh] dark:bg-[#000000] m-auto flex justify-center items-center">
      <section className="w-full min-h-[100vh] flex flex-col gap-[30px] items-center">
        <section className="section_common_padding max-w-[1600px] sticky top-[10px] z-[100]">
          <Navbar />
        </section>
        {/* Home Section */}
        <section className="section_common_padding max-w-[1600px]" id="__home">
          <HomeSection />
        </section>
        {/* Divider */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] h-[1px] bg-[#777777]"></div>
        </div>
        {/* Skills */}
        <section
          className="section_common_padding max-w-[1600px]"
          id="__skills"
        >
          <SkillsSection />
        </section>
        {/* Project section */}
        <section
          className="section_common_padding dark:bg-black light:bg-[#f9f9f9] max-w-[1600px]"
          id="__projects"
        >
          <div className="w-full px-[10px] md:px-[17px]">
            <ProjectSection />
          </div>
        </section>
        {/* Github Calender Section */}
        {/* <section className="section_common_padding max-w-[1600px]" id="__stats">
          <GithubCalender />
        </section> */}
        {/* Github Stats Section */}
        {/* <section className="section_common_padding max-w-[1600px]">
          <GithubStats />
        </section> */}
        {/* Contact Us Section */}
        <section
          className="section_common_padding max-w-[1600px]"
          id="__contacts"
        >
          <ContactUsSection />
        </section>
        {/* Still here text Section */}
        <section className="section_common_padding max-w-[1600px]">
          <StillHereTextSection />
        </section>
        {/* Social links Section */}
        <section className="section_common_padding max-w-[1600px]">
          <SocialLinks />
        </section>
      </section>
    </main>
  );
}
