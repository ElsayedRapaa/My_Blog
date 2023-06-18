import { getSortedPostsData } from "../lib/posts";

import PostItem from "./PostItem";

const Post = () => {
  const posts = getSortedPostsData();

  return (
    <section>
      <ul
        className="
          flex
          flex-col
          gap-4
          list-none
          px-0
        "
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Post;
