import Head from 'next/head'
import Links from './Components/Links'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>JustJordanT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hey friends, my name is {' '}
          <a className="text-blue-600">
            Jordan
          </a>
        </h1>

        <Links />
      </main>
    </div>
  )
}
