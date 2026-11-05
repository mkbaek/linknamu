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
        width={128}
        height={128}
        priority
        className="h-28 w-28 rounded-full object-cover shadow-[0_14px_32px_-10px_rgba(168,86,40,0.45)] ring-4 ring-white/80 sm:h-32 sm:w-32 dark:ring-white/10"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
        {name}
      </h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </header>
  );
}
