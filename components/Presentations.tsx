const Presentations = () => (
  <div className="bg-gray-800">
    <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-8">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Public speaking</h2>
      <h3 className="text-xl md:text-2xl font-extrabold mb-8 text-blue-200">Presentations and Talks</h3>
      <hr className="h-0 w-full my-8 border-t-2 border-slate-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <iframe
              src="https://www.youtube.com/embed/SgPen5ZORFY"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="350"
            />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-4">Cypress in 10 minutes</h3>
            <p className="font-semibold mb-1 text-blue-500">
              2018, September &#8226;{" "}
              <a
                href="https://www.meetup.com/Ministry-of-Testing-Athens/events/254284563/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Ministry of Testing Athens Meetup #3
              </a>
            </p>

            <p className="text-lg my-4">
              A quick introduction and demo on Cypress testing tool. My presentation starts at 32&apos;.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="http://tsevdos.github.io/presentations/MoTAthens-2018/index.html"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-document-report inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Slides</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <iframe
              src="https://www.youtube.com/embed/vIkPa3LUudQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="350"
            />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-4">Responsive Web Design and touch devices</h3>
            <p className="font-semibold mb-1 text-blue-500">
              2013, June &#8226;{" "}
              <a href="http://joomladaygreece.org/" target="_blank" rel="noreferrer" className="underline">
                JoomlaDay conference, Athens, Greece
              </a>
            </p>

            <p className="text-lg my-4">
              The presentation covered aspects of responsive web design on touch devices, touch device problems and
              solutions, touch events and frameworks, mobile patterns and more.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="http://tsevdos.github.io/presentations/joomladay-2013/index.html"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-document-report inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Slides</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <iframe
              src="https://www.youtube.com/embed/gNm8lu39TD0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="350"
            />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-4">Pragmatic Responsive Web Design</h3>
            <p className="font-semibold mb-1 text-blue-500">
              2013, March &#8226; JoomlaFrappe conference, Athens, Greece
            </p>

            <p className="text-lg my-4">
              The presentation covered many aspects of responsive web design, like workflow, tools, and tips.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="http://tsevdos.github.io/presentations/joomlafrappe-2013/index.html"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-document-report inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Slides</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <iframe
              src="https://www.youtube.com/embed/d8IbJ1QXFlI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="350"
            />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-4">Pragmatic Responsive Web Design</h3>
            <p className="font-semibold mb-1 text-blue-500">
              2012, December &#8226; UpNorth web conference, Thessaloniki, Greece
            </p>

            <p className="text-lg my-4">
              The presentation covered many aspects of responsive web design, like workflow, tools, and tips.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="http://tsevdos.github.io/presentations/upNorth-2012/index.html"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-document-report inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Slides</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div>
            <iframe
              src="https://www.youtube.com/embed/5w2K3Mx7PaU"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="350"
            />
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-4">Drupal Tips &apos;n Tricks</h3>
            <p className="font-semibold mb-1 text-blue-500">
              2010, September &#8226; DrupalCamp conference, Athens, Greece
            </p>

            <p className="text-lg my-4">
              The presentation covered many Drupal CMS related tips and tricks on design and development.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://speakerdeck.com/tsevdos/drupal-tips-n-tricks"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="hi-solid hi-document-report inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Slides</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end my-8">
        <a
          href="https://github.com/tsevdos/presentations"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
        >
          <svg
            className="hi-solid hi-document-report inline-block w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
              clipRule="evenodd"
            />
          </svg>
          <span>View all my presentations on GitHub!</span>
        </a>
      </div>
    </div>
  </div>
);

export default Presentations;