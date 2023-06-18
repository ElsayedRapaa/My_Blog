import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIemProps {
  icon: IconType;
  href: string;
}

const SocialItem: React.FC<SocialIemProps> = ({ icon: Icon, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        bg-neutral-900
        text-white
        hover:bg-neutral-100
        hover:text-neutral-900
        hover:bg-opacity-80
        p-2
        rounded-full
        transition
      "
    >
      <Icon size={22} />
    </Link>
  );
};

export default SocialItem;
