import { useEffect, useState, useRef } from "react"
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useTitle } from '../hooks/useTitle';
import { PostCard, SkeletonCard } from "../components"

export const Home = () => {
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false);
  const postRef = useRef(collection(db, 'posts'))
  useTitle('Home');

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(data.docs.map((document) => ({
        ...document.data(), id: document.id
      })));
    }
    // console.log('----') // to check if we are in infinite loop or not because of a wrong dependency!
    getPosts();
  }, [postRef, toggle])

  return (
    <section>
      {posts.map((post, index) => (
        post ? (<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />) : (<SkeletonCard key={index} />)

      ))}
    </section>

  )
}
