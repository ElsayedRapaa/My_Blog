import getFormattedDate from "@/app/lib/formatDate";
import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: {
    postId: string;
  };
}

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params: { postId } }: Params) {
  const posts = getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Blog ${post.title}`,
  };
}

const page: React.FC<Params> = async ({ params: { postId } }) => {
  const { title, date, contentHtml } = await getPostData(postId);
  const posts = getSortedPostsData();
  const dateFormated = getFormattedDate(date);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return notFound();
  }

  return (
    <div
      className="
        prose
        prose-xl
        mx-auto
        px-6
      "
    >
      {/* The Header Title and Date */}
      <div
        className="
          flex
          flex-col
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-white
            mb-0
          "
        >
          {title}
        </h1>
        <span
          className="
            text-neutral-500
            font-light
            text-sm
            mt-0
          "
        >
          {dateFormated}
        </span>
        {/* The Post Body */}
        <article>
          <section
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            className="
              text-white
            "
          />
          {/* Link Back to home */}
          <p
            className="
            py-4
          "
          >
            <Link
              href="/"
              className="
              text-sm
              text-white
              no-underline
              hover:underline
            "
            >
              ← Back To Home
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
};

export default page;
