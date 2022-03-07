import { useState } from "react";

const usePostVotes = () => {
  const [postVotes, setPostVotes] = useState({});

  const voteUpPost = (postId) => {};

  const voteDownPost = (postId) => {};

  return { postVotes, voteUpPost, voteDownPost };
};

export default usePostVotes;
