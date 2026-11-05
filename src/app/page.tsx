import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative isolate flex flex-1 justify-center overflow-hidden bg-linear-to-b from-[#fffaf2] via-[#fff1e4] to-[#ffdfc8] px-6 py-16 sm:py-24 dark:from-[#1c1512] dark:via-[#221813] dark:to-[#2e1d14]">
      {/* 글래스 카드 뒤에 비치는 은은한 색 번짐 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#ffd6a8]/50 blur-3xl dark:bg-[#7a3e1d]/30" />
        <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-[#ffc4a8]/40 blur-3xl dark:bg-[#6b2f1f]/30" />
      </div>

      <div className="flex w-full max-w-md flex-col items-center">
        <ProfileHeader name={profile.name} bio={profile.bio} avatar={profile.avatar} />
        <nav className="mt-10 flex w-full flex-col gap-4" aria-label="링크 목록">
          {profile.links.map((link) => (
            <LinkCard key={link.url} title={link.title} url={link.url} />
          ))}
        </nav>
      </div>
    </main>
  );
}
