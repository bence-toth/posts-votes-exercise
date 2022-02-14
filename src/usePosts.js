import { useEffect, useState } from "react";

const usePosts = () => {
  const [arePostsLoading, setArePostsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setArePostsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setArePostsLoading(false);
      });
  }, []);

  return { posts, arePostsLoading };
};

export default usePosts;
