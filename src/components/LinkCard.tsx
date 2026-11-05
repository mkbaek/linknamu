type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 px-5 text-[15px] font-semibold text-stone-700 shadow-[0_6px_24px_-10px_rgba(168,86,40,0.25)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_10px_28px_-10px_rgba(168,86,40,0.35)] focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
