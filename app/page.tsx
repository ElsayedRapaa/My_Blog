import Post from "./components/Post";

export default function Home() {
  return (
    <main
      className="
        prose
        prose-xl
        mx-auto
        px-6
      "
    >
      <h1
        className="
          text-2xl
          font-light
          text-white
          text-center
        "
      >
        Hello and Welcome 👋 I&apos;m <span className="font-bold">Elsayed</span>
      </h1>
      <div>
        <h3
          className="
            font-bold
            text-2xl
            text-white
            m-0
          "
        >
          Blogs
        </h3>
        <Post />
      </div>
    </main>
  );
}
