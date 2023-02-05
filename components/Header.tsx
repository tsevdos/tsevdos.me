import Link from "next/link";
import Image from "next/image";
import avatar from "../public/avatar.jpeg";
import paths from "../constants/paths";

const Header = () => (
  <div className="bg-gray-800">
    <header className="flex flex-none items-center py-8">
      <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        <div>
          <Link
            href={paths.root}
            className="inline-flex items-center space-x-2 font-bold text-3xl tracking-wide text-white hover:opacity-75"
          >
            <Image
              src={avatar}
              alt="John Tsevdos"
              width={40}
              height={40}
              className="inline-block w-10 h-10 rounded-full"
            />{" "}
            <span>Tsevdos.me</span>
          </Link>
        </div>
        {/* <nav className="space-x-4 sm:space-x-6">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/tsevdosjohn/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-linkedin inline-block w-5 h-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
          <a
            aria-label="Github"
            href="https://github.com/tsevdos"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-github inline-block w-5 h-5"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a
            aria-label="NPM"
            href="https://www.npmjs.com/~tsevdos"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-npm inline-block w-5 h-5"
            >
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
            </svg>
          </a>
          <a
            aria-label="Twitter"
            href="https://twitter.com/tsevdos"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-twitter inline-block w-5 h-5"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path>
            </svg>
          </a>
        </nav> */}
      </div>
    </header>
  </div>
);

export default Header;
