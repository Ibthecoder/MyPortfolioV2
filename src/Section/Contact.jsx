const Contact = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div
                className="flex items-center justify-center w-20 h-20 mx-auto  cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/oladipupo-ibrahim-165404251/",
                    "_blank"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h3 className="mt-8  font-[Pochaevsk] text-lg font-semibold text-black">
                Linkedin
              </h3>
              <p className="mt-4 text-sm text-gray-600"></p>
            </div>

            <div>
              <div
                className="flex items-center justify-center w-20 h-20 mx-auto cursor-pointer"
                onClick={() =>
                  window.open("https://x.com/IBthecoder", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black font-[Pochaevsk]">
                Twitter
              </h3>
              <p className="mt-4 text-sm text-gray-600"></p>
            </div>

            <div>
              <div
                className="flex items-center justify-center w-20 h-20 mx-auto cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/Ibthecoder", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black font-[Pochaevsk]">
                Github
              </h3>
              <p className="mt-4 text-sm text-gray-600"></p>
            </div>

            <div>
              <div
                className="flex items-center justify-center w-20 h-20 mx-auto cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "mailto:oladipupoibrahim10@gmail.com?subject=Need a Developer? Let’s Talk!")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black font-[Pochaevsk]">
                Mail Me
              </h3>
              <p className="mt-4 text-sm text-gray-600"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
