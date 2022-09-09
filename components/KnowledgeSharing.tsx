const KnowledgeSharing = () => (
  <div className="bg-gray-800">
    <div className="container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Knowledge sharing</h2>
      <h3 className="text-xl md:text-2xl font-extrabold mb-2 lg:mb-8 text-blue-200">
        I ️️❤️ being a mentor, teacher and of course student
      </h3>
      <hr className="h-0 w-full mb-8 border-t-2 border-slate-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full">
            {/* <p className="font-semibold mb-1 text-blue-500">Javascript * React</p> */}
            <h3 className="font-semibold text-2xl mb-4">Code.Hub: React Fundamentals</h3>

            <p className="text-lg my-4">
              Code.Hub runs a variety of activities for software engineers and developers such as trainings and
              hackathons. I am responsible for teaching the <strong>React Fundamentals training</strong>. The specific
              training includes <strong>30 hours of lectures, workshops and a final project submission</strong>. Some of
              the topics covered are the below:
            </p>

            <p className="text-lg my-4">
              SPA (single page applications), ES6, NPM Package manager, Git basics, What is React, Core principles, JSX,
              Components, Props and PropTypes, State, Lifecycle methods, React Hooks, Children, Event handlers, Forms,
              HTTP requests, Refs / DOM manipulation, React and CSS, Styled Components, Presentational and Container
              components, HoC and render props, React Router, ReactStrap, React dev tools, Debugging, Reconciliation,
              Project.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://www.codehub.gr/learnprograms/"
              rel="noreferrer"
              target="_blank"
            >
              <span>Code.Hub Programs</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full">
            <h3 className="font-semibold text-2xl mb-4">Code.Hub: React MasterClass</h3>

            <p className="text-lg my-4">
              Code.Hub runs a variety of activities for software engineers and developers such as trainings and
              hackathons. I am responsible for teaching the <strong>React MasterClass training</strong>. The specific
              training includes
              <strong>30 hours of lectures, workshops and a final project submission</strong>. Some of the topics
              covered are the below:
            </p>

            <p className="text-lg my-4">
              SPA (single page applications), ES6, NPM Package manager, Compilers/Bundlers (Babel/Webpack),
              Presentational and Container components, HoC and render props, React Hooks, React Context, React.lazy and
              Suspense, React Portals, Redux, Store, Actions and action creators, Reducers, Selectors, Middleware,
              Sagas, Mobx, React Router, Deployment, Testing react components (Jest - react testing library), Project.
            </p>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full flex justify-end items-center bg-gray-50 space-x-4">
            <a
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-5 text-base border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200"
              href="https://www.codehub.gr/learnprograms/"
              rel="noreferrer"
              target="_blank"
            >
              <span>Code.Hub Programs</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default KnowledgeSharing;
