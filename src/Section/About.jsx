const About = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24  max-sm:mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight font-[Pochaevsk] text-black sm:text-4xl lg:text-5xl">
              About Brahim
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed font-[Pochaevsk] text-gray-600">
              Fullstack Developer focused on building efficient, user-friendly
              applications.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div className=" max-sm:mt-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-[Pochaevsk] font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-[Pochaevsk]">
                  Discover & Plan
                </h3>
                <p className="mt-4 text-base text-gray-600 font-[Pochaevsk]">
                  Every great project starts with an idea. I take time to
                  understand business needs, analyze requirements, and
                  strategize the best way forward to create impactful solutions.
                </p>
              </div>

              <div className=" max-sm:mt-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold font-[Pochaevsk] text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold font-[Pochaevsk] leading-tight text-black md:mt-10">
                  Design & Build
                </h3>
                <p className="mt-4 text-base text-gray-600 font-[Pochaevsk]">
                  I focus on writing clean, maintainable code and crafting
                  intuitive user experiences. My goal is to turn ideas into
                  reality by developing solutions that are efficient,
                  responsive, and user-friendly.
                </p>
              </div>

              <div className=" max-sm:mt-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold font-[Pochaevsk] text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold font-[Pochaevsk] leading-tight text-black md:mt-10">
                  Deploy & Evolve
                </h3>
                <p className="mt-4 text-base font-[Pochaevsk] text-gray-600">
                  A project doesn’t end after launch—it evolves. I believe in
                  continuous improvement, refining applications based on
                  feedback and ensuring they remain efficient and future-proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
