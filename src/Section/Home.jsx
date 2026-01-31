import ScanMeBtn from "@Component/ScanMeBtn";
import BlurText from "@Component/BlurText";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gray-50 overflow-x-hidden py-20 lg:py-0 font-[Pochaevsk]">
      {/* Background Watermark - Adjusted for responsiveness */}
      <div className="absolute top-0 right-0 p-4 md:p-10 select-none pointer-events-none opacity-[0.03]">
        <h2 className="text-[8rem] sm:text-[12rem] lg:text-[20rem] font-black leading-none uppercase">
          Senior
        </h2>
      </div>

      <div className="container px-6 mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Header Section */}
          <div className="md:col-span-12 lg:col-span-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-8 h-[2px] bg-primaryColor"></span>
              <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold text-gray-500">
                Based in Nigeria // Remote Worldwide
              </span>
            </div>

            {/* Responsive Typography: dynamic sizing from text-5xl to text-9rem */}
            <BlurText
              text="Oladipupo Ibrahim"
              delay={100}
              animateBy="letters"
              direction="bottom"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[1] md:leading-[0.9] tracking-tighter text-black break-words"
            />
          </div>

          {/* Bio Section: Vertical stack on mobile, Grid-shift on desktop */}
          <div className="md:col-span-8 lg:col-start-6 lg:col-span-6 mt-6 md:mt-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-snug md:leading-tight">
              I engineer{" "}
              <span className="italic text-primaryColor underline md:no-underline underline-offset-4">
                robust architectures
              </span>{" "}
              for the modern web. Senior Fullstack Developer specialized in
              scalability and performance.
            </h3>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 max-w-md border-l-2 border-primaryColor pl-5 md:pl-6">
              Turning complex business requirements into elegant, maintainable
              code. Let’s build something that scales.
            </p>

            {/* Buttons: Stacked on tiny screens, Row on small/medium+ */}
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10">
              <div className="scale-100 md:scale-110">
                <ScanMeBtn />
              </div>

              <button className="group relative overflow-hidden px-2 py-1">
                <span className="relative z-10 text-sm font-bold uppercase tracking-widest text-black group-hover:text-primaryColor transition-colors">
                  Check Experiments →
                </span>
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-black group-hover:bg-primaryColor transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Footer: Stays at bottom but scrolls with content on mobile if height is tight */}
      <div className="mt-20 lg:absolute lg:bottom-10 lg:left-10 px-6 lg:px-0 flex flex-col sm:flex-row items-start lg:items-center gap-8 sm:gap-12 lg:gap-20 opacity-70 lg:opacity-100">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
            Stack
          </span>
          <span className="text-xs text-gray-600 font-medium">
            React / Java / Springboot 
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
            Focus
          </span>
          <span className="text-xs text-gray-600 font-medium">
            Performance & UX Engineering
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
////////////////
// import ScanMeBtn from "@Component/ScanMeBtn";
// import BlurText from "@Component/BlurText";

// const Home = () => {
//   const handleAnimationComplete = () => {
//     console.log("Animation completed");
//   };

//   return (
//     <>
//       <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16  max-sm:mt-10">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//           <div className="grid items-center grid-cols-1 md:grid-cols-2">
//             <div>
//               <BlurText
//                 text="Hey 👋 I am Oladipupo Ibrahim"
//                 delay={150}
//                 animateBy="words"
//                 direction="top"
//                 onAnimationComplete={handleAnimationComplete}
//                 className="text-3xl font-extrabold font-[Pochaevsk]  leading-tight text-black sm:text-4xl lg:text-5xl max-sm:mt-10"
//               />
//               <p className="max-w-lg mt-3 text-xl  font-[Pochaevsk]  leading-relaxed text-gray-600 md:mt-8 max-sm:mt-9">
//                 A passionate{" "}
//                 <span className="font-semibold text-primaryColor">
//                   Fullstack Developer
//                 </span>{" "}
//                 who loves building scalable, user-friendly applications. Curious
//                 about what I love doing? Let&apos;s connect and explore my
//                 journey.
//               </p>

//               <p className="mt-4 text-xl text-gray-600 md:mt-8 font-[Pochaevsk]  max-sm:mt-6">
//                 <span className="relative inline-block">
//                   <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
//                   <span className="relative"> Have a project in mind? </span>
//                 </span>
//                 <br className="block sm:hidden" />
//                 Let&apos;s make magic happen!
//               </p>
//               <ScanMeBtn />
//             </div>

//             <div className="relative">
//               <img
//                 className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded max-sm:mt-6"
//                 src="https://res.cloudinary.com/ddd6uszk3/image/upload/v1759561112/portfolio-img1_pcwyx7.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
