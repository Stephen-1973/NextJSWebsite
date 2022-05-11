// @ts-check
import Home from '../components/pages/Home/Home';
import {
  where,
  query,
  collection,
  getDocs
} from '@firebase/firestore';
import { db } from '../components/services/firebase';


function App({ KUB_BLOGS, MACHINE_BLOGS, OTHER_BLOGS }) {

  // async function postBlogs(data) {
  //   const response = await fetch('http://localhost:3000/api/blogs', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     body: JSON.stringify({
  //       data: data
  //     })
  //   });
  //   const json = response.json();
  //   return json;
  // }
  // async function fetchBlogs() {
  //   const response = await fetch('/api/blogs', {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  //   });
  //   const json = await response.json();
  //   console.log(JSON.parse(json.data))
  // }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   const blogs = await getDocs(query(collection(db, 'blogs'), where('status', '==', 'Publish')));
  //   const data = blogs.docs.slice(0,3).map(doc => doc.data());
  //   await postBlogs(data);
  //   await fetchBlogs();

  // }, [])


  return (
    <Home kubBlogs={JSON.parse(KUB_BLOGS)} machineBlogs={JSON.parse(MACHINE_BLOGS)} otherBlogs={JSON.parse(OTHER_BLOGS)} />
  )
}

export default App



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
