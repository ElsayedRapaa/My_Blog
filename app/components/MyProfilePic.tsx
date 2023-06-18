import Image from "next/image";

const MyProfilePic = () => {
  return (
    <div
      className="
        w-fit
        mx-auto
        py-12
      "
    >
      <Image
        src="/images/profile.jpg"
        alt="Elsayed Rapaa"
        width={200}
        height={200}
        priority={true}
        className="
          rounded-full
          p-1
          border-4
          border-neutral-700
          shadow-xl
          shadow-neutral-700
        "
      />
    </div>
  );
};

export default MyProfilePic;
