import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills />
      <Projects/>
      <Contact/>
    </>
  )
}
