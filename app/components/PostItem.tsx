import Link from "next/link";
import getFormattedDate from "../lib/formatDate";

interface PostItemProps {
  post: BlogPost;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { id, title, date } = post;

  const dateFormated = getFormattedDate(date);

  return (
    <li
      className="
        flex
        flex-col
        gap-2
        p-0
        m-0
      "
    >
      <Link
        href={`/posts/${id}`}
        className="
          text-xl
          font-light
          underline
          text-white
        "
      >
        {title}
      </Link>
      <span
        className="
          text-neutral-500
          font-light
          text-sm
        "
      >
        {dateFormated}
      </span>
    </li>
  );
};

export default PostItem;
