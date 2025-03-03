import { useState } from "react";
import { SkillsItems } from "../constant/PortfolioData";
import ButtonWrapper from "@Component/ButtonWrapper";
const Skills = () => {
  const [showMore, setshowMore] = useState(false);
  const handleToggle = () => {
    setshowMore(!showMore);
  };
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24 max-sm:mt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            {SkillsItems.slice(0, 4).map((logo, index) => (
              <div key={index}>
                <div className="flex items-center justify-center w-20 h-20 mx-auto">
                  <img src={logo.skillsImg} alt={logo.skilsTittl} />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black font-[Pochaevsk]">
                  {logo.skilsTittl}
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  {logo.skillsWriteup}
                </p>
              </div>
            ))}
          </div>

          {/* Hidden Section: Displayed on Button Click */}
          {showMore && (
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12 mt-40">
              {SkillsItems.slice(4).map((logo, index) => (
                <div key={index + 4}>
                  <div className="flex items-center justify-center w-20 h-20 mx-auto">
                    <img src={logo.skillsImg} alt={logo.skilsTittl} />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold font-[Pochaevsk] text-black">
                    {logo.skilsTittl}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600">
                    {logo.skillsWriteup}
                  </p>
                </div>
              ))}
              <br />
              <br />
            </div>
          )}

          {/*  */}
          <div className="text-center mt-8">
            <ButtonWrapper onClick={handleToggle}>
              {showMore ? "ShowLess" : "ShowMore"}
            </ButtonWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
