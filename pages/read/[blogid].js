import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../components/services/firebase";
import ReadBlogComponent from "../../components/pages/Read-Blogs/Blogid";
import Footer from '../../components/utils/universal/Footer';

export default function BlogId({data}) {
  return (
    <>
      <ReadBlogComponent data={data}/>
      <Footer/>
    </>
  )

}

export async function getServerSideProps(context) {
  const { blogid } = context.query
  const getDoc = await getDocs(query(collection(db, 'blogs'), where('id', '==', blogid)));
  const fetchedDoc = getDoc.docs[0].data()
  return {
    props: {
      data: JSON.stringify(fetchedDoc)
    }
  }
}
