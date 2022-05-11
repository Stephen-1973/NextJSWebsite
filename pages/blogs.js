import {
  where,
  query,
  collection,
  getDocs
} from '@firebase/firestore';
import { db } from '../components/services/firebase';
import BlogPage from '../components/pages/Blogs/Blog-page';

function Blogs({ KUB_BLOGS, MACHINE_BLOGS, OTHER_BLOGS }) {
  return (
    <BlogPage KUB_BLOGS={KUB_BLOGS} MACHINE_BLOGS={MACHINE_BLOGS} OTHER_BLOGS={OTHER_BLOGS} />
  )
}

export async function getStaticProps() {
  const kubBlogs = await getDocs(query(collection(db, "blogs"), where("tags", "array-contains-any", ["kubernetes", "microservices", "nodejs"])))
  const machineblogs = await getDocs(query(collection(db, "blogs"), where("tags", "array-contains-any", ["python", 'machine-learning', 'deep-learning', 'reinforcement-learning', 'artificial-intelligence'])));
  const otherBlogs = await getDocs(query(collection(db, "blogs"), where("tags", "array-contains", "other")));


  let KubBlogs = [];
  let MachineBlogs = [];
  let OtherBlogs = [];

  kubBlogs.docs.map(blog => KubBlogs.push(blog.data()));
  machineblogs.docs.map(blog => MachineBlogs.push(blog.data()));
  otherBlogs.docs.map(blog => OtherBlogs.push(blog.data()));


  return {
    props: {
      KUB_BLOGS: JSON.stringify(KubBlogs),
      MACHINE_BLOGS: JSON.stringify(MachineBlogs),
      OTHER_BLOGS: JSON.stringify(OtherBlogs)
    },
    revalidate: 1 * 60 * 60 * 24 * 7 // 1 second * 60 seconds = 1 minutes * 60 = 1 hr * 24 = 24hrs * 7 = one week for every blog update checking.
  }
}

export default Blogs