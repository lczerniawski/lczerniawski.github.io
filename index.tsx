export const title = "Łukasz's Corner - Home";
export const layout = "main_layout.tsx";

export default (_data: Lume.Data, _helpers: Lume.Helpers) => (
  <>
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div 
            style={{
                    clipPath: 'polygon(75.6% 43.3%, 99.9% 58.2%, 96.1% 25.8%, 83.4% -0.5%, 79.6% -1.2%, 71.8% 31.4%, 59.5% 61.9%, 51.7% 67.3%, 46.8% 57.5%, 44.5% 33.9%, 26.9% 75.6%, -0.2% 65.1%, 18.4% 99.9%, 28.3% 75.7%, 77.3% 97.2%, 75.6% 43.3%)',
                }}
                className="absolute left-0 mx-auto aspect-[1017/638] w-[45rem] bg-gradient-to-tr from-[#ffbe0b] to-[#fb5607] opacity-30 -top-10"
            />
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffbe0b] to-[#fb5607] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl">
              Hey! I'm Łukasz
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
              a junior architect at AXA, an AI student, and a tech enthusiast. 
              On this site, you'll find updates on my adventures in software development, architecture, and the world of AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/blog/"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-slate-100 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Blog
              </a>
              <a href="about-me" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-400">
                About Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  </>
);