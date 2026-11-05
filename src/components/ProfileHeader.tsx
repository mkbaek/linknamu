import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        className="h-36 w-36 rounded-full border-2 border-zinc-900 object-cover dark:border-zinc-100"
      />
      <h1 className="mt-7 text-xl font-semibold">{name}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
