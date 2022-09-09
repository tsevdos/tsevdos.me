import Image from "next/image";

const Projects = () => (
  <div className="bg-gray-800">
    <div className="container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Projects</h2>
      <h3 className="text-xl md:text-2xl font-extrabold mb-2 lg:mb-8 text-blue-200">I code stuff</h3>
      <hr className="h-0 w-full mb-8 border-t-2 border-slate-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <Image src="/npm.webp" alt="React validatus" width="1085" height="550" />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-2">React-validatus</h3>
            <p className="text-lg">A simple to use and light-weight React validator component.</p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://www.npmjs.com/package/react-validatus"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-home inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Homepage</span>
            </a>
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://github.com/tsevdos/react-validatus"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-github inline-block w-5 h-5"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span>Source code</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <Image src="/repocompare.png" alt="RepoCompare" width="1085" height="550" />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-2">RepoCompare</h3>
            <p className="text-lg">
              With Repocompare you can quickly and easily search and compare Github repositories on stars, forks, issues
              and subscribers.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="http://repocompare.io/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-home inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Homepage</span>
            </a>
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://github.com/tsevdos/repocompare"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-github inline-block w-5 h-5"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span>Source code</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <Image src="/greekintech.png" alt="Greek in Tech" width="1085" height="550" />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-2"> Greek in Tech</h3>
            <p className="text-lg">
              A single-page application (SPA) that displays greek words we use in technology. Check out how many they
              are!
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://greekintech.com/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-home inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Homepage</span>
            </a>
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://github.com/tsevdos/greek-in-tech"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-github inline-block w-5 h-5"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span>Source code</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-xl md:text-2xl md:leading-relaxed font-medium text-gray-300 mt-8">
        Don&apos;t forget to have a look on my{" "}
        <a
          className="text-blue-300 underline font-bold"
          href="https://github.com/tsevdos"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>{" "}
        and{" "}
        <a
          className="text-blue-300 underline font-bold"
          href="https://www.npmjs.com/~tsevdos"
          rel="noreferrer"
          target="_blank"
        >
          npm
        </a>{" "}
        profiles! Back in the &quot;old&quot; days I was also developing{" "}
        <a
          className="text-blue-300 underline font-bold"
          href="https://wordpress.org/themes/author/tsevdos/"
          rel="noreferrer"
          target="_blank"
        >
          Wordpress themes
        </a>{" "}
        and{" "}
        <a
          className="text-blue-300 underline font-bold"
          href="https://plugins.jquery.com/nwrapper/"
          rel="noreferrer"
          target="_blank"
        >
          jQuery plugins
        </a>
        . Feel free to fork and update them!
      </p>
    </div>
  </div>
);

export default Projects;
