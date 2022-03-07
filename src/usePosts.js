import { useEffect, useState } from "react";
import usePostVotes from "./usePostVotes";

const usePosts = () => {
  const [arePostsLoading, setArePostsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const { postVotes, voteUpPost, voteDownPost } = usePostVotes();

  useEffect(() => {
    setArePostsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setArePostsLoading(false);
      });
  }, []);

  return { posts, arePostsLoading, voteUpPost, voteDownPost };
};

export default usePosts;
