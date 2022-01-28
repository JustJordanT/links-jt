import Head from 'next/head'
import Links from './Components/Links'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>JustJordanT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='relative'>
        <Image src="/public/me.jpg" layout='fill'/>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hey friends, my name is {' '}
          <a className="text-blue-600">
            Jordan
          </a>
        </h1>
        <h2 className='break-words font-semibold text-gray-500'>Currently working as a Platform engineer. 🏗</h2>
        <h2 className='break-words font-semibold text-gray-500'>Working with Infrastructure as code with C#, Python.</h2>

        <Links />
      </main>
    </div>
  )
}
