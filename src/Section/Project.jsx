import { myProjectList } from "../constant/PortfolioData";

const Project = () => {
  return (
    <>
      {myProjectList.map((project, index) => (
        <section key={index} className="mt-10 bg-slate-100 ">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold  font-[Pochaevsk] text-gray-900 sm:text-3xl">
                    {project.projectName}
                  </h2>

                  <p className="mt-4 text-gray-900 font-extrabold font-[Pochaevsk]">
                    {project.whatTheProjectSolve}
                  </p>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-semibold  font-[Pochaevsk] text-blue-600 hover:underline"
                  >
                    View Project
                  </a>

                  <p className="mt-2 text-gray-900 font-extrabold font-[Pochaevsk]">
                    {project.skillsForTheProject}
                  </p>

                  <a
                    href={project.projectGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-semibold  font-[Pochaevsk] hover:underline cursor-pointer max-sm:mb-10"
                  >
                    View GitHub Repo
                  </a>
                </div>
              </div>

              <div>
                <img src={project.image} className="rounded" alt="" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Project;
