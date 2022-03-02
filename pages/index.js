import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Home from '../components/pages/Home/Home';
import { db } from '../components/services/firebase';


function App() {

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
    <Home />
  )
}

export default App
