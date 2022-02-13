import Head from 'next/head'
import NavBar from '../sections/NavBar';
import Header from '../sections/Header';
import About from '../sections/AboutSection';
import ReadMyBlogs from '../sections/readMyBlogs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen | Full Stack Web Developer</title>
        <meta name='description' content='Welcome to my website. This website will be your gateway to build awesome e-commerce app.'/>
      </Head>
      <NavBar/>
      <Header />
      <ReadMyBlogs/>
      <About />
    </>
  )
}
