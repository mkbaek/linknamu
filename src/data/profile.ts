// 보여주기용 더미 데이터입니다. 실제 내용으로 바꿔 주세요.

export type LinkItem = {
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "백민규",
  bio: "주식 고수",
  avatar: "/avatar.svg",
  links: [
    { title: "GitHub", url: "https://github.com" },
    { title: "LinkedIn", url: "https://www.linkedin.com" },
    { title: "Blog", url: "https://example.com" },
  ],
};
