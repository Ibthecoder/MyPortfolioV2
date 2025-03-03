import { portfolioHeroImg } from "../assets/images/image";
import ScanMeBtn from "@Component/ScanMeBtn";
import BlurText from "@Component/BlurText";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };
  return (
    <>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16  max-sm:mt-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <BlurText
                text="Hey 👋 I am Oladipupo Ibrahim"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-3xl font-extrabold font-[Pochaevsk]  leading-tight text-black sm:text-4xl lg:text-5xl max-sm:mt-10"
              />
              <p className="max-w-lg mt-3 text-xl  font-[Pochaevsk]  leading-relaxed text-gray-600 md:mt-8 max-sm:mt-9">
                A passionate{" "}
                <span className="font-semibold text-primaryColor">
                  Fullstack Developer
                </span>{" "}
                who loves building scalable, user-friendly applications. Curious
                about what I love doing? Let&apos;s connect and explore my
                journey.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8 font-[Pochaevsk]  max-sm:mt-6">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a project in mind? </span>
                </span>
                <br className="block sm:hidden" />
                Let&apos;s make magic happen!
              </p>
              <ScanMeBtn />
            </div>

            <div className="relative">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded max-sm:mt-6"
                src={portfolioHeroImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
