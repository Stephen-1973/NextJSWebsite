// @ts-check
import Head from 'next/head'
import NavBar from '../../utils/universal/NavBar';
import Header from './components/Header';
import About from './components/About-section'
import Blogs from './components/Blog-section';
import Footer from '../../utils/universal/Footer';

export default function Home({ kubBlogs, machineBlogs, otherBlogs }) {
  return (
    <>
      <Head>
        <title>Stephen | Full Stack Web Developer</title>
        <meta name='description' content='Welcome to my website. This website will be your gateway to build awesome e-commerce app.' />
      </Head>
      <NavBar activeTab={'/'} />
      <Header />
      <About />
      <Blogs kubBlogs={kubBlogs} machineBlogs={machineBlogs} otherBlogs={otherBlogs} />
      <Footer />
    </>
  )
}
