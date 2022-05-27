import { useRouter } from 'next/router'

function Links() {
  return <div className="grid grid-rows-1 grid-cols-1 item-center">
          <a
            href="https://blog.justjordant.com"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold">Blog</h3>
            <p className="mt-4 text-xl">
              My Blog Site 
            </p>
          </a>

          <a
            href="https://weekly-eng.com"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold">Weekly-Eng</h3>
            <p className="mt-4 text-xl">
              My weekly newsletter; on DevOps and Software Engineering.
            </p>
          </a>

          <a
            href="https://store.justjordant.com"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            {/* TODO add route to portfolio page*/}
            <h3 className="text-2xl font-bold">Content</h3> 
            <p className="mt-4 text-xl">
              My store where I sell some of my content.
            </p>
          </a>

          <a
            href="/portfolio"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            {/* TODO add route to portfolio page*/}
            <h3 className="text-2xl font-bold">Portfolio</h3> 
            <p className="mt-4 text-xl">
              My Project showcase.
            </p>
          </a>

          <a
            href="https://github.com/JustJordanT"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
             transition duration-300 ease-out bg-white"
          >
            {/* <h3 className="text-2xl font-bold">GitHub &rarr;</h3> */}
            <img className="w-10 h-10" src="https://raw.githubusercontent.com/gilbarbara/logos/9f0858601cc8543b51c8eea0722dbab4a7c7a1f9/logos/github-icon.svg"></img>
            <p className="mt-4 text-xl">
              My GitHub Account.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/justjordant/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:scale-105 transform
            transition duration-300 ease-out"
          >
            {/* <h3 className="text-2xl font-bold">LinkedIn &rarr;</h3> */}
            <img className="w-20 h-20" src="https://raw.githubusercontent.com/gilbarbara/logos/9f0858601cc8543b51c8eea0722dbab4a7c7a1f9/logos/linkedin.svg"/>
            <p className="mt-4 text-xl">
              My work experience.
            </p>
          </a>
        </div>;
}

export default Links;
