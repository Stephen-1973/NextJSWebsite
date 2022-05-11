import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../components/services/firebase";
import ReadBlogComponent from "../../components/pages/Read-Blogs/Blogid";
import Footer from '../../components/utils/universal/Footer';

export default function BlogId({ data }) {

  return (
    <>
      <ReadBlogComponent data={data} />
      <Footer />
    </>
  )
}



export async function getStaticProps(context) {
  const getDoc = await getDocs(query(collection(db, 'blogs'), where('id', '==', context.params.blogid)));

  const fetchedDoc = getDoc.docs[0].data();

  return {
    props: {
      data: JSON.stringify(fetchedDoc)
    },
    revalidate: 1 * 60 * 60 * 24 * 7 // 1 second * 60 seconds = 1 minutes * 60 = 1 hr * 24 = 24hrs * 7 = one week for every blog update checking.
  }
}


export async function getStaticPaths() {

  const blogs = await getDocs(collection(db, 'blogs'));
  const blogsIds = blogs.docs.map(blog => blog.data().id)

  const paths = blogsIds.map((id) => ({ params: { blogid: id } }))

  // debugging
  // console.log('Printing Paths => ', paths)

  return {
    paths, fallback: false
  }
}




// SERVER SIDE RENDERING

// export async function getServerSideProps(context) {
//   const { blogid } = context.query
//   const getDoc = await getDocs(query(collection(db, 'blogs'), where('id', '==', blogid)));
//   const fetchedDoc = getDoc.docs[0].data()
//   return {
//     props: {
//       data: JSON.stringify(fetchedDoc)
//     }
//   }
// }
