import Head from 'next/head'
import PortfolioLinks from './components/Portfolio'
import AboutME from './components/AboutMe'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <PortfolioLinks />
    <Skills />
    <AboutME />
    </div>
  )
}
