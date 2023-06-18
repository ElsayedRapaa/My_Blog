import Link from "next/link";

import SocialItem from "./SocialItem";

import {
  FaLaptopCode,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="
        sticky
        top-0
        py-2
        px-6
        bg-neutral-800
        shadow-md
        transition
        z-10
      "
    >
      <div
        className="
          prose
          prose-xl
          mx-auto
          flex
          items-center
          flex-col
          sm:flex-row
          sm:justify-between
          justify-center
          gap-4
          sm:gap-0
        "
      >
        <Link
          href="/"
          className="
            text-white/80
            hover:text-white
            text-2xl
            font-bold
            transition
            no-underline
          "
        >
          Elsayed Rapaa
        </Link>
        <div
          className="
            flex
            items-center
            sm:justify-end
            justify-center
            gap-x-4
          "
        >
          <SocialItem
            icon={FaLaptopCode}
            href="https://elsayedportfolio.netlify.app/"
          />
          <SocialItem icon={FaGithub} href="https://github.com/ElsayedRapaa" />
          <SocialItem
            icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/elsayed-rapaa-0758a71a6/"
          />
          <SocialItem
            icon={FaTwitter}
            href="https://twitter.com/ElsayedRapaa"
          />
          <SocialItem
            icon={FaFacebookF}
            href="https://www.facebook.com/elsayed.rapy.7/"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
