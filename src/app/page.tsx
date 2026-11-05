import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <div className="flex w-full max-w-[493px] flex-col items-center rounded-3xl border-2 border-zinc-900 bg-white px-8 py-12 dark:border-zinc-100 dark:bg-zinc-950">
        <ProfileHeader name={profile.name} bio={profile.bio} avatar={profile.avatar} />
        <nav className="mt-7 flex w-full flex-col gap-[18px]" aria-label="링크 목록">
          {profile.links.map((link) => (
            <LinkCard key={link.url} title={link.title} url={link.url} />
          ))}
        </nav>
      </div>
    </main>
  );
}
