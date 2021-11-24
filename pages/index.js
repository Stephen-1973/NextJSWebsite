import Head from 'next/head'
import NavBar from '../sections/NavBar';
import Header from '../sections/Header';
import About from '../sections/About';
import ReadMyBlogs from '../sections/readMyBlogs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen | Full Stack Web Developer</title>
        <meta name="Keywords" content="Stepeh Ex Web Developer 12 years of work experience Worked in FAANG"></meta>
      </Head>
      <NavBar/>
      <Header />
      <ReadMyBlogs/>
      <About />
    </>
  )
}
