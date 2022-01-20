function Links() {
  return <div className="grid grid-cols-1 ">
          <a
            href="https://github.com/JustJordanT"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
             transition duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
            <p className="mt-4 text-xl">
              My Personal GitHub Account.
            </p>
          </a>

          <a
            href="https://blog.justjordant.com"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold">Blog &rarr;</h3>
            <p className="mt-4 text-xl">
              Personal Blog Site
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/justjordant/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold">LinkedIn &rarr;</h3>
            <p className="mt-4 text-xl">
              Check out my work experience! 
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/justjordant/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>;
}

export default Links;
